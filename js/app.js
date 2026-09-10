const modules = {};

const pageNames = [
  'home',
  'dashboard',
  'courses',
  'practice',
  'unity',
  'resources',
  'module',
];
const modulesDataUrl = 'data/modules-manifest.json';

async function loadModules() {
  try {
    const response = await fetch(modulesDataUrl);
    if (!response.ok) {
      throw new Error(`Failed to load ${modulesDataUrl}: ${response.status}`);
    }

    const moduleManifest = await response.json();
    const loadedModules = {};

    for (const [moduleKey, modulePath] of Object.entries(moduleManifest)) {
      // Load module metadata
      const moduleMetaResponse = await fetch(`${modulePath}/module.json`);
      if (!moduleMetaResponse.ok) {
        throw new Error(
          `Failed to load ${modulePath}/module.json: ${moduleMetaResponse.status}`,
        );
      }

      const moduleMeta = await moduleMetaResponse.json();
      
      // Load all lesson files
      const lessons = [];
      let lessonIndex = 1;
      let allLessonsLoaded = false;
      
      while (!allLessonsLoaded) {
        try {
          const lessonResponse = await fetch(`${modulePath}/lessons/${lessonIndex}.json`);
          if (!lessonResponse.ok) {
            allLessonsLoaded = true;
            break;
          }
          const lesson = await lessonResponse.json();
          lessons.push(lesson);
          lessonIndex++;
        } catch (error) {
          allLessonsLoaded = true;
          break;
        }
      }
      
      // Combine metadata with lessons
      loadedModules[moduleKey] = {
        ...moduleMeta,
        lessons: lessons
      };
    }

    Object.assign(modules, loadedModules);
    return loadedModules;
  } catch (error) {
    console.error(error);
    showAuthMessage('Course data could not be loaded.');
    throw error;
  }
}

const progress = {
  fundamentals: new Set(),
  variables: new Set(),
  operators: new Set(),
  conditionals: new Set(),
  loops: new Set(),
  methods: new Set(),
  arrays: new Set(),
  classes: new Set(),
};
const progressStorageKey = 'jaylearn-progress-v1';
const practiceStorageKey = 'jaylearn-practice-v1';
const supabaseClient = supabase.createClient(
  'https://xgmaefjrcdtyzxesmmnw.supabase.co',
  'sb_publishable_k3FcY5cJBMB0QX7uyAsHzw_6XKIeLke',
);
let activeModule = 'fundamentals';
let activeLesson = 0;
let activeUserId = null;

function resetProgress() {
  Object.keys(progress).forEach((moduleKey) => {
    progress[moduleKey] = new Set();
  });
}

function userProgressStorageKey(userId) {
  return `${progressStorageKey}-${userId}`;
}

function loadProgress(userId) {
  resetProgress();
  if (!userId) return;

  const storageKey = userProgressStorageKey(userId);
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
    Object.keys(progress).forEach((moduleKey) => {
      const lessonIndexes = Array.isArray(saved[moduleKey])
        ? saved[moduleKey]
        : [];
      progress[moduleKey] = new Set(
        lessonIndexes.filter(
          (index) =>
            Number.isInteger(index) &&
            index >= 0 &&
            index < modules[moduleKey].lessons.length,
        ),
      );
    });
  } catch (error) {
    localStorage.removeItem(storageKey);
  }
}

function saveProgress() {
  if (!activeUserId) return;

  const saved = Object.fromEntries(
    Object.entries(progress).map(([moduleKey, lessons]) => [
      moduleKey,
      [...lessons].sort((a, b) => a - b),
    ]),
  );
  localStorage.setItem(
    userProgressStorageKey(activeUserId),
    JSON.stringify(saved),
  );
}

function practiceDraftKey() {
  return `${activeModule}-${activeLesson}`;
}

function savePracticeDraft() {
  const editor = document.getElementById('practice-editor');
  if (!editor) return;
  const drafts = JSON.parse(localStorage.getItem(practiceStorageKey) || '{}');
  drafts[practiceDraftKey()] = editor.value;
  localStorage.setItem(practiceStorageKey, JSON.stringify(drafts));
  document.getElementById('practice-status').textContent =
    'Draft saved on this device.';
}

async function loadRemoteProgress() {
  const {
    data: { user },
  } = await supabaseClient.auth.getUser();
  setAuthenticated(user);
  if (!user) return;

  const loadingUserId = user.id;

  const { data, error } = await supabaseClient
    .from('lesson_progress')
    .select('module_key, lesson_index')
    .eq('user_id', user.id);

  if (error) {
    showAuthMessage('Progress could not be loaded: ' + error.message);
    return;
  }

  if (activeUserId !== loadingUserId) return;

  data.forEach(({ module_key, lesson_index }) => {
    if (progress[module_key] && Number.isInteger(lesson_index))
      progress[module_key].add(lesson_index);
  });
  saveProgress();
  renderModule();
}

async function saveRemoteProgress(moduleKey, lessonIndex) {
  const {
    data: { user },
  } = await supabaseClient.auth.getUser();
  if (!user || user.id !== activeUserId) return;

  const { error } = await supabaseClient.from('lesson_progress').upsert({
    user_id: user.id,
    module_key: moduleKey,
    lesson_index: lessonIndex,
  });

  if (error) showAuthMessage('Progress could not be saved: ' + error.message);
}

function showAuthMessage(message) {
  ['auth-status', 'mobile-auth-status', 'gate-auth-status'].forEach(
    (statusId) => {
      const status = document.getElementById(statusId);
      if (status) status.textContent = message;
    },
  );
}

function setAuthenticated(user) {
  const userId = user ? user.id : null;
  if (activeUserId !== userId) {
    activeUserId = userId;
    loadProgress(userId);
  }
  document.getElementById('app-shell').classList.toggle('hidden', !user);
  document
    .getElementById('auth-gate')
    .classList.toggle('is-hidden', Boolean(user));
  updateAccountControls(user);
}

function updateAccountControls(user) {
  ['sign-in-button', 'mobile-sign-in-button'].forEach((buttonId) =>
    document.getElementById(buttonId).classList.toggle('hidden', Boolean(user)),
  );
  ['sign-up-button', 'mobile-sign-up-button'].forEach((buttonId) =>
    document.getElementById(buttonId).classList.toggle('hidden', Boolean(user)),
  );
  ['sign-out-button', 'mobile-sign-out-button'].forEach((buttonId) =>
    document.getElementById(buttonId).classList.toggle('hidden', !user),
  );
  showAuthMessage(user ? 'Signed in' : '');
}

async function authenticate(action, prefix = '') {
  const email = document.getElementById(`${prefix}auth-email`).value.trim();
  const password = document.getElementById(`${prefix}auth-password`).value;
  if (!email || !password) {
    showAuthMessage('Enter an email and password.');
    return;
  }

  const result =
    action === 'signUp'
      ? await supabaseClient.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}${window.location.pathname}`,
          },
        })
      : await supabaseClient.auth.signInWithPassword({ email, password });
  if (result.error) {
    showAuthMessage(result.error.message);
    return;
  }

  if (action === 'signUp' && !result.data.session) {
    showAuthMessage(
      "Account created. Check your email to confirm it, then click 'Already have an account? Sign in'.",
    );
  } else {
    showAuthMessage('Signed in');
    await loadRemoteProgress();
  }
}

function showPage(page) {
  if (!pageNames.includes(page)) page = 'home';
  document
    .querySelectorAll('.page-view')
    .forEach((view) =>
      view.classList.toggle('is-active', view.dataset.page === page),
    );
  document.querySelectorAll('[data-page-target]').forEach((button) => {
    const active = button.dataset.pageTarget === page;
    button.classList.toggle('is-active', active);
    active
      ? button.setAttribute('aria-current', 'page')
      : button.removeAttribute('aria-current');
  });
  document.getElementById('mobile-menu').classList.remove('is-open');
  document
    .getElementById('mobile-menu-button')
    .setAttribute('aria-expanded', 'false');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openModule(key) {
  activeModule = key;
  activeLesson = modules[key].lessons.findIndex(
    (_, index) => !progress[key].has(index),
  );
  if (activeLesson === -1) activeLesson = modules[key].lessons.length - 1;
  renderModule();
  showPage('module');
}

function renderModule() {
  const module = modules[activeModule];
  document.getElementById('module-eyebrow').textContent = module.eyebrow;
  document.getElementById('module-title').textContent = module.title;
  document.getElementById('module-description').textContent =
    module.description;
  document.getElementById('module-complete-title').textContent =
    module.completion;
  document.getElementById('module-complete-text').textContent =
    module.completionText;

  const nav = document.getElementById('lesson-navigation');
  const select = document.getElementById('mobile-lesson-select');
  nav.replaceChildren();
  select.replaceChildren();

  module.lessons.forEach((lesson, index) => {
    const unlocked = index === 0 || progress[activeModule].has(index - 1);
    const button = document.createElement('button');
    button.type = 'button';
    button.className =
      'lesson-nav-button' + (index === activeLesson ? ' is-active' : '');
    button.disabled = !unlocked;
    button.dataset.lessonTarget = String(index);
    button.innerHTML = `<span>${String(index + 1).padStart(2, '0')}</span><span>${lesson.title}</span>`;
    button.addEventListener('click', () => showLesson(index));
    nav.appendChild(button);

    const option = document.createElement('option');
    option.value = String(index);
    option.textContent = `${String(index + 1).padStart(2, '0')} · ${lesson.title}`;
    option.disabled = !unlocked;
    option.selected = index === activeLesson;
    select.appendChild(option);
  });
  renderLesson();
  updateProgress();
}

function renderLesson() {
  const lesson = modules[activeModule].lessons[activeLesson];
  const content = document.getElementById('lesson-content');
  content.innerHTML = `
    <article class="lesson-view is-active">
      <header>
        <p class="eyebrow text-sky-300">Lesson ${String(activeLesson + 1).padStart(2, '0')} · ${lesson.time}</p>
        <h2 class="mt-3 text-4xl font-extrabold">${lesson.title}</h2>
      </header>
      <section class="surface mt-5 rounded-3xl p-6">
        <h3 class="text-2xl font-bold">Learning objectives</h3>
        <ul class="lesson-list">${lesson.objectives.map((item) => `<li>${item}</li>`).join('')}</ul>
      </section>
      <section class="surface mt-5 rounded-3xl p-6">
        <h3 class="text-2xl font-bold">Theory</h3>
        <div class="lesson-copy mt-4">${lesson.theory.map((item) => `<p>${item}</p>`).join('')}</div>
      </section>
      <section class="surface mt-5 rounded-3xl p-6">
        <h3 class="text-2xl font-bold">Key terminology</h3>
        <dl class="term-grid mt-4 sm:grid-cols-2">${lesson.terms.map((term) => `<div class="term"><dt>${term[0]}</dt><dd>${term[1]}</dd></div>`).join('')}</dl>
      </section>
      <section class="surface mt-5 rounded-3xl p-6">
        <h3 class="text-2xl font-bold">Worked example</h3>
        <pre class="mt-4 rounded-2xl border border-white/10 bg-slate-950"><code></code></pre>
      </section>
      <section class="callout mt-5 rounded-2xl p-5">
        <h3 class="text-xl font-bold text-sky-200">Try It Yourself</h3>
        <p class="mt-3 text-slate-300">${lesson.tryIt}</p>
        <label class="mt-4 block text-sm font-bold text-white" for="practice-editor">Your answer</label>
        <textarea id="practice-editor" class="practice-editor mt-2" rows="8" placeholder="Write your C# code or pseudocode here..."></textarea>
        <div class="mt-3 flex flex-wrap items-center gap-3">
          <button id="save-practice" class="btn-secondary" type="button">Save draft</button>
          <span id="practice-status" class="text-sm text-slate-400" aria-live="polite"></span>
        </div>
      </section>
      <section class="surface mt-5 rounded-3xl p-6">
        <h3 class="text-2xl font-bold">Lesson quiz · 5 questions</h3>
        <div class="quiz-list mt-5 space-y-4"></div>
      </section>
      <section class="surface mt-5 rounded-3xl p-6">
        <h3 class="text-2xl font-bold">Coding challenge</h3>
        <p class="mt-3 text-slate-300">${lesson.challenge}</p>
      </section>
      <section class="warning mt-5 rounded-2xl p-5">
        <h3 class="text-xl font-bold">Common mistakes and troubleshooting</h3>
        <ul class="lesson-list">${lesson.mistakes.map((item) => `<li>${item}</li>`).join('')}</ul>
      </section>
      <section class="success mt-5 rounded-2xl p-5">
        <h3 class="text-xl font-bold">${activeLesson === modules[activeModule].lessons.length - 1 ? 'Module summary' : 'Lesson summary'}</h3>
        <p class="mt-3 text-slate-300">${lesson.summary}</p>
      </section>
      <div class="lesson-actions mt-5 flex flex-wrap justify-between gap-3">
        ${activeLesson > 0 ? '<button id="previous-lesson" class="btn-secondary" type="button">Previous lesson</button>' : '<span></span>'}
        <button id="complete-lesson" class="btn-primary opacity-40" type="button" disabled>${activeLesson === modules[activeModule].lessons.length - 1 ? 'Complete module' : 'Complete lesson and continue'}</button>
      </div>
    </article>`;

  content.querySelector('code').textContent = lesson.code;
  const drafts = JSON.parse(localStorage.getItem(practiceStorageKey) || '{}');
  const practiceEditor = document.getElementById('practice-editor');
  practiceEditor.value = drafts[practiceDraftKey()] || '';
  document
    .getElementById('save-practice')
    .addEventListener('click', savePracticeDraft);
  const quizList = content.querySelector('.quiz-list');
  lesson.quiz.forEach((question, qIndex) => {
    const block = document.createElement('div');
    block.className = 'quiz-question';
    block.dataset.correct = String(question[2]);
    block.innerHTML = `<p class="font-bold">${qIndex + 1}. ${question[0]}</p><div class="mt-3 grid gap-2">${question[1].map((option, index) => `<button type="button" class="quiz-option" data-option="${index}">${String.fromCharCode(65 + index)} · ${option}</button>`).join('')}</div><p class="quiz-feedback" aria-live="polite"></p>`;
    block
      .querySelectorAll('.quiz-option')
      .forEach((option) =>
        option.addEventListener('click', () =>
          answerQuestion(block, Number(option.dataset.option), question[3]),
        ),
      );
    quizList.appendChild(block);
  });

  const previous = document.getElementById('previous-lesson');
  if (previous)
    previous.addEventListener('click', () => showLesson(activeLesson - 1));
  document
    .getElementById('complete-lesson')
    .addEventListener('click', completeLesson);
  lucide.createIcons();
}

function answerQuestion(question, selected, explanation) {
  const correct = Number(question.dataset.correct);
  const options = [...question.querySelectorAll('.quiz-option')];
  const feedback = question.querySelector('.quiz-feedback');
  options.forEach((option) => option.classList.remove('is-wrong'));
  if (selected === correct) {
    options[selected].classList.add('is-correct');
    options.forEach((option) => (option.disabled = true));
    feedback.textContent = 'Correct. ' + explanation;
    feedback.className =
      'quiz-feedback is-visible bg-emerald-400/10 text-emerald-100';
  } else {
    options[selected].classList.add('is-wrong');
    feedback.textContent = 'Not quite. ' + explanation;
    feedback.className =
      'quiz-feedback is-visible bg-rose-400/10 text-rose-100';
    setTimeout(() => options[selected].classList.remove('is-wrong'), 700);
  }
  const allCorrect = [
    ...document.querySelectorAll('#lesson-content .quiz-question'),
  ].every((item) => item.querySelector('.quiz-option.is-correct'));
  const complete = document.getElementById('complete-lesson');
  complete.disabled = !allCorrect;
  complete.classList.toggle('opacity-40', !allCorrect);
}

async function completeLesson() {
  progress[activeModule].add(activeLesson);
  saveProgress();
  await saveRemoteProgress(activeModule, activeLesson);
  updateProgress();
  if (activeLesson < modules[activeModule].lessons.length - 1) {
    activeLesson++;
    renderModule();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    renderModule();
    document
      .getElementById('module-complete-panel')
      .scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function showLesson(index) {
  if (index < 0 || index > 7) return;
  if (index > 0 && !progress[activeModule].has(index - 1)) return;
  activeLesson = index;
  renderModule();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateProgress() {
  const count = progress[activeModule].size;
  const totalLessons = modules[activeModule].lessons.length;
  const percent = Math.round((count / totalLessons) * 100);
  document.getElementById('module-progress-value').textContent = percent + '%';
  document.getElementById('module-progress-fill').style.width = percent + '%';
  document
    .getElementById('module-complete-panel')
    .classList.toggle('hidden', count !== totalLessons);
}

document
  .querySelectorAll('[data-page-target]')
  .forEach((button) =>
    button.addEventListener('click', () => showPage(button.dataset.pageTarget)),
  );
document
  .querySelectorAll('[data-open-module]')
  .forEach((button) =>
    button.addEventListener('click', () =>
      openModule(button.dataset.openModule),
    ),
  );
document.getElementById('mobile-menu-button').addEventListener('click', () => {
  const menu = document.getElementById('mobile-menu');
  const open = menu.classList.toggle('is-open');
  document
    .getElementById('mobile-menu-button')
    .setAttribute('aria-expanded', String(open));
});
document
  .getElementById('mobile-lesson-select')
  .addEventListener('change', (event) =>
    showLesson(Number(event.target.value)),
  );
document
  .getElementById('sign-in-button')
  .addEventListener('click', () => authenticate('signIn'));
document
  .getElementById('sign-up-button')
  .addEventListener('click', () => authenticate('signUp'));
document
  .getElementById('sign-out-button')
  .addEventListener('click', async () => {
    await supabaseClient.auth.signOut();
    setAuthenticated(null);
  });
document
  .getElementById('mobile-sign-in-button')
  .addEventListener('click', () => authenticate('signIn', 'mobile-'));
document
  .getElementById('mobile-sign-up-button')
  .addEventListener('click', () => authenticate('signUp', 'mobile-'));
document
  .getElementById('mobile-sign-out-button')
  .addEventListener('click', async () => {
    await supabaseClient.auth.signOut();
    setAuthenticated(null);
  });
document
  .getElementById('gate-sign-in-button')
  .addEventListener('click', () => authenticate('signIn', 'gate-'));
document
  .getElementById('gate-sign-up-button')
  .addEventListener('click', () => authenticate('signUp', 'gate-'));

lucide.createIcons();
(async () => {
  await loadModules();
  resetProgress();
  renderModule();
  await loadRemoteProgress();
})();
