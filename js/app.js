const modules = {
  fundamentals: {
    eyebrow: "Module 1 · C# foundations · 8 lessons",
    title: "Programming Fundamentals",
    description: "Learn how programs work, plan precise algorithms, write valid C# statements, display output, interpret errors, and solve small programming problems.",
    completion: "Module 1 complete",
    completionText: "You have restored and completed the programming foundation. Continue to Module 2 to store information using variables and data types.",
    lessons: [
      {
        title: "What Is Programming?", time: "40 minutes",
        objectives: ["Explain programming as creating instructions for a computer.", "Identify hardware, software, programs, and programmers.", "Describe source code, compilation, and execution.", "Recognise C# as a general-purpose programming language."],
        theory: [
          "Programming is the process of designing and writing instructions that a computer can execute. Computers are fast and consistent, but they do not infer what a programmer meant. Instructions must be precise, correctly ordered, and written using rules the computer's tools understand.",
          "A <strong>program</strong> is a collection of instructions created to complete a task. The human-readable instructions are called <strong>source code</strong>. C# source code is processed by compiler tools before it runs. These tools check syntax and transform the program into a form the .NET runtime can execute.",
          "Hardware refers to physical components such as the processor, memory, keyboard, and display. Software refers to programs and their supporting data. A programmer connects the two by creating software instructions that cause hardware to perform useful work.",
          "C# is strongly typed, case-sensitive, and widely used for console programs, desktop applications, web services, and Unity games. Learning C# fundamentals develops transferable problem-solving skills."
        ],
        terms: [["Program", "A collection of instructions that performs a task."], ["Source code", "Human-readable instructions written in a programming language."], ["Compiler", "Software that checks and transforms source code."], ["Runtime", "The environment that executes a prepared program."]],
        code: 'Console.WriteLine("My first C# program");\nConsole.WriteLine("Programming turns ideas into instructions.");',
        tryIt: "List three programs you use. For each one, identify an input, a task it performs, and an output.",
        challenge: "Write a three-line console introduction explaining your name, course, and one program you would like to build.",
        mistakes: ["Do not assume the computer understands unstated intentions.", "Remember that C# is case-sensitive.", "Distinguish physical hardware from software instructions.", "Use exact syntax when entering source code."],
        summary: "Programming turns a planned solution into precise source-code instructions that compiler and runtime tools can execute.",
        quiz: [
          ["What is a program?", ["A physical keyboard", "A collection of instructions", "A programming error"], 1, "A program is an ordered collection of instructions that performs a task."],
          ["What is source code?", ["Human-readable program instructions", "A computer monitor", "The final output only"], 0, "Source code is the text programmers write in a programming language."],
          ["Which language is used in this course?", ["C#", "HTML only", "SQL only"], 0, "JayLearn uses C# before applying it to Unity."],
          ["What does a compiler help check?", ["Screen brightness", "Syntax and program structure", "Internet speed"], 1, "Compiler tools detect invalid syntax and prepare code for execution."],
          ["Is C# case-sensitive?", ["Yes", "No", "Only in comments"], 0, "C# treats names with different capitalisation as different identifiers."]
        ]
      },
      {
        title: "Algorithms and Problem Solving", time: "50 minutes",
        objectives: ["Define an algorithm as a finite sequence of steps.", "Break a problem into input, processing, and output.", "Write simple pseudocode.", "Trace an algorithm manually."],
        theory: [
          "An <strong>algorithm</strong> is a finite, ordered set of unambiguous steps for solving a problem. Algorithms exist independently of a programming language. Planning the steps first helps programmers focus on the solution before worrying about punctuation or C# syntax.",
          "Many beginner problems can be divided into <strong>input</strong>, <strong>processing</strong>, and <strong>output</strong>. Input is information supplied to the program. Processing transforms or examines it. Output communicates a result.",
          "Pseudocode describes an algorithm using structured plain language. Statements such as INPUT, CALCULATE, and DISPLAY make intent visible without requiring exact C# syntax. Good pseudocode is specific enough that another person could implement it.",
          "Tracing means following an algorithm one step at a time while recording changing values and produced output. A trace helps reveal missing steps, incorrect order, and faulty assumptions before or after coding."
        ],
        terms: [["Algorithm", "A finite sequence of steps that solves a problem."], ["Input", "Information supplied to a program."], ["Processing", "Work performed on input data."], ["Output", "Information produced by a program."]],
        code: "INPUT length\nINPUT width\nCALCULATE area = length × width\nDISPLAY area",
        tryIt: "Write pseudocode for making a hot drink or calculating the total cost of three items.",
        challenge: "Plan an algorithm that asks for a player's name and score, adds a 100-point bonus, and displays the updated score.",
        mistakes: ["Keep steps in executable order.", "Do not hide several unclear actions inside one vague step.", "Include both required inputs and expected outputs.", "Ensure the algorithm eventually finishes."],
        summary: "Algorithms convert problems into finite, precise steps. Input, processing, output, pseudocode, and tracing make solutions easier to implement.",
        quiz: [
          ["What is an algorithm?", ["A random guess", "A finite ordered solution", "A compiler warning"], 1, "An algorithm is an ordered and finite sequence of solution steps."],
          ["Which stage transforms data?", ["Processing", "Input", "Output"], 0, "Processing performs calculations or decisions using input."],
          ["What is pseudocode?", ["Structured solution steps", "Machine hardware", "A C# compiler"], 0, "Pseudocode expresses logic without requiring exact language syntax."],
          ["Why trace an algorithm?", ["To change the monitor", "To follow values and detect logic problems", "To remove all inputs"], 1, "Tracing checks each step and records its effects."],
          ["Which should an algorithm have?", ["Ambiguous steps", "No ending", "A clear sequence"], 2, "A useful algorithm has a clear, executable sequence."]
        ]
      },
      {
        title: "Your First C# Program", time: "45 minutes",
        objectives: ["Recognise a basic console application.", "Use Console.WriteLine to display output.", "Explain statements and semicolons.", "Run and inspect a simple program."],
        theory: [
          "A console application communicates through text. Modern C# supports top-level statements, allowing a beginner program to begin directly with instructions such as <code>Console.WriteLine</code>.",
          "<code>Console</code> represents the console interface. The dot selects one of its members, and <code>WriteLine</code> displays information followed by a new line. Parentheses contain the value supplied to the method.",
          "A string literal is text enclosed in double quotation marks. The semicolon marks the end of a C# statement. Removing a quotation mark, parenthesis, or semicolon usually produces a syntax error.",
          "Programs normally execute statements from top to bottom. Changing statement order changes output order, making a small console program a useful way to observe sequence."
        ],
        terms: [["Statement", "A complete instruction in source code."], ["Method", "A named block of behaviour that can be called."], ["String literal", "Text written inside double quotation marks."], ["Semicolon", "Punctuation that terminates many C# statements."]],
        code: 'Console.WriteLine("JayLearn");\nConsole.WriteLine("C# Fundamentals");\nConsole.WriteLine("Ready to build.");',
        tryIt: "Display your name, course, and favourite game on separate lines. Rearrange the statements and run the program again.",
        challenge: "Create a five-line welcome screen with a title, divider, learner name, goal, and closing message.",
        mistakes: ["Use double quotation marks around text.", "Include both opening and closing parentheses.", "End each WriteLine statement with a semicolon.", "Capitalise Console and WriteLine correctly."],
        summary: "A console program executes statements in sequence. Console.WriteLine displays a value and then moves output to a new line.",
        quiz: [
          ["Which method displays a line?", ["Console.WriteLine", "Console.ReadOnly", "String.Print"], 0, "Console.WriteLine displays a value and adds a line break."],
          ["What encloses a string literal?", ["Double quotation marks", "Square brackets", "Semicolons"], 0, "C# string literals use double quotation marks."],
          ["What commonly ends a statement?", ["A colon", "A semicolon", "A hashtag"], 1, "Many C# statements end with a semicolon."],
          ["In which order do simple statements run?", ["Top to bottom", "Randomly", "Bottom to top only"], 0, "Straight-line code normally executes from top to bottom."],
          ["Is Console.WriteLine capitalisation important?", ["Yes", "No", "Only in output"], 0, "C# is case-sensitive, including member names."]
        ]
      },
      {
        title: "Syntax, Keywords and Comments", time: "45 minutes",
        objectives: ["Explain syntax as a language's grammar.", "Recognise identifiers and keywords.", "Write single-line and multi-line comments.", "Use indentation and whitespace for readability."],
        theory: [
          "Every programming language has <strong>syntax</strong>: rules that describe valid code structure. Syntax includes punctuation, ordering, spelling, and capitalisation. Compiler errors often indicate that one of these rules has been broken.",
          "A <strong>keyword</strong> has a reserved meaning in C#, such as <code>int</code>, <code>string</code>, <code>if</code>, or <code>class</code>. An <strong>identifier</strong> is a name created for something in the program. Identifiers cannot normally reuse reserved keywords.",
          "Comments explain intent and are ignored during execution. A single-line comment starts with <code>//</code>. A block comment begins with <code>/*</code> and ends with <code>*/</code>. Comments should explain why, not restate obvious code.",
          "Whitespace and indentation make structure visible. Although extra spaces often do not change behaviour, consistent formatting reduces mistakes and helps other programmers review code."
        ],
        terms: [["Syntax", "Rules that define valid program structure."], ["Keyword", "A word reserved by the language."], ["Identifier", "A programmer-defined name."], ["Comment", "Explanatory source text ignored during execution."]],
        code: '// Display the learning goal\nConsole.WriteLine("Learn C# clearly.");\n\n/* This comment can\n   span multiple lines. */',
        tryIt: "Add one useful single-line comment and one block comment to a three-line console program.",
        challenge: "Correct a program containing incorrect capitalisation, a missing quote, a missing parenthesis, and a missing semicolon.",
        mistakes: ["Do not place required code inside a comment accidentally.", "Close every block comment with */.", "Avoid using reserved keywords as ordinary names.", "Use comments to explain purpose rather than obvious punctuation."],
        summary: "Syntax defines valid C# structure. Keywords have reserved meanings, identifiers name program elements, and comments document intent.",
        quiz: [
          ["What is syntax?", ["Language structure rules", "A physical device", "Only program output"], 0, "Syntax defines how valid C# structure must be arranged."],
          ["Which starts a single-line comment?", ["//", "##", "**"], 0, "Two forward slashes begin a single-line C# comment."],
          ["What is a keyword?", ["A reserved language word", "Any sentence", "A file extension"], 0, "Keywords have predefined meanings in C#."],
          ["Are comments executed?", ["Yes", "No", "Only on Fridays"], 1, "Comments are ignored during program execution."],
          ["Why use indentation?", ["To improve readability", "To increase internet speed", "To rename C#"], 0, "Consistent indentation makes code structure easier to understand."]
        ]
      },
      {
        title: "Input, Processing and Output", time: "50 minutes",
        objectives: ["Identify program inputs and outputs.", "Describe processing as transformation.", "Use Write and WriteLine appropriately.", "Design an IPO table for a simple program."],
        theory: [
          "The input-process-output model provides a simple way to analyse a program. Inputs enter the system, processing applies instructions, and outputs communicate results.",
          "A keyboard response, mouse click, file value, or sensor reading can be input. Processing can include calculations, conversion, comparison, or arranging information. Text, images, sounds, and saved values can be output.",
          "<code>Console.Write</code> displays text without automatically moving to a new line. <code>Console.WriteLine</code> adds a line break. Prompts commonly use Write so the response appears beside the question.",
          "An IPO table lists required data, the operations performed, and expected results. It helps prevent programmers from coding before understanding the problem."
        ],
        terms: [["IPO model", "A view of a program as input, processing, and output."], ["Prompt", "A message asking the user for input."], ["Transformation", "Changing input into a result."], ["Console", "A text-based input and output interface."]],
        code: 'Console.Write("Enter your name: ");\nstring name = Console.ReadLine() ?? "";\nConsole.WriteLine($"Welcome, {name}!");',
        tryIt: "Create an IPO table for a rectangle-area calculator and for a simple game score bonus.",
        challenge: "Write a program that asks for a nickname and displays a three-line welcome message.",
        mistakes: ["Do not confuse input with the prompt that requests it.", "Account for every value needed during processing.", "Choose Write or WriteLine based on desired layout.", "Make output labels clear enough to understand."],
        summary: "The IPO model separates collected data, performed work, and produced results. It is a practical foundation for planning programs.",
        quiz: [
          ["Which is an input?", ["A typed name", "A displayed total", "A heading already printed"], 0, "A typed name supplies information to the program."],
          ["Which stage calculates a result?", ["Output", "Processing", "Input"], 1, "Processing transforms input into results."],
          ["What does Console.Write omit?", ["The text", "The automatic line break", "The method call"], 1, "Console.Write does not automatically add a line break."],
          ["What does an IPO table document?", ["Inputs, processing, outputs", "Only colours", "Only errors"], 0, "An IPO table records all three program stages."],
          ["Why label output?", ["To communicate meaning", "To make syntax invalid", "To hide results"], 0, "Labels help users interpret displayed values."]
        ]
      },
      {
        title: "Errors and Debugging", time: "55 minutes",
        objectives: ["Distinguish syntax, runtime, and logic errors.", "Read compiler messages carefully.", "Use tracing and incremental testing.", "Apply a repeatable debugging process."],
        theory: [
          "A <strong>syntax error</strong> breaks the grammar of C#, such as a missing quote or semicolon. Compiler messages usually prevent the program from running until the source is corrected.",
          "A <strong>runtime error</strong> occurs while a validly structured program executes. Examples include invalid conversion or attempting an operation the running program cannot complete.",
          "A <strong>logic error</strong> allows the program to run but produces an incorrect result. Logic errors can be difficult because no compiler message is required. Tracing values and testing known examples help reveal them.",
          "Debugging is a disciplined process: reproduce the problem, read available messages, isolate the relevant code, inspect assumptions and values, make one focused change, and test again. Changing many unrelated lines at once makes causes harder to identify."
        ],
        terms: [["Bug", "A defect that causes incorrect program behaviour."], ["Debugging", "Finding, understanding, and correcting defects."], ["Syntax error", "A violation of language grammar."], ["Logic error", "Valid code that produces the wrong result."]],
        code: '// Logic error: multiplication was intended\nint width = 5;\nint height = 4;\nint area = width + height;\nConsole.WriteLine(area);',
        tryIt: "Classify a missing semicolon, invalid numeric input, and an incorrect total as syntax, runtime, or logic errors.",
        challenge: "Debug a small program containing one syntax error and one logic error. Record each symptom, cause, fix, and retest result.",
        mistakes: ["Read the first relevant compiler message before later cascading errors.", "Reproduce a problem before changing code.", "Test one focused correction at a time.", "Do not assume code is correct merely because it runs."],
        summary: "Errors may involve syntax, execution, or logic. Effective debugging combines messages, tracing, isolation, focused changes, and repeated testing.",
        quiz: [
          ["Which error breaks C# grammar?", ["Syntax error", "Logic error", "Design colour"], 0, "A syntax error violates language structure."],
          ["Which error can produce a wrong answer without stopping?", ["Logic error", "Keyboard error", "Comment"], 0, "Logic errors often run successfully but calculate the wrong result."],
          ["When does a runtime error occur?", ["During execution", "Before code exists", "Only in comments"], 0, "Runtime errors occur while a program is running."],
          ["What should debugging begin with?", ["Reproducing the issue", "Deleting everything", "Changing many lines"], 0, "A repeatable issue can be investigated and verified."],
          ["Why make one focused change?", ["To identify whether it fixes the cause", "To create more uncertainty", "To avoid testing"], 0, "Focused changes make cause and effect easier to evaluate."]
        ]
      },
      {
        title: "Decomposition and Testing", time: "50 minutes",
        objectives: ["Break large problems into smaller tasks.", "Define expected results before testing.", "Use normal, boundary, and invalid test data.", "Document test outcomes."],
        theory: [
          "<strong>Decomposition</strong> divides a complex problem into smaller, manageable parts. A user-profile program can be separated into displaying prompts, collecting values, validating them, and printing a summary.",
          "Each subproblem should have a clear responsibility and a result that can be checked. Smaller pieces are easier to understand, implement, test, and reuse.",
          "Testing compares actual behaviour with expected behaviour. Normal data represents typical use. Boundary data checks values at important limits. Invalid data checks whether the program responds safely to unsuitable input.",
          "A useful test plan records the test input, expected result, actual result, and pass/fail status. Testing should begin early rather than being postponed until every feature is finished."
        ],
        terms: [["Decomposition", "Breaking a problem into smaller subproblems."], ["Test case", "A defined input and expected result."], ["Boundary value", "A value at or near an important limit."], ["Expected result", "The behaviour a correct program should produce."]],
        code: "Task 1: Display instructions\nTask 2: Collect player details\nTask 3: Validate entered values\nTask 4: Calculate the result\nTask 5: Display a summary",
        tryIt: "Decompose a quiz program into at least five tasks, then propose one normal, one boundary, and one invalid test.",
        challenge: "Create a four-row test table for a game-age checker. Include input, expected output, actual output, and pass/fail.",
        mistakes: ["Do not treat the entire application as one indivisible task.", "Define expected results before running tests.", "Include invalid and boundary cases, not only typical data.", "Retest earlier behaviour after making corrections."],
        summary: "Decomposition reduces complexity. Planned test cases verify normal behaviour, limits, and responses to invalid input.",
        quiz: [
          ["What is decomposition?", ["Breaking a problem into smaller tasks", "Adding random features", "Removing all output"], 0, "Decomposition separates a complex problem into manageable parts."],
          ["What does a test case include?", ["Input and expected result", "Only a colour", "Only source comments"], 0, "A test case defines data and the correct expected behaviour."],
          ["What is boundary data?", ["Data near an important limit", "Always a name", "A compiler"], 0, "Boundary tests examine behaviour at limits."],
          ["When should testing begin?", ["Early and incrementally", "Only after release", "Never"], 0, "Early testing finds defects close to where they were introduced."],
          ["Why record actual results?", ["To compare them with expectations", "To hide failures", "To change syntax"], 0, "The comparison determines whether a test passes."]
        ]
      },
      {
        title: "Practice Project · Console Welcome App", time: "70 minutes",
        objectives: ["Plan a complete beginner console application.", "Use comments, prompts, input, and output.", "Apply decomposition and testing.", "Review the complete programming workflow."],
        theory: [
          "This project combines the restored Programming Fundamentals module. You will create a console welcome application that introduces JayLearn, asks for a learner's name and goal, and prints a personalised study card.",
          "Begin with an IPO plan. Inputs are the learner's name and goal. Processing consists of storing and arranging those responses. Output includes the heading, divider, and labelled summary.",
          "Decompose the solution into instructions, name input, goal input, and final output. Enter and test each part before continuing. This makes syntax problems easier to isolate.",
          "Use comments to explain the purpose of each major phase. Test ordinary text, empty input, and long text. Module 2 expands this project with typed numeric and Boolean values."
        ],
        terms: [["Plan", "A description of the intended solution before coding."], ["Implementation", "Turning a plan into source code."], ["Verification", "Checking that results match requirements."], ["Iteration", "Improving a solution through repeated changes and tests."]],
        code: '// Display the application heading\nConsole.WriteLine("JAYLEARN STUDY CARD");\nConsole.WriteLine("-------------------");\n\n// Collect input\nConsole.Write("Name: ");\nstring name = Console.ReadLine() ?? "";\n\nConsole.Write("Programming goal: ");\nstring goal = Console.ReadLine() ?? "";\n\n// Display output\nConsole.WriteLine();\nConsole.WriteLine($"Learner: {name}");\nConsole.WriteLine($"Goal: {goal}");\nConsole.WriteLine("Next step: Variables & Data Types");',
        tryIt: "Type the project yourself, test it, and add one more text question without removing the original fields.",
        challenge: "Extend the welcome app with a favourite game, a divider, and a final encouragement message. Create three documented test cases.",
        mistakes: ["Do not skip the IPO plan.", "Keep quotation marks, parentheses, and semicolons paired.", "Test after each small addition.", "Do not remove working requirements while extending the program."],
        summary: "You can now explain programs, plan algorithms, write console statements, use syntax and comments, analyse IPO, debug errors, decompose problems, and test solutions.",
        quiz: [
          ["What should happen before implementation?", ["Planning the solution", "Deleting requirements", "Ignoring inputs"], 0, "Planning clarifies requirements and program flow."],
          ["Which inputs does the base project collect?", ["Name and programming goal", "Password and card number", "Only a number"], 0, "The welcome app collects a learner name and goal."],
          ["Why test after small additions?", ["To isolate problems quickly", "To prevent all output", "To change the language"], 0, "Incremental testing makes defects easier to locate."],
          ["Which module follows Programming Fundamentals?", ["Variables & Data Types", "Networking", "Advanced graphics"], 0, "Module 2 introduces variables and data types."],
          ["What should extensions preserve?", ["Working original requirements", "Only errors", "Nothing"], 0, "New work should retain existing required behaviour."]
        ]
      }
    ]
  },
  variables: {
    eyebrow: "Module 2 · C# foundations · 8 lessons",
    title: "Variables & Data Types",
    description: "Learn how to store, select, convert, validate, and display data in C#. Complete every five-question quiz to unlock the next lesson and prepare for operators and expressions.",
    completion: "Module 2 complete",
    completionText: "You are ready for Module 3, where stored values become useful expressions through arithmetic, comparison, logical, and assignment operators.",
    lessons: [
      {
        title: "Introduction to Variables", time: "40 minutes",
        objectives: ["Explain a variable as a named location used to store a value.", "Declare variables using a C# type and meaningful name.", "Assign initial values and update values later.", "Print stored values with Console.WriteLine."],
        theory: [
          "A program becomes useful when it can remember information. A game may remember a player's name, score, health, or level. C# commonly stores these values in <strong>variables</strong>.",
          "A variable is a named storage location. Instead of repeatedly writing <code>100</code>, a program can store it as <code>playerHealth</code>. The name communicates meaning and allows later access or change.",
          "C# is strongly typed. <code>int score;</code> declares a whole-number variable. <code>score = 250;</code> assigns a value. <code>int score = 250;</code> combines both steps.",
          "Assignment stores the right-hand value in the left-hand variable. Therefore <code>score = score + 50;</code> reads the score, adds 50, and stores the new result.",
          "Use descriptive camelCase names such as <code>studentAge</code>. Names cannot contain spaces, begin with digits, or use reserved C# keywords."
        ],
        terms: [["Variable", "A named location that stores a value."], ["Declaration", "Specifying a variable's type and name."], ["Assignment", "Storing a value with the equals sign."], ["Reassignment", "Replacing a variable's current value."]],
        code: 'string playerName = "Mira";\nint score = 250;\ndouble movementSpeed = 4.5;\nbool hasMap = true;\n\nscore = score + 50;\nConsole.WriteLine(score);',
        tryIt: "Create variables for your name, course, year of study, and whether you enjoy programming. Print and update them.",
        challenge: "Create a character profile containing name, level, health, movement speed, and alive status.",
        mistakes: ["Use double quotation marks around strings.", "End declarations with semicolons.", "Do not begin names with numbers.", "Remember that score and Score differ."],
        summary: "Variables give meaningful names to stored values. Declaration supplies type and name; assignment stores or replaces a value.",
        quiz: [
          ["What is a variable?", ["A compiler error", "A named storage location", "A comment"], 1, "A variable is a named storage location."],
          ["Which declares a whole number?", ["score int;", "score = int;", "int score;"], 2, "int score; declares a whole-number variable."],
          ["What does assignment do?", ["Stores the right-hand value", "Prints a value", "Creates a comment"], 0, "Assignment stores the right-hand value."],
          ["Which is the clearest name?", ["a", "studentAge", "2age"], 1, "studentAge is descriptive and valid camelCase."],
          ["After level = 4, what is stored?", ["3", "34", "4"], 2, "Reassignment replaces the previous value with 4."]
        ]
      },
      {
        title: "Primitive Data Types", time: "50 minutes",
        objectives: ["Describe int, double, float, decimal, char, bool, and string.", "Select an appropriate type.", "Compare memory usage and precision.", "Use float and decimal suffixes."],
        theory: [
          "A data type defines what a variable stores and which operations are valid. <strong>int</strong> stores signed whole numbers and commonly uses four bytes.",
          "<strong>double</strong> uses eight bytes for general fractional calculations. <strong>float</strong> uses four bytes and requires an <code>f</code> suffix. Float is common in graphics and Unity APIs.",
          "<strong>decimal</strong> uses sixteen bytes and high base-10 precision, making it suitable for money. Decimal literals use an <code>m</code> suffix.",
          "<strong>char</strong> stores one character in single quotes. <strong>bool</strong> stores true or false. <strong>string</strong> stores text in double quotes.",
          "Choose according to meaning, range, and precision. Float and double represent many decimal values approximately."
        ],
        terms: [["int", "A whole-number type."], ["double", "A general floating-point type."], ["decimal", "A high-precision base-10 type."], ["bool", "A true-or-false type."]],
        code: 'int studentCount = 28;\ndouble temperature = 36.75;\nfloat jumpHeight = 2.4f;\ndecimal gamePrice = 1499.95m;\nchar grade = \'A\';\nbool submitted = true;\nstring course = "Game Programming";',
        tryIt: "Choose suitable types for age, average mark, balance, middle initial, enrolment status, and full name.",
        challenge: "Build a product record using at least six different types and print every value.",
        mistakes: ["Use single quotes for char and double quotes for string.", "Add f to float and m to decimal literals.", "Do not store fractions in int.", "Prefer decimal for financial calculations."],
        summary: "Types define valid values, memory, precision, and operations. Choose types according to the data's meaning.",
        quiz: [
          ["Best type for number of lives?", ["int", "string", "char"], 0, "int stores whole-number quantities."],
          ["Preferred type for money?", ["bool", "float", "decimal"], 2, "decimal provides base-10 precision."],
          ["Valid char literal?", ['"A"', "'A'", "A"], 1, "A char uses single quotation marks."],
          ["Which is a float literal?", ["4.5f", "4.5m", '"4.5"'], 0, "The f suffix marks a float literal."],
          ["Type for whether a door is open?", ["double", "char", "bool"], 2, "bool stores true or false."]
        ]
      },
      {
        title: "Declaring and Initialising Variables", time: "45 minutes",
        objectives: ["Distinguish declaration, assignment, and initialisation.", "Explain defaults for fields.", "Recognise local assignment requirements.", "Apply camelCase naming."],
        theory: [
          "A declaration introduces a variable's type and name. Assignment stores a value. Initialisation gives a variable its first value, often in the declaration.",
          "Combining declaration and initialisation is clear because the starting state is immediately visible. Separate them when the value is only known after another operation.",
          "Fields receive automatic defaults, but local variables must be definitely assigned before they can be read.",
          "The <code>default</code> keyword requests a type's default value: int becomes 0 and bool becomes false.",
          "Use descriptive camelCase names. Avoid unexplained abbreviations and do not include the type in the name."
        ],
        terms: [["Initialisation", "The first value assigned to a variable."], ["Local variable", "A variable declared inside a method or block."], ["Field", "A variable declared as part of a type."], ["camelCase", "A naming style such as favouriteColour."]],
        code: 'int attempts;\nattempts = 3;\nstring playerName = "Leena";\nint score = default;\nbool gameOver = default;',
        tryIt: "Declare one variable separately, then create three variables using combined declaration and initialisation.",
        challenge: "Write eight clearly named variables: four with separate assignment and four with combined initialisation.",
        mistakes: ["Assign local variables before reading them.", "End declarations with semicolons.", "Do not use spaces or leading digits in names.", "Keep capitalisation consistent."],
        summary: "Declaration introduces type and name, assignment stores a value, and initialisation supplies the first value.",
        quiz: [
          ["Which is only a declaration?", ["total = 5;", "int total;", "int total = 5;"], 1, "int total; introduces the type and name only."],
          ["Which initialises a variable?", ["int age;", "Print age", "int age = 19;"], 2, "The declaration includes the first value."],
          ["Can an unassigned local int be printed?", ["No", "Always", "Only as null"], 0, "Local variables must be definitely assigned."],
          ["Best normal C# name?", ["Favourite_colour", "favouriteColour", "1colour"], 1, "favouriteColour follows camelCase."],
          ["Default bool value?", ["0", "null", "false"], 2, "The default Boolean value is false."]
        ]
      },
      {
        title: "Constants", time: "40 minutes",
        objectives: ["Explain what const guarantees.", "Declare constants.", "Choose constants versus variables.", "Replace magic numbers."],
        theory: [
          "A regular variable can change. A constant represents a value that must remain fixed throughout the program.",
          "A constant uses <code>const</code>, a type, a name, and a value. It must be initialised in its declaration and cannot later be reassigned.",
          "Constants suit compile-time values such as conversion factors, fixed limits, and repeated labels.",
          "Named constants replace unexplained magic numbers. <code>SecondsPerMinute</code> communicates more meaning than a repeated literal 60.",
          "Use const only for genuinely fixed values, not player health, user input, or runtime calculations."
        ],
        terms: [["Constant", "A named value that cannot be reassigned."], ["const", "The C# keyword used for constants."], ["Magic number", "An unexplained numeric literal."], ["PascalCase", "A naming style often used for constants."]],
        code: 'const int MaximumLives = 3;\nconst double Gravity = 9.81;\nconst string GameTitle = "Crystal Quest";\nConsole.WriteLine(GameTitle);',
        tryIt: "Create constants for DaysPerWeek, PassingMark, and CollegeName, then regular variables for changing values.",
        challenge: "Build a ticket calculator with fixed TicketPrice and MaximumTickets.",
        mistakes: ["Initialise every constant immediately.", "Do not use const for user input.", "Never reassign a constant.", "Use a compatible type and suffix."],
        summary: "Constants protect genuinely fixed values and replace unexplained literals with meaningful names.",
        quiz: [
          ["What does const mean?", ["Text only", "Cannot be reassigned", "User input"], 1, "A constant cannot be reassigned."],
          ["Which declaration is valid?", ["const int Days = 7;", "int const Days;", "const int Days;"], 0, "A const requires an initial value."],
          ["Best constant candidate?", ["currentHealth", "userName", "MaximumPlayers"], 2, "MaximumPlayers represents a fixed rule."],
          ["What if a constant is reassigned?", ["It changes", "Compiler error", "It becomes null"], 1, "The compiler rejects constant reassignment."],
          ["Why replace magic numbers?", ["Clarify meaning", "Create strings", "Remove semicolons"], 0, "Named constants explain repeated fixed values."]
        ]
      },
      {
        title: "Type Conversion", time: "55 minutes",
        objectives: ["Explain implicit and explicit conversion.", "Use numeric casts.", "Use Convert methods.", "Identify truncation and precision loss."],
        theory: [
          "Type conversion creates a value of one type from another. An implicit conversion occurs automatically when C# considers it safe.",
          "An int can be assigned to double implicitly. A potentially lossy conversion such as double to int requires an explicit cast.",
          "<code>(int)9.8</code> produces 9 by removing the fractional portion; it does not round.",
          "Convert methods such as <code>Convert.ToInt32</code> provide readable conversions and may use different rounding behaviour.",
          "Always consider destination range and precision. Double-to-float conversion may lose significant digits."
        ],
        terms: [["Implicit conversion", "An automatic safe conversion."], ["Explicit conversion", "A requested potentially lossy conversion."], ["Cast", "Parenthesised destination-type conversion syntax."], ["Precision loss", "Reduction in represented numeric detail."]],
        code: 'int enemies = 12;\ndouble enemyCount = enemies;\ndouble exactDistance = 14.95;\nint wholeDistance = (int)exactDistance;\nint rounded = Convert.ToInt32(14.95);',
        tryIt: "Convert an int to double, cast 27.89 to int, and compare it with Convert.ToInt32.",
        challenge: "Display cast, Convert.ToInt32, and float versions of a temperature.",
        mistakes: ["A cast to int truncates.", "Invalid text can cause conversion exceptions.", "Check range before narrowing.", "Do not assume precision is preserved."],
        summary: "Widening conversions may be implicit. Potentially lossy conversions require casts or conversion methods.",
        quiz: [
          ["Normally implicit conversion?", ["int to double", "double to int", "string to int"], 0, "int can widen to double."],
          ["Explicit cast syntax?", ["int.value", "Convert(value)", "(int)value"], 2, "A cast places the destination type in parentheses."],
          ["What is (int)8.9?", ["9", "8", "8.9"], 1, "Casting truncates the fraction."],
          ["Method converting to double?", ["Convert.ToDouble", "Console.ToDouble", "Convert.Char"], 0, "Convert.ToDouble creates a compatible double."],
          ["Risk converting double to float?", ["Becomes text", "Becomes zero", "Precision loss"], 2, "Float has fewer significant digits."]
        ]
      },
      {
        title: "Reading User Input", time: "60 minutes",
        objectives: ["Read text with Console.ReadLine.", "Convert input values.", "Use TryParse safely.", "Write clear prompts and validation messages."],
        theory: [
          "<code>Console.ReadLine()</code> waits for input and returns the entered line as a string, even when the user types digits.",
          "Use Console.Write before reading input so the response appears beside the prompt. A null-coalescing fallback can provide an empty string.",
          "Parse methods convert correctly formatted strings but throw exceptions for invalid text.",
          "TryParse returns true on success and places the converted result in an out variable. Invalid text produces false rather than an ordinary format exception.",
          "Boolean parsing recognises true or false. Numeric parsing may depend on regional number formatting."
        ],
        terms: [["ReadLine", "A method that reads a line as text."], ["Parse", "A conversion that throws for invalid format."], ["TryParse", "A safe conversion reporting success or failure."], ["out variable", "The variable receiving a converted result."]],
        code: 'Console.Write("Enter your age: ");\nstring ageText = Console.ReadLine() ?? "";\nif (int.TryParse(ageText, out int age))\n{\n    Console.WriteLine($"Next year: {age + 1}");\n}\nelse\n{\n    Console.WriteLine("Enter a whole number.");\n}',
        tryIt: "Ask for name, age, average mark, and submission status. Use TryParse for non-text values.",
        challenge: "Create a game survey with safely validated hours, rating, and recommendation status.",
        mistakes: ["ReadLine returns text.", "Parse can fail on invalid format.", "Check TryParse's Boolean result.", "State the expected input format."],
        summary: "ReadLine collects text. Convert it when another type is needed, and use TryParse for uncertain input.",
        quiz: [
          ["ReadLine return type?", ["int", "string", "bool"], 1, "Console.ReadLine returns a string."],
          ["Safe invalid-number handling?", ["int.TryParse", "Console.WriteLine", "string.Concat"], 0, "TryParse reports success without ordinary format exceptions."],
          ["What receives the result?", ["Prompt", "Error message", "out variable"], 2, "The out variable receives the converted value."],
          ["bool.TryParse can convert?", ["yes", "true", "perhaps"], 1, "Boolean parsing recognises true and false."],
          ["Why use Console.Write for a prompt?", ["Same-line input", "Automatic conversion", "Creates constant"], 0, "Write does not add a line break."]
        ]
      },
      {
        title: "String Interpolation and Concatenation", time: "45 minutes",
        objectives: ["Join values with concatenation.", "Insert values using interpolation.", "Compare readability.", "Produce labelled output."],
        theory: [
          "Concatenation joins values using the plus operator. When one operand is a string, compatible values are converted to text.",
          "String interpolation begins with a dollar sign and places values or expressions inside braces.",
          "Interpolation usually remains clearer when messages contain several values.",
          "Formatting such as <code>F2</code> displays two decimal places, while currency formatting uses the current culture.",
          "Be careful with numeric plus operations. <code>\"Total: \" + 2 + 3</code> produces Total: 23; parentheses or interpolation can produce 5."
        ],
        terms: [["Concatenation", "Joining values into a string with +."], ["Interpolation", "Embedding values in a $ string."], ["Expression", "Code that produces a value."], ["Format specifier", "A code controlling displayed formatting."]],
        code: 'string name = "Ishan";\nint level = 7;\nConsole.WriteLine("Player: " + name + " | Level: " + level);\nConsole.WriteLine($"Player: {name} | Level: {level}");\nConsole.WriteLine($"Next level: {level + 1}");',
        tryIt: "Print a student result once with concatenation and once with interpolation.",
        challenge: "Create an item receipt with quantity, unit price, total, and two decimal places.",
        mistakes: ["Place $ before the opening quote.", "Use braces around interpolated expressions.", "Include spaces in concatenated fragments.", "Use parentheses around numeric addition."],
        summary: "Concatenation joins values with +. Interpolation places expressions inside braces and is often clearer.",
        quiz: [
          ["Concatenation operator?", ["%", "$", "+"], 2, "The plus operator joins strings."],
          ["Interpolation prefix?", ["$", "#", "&"], 0, "A dollar sign enables interpolation."],
          ["Where is an interpolated value?", ["Square brackets", "Braces", "After semicolon"], 1, "Values appear inside curly braces."],
          ['Result of "Value: " + 2 + 3?', ["Value: 5", "Error", "Value: 23"], 2, "String concatenation proceeds left to right."],
          ["What does F2 request?", ["Two decimal places", "Two strings", "A Boolean"], 0, "F2 formats a number with two decimal places."]
        ]
      },
      {
        title: "Practice Project · User Information Program", time: "75 minutes",
        objectives: ["Plan a small console program.", "Collect name, age, favourite game, and colour.", "Validate age with TryParse.", "Display an interpolated summary."],
        theory: [
          "This project combines the Module 2 workflow. It asks for a name, age, favourite game, and favourite colour.",
          "Name, game, and colour use string. Age uses int after validation.",
          "Use Console.Write for clear prompts and ReadLine with an empty-string fallback for text.",
          "Use int.TryParse for age. If conversion fails, display a helpful message instead of producing the profile.",
          "When input is valid, display labelled values and an expression for age next year."
        ],
        terms: [["Validation", "Checking whether input meets requirements."], ["Profile", "A structured collection of related values."], ["Null coalescing", "Providing a fallback using ??"], ["Summary", "Readable output combining collected values."]],
        code: 'Console.Write("Name: ");\nstring name = Console.ReadLine() ?? "";\nConsole.Write("Age: ");\nstring ageText = Console.ReadLine() ?? "";\nConsole.Write("Favourite game: ");\nstring game = Console.ReadLine() ?? "";\nConsole.Write("Favourite colour: ");\nstring colour = Console.ReadLine() ?? "";\n\nif (int.TryParse(ageText, out int age))\n{\n    Console.WriteLine($"Name: {name}");\n    Console.WriteLine($"Age: {age}");\n    Console.WriteLine($"Game: {game}");\n    Console.WriteLine($"Colour: {colour}");\n    Console.WriteLine($"Age next year: {age + 1}");\n}\nelse\n{\n    Console.WriteLine("Age must be a whole number.");\n}',
        tryIt: "Type the project, test valid and invalid ages, and add one more well-named field.",
        challenge: "Add weekly gaming hours and recommendation status. Validate both before displaying all fields.",
        mistakes: ["Do not treat ReadLine as an int before conversion.", "Use age only after successful TryParse.", "Check every quote, brace, and semicolon.", "Keep prompts and output labels consistent."],
        summary: "You can declare variables, choose types, define constants, convert values, validate input, and build readable output.",
        quiz: [
          ["Type for a name?", ["bool", "string", "char"], 1, "A name is a sequence of characters."],
          ["Type for validated age?", ["int", "char", "bool"], 0, "Age is a whole-number value."],
          ["Why TryParse?", ["Print heading", "Create constant", "Validate and convert safely"], 2, "TryParse safely reports whether conversion succeeds."],
          ["Correct interpolation?", ['"Name: {name}"', '$"Name: {name}"', "$Name: name"], 1, "Interpolation uses $ and braces."],
          ["Next module?", ["Operators & Expressions", "File systems", "Networking"], 0, "Module 3 applies operators to stored values."]
        ]
      }
    ]
  },
  operators: {
    eyebrow: "Module 3 · C# foundations · 8 lessons",
    title: "Operators & Expressions",
    description: "Learn how C# performs calculations, comparisons, and logical operations. Complete every five-question quiz to unlock the next lesson and prepare for conditional statements.",
    completion: "Module 3 complete",
    completionText: "You are ready for Module 4, where conditional statements guide program decisions using the operators you have mastered.",
    lessons: [
      {
        title: "Introduction to Operators", time: "40 minutes",
        objectives: ["Explain what an operator does.", "Distinguish operands from operators.", "Describe an expression as a statement producing a value.", "Write and evaluate simple expressions."],
        theory: [
          "An operator is a symbol that performs an operation on one or more values. The values being operated on are called operands. Together, an operator and its operands form an <strong>expression</strong>.",
          "In the expression <code>5 + 3</code>, the plus sign is the operator and 5 and 3 are operands. This expression evaluates to 8.",
          "Expressions are central to programming. They calculate new values, compare values, combine conditions, and drive programme logic. Every quiz answer, calculation, and decision depends on evaluating expressions.",
          "C# has many operators: arithmetic operators for calculations, assignment operators for storing values, comparison operators for Boolean results, and logical operators for combining conditions.",
          "Operators have precedence—some execute before others. Parentheses always execute first, making complex expressions clearer and less error-prone."
        ],
        terms: [["Operator", "A symbol performing an action on operands."], ["Operand", "A value used by an operator."], ["Expression", "Code combining operators and operands."], ["Evaluation", "The process of computing an expression's result."]],
        code: 'int a = 5;\nint b = 3;\nint sum = a + b;\nConsole.WriteLine(sum);\nConsole.WriteLine(a + b + 2);\nConsole.WriteLine((a + b) * 2);',
        tryIt: "Write expressions adding two numbers, multiplying two variables, and combining three values with parentheses.",
        challenge: "Create four variables and write three expressions mixing different operators and values.",
        mistakes: ["Do not confuse the operator symbol with variable names.", "Remember that an expression must produce a value.", "Use parentheses for clarity.", "End statements with semicolons."],
        summary: "An operator acts on operands to form an expression. Expressions evaluate to produce results that drive program logic.",
        quiz: [
          ["What is an operator?", ["A variable name", "A symbol performing an action", "A comment"], 1, "An operator performs an action on operands."],
          ["In 7 - 2, what are the operands?", ["7 and 2", "7 and minus", "The result"], 0, "The numbers being operated on are operands."],
          ["What is an expression?", ["A variable type", "Code combining operators and operands", "A label"], 1, "An expression combines operators and operands to produce a value."],
          ["Does 10 / 3 produce a result?", ["No", "Yes, it evaluates", "Only in comments"], 1, "Every expression produces a value."],
          ["Why use parentheses?", ["Control precedence and clarity", "Add semicolons", "Declare variables"], 0, "Parentheses make precedence explicit."]
        ]
      },
      {
        title: "Arithmetic Operators", time: "50 minutes",
        objectives: ["Perform addition, subtraction, multiplication, division, and modulus.", "Understand integer vs decimal division.", "Apply order of operations.", "Write realistic calculations."],
        theory: [
          "Arithmetic operators act on numeric values. The plus operator <code>+</code> adds, minus <code>-</code> subtracts, asterisk <code>*</code> multiplies, forward slash <code>/</code> divides, and percent <code>%</code> computes the remainder.",
          "When both operands are <strong>int</strong>, division produces an int result truncating any fractional part. <code>(int)7 / 3</code> is 2. When either operand is <strong>double</strong>, division produces a double. <code>7.0 / 3</code> is 2.333...",
          "The modulus operator returns the remainder. <code>17 % 5</code> is 2 because 17 divided by 5 is 3 with remainder 2. Modulus helps detect even and odd numbers: <code>number % 2 == 0</code> means even.",
          "Order of operations follows the PEMDAS/BODMAS rule: parentheses first, then multiplication and division from left to right, then addition and subtraction from left to right.",
          "Expressions commonly represent real calculations. A game might compute damage as <code>baseDamage * multiplier - armourReduction</code>."
        ],
        terms: [["Division", "Splitting a value by another."], ["Remainder", "The value left after division."], ["Modulus", "The operator computing remainder."], ["Precedence", "The order in which operators execute."]],
        code: 'int damage = 10 * 3 - 2;\nConsole.WriteLine(damage);\nint health = 100;\nint reduced = health - damage;\nConsole.WriteLine(reduced);\ndouble average = 7.0 / 3;\nConsole.WriteLine(average);\nint remainder = 17 % 5;\nConsole.WriteLine(remainder);',
        tryIt: "Calculate a recipe scaling, a game score penalty, and a remainder from a division.",
        challenge: "Write a calculation for employee overtime pay, student average marks, and enemy health reduction.",
        mistakes: ["Integer division truncates without rounding.", "Modulus works only with integers.", "Order matters: 2 + 3 * 4 is 14, not 20.", "Use parentheses to override precedence."],
        summary: "Arithmetic operators calculate new values. Division behaves differently for int and double. Modulus finds remainders. Order of operations governs evaluation.",
        quiz: [
          ["Result of 10 + 3 * 2?", ["26", "16", "14"], 2, "Multiplication happens before addition."],
          ["Result of 7 / 2 (both int)?", ["3.5", "3", "Error"], 1, "Integer division truncates: 7 / 2 = 3."],
          ["Result of 7 / 2.0?", ["3", "3.5", "Error"], 1, "One double operand produces a double result."],
          ["What is 17 % 5?", ["3", "2", "Error"], 1, "The remainder of 17 divided by 5 is 2."],
          ["How to override precedence?", ["Use semicolons", "Use parentheses", "Use comments"], 1, "Parentheses force evaluation order."]
        ]
      },
      {
        title: "Assignment Operators", time: "45 minutes",
        objectives: ["Use the basic assignment operator =.", "Apply compound assignment operators.", "Recognise how compound operators simplify code.", "Write clear and concise variable updates."],
        theory: [
          "The equals sign <code>=</code> is the basic assignment operator. It stores the right-hand value into the left-hand variable.",
          "Compound assignment operators combine an arithmetic operator with assignment. <code>score += 10</code> is equivalent to <code>score = score + 10</code>. The compound version is shorter and clearer.",
          "Available compound operators are <code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>, and <code>%=</code>. Each combines the corresponding arithmetic operator with assignment.",
          "<code>health -= 5</code> subtracts 5 from health. <code>multiplier *= 2</code> doubles the multiplier. <code>shares /= 4</code> divides shares by 4.",
          "Using compound operators makes intent clearer and reduces the chance of accidentally typing the wrong variable name when updating a value."
        ],
        terms: [["Assignment", "Storing a value in a variable."], ["Compound assignment", "Combining an operation with assignment."], ["Update", "Changing a variable's value."], ["Equivalent", "Producing the same result."]],
        code: 'int score = 100;\nscore += 50;\nConsole.WriteLine(score);\nint health = 50;\nhealth -= 10;\nConsole.WriteLine(health);\nint lives = 3;\nlives *= 2;\nConsole.WriteLine(lives);',
        tryIt: "Create a variable and use four different compound assignment operators to modify it.",
        challenge: "Build a score tracker using compound assignment for bonuses, penalties, and multipliers.",
        mistakes: ["Do not forget the variable name on the left side.", "Remember that score += 5 is not the same as 5 += score.", "Compound operators require a variable, not just a value.", "Use appropriate suffixes for float and decimal."],
        summary: "Assignment operators store values. Compound operators combine arithmetic with assignment, simplifying and clarifying code.",
        quiz: [
          ["What does score += 10 do?", ["Adds 10 to score", "Sets score to 10", "Subtracts 10"], 0, "Compound += adds to the variable."],
          ["Equivalent to health -= 5?", ["health = health - 5", "5 = health - health", "health = 5 -"], 0, "Compound -= simplifies subtraction assignment."],
          ["Valid compound operator?", ["=-", "*=", "^="], 1, "Multiply-assign *=  is valid."],
          ["Result of x *= 3?", ["x set to 3", "x multiplied by 3", "Error"], 1, "*= multiplies the variable by the right operand."],
          ["Why use compound operators?", ["Clearer intent", "Fewer characters", "Both"], 2, "Compound operators are concise and readable."]
        ]
      },
      {
        title: "Increment & Decrement Operators", time: "45 minutes",
        objectives: ["Use ++ and -- operators.", "Distinguish prefix from postfix.", "Recognise practical applications.", "Avoid common mistakes."],
        theory: [
          "The increment operator <code>++</code> increases a variable by 1. The decrement operator <code>--</code> decreases it by 1. These are shortcuts: <code>score++</code> is equivalent to <code>score += 1</code>.",
          "Prefix increment <code>++score</code> increases the variable and then returns the new value. Postfix increment <code>score++</code> increases the variable but returns the old value before the increase.",
          "In most practical cases, prefix and postfix behave identically because the returned value is not used. <code>int x = 5; x++;</code> and <code>++x;</code> both result in x being 6.",
          "In loops and arrays, increment and decrement are essential. A loop counter increments each iteration. Countdown timers decrement. Practising with loops solidifies understanding.",
          "Prefix is marginally more efficient in complex scenarios but both are suitable for beginners. The difference rarely matters in simple programs."
        ],
        terms: [["Increment", "Increasing a value by 1."], ["Decrement", "Decreasing a value by 1."], ["Prefix", "Operator before the variable."], ["Postfix", "Operator after the variable."]],
        code: 'int count = 0;\ncount++;\nConsole.WriteLine(count);\nint level = 10;\nlevel--;\nConsole.WriteLine(level);\nint attempts = 1;\nConsole.WriteLine(attempts++);\nConsole.WriteLine(attempts);',
        tryIt: "Create a variable, increment it five times using ++, and display each result.",
        challenge: "Build a countdown timer using decrement and a loop counter using increment.",
        mistakes: ["Prefix and postfix usually behave identically; do not overthink.", "++ and -- require a variable, not a constant.", "Use in loops where they are most common.", "Avoid complex expressions mixing prefix, postfix, and other operators."],
        summary: "Increment ++ adds 1; decrement -- subtracts 1. Prefix executes before returning; postfix after. Both simplify common updates.",
        quiz: [
          ["What does count++ do?", ["Subtracts 1", "Adds 1 to count", "Divides by 1"], 1, "++ increases the variable."],
          ["Prefix vs postfix: Which increases first?", ["Both the same in most cases", "Prefix", "Postfix"], 0, "Typically both behave identically."],
          ["Result of x++ in a simple statement?", ["x is unchanged", "x increases by 1", "Error"], 1, "The variable increases even if the returned value is ignored."],
          ["Valid syntax?", ["count++", "++count", "Both"], 2, "Both prefix and postfix are valid."],
          ["Best use for ++?", ["Declaring variables", "Loops and counters", "Comments"], 1, "Increment is essential in loops."]
        ]
      },
      {
        title: "Comparison Operators", time: "55 minutes",
        objectives: ["Compare values using ==, !=, <, >, <=, and >=.", "Understand Boolean results.", "Avoid comparing strings with ==.", "Prepare for conditional logic."],
        theory: [
          "Comparison operators test relationships between values and return a Boolean: true or false. They form the foundation of decision-making in programs.",
          "The equals operator <code>==</code> tests whether two values are identical. <code>5 == 5</code> is true; <code>5 == 3</code> is false. The not-equals operator <code>!=</code> is the opposite.",
          "Less than <code><</code> and greater than <code>></code> compare magnitude. <code>3 < 5</code> is true. Less-than-or-equal <code><=</code> and greater-than-or-equal <code>>=</code> include the boundary.",
          "A common mistake is using <code>=</code> (assignment) instead of <code>==</code> (comparison). <code>if (score = 10)</code> assigns 10 to score and is syntactically different from <code>if (score == 10)</code>.",
          "Comparing strings with <code>==</code> checks reference equality, not content. Module 4 introduces proper string comparison. For now, focus on numeric comparisons."
        ],
        terms: [["Comparison", "Testing a relationship between values."], ["Boolean", "A true or false result."], ["Equality", "Testing whether values are identical."], ["Magnitude", "Comparing size or quantity."]],
        code: 'int score = 50;\nbool passed = score >= 40;\nConsole.WriteLine(passed);\nbool failed = score < 40;\nConsole.WriteLine(failed);\nbool isPerfect = score == 100;\nConsole.WriteLine(isPerfect);\nbool needsImprovement = score != 100;\nConsole.WriteLine(needsImprovement);',
        tryIt: "Create variables and test comparisons, printing the Boolean results.",
        challenge: "Compare three numeric values and display whether each passes a threshold.",
        mistakes: ["Use == for comparison, = for assignment.", "Remember that < and > do not include equality.", "<= and >= include the boundary.", "Numeric comparisons produce Boolean results."],
        summary: "Comparison operators return true or false. They form the basis of conditional decisions and logic.",
        quiz: [
          ["Result of 10 == 10?", ["false", "true", "Error"], 1, "== tests whether values are equal."],
          ["What does != mean?", ["Greater than", "Not equal to", "Assignment"], 1, "!= tests inequality."],
          ["Is 5 < 5 true?", ["No, false", "Yes, true", "Error"], 0, "< does not include equality."],
          ["Result of 10 >= 10?", ["false", "true", "Error"], 1, ">= includes the boundary."],
          ["Correct comparison operator?", ["=", "==", ":="], 1, "== compares values."]
        ]
      },
      {
        title: "Logical Operators", time: "55 minutes",
        objectives: ["Combine conditions using &&, ||, and !.", "Understand truth tables.", "Write complex conditional expressions.", "Avoid short-circuit pitfalls."],
        theory: [
          "Logical operators combine Boolean values. The AND operator <code>&&</code> returns true only when both operands are true. The OR operator <code>||</code> returns true when at least one operand is true. The NOT operator <code>!</code> inverts a Boolean.",
          "<code>age >= 13 && age < 65</code> is true only if age satisfies both conditions. This range check is common for validation.",
          "<code>hasWeapon || hasShield</code> is true if the player has either item or both. This allows flexibility in game logic.",
          "<code>!isGameOver</code> flips the Boolean. If isGameOver is false, <code>!isGameOver</code> is true, making the game active.",
          "C# uses short-circuit evaluation. In <code>a && b</code>, if a is false, b is never evaluated because the result must be false. In <code>a || b</code>, if a is true, b is skipped."
        ],
        terms: [["Logical AND", "Both conditions must be true."], ["Logical OR", "At least one condition is true."], ["Logical NOT", "Inverts a Boolean value."], ["Short-circuit", "Skipping evaluation when result is certain."]],
        code: 'int age = 20;\nbool canVote = age >= 18 && age < 150;\nConsole.WriteLine(canVote);\nbool hasAccess = isAdmin || isModerator;\nConsole.WriteLine(hasAccess);\nbool isActive = !isGameOver;\nConsole.WriteLine(isActive);\nbool qualified = score >= 50 && attempts <= 3;\nConsole.WriteLine(qualified);',
        tryIt: "Write expressions combining three numeric comparisons with && and ||.",
        challenge: "Build a game eligibility checker using multiple logical operators.",
        mistakes: ["Do not confuse && and || .", "Remember that && is stricter than ||.", "!true is false; !false is true.", "Parentheses clarify complex logical expressions."],
        summary: "Logical operators combine Booleans. && requires both true, || requires at least one true, ! inverts.",
        quiz: [
          ["Result of true && false?", ["true", "false", "Error"], 1, "&& requires both to be true."],
          ["Result of true || false?", ["true", "false", "Error"], 0, "|| requires at least one true."],
          ["Result of !true?", ["true", "false", "Error"], 1, "! inverts the Boolean."],
          ["What does age >= 13 && age < 18 mean?", ["Age 13 or older", "Age 13 to 17", "Age 18"], 1, "Both conditions must be true."],
          ["When is a || b false?", ["When a is false", "When b is false", "When both are false"], 2, "OR is false only when both operands are false."]
        ]
      },
      {
        title: "Operator Precedence", time: "50 minutes",
        objectives: ["Understand the order operators execute.", "Use parentheses to control evaluation.", "Break down complex expressions.", "Write readable code."],
        theory: [
          "When an expression contains multiple operators, precedence determines which execute first. All operators have a precedence level established by C#.",
          "Parentheses always execute first, making them the highest precedence. Then multiplication, division, and modulus from left to right. Then addition and subtraction from left to right. Then comparison operators. Then logical AND. Finally logical OR.",
          "<code>2 + 3 * 4</code> is 14, not 20, because <code>*</code> has higher precedence than <code>+</code>. Writing <code>(2 + 3) * 4</code> makes intent explicit and produces 20.",
          "Complex expressions become unreadable without parentheses. <code>score >= 50 && bonus > 0 || lives > 0</code> is ambiguous. Rewrite as <code>(score >= 50 && bonus > 0) || lives > 0</code> for clarity.",
          "Readability is more important than relying on precedence memory. Break complex expressions into smaller parts or use intermediate variables."
        ],
        terms: [["Precedence", "The order operators execute."], ["Parentheses", "Highest-precedence grouping."], ["Left to right", "Evaluation direction for same-precedence operators."], ["Readability", "Code clarity through explicit grouping."]],
        code: 'int result = 2 + 3 * 4;\nConsole.WriteLine(result);\nresult = (2 + 3) * 4;\nConsole.WriteLine(result);\nbool qualified = score >= 50 && bonus > 0 || lives > 0;\nbool explicit = (score >= 50 && bonus > 0) || lives > 0;\nConsole.WriteLine(qualified);\nConsole.WriteLine(explicit);',
        tryIt: "Write two expressions: one relying on precedence and one using parentheses for clarity.",
        challenge: "Rewrite a complex expression using parentheses and break it into simpler intermediate calculations.",
        mistakes: ["Do not assume readers remember precedence rules.", "Use parentheses liberally for clarity.", "Precedence is left-to-right for same levels.", "Test expressions by adding parentheses incrementally."],
        summary: "Parentheses override precedence. Use them to clarify intent and make complex expressions readable.",
        quiz: [
          ["Result of 5 + 2 * 3?", ["21", "11", "14"], 2, "Multiplication before addition."],
          ["Result of (5 + 2) * 3?", ["21", "11", "14"], 0, "Parentheses force addition first."],
          ["Highest precedence?", ["Arithmetic", "Logical OR", "Parentheses"], 2, "Parentheses always execute first."],
          ["Which evaluates first: && or ||?", ["Both equally", "&&", "||"], 1, "AND has higher precedence than OR."],
          ["Why use extra parentheses?", ["Clearer intent", "No other reason", "Slower code"], 0, "Parentheses make precedence explicit."]
        ]
      },
      {
        title: "Practice Project · Student Grade Calculator", time: "75 minutes",
        objectives: ["Combine arithmetic and comparison operators.", "Calculate averages and identify extremes.", "Apply logical operators for decisions.", "Display formatted results."],
        theory: [
          "This project integrates Module 3 concepts. It reads three assessment marks, calculates the average, identifies the highest and lowest values, and determines pass/fail status.",
          "Use int or double for marks depending on whether decimals are allowed. Read three values using Console.ReadLine and Convert or TryParse.",
          "Calculate average by adding marks and dividing by 3. Find the highest using comparison: if mark1 > mark2 && mark1 > mark3, mark1 is highest.",
          "A student passes when average >= 50. Combine comparison and logical operators: <code>average >= 50 && average >= 0</code>.",
          "Display all results using interpolation with labels and clear formatting. Use newlines and dashes to create visual structure."
        ],
        terms: [["Average", "Sum divided by count."], ["Highest value", "Maximum among multiple values."], ["Lowest value", "Minimum among multiple values."], ["Pass threshold", "The score required to succeed."]],
        code: 'Console.WriteLine("Student Grade Calculator");\nConsole.WriteLine("------------------------");\nConsole.Write("Mark 1: ");\nint mark1 = int.Parse(Console.ReadLine() ?? "0");\nConsole.Write("Mark 2: ");\nint mark2 = int.Parse(Console.ReadLine() ?? "0");\nConsole.Write("Mark 3: ");\nint mark3 = int.Parse(Console.ReadLine() ?? "0");\n\nint total = mark1 + mark2 + mark3;\nint average = total / 3;\nint highest = mark1;\nif (mark2 > highest) highest = mark2;\nif (mark3 > highest) highest = mark3;\n\nbool passed = average >= 50;\nConsole.WriteLine($"\\nAverage: {average}");\nConsole.WriteLine($"Highest: {highest}");\nConsole.WriteLine($"Status: {(passed ? "PASS" : "FAIL")}");\nConsole.WriteLine("------------------------");',
        tryIt: "Build the calculator and test with three marks that produce a clear average and pass/fail result.",
        challenge: "Add decimal support, calculate the lowest mark, and display additional statistics.",
        mistakes: ["Integer division truncates; use double for precise averages.", "Validate that marks are within a valid range.", "Ensure all three marks are read before calculating.", "Check comparison logic for highest and lowest."],
        summary: "You can now use arithmetic to calculate, comparisons to test conditions, and logical operators to combine them into complete programs.",
        quiz: [
          ["How to find the highest of three values?", ["Add them", "Compare using <", "Use multiple if comparisons"], 2, "Successive comparisons identify the maximum."],
          ["Result of (10 + 15 + 20) / 3?", ["15", "15.0", "Error"], 0, "Integer division produces 15."],
          ["Operator for AND in the code?", ["||", "&&", "|"], 1, "&& combines conditions."],
          ["Best data type for marks with decimals?", ["int", "double", "bool"], 1, "double allows fractional marks."],
          ["How to display pass or fail?", ["Use if/else output", "Use interpolation with ? :", "Both"], 2, "Both methods work; choose for clarity."]
        ]
      }
    ]
  },
  conditionals: {
    eyebrow: "Module 4 · C# foundations · 8 lessons",
    title: "Conditional Statements",
    description: "Learn how programs make decisions using conditional logic in C#. Master if, else if, else, switch, and logical operators to build interactive applications that respond to user input.",
    completion: "Module 4 complete",
    completionText: "You are ready for Module 5, where loops teach you how to repeat code efficiently using for, while, do...while, and foreach loops.",
    lessons: [
      {
        title: "Introduction to Conditional Statements", time: "45 minutes",
        objectives: ["Explain what conditional statements are and why they matter.", "Describe how programs evaluate true and false conditions.", "Identify real-world decision-making scenarios.", "Understand flowcharts as a planning tool."],
        theory: [
          "Conditional statements allow a program to make decisions. When a program evaluates a condition as true or false, it can execute different code paths. Without conditionals, programs would execute the same steps every time.",
          "A condition is a Boolean expression that evaluates to true or false. Examples include <code>score >= 50</code>, <code>name == \"Admin\"</code>, and <code>lives > 0</code>. Every decision depends on evaluating one or more conditions.",
          "Real-world decision making is everywhere. A game decides whether a player has won. A form validator checks whether entered text is valid. A login system determines whether credentials match. A grading system assigns letter grades based on numeric scores.",
          "A flowchart visually represents decision logic using diamond shapes for conditions and rectangles for actions. Flowcharts help programmers plan code before writing it. The flowchart structure directly translates to if, else if, else, and switch statements.",
          "C# provides several conditional statement types. The if statement executes code only if a condition is true. The if...else statement chooses between two paths. The else if statement evaluates multiple conditions. The switch statement is useful when one variable has many possible values."
        ],
        terms: [["Condition", "A Boolean expression evaluating to true or false."], ["Decision", "Choosing which code to execute based on a condition."], ["Branch", "A path of execution chosen by a conditional."], ["Flowchart", "A visual representation of program logic using symbols."]],
        code: '// Simple decision\nif (score >= 50)\n{\n    Console.WriteLine("You passed!");\n}\n\n// Choose between two outcomes\nif (age >= 13)\n{\n    Console.WriteLine("Welcome to the game.");\n}\nelse\n{\n    Console.WriteLine("You are too young.");\n}',
        tryIt: "Draw a flowchart for a login system that checks whether a password is correct.",
        challenge: "Describe three everyday situations where a computer needs to make a decision.",
        mistakes: ["Do not assume a program always follows the same path.", "Remember that conditions produce Boolean results.", "Use flowcharts to plan before coding.", "All code paths should be intentional, not accidental."],
        summary: "Conditional statements let programs make decisions. True conditions execute one block; false conditions execute another or skip entirely. Flowcharts plan decision logic.",
        quiz: [
          ["What does a condition produce?", ["Text", "A Boolean value", "An error"], 1, "Conditions evaluate to true or false."],
          ["Why use conditionals?", ["Make programs wait", "Execute different code based on situations", "Slow programs down"], 1, "Conditionals allow different outcomes based on data."],
          ["What is a flowchart?", ["Source code", "A visual logic diagram", "A compiler message"], 1, "Flowcharts plan decision structures visually."],
          ["Which evaluates to true?", ["score < 50", "age == 5 && age > 10", "name == name"], 2, "A variable always equals itself."],
          ["What happens if a condition is false?", ["Program crashes", "Else block executes or code skips", "Variables are deleted"], 1, "False conditions skip the if block or run else."]
        ]
      },
      {
        title: "The if Statement", time: "50 minutes",
        objectives: ["Write if statements with correct syntax.", "Use code blocks to group statements.", "Create Boolean expressions.", "Build practical programs with single conditions."],
        theory: [
          "An if statement executes a code block only if its condition is true. The syntax is <code>if (condition) { statements }</code>. If the condition is false, the entire block is skipped.",
          "The condition goes in parentheses and must evaluate to a Boolean. Comparison operators such as ==, !=, <, >, <=, and >= produce Boolean results. Logical operators such as && and || combine conditions.",
          "Code blocks group statements using curly braces. The statements inside execute only if the condition is true. Indentation makes nesting visible and readable.",
          "A common mistake is confusing assignment <code>=</code> with comparison <code>==</code>. The condition <code>score = 50</code> assigns 50 to score, while <code>score == 50</code> tests whether score equals 50.",
          "If statements are the foundation of decision-making. A program might check whether a user has entered valid input, whether an item is available, or whether a game has ended. Each check uses an if statement."
        ],
        terms: [["if statement", "Executes code if a condition is true."], ["Condition", "The Boolean expression tested."], ["Code block", "Statements grouped with curly braces."], ["Indentation", "Spacing that shows code structure."]],
        code: 'int score = 75;\nif (score >= 50)\n{\n    Console.WriteLine("Congratulations!");\n    Console.WriteLine("You passed the exam.");\n}\nConsole.WriteLine("Test complete.");\n\nstring status = "admin";\nif (status == "admin")\n{\n    Console.WriteLine("You have access.");\n}',
        tryIt: "Write an if statement that checks whether a number is positive and displays a message.",
        challenge: "Create a program that asks for a user's age and displays a message only if they are 18 or older.",
        mistakes: ["Use == for comparison, not =.", "Include curly braces even for single statements.", "The condition must be Boolean.", "Ensure statements end with semicolons."],
        summary: "If statements execute code blocks only when conditions are true. Use == to compare, not = to assign. Indentation clarifies structure.",
        quiz: [
          ["When does an if block execute?", ["Always", "Only if the condition is true", "Never"], 1, "An if block runs only when the condition is true."],
          ["Correct if syntax?", ["if condition { }", "if (condition) { }", "if [condition] { }"], 1, "Parentheses and braces are required."],
          ["What does score = 50 do in an if?", ["Tests equality", "Assigns 50", "Creates an error"], 1, "= is assignment, not comparison."],
          ["What executes if the condition is false?", ["The if block", "The next line after the if", "An error"], 1, "False conditions skip the if block entirely."],
          ["Why use curly braces?", ["Terminate statements", "Group related statements", "End the program"], 1, "Braces create code blocks."]
        ]
      },
      {
        title: "The if...else Statement", time: "50 minutes",
        objectives: ["Write if...else statements.", "Choose between two alternative code paths.", "Improve program interaction with alternative outcomes.", "Apply if...else to real-world scenarios."],
        theory: [
          "An if...else statement provides two paths: one if the condition is true and another if it is false. The syntax is <code>if (condition) { true block } else { false block }</code>. Exactly one block executes.",
          "The else keyword introduces the alternative code. The else block has no condition; it executes automatically if the if condition is false.",
          "If...else is perfect for yes-or-no decisions. A login system checks whether the password matches. A validator checks whether input is empty. A game checks whether the player has won or lost.",
          "A common pattern is checking whether a numeric value meets a threshold. <code>if (age >= 13)</code> might allow access; <code>else</code> might deny it. Another pattern checks whether text matches an expected value.",
          "Every conditional program should handle both the true and false cases. Forgetting the else path means some user inputs produce no visible feedback, which is confusing."
        ],
        terms: [["if...else", "Executes one of two code blocks."], ["else block", "Code that runs if the if condition is false."], ["Alternative outcome", "A different result based on conditions."], ["Mutual exclusivity", "Only one block can execute."]],
        code: 'int age = 20;\nif (age >= 18)\n{\n    Console.WriteLine("You are an adult.");\n}\nelse\n{\n    Console.WriteLine("You are a minor.");\n}\n\nstring password = "secret123";\nif (password == "secret123")\n{\n    Console.WriteLine("Access granted.");\n}\nelse\n{\n    Console.WriteLine("Access denied.");\n}',
        tryIt: "Write an if...else that checks whether a number is even or odd.",
        challenge: "Create a program asking for a user's test score and displaying either \"Pass\" or \"Fail\" based on whether the score is 50 or higher.",
        mistakes: ["Use else, not else if, for the final alternative.", "Ensure both blocks handle the expected cases.", "Do not put a condition after else.", "Each path should be clear to the user."],
        summary: "If...else provides two paths. True executes the if block; false executes the else block. Always handle both outcomes.",
        quiz: [
          ["When does the else block execute?", ["Always", "If the if condition is true", "If the if condition is false"], 2, "Else runs when the if condition is false."],
          ["Can both if and else blocks execute?", ["Yes", "No", "Only if both are true"], 1, "Exactly one block executes."],
          ["Does else need a condition?", ["Yes", "No", "Only sometimes"], 1, "Else has no condition."],
          ["Best use for if...else?", ["Yes-or-no decisions", "Multiple outcomes", "Loops"], 0, "If...else suits binary choices."],
          ["Result of wrong password?", ["Program crashes", "Else block executes", "Nothing happens"], 1, "Else block provides feedback."]
        ]
      },
      {
        title: "The else if Statement", time: "55 minutes",
        objectives: ["Evaluate multiple conditions sequentially.", "Choose among more than two paths.", "Write readable chains of conditions.", "Apply else if to real-world problems."],
        theory: [
          "An else if statement evaluates additional conditions when the first if is false. The syntax chains conditions: <code>if (condition1) { } else if (condition2) { } else if (condition3) { } else { }</code>.",
          "The first true condition executes its block. Once a condition is true, all remaining else if and else blocks are skipped. This is called short-circuit evaluation.",
          "Else if is useful for grade calculation: if score >= 90, assign A; else if score >= 80, assign B; else if score >= 70, assign C; and so on. The first matching condition determines the outcome.",
          "Weather advisors, game difficulty selectors, and shipping calculators all use else if chains. The logic is: check the most specific conditions first, then general ones, with a fallback else for unexpected cases.",
          "Order matters. If you check <code>score >= 60</code> before <code>score >= 80</code>, a score of 85 matches the first condition and the second is never checked. Arrange conditions from most specific to least specific."
        ],
        terms: [["else if", "Tests an additional condition if previous ones are false."], ["Chain", "A series of conditions evaluated sequentially."], ["Short-circuit", "Stopping evaluation once a condition is true."], ["Specificity", "Arranging conditions from precise to general."]],
        code: 'int score = 85;\nif (score >= 90)\n{\n    Console.WriteLine("Grade: A");\n}\nelse if (score >= 80)\n{\n    Console.WriteLine("Grade: B");\n}\nelse if (score >= 70)\n{\n    Console.WriteLine("Grade: C");\n}\nelse if (score >= 60)\n{\n    Console.WriteLine("Grade: D");\n}\nelse\n{\n    Console.WriteLine("Grade: F");\n}',
        tryIt: "Build a grade calculator that assigns A, B, C, D, or F based on a numeric score.",
        challenge: "Create a weather advice system that recommends clothing based on temperature ranges.",
        mistakes: ["Do not forget that conditions are checked in order.", "Arrange from specific to general.", "Include a final else for unexpected cases.", "Test boundary values carefully."],
        summary: "Else if evaluates additional conditions. The first true condition executes; others are skipped. Arrange conditions from specific to general.",
        quiz: [
          ["How many else if can follow an if?", ["One", "As many as needed", "None"], 1, "Multiple else if statements can chain."],
          ["What happens after a true condition?", ["All blocks execute", "Remaining conditions are skipped", "An error occurs"], 1, "Remaining else if and else are skipped."],
          ["Order of conditions matters?", ["Yes", "No", "Only sometimes"], 0, "Specific conditions should come first."],
          ["Best for else if?", ["Binary choices", "Multiple categories", "Loops"], 1, "Else if handles multiple outcomes."],
          ["Result of score 75 in grade system?", ["A", "C", "D"], 2, "75 >= 70 but < 80 produces C."]
        ]
      },
      {
        title: "Nested if Statements", time: "55 minutes",
        objectives: ["Understand when to nest conditions.", "Write readable nested logic.", "Identify when nesting becomes problematic.", "Simplify nested conditions with logical operators."],
        theory: [
          "A nested if statement is an if statement inside another if statement. The inner if only executes if the outer condition is true. Nesting is useful when decisions depend on multiple independent conditions.",
          "A common example is validating user input. Outer if checks whether input is not empty; inner if checks whether it is numeric. Only if both are true does the program proceed.",
          "Deep nesting—three or more levels—makes code hard to read. A rule of thumb: limit nesting to two levels. Deeper nesting is usually a sign to use logical operators instead.",
          "Logical operators &&, ||, and ! let you combine conditions in a single if statement instead of nesting. <code>if (age >= 13 && parent_consent == true)</code> is clearer than nesting two ifs.",
          "Nested ifs are still useful for sequential checks where later decisions depend on earlier results. For independent conditions, use && and || to keep code flat."
        ],
        terms: [["Nested if", "An if statement inside another if."], ["Outer condition", "The first if being evaluated."], ["Inner condition", "The second if that depends on the first."], ["Logical operators", "&&, ||, and ! for combining conditions."]],
        code: 'int age = 20;\nbool hasConsent = true;\n\nif (age >= 13)\n{\n    if (hasConsent)\n    {\n        Console.WriteLine("Access granted.");\n    }\n    else\n    {\n        Console.WriteLine("Parent consent required.");\n    }\n}\nelse\n{\n    Console.WriteLine("Too young for access.");\n}\n\n// Better: combine with logical operator\nif (age >= 13 && hasConsent)\n{\n    Console.WriteLine("Access granted.");\n}\nelse if (age >= 13 && !hasConsent)\n{\n    Console.WriteLine("Parent consent required.");\n}\nelse\n{\n    Console.WriteLine("Too young for access.");\n}',
        tryIt: "Write nested ifs checking whether a user is an admin and has a valid password.",
        challenge: "Rewrite a two-level nested if using logical operators instead.",
        mistakes: ["Do not nest more than two levels.", "Use && and || instead of deep nesting.", "Ensure inner blocks are indented clearly.", "Test all paths through nested logic."],
        summary: "Nested ifs handle sequential dependent conditions. For independent conditions, use logical operators to keep code flat and readable.",
        quiz: [
          ["When is nesting useful?", ["For all conditions", "For sequential dependent decisions", "For independent choices"], 1, "Nesting is for conditions that depend on previous results."],
          ["How many nesting levels are recommended?", ["One or two", "As many as needed", "Five or more"], 0, "Limit nesting to two levels for readability."],
          ["What replaces deep nesting?", ["Comments", "Logical operators", "Variables"], 1, "&& and || flatten conditions."],
          ["Inner if executes when?", ["Always", "Only if outer if is true", "Never"], 1, "Inner ifs depend on outer conditions."],
          ["Best alternative to nesting?", ["More ifs", "Logical operators", "Larger blocks"], 1, "Combine conditions with && or ||."]
        ]
      },
      {
        title: "The switch Statement", time: "50 minutes",
        objectives: ["Write switch statements with correct syntax.", "Use case and break keywords.", "Handle default cases.", "Identify when switch is better than if...else."],
        theory: [
          "A switch statement is useful when a single variable has many possible values. Instead of a long chain of else if statements, switch provides a cleaner syntax.",
          "The syntax is <code>switch (expression) { case value1: code; break; case value2: code; break; default: code; }</code>. The expression is evaluated once. Each case compares to the expression value.",
          "The break keyword exits the switch. Without break, execution continues to the next case, causing unintended behavior. Most cases need break unless intentionally falling through.",
          "The default case handles unexpected values. It is like the final else in an if...else chain. Default is optional but recommended for safety.",
          "Switch works well for menu selection, day of the week, game states, or any situation with discrete, predictable values. Switch is clearer than else if when comparing one variable to multiple constants."
        ],
        terms: [["switch", "Tests one expression against multiple values."], ["case", "A label matching a specific value."], ["break", "Exits the switch statement."], ["default", "Executes if no case matches."]],
        code: 'int day = 3;\nswitch (day)\n{\n    case 1:\n        Console.WriteLine("Monday");\n        break;\n    case 2:\n        Console.WriteLine("Tuesday");\n        break;\n    case 3:\n        Console.WriteLine("Wednesday");\n        break;\n    default:\n        Console.WriteLine("Invalid day");\n        break;\n}\n\nchar grade = \'B\';\nswitch (grade)\n{\n    case \'A\':\n    case \'B\':\n        Console.WriteLine("Excellent work!");\n        break;\n    case \'C\':\n        Console.WriteLine("Good effort.");\n        break;\n    default:\n        Console.WriteLine("Keep improving.");\n        break;\n}',
        tryIt: "Create a switch that translates a number 1-3 into a colour name.",
        challenge: "Build a calculator menu using switch to select between +, −, *, and / operations.",
        mistakes: ["Do not forget break statements.", "Each case needs a value, not a condition.", "Default handles unexpected cases.", "Test all possible values."],
        summary: "Switch tests one expression against multiple values. Each case needs break. Default handles unexpected cases. Use switch when comparing one variable to many constants.",
        quiz: [
          ["When is switch better than if...else?", ["For multiple independent conditions", "For one variable with many possible values", "For complex logic"], 1, "Switch is cleaner for discrete values."],
          ["What does break do?", ["Ends the program", "Skips to default", "Exits the switch"], 2, "Break prevents fall-through to the next case."],
          ["What if break is missing?", ["Error", "Fall-through to next case", "Automatic exit"], 1, "Missing break causes execution to continue to the next case."],
          ["Is default required?", ["Yes", "No", "Only for numbers"], 1, "Default is optional but recommended."],
          ["Result of switch (3) with no matching case and no default?", ["Error", "Nothing happens", "Fall-through"], 1, "Without default, unmatched cases do nothing."]
        ]
      },
      {
        title: "Combining Conditions with Logical Operators", time: "60 minutes",
        objectives: ["Use && to require all conditions to be true.", "Use || to require at least one condition to be true.", "Use ! to invert a condition.", "Build complex conditional logic safely."],
        theory: [
          "Logical operators combine Boolean expressions. The AND operator <code>&&</code> returns true only if both operands are true. The OR operator <code>||</code> returns true if at least one operand is true. The NOT operator <code>!</code> inverts a Boolean.",
          "<code>if (age >= 13 && age < 18)</code> is true only if both conditions are true. This checks a range. <code>if (hasWeapon || hasShield)</code> is true if the player has either item or both. This offers alternatives.",
          "Complex conditions become unreadable without parentheses. <code>if (score >= 50 && bonus > 0 || lives > 0)</code> is ambiguous. Rewrite as <code>if ((score >= 50 && bonus > 0) || lives > 0)</code> for clarity.",
          "De Morgan's Law states <code>!(a && b)</code> is equivalent to <code>!a || !b</code> and <code>!(a || b)</code> is equivalent to <code>!a && !b</code>. These are useful for simplifying negations.",
          "Combining conditions is powerful but can become confusing. A rule of thumb: keep single if conditions to three comparisons. More complex logic belongs in a helper method."
        ],
        terms: [["AND operator", "Both conditions must be true."], ["OR operator", "At least one condition must be true."], ["NOT operator", "Inverts a Boolean value."], ["Short-circuit", "Stopping evaluation when the result is certain."]],
        code: 'int age = 25;\nbool hasLicense = true;\nbool hasInsurance = true;\n\n// AND: all conditions must be true\nif (age >= 18 && hasLicense && hasInsurance)\n{\n    Console.WriteLine("You can rent a car.");\n}\n\n// OR: at least one must be true\nif (hasLicense || hasInsurance)\n{\n    Console.WriteLine("You have some documentation.");\n}\n\n// NOT: invert the condition\nif (!hasLicense)\n{\n    Console.WriteLine("You need a license.");\n}\n\n// Complex condition with parentheses\nif ((age >= 13 && age < 65) || isStudent)\n{\n    Console.WriteLine("You qualify for a discount.");\n}',
        tryIt: "Write a condition checking whether a user is an adult AND has an email AND has accepted terms.",
        challenge: "Build a game eligibility checker requiring age between 13-17 OR parental consent.",
        mistakes: ["Use && for AND, || for OR.", "Use parentheses to clarify complex conditions.", "Short-circuit evaluation stops when result is certain.", "Test all branches of complex logic."],
        summary: "&& requires all true, || requires at least one true, ! inverts. Use parentheses for complex conditions. Test all combinations.",
        quiz: [
          ["Result of true && false?", ["true", "false", "Error"], 1, "AND requires both to be true."],
          ["Result of true || false?", ["true", "false", "Error"], 0, "OR requires at least one true."],
          ["What does !true produce?", ["true", "false", "null"], 1, "NOT inverts Boolean values."],
          ["Age >= 18 && age < 65 means?", ["18 or older", "Between 18 and 65", "65 or younger"], 1, "Both conditions must be true."],
          ["Why use parentheses in complex conditions?", ["Increase speed", "Clarify precedence", "Reduce memory"], 1, "Parentheses make evaluation order explicit."]
        ]
      },
      {
        title: "Practice Project · Student Results System", time: "90 minutes",
        objectives: ["Collect and validate student data.", "Calculate averages using arithmetic.", "Use conditionals to assign grades and feedback.", "Build a menu-driven application."],
        theory: [
          "This project integrates all Module 4 concepts. It asks for a student's name, reads three assessment marks, calculates the average, determines pass/fail status, assigns a letter grade, and provides feedback.",
          "The program should loop, allowing entry of multiple students. After each result, it asks whether the user wants to continue.",
          "Grade assignment uses else if to check ranges: >= 90 is A, >= 80 is B, >= 70 is C, >= 60 is D, < 60 is F. Feedback should be encouraging for passes and motivating for failures.",
          "Input validation checks whether entered marks are numeric and within range (0-100). Invalid input displays an error and re-prompts.",
          "A main menu can use switch to allow exit or entry of new students. The complete system demonstrates planning (IPO), conditionals (if/else/else if), logical operators (&&), and repetition (loops)."
        ],
        terms: [["Validation", "Checking whether input meets requirements."], ["Range check", "Verifying a value is within acceptable bounds."], ["Feedback", "User-facing messages providing context."], ["Menu-driven", "Programs that present choices to the user."]],
        code: 'Console.WriteLine("===== Student Results System =====");\nbool continueProgram = true;\n\nwhile (continueProgram)\n{\n    Console.Write("Enter student name: ");\n    string name = Console.ReadLine() ?? "";\n    \n    int total = 0;\n    bool validInput = true;\n    \n    for (int i = 1; i <= 3; i++)\n    {\n        Console.Write($"Enter mark {i}: ");\n        if (int.TryParse(Console.ReadLine() ?? "0", out int mark))\n        {\n            if (mark >= 0 && mark <= 100)\n            {\n                total += mark;\n            }\n            else\n            {\n                Console.WriteLine("Mark must be between 0 and 100.");\n                validInput = false;\n                break;\n            }\n        }\n        else\n        {\n            Console.WriteLine("Please enter a valid number.");\n            validInput = false;\n            break;\n        }\n    }\n    \n    if (validInput)\n    {\n        int average = total / 3;\n        string grade = average >= 90 ? "A" : average >= 80 ? "B" : average >= 70 ? "C" : average >= 60 ? "D" : "F";\n        bool passed = average >= 50;\n        \n        Console.WriteLine();\n        Console.WriteLine($"Name: {name}");\n        Console.WriteLine($"Average: {average}");\n        Console.WriteLine($"Grade: {grade}");\n        Console.WriteLine(passed ? "Status: PASS" : "Status: FAIL");\n        Console.WriteLine();\n    }\n    \n    Console.Write("Enter another student? (yes/no): ");\n    string response = Console.ReadLine()?.ToLower() ?? "";\n    continueProgram = response == "yes" || response == "y";\n}',
        tryIt: "Build a simple version that calculates and displays a grade for one student.",
        challenge: "Extend the system to ask for subject name and display a complete report with all students entered.",
        mistakes: ["Validate input before using it.", "Check ranges for marks.", "Ensure calculations are correct.", "Test the exit condition."],
        summary: "You can now build interactive applications that make decisions, validate input, assign grades, provide feedback, and loop through multiple entries.",
        quiz: [
          ["What is input validation?", ["Printing data", "Checking if input meets requirements", "Storing values"], 1, "Validation ensures data is correct before using it."],
          ["How to assign grades?", ["Random selection", "Use else if chains", "Use variables only"], 1, "Else if chains check ranges and assign grades."],
          ["Best way to repeat student entry?", ["Copy code", "Use a loop", "Manual repeats"], 1, "Loops allow repeated execution."],
          ["Grade for average 85?", ["A", "B", "C"], 1, "85 >= 80 but < 90 produces B."],
          ["How to exit the loop?", ["break statement", "Set continueProgram to false", "Both"], 2, "Set the loop condition to false."]
        ]
      }
    ]
  },
  loops: {
    eyebrow: "Module 5 · C# foundations · 8 lessons",
    title: "Loops & Repetition",
    description: "Learn how to repeat code efficiently using for, while, do...while, and foreach loops in C#. Master loop control with break and continue to build interactive console applications.",
    completion: "Module 5 complete",
    completionText: "You are ready for Module 6, where methods teach you how to organise your code into reusable blocks and create more professional, maintainable programs.",
    lessons: [
      {
        title: "Introduction to Loops", time: "45 minutes",
        objectives: ["Explain what loops are and why repetition matters.", "Identify problems caused by manually repeating code.", "Describe how loops reduce errors and improve maintainability.", "Understand loop conditions and iteration."],
        theory: [
          "A loop is a programming structure that repeats a block of code multiple times. Without loops, programmers would need to write the same instructions over and over. This is tedious, error-prone, and makes code harder to maintain.",
          "Consider printing a greeting three times. Without loops, you might write Console.WriteLine three times. With a loop, you write it once and tell the computer to repeat it.",
          "Loops become essential when processing collections of data. A program might read 100 student names, perform the same calculations on each, or generate patterns with repeated structures. Manual repetition would be impractical.",
          "Every loop has a condition that determines when to repeat. The condition is usually a Boolean expression. When the condition is true, the loop body executes. When it becomes false, the loop stops. Understanding conditions is the key to writing correct loops.",
          "An infinite loop occurs when the condition never becomes false. A loop that counts upward forever, a loop that never changes its Boolean, or a loop with reversed logic can all cause infinite loops. The program appears frozen. Detecting and fixing infinite loops is a critical debugging skill.",
          "C# provides several loop types: for loops for counted repetition, while loops for condition-based repetition, do...while loops for at-least-once execution, and foreach loops for processing collections. Each serves a specific purpose."
        ],
        terms: [["Loop", "A structure that repeats a code block."], ["Iteration", "One execution of the loop body."], ["Condition", "The Boolean expression determining repetition."], ["Infinite loop", "A loop that never terminates."]],
        code: '// Without loops: tedious repetition\nConsole.WriteLine("Hello");\nConsole.WriteLine("Hello");\nConsole.WriteLine("Hello");\n\n// With a loop: efficient and clear\nfor (int i = 0; i < 3; i++)\n{\n    Console.WriteLine("Hello");\n}',
        tryIt: "Write a loop that prints the numbers 1 through 5 on separate lines.",
        challenge: "Create a program that asks how many times to repeat and then prints a message that many times.",
        mistakes: ["Do not manually repeat code when a loop would work.", "Ensure the loop condition eventually becomes false.", "Remember that loops make code shorter and clearer.", "Test loops with small values first."],
        summary: "Loops repeat code blocks efficiently. Conditions control repetition. C# provides for, while, do...while, and foreach loops for different scenarios.",
        quiz: [
          ["Why use loops?", ["Avoid repetition", "Make code slower", "Hide errors"], 0, "Loops eliminate tedious manual repetition."],
          ["What controls loop repetition?", ["Variable names", "The loop condition", "The code inside"], 1, "Loop conditions determine when to repeat."],
          ["What is an infinite loop?", ["A loop that counts up", "A loop that never stops", "A loop with one iteration"], 1, "Infinite loops never terminate."],
          ["When does a loop body execute?", ["Always", "Only if the condition is false", "Only if the condition is true"], 2, "The body executes while the condition is true."],
          ["Best reason for loops?", ["Shorter code", "Clearer intent", "Both"], 2, "Loops improve both efficiency and readability."]
        ]
      },
      {
        title: "The while Loop", time: "50 minutes",
        objectives: ["Write while loops with correct syntax.", "Understand loop conditions and termination.", "Update loop variables to progress toward termination.", "Apply while loops to real-world scenarios."],
        theory: [
          "A while loop repeats code as long as a condition is true. The syntax is <code>while (condition) { statements }</code>. Before each iteration, the condition is tested. If true, the body executes. If false, the loop stops.",
          "The loop variable is a variable that changes inside the loop, usually incrementing or decrementing. This variable typically appears in the loop condition. As it changes, the condition eventually becomes false, ending the loop.",
          "A common pattern is counting: start with a variable at 1, loop while it is less than or equal to some limit, and increment it each iteration. Another pattern is input validation: loop while the input is invalid, ask again, and check again.",
          "While loops are ideal when the number of repetitions is not known in advance. A program might read user input until they type 'quit', or loop until data becomes available. The condition determines termination.",
          "A critical mistake is forgetting to update the loop variable. If the loop condition never changes, the loop becomes infinite. Ensure every loop modifies the state it depends on."
        ],
        terms: [["while loop", "Repeats while a condition is true."], ["Loop variable", "A variable updated in the loop body."], ["Termination", "When the loop condition becomes false."], ["Update", "Changing a variable to progress toward termination."]],
        code: 'int count = 1;\nwhile (count <= 5)\n{\n    Console.WriteLine(count);\n    count++;\n}\n\nConsole.WriteLine("Done!");\n\n// Input validation\nstring answer = "";\nwhile (answer != "quit")\n{\n    Console.Write("Enter a command (or quit): ");\n    answer = Console.ReadLine() ?? "";\n    if (answer != "quit")\n    {\n        Console.WriteLine($"You entered: {answer}");\n    }\n}',
        tryIt: "Write a while loop that prints even numbers from 2 to 10.",
        challenge: "Create a program that asks for a number and sums all numbers from 1 to that number using a while loop.",
        mistakes: ["Update the loop variable inside the loop.", "Ensure the condition eventually becomes false.", "Do not forget curly braces around the loop body.", "Test with small values to avoid infinite loops."],
        summary: "While loops repeat while conditions are true. Loop variables track progress. Updating variables ensures termination. While is ideal for condition-based repetition.",
        quiz: [
          ["When does a while loop start?", ["Always immediately", "Only if the condition is true", "After one execution"], 1, "The condition is tested before the first iteration."],
          ["What must change in a while loop?", ["Nothing", "The loop variable", "The output"], 1, "Loop variables must change to progress toward termination."],
          ["Result of forgotten update?", ["Normal termination", "Infinite loop", "Error"], 1, "Forgetting to update creates an infinite loop."],
          ["Best use for while?", ["Known repetitions", "Unknown repetitions", "Always"], 1, "While suits condition-based repetition."],
          ["How to avoid infinite loops?", ["Use if statements", "Ensure termination", "Skip updates"], 1, "Always progress toward the termination condition."]
        ]
      },
      {
        title: "The do...while Loop", time: "50 minutes",
        objectives: ["Understand the difference between while and do...while.", "Write do...while loops with correct syntax.", "Ensure code executes at least once.", "Apply do...while to validation and menus."],
        theory: [
          "A do...while loop is similar to a while loop but checks the condition after executing the body. The syntax is <code>do { statements } while (condition);</code>. The body always executes at least once, then the condition is tested.",
          "This guarantees minimum execution, which is useful for validation. A program can ask for input, then loop if the input is invalid. The question is asked at least once before checking validity.",
          "Menu systems often use do...while loops. Display menu options, read the user's choice, then loop if they did not choose to exit. The menu appears at least once.",
          "The key difference: while tests before entering the loop; do...while tests after. If the condition is initially false, while skips entirely while do...while executes once.",
          "Do...while is less common than while and for, but essential for certain patterns. Use it when you must execute code at least once. Otherwise, while is usually clearer."
        ],
        terms: [["do...while loop", "Repeats, then checks condition."], ["Post-test", "Testing the condition after execution."], ["Guaranteed execution", "Code runs at least once."], ["Menu system", "A do...while pattern offering choices."]],
        code: '// Input validation with do...while\nint age = 0;\nbool valid = false;\ndo\n{\n    Console.Write("Enter your age: ");\n    valid = int.TryParse(Console.ReadLine() ?? "0", out age);\n    if (!valid || age < 0 || age > 150)\n    {\n        Console.WriteLine("Please enter a valid age.");\n        valid = false;\n    }\n} while (!valid);\n\nConsole.WriteLine($"You are {age} years old.");\n\n// Menu system\nstring choice = "";\ndo\n{\n    Console.WriteLine("\\n=== Menu ===" );\n    Console.WriteLine("1. Start game");\n    Console.WriteLine("2. Settings");\n    Console.WriteLine("3. Exit");\n    Console.Write("Choose: ");\n    choice = Console.ReadLine() ?? "";\n    if (choice == "1") Console.WriteLine("Starting game...");\n    else if (choice == "2") Console.WriteLine("Opening settings...");\n} while (choice != "3");',
        tryIt: "Write a do...while that asks the user to guess a number and repeats until correct.",
        challenge: "Create a menu system with at least three options that loops until the user chooses exit.",
        mistakes: ["Remember the semicolon after the while condition.", "Use do...while only when minimum execution is needed.", "Update loop variables inside the body.", "Test all menu options."],
        summary: "Do...while executes at least once, then checks condition. Ideal for validation and menus. Semicolon terminates the statement.",
        quiz: [
          ["When does the body execute?", ["Only if true", "At least once", "Never"], 1, "Do...while always executes the body once."],
          ["When is condition tested?", ["Before entering", "After executing", "Never"], 1, "The condition is tested after execution."],
          ["Difference from while?", ["No difference", "Body guarantee", "Loop order"], 1, "Do...while executes first, then tests."],
          ["Best use case?", ["Known counts", "Menu validation", "Arrays"], 1, "Do...while suits validation and menus."],
          ["What terminates do...while?", ["The do", "A semicolon", "The break"], 1, "A semicolon ends the do...while statement."]
        ]
      },
      {
        title: "The for Loop", time: "55 minutes",
        objectives: ["Write for loops with correct syntax.", "Understand initialisation, condition, and update.", "Create loops for counting and processing.", "Choose for loops over while when appropriate."],
        theory: [
          "A for loop is the most common loop in C#. It combines initialisation, condition, and update in one statement. The syntax is <code>for (init; condition; update) { body }</code>.",
          "Initialisation happens once before the loop starts. Usually it sets a counter to 0 or 1.",
          "The condition is tested before each iteration. If true, the body executes. If false, the loop stops.",
          "The update happens after each iteration. Usually it increments the counter.",
          "A for loop counting from 1 to 5 looks like: <code>for (int i = 1; i <= 5; i++) { }</code>. The variable i starts at 1, the loop continues while i is 5 or less, and i increments after each iteration.",
          "For loops are ideal when you know how many times to repeat. Creating a pattern, printing a table, or processing an array of known size all use for loops. For loops are more compact than while when counting is involved."
        ],
        terms: [["for loop", "A loop with init, condition, and update."], ["Loop counter", "A variable tracking iterations."], ["Initialisation", "Setting the counter before starting."], ["Update expression", "Code run after each iteration."]],
        code: '// Count from 1 to 5\nfor (int i = 1; i <= 5; i++)\n{\n    Console.WriteLine(i);\n}\n\n// Create a pattern\nfor (int i = 0; i < 5; i++)\n{\n    for (int j = 0; j <= i; j++)\n    {\n        Console.Write("*");\n    }\n    Console.WriteLine();\n}\n\n// Countdown from 10 to 1\nfor (int i = 10; i >= 1; i--)\n{\n    Console.WriteLine(i);\n}\nConsole.WriteLine("Blastoff!");',
        tryIt: "Write a for loop that prints the multiplication table for 7 (7×1 through 7×10).",
        challenge: "Create a program using nested for loops to print a 5×5 grid of asterisks.",
        mistakes: ["Use <= or >= to include boundaries.", "Increment with ++ or decrement with --.", "Semicolons separate init, condition, and update.", "The loop variable is local to the for loop."],
        summary: "For loops are ideal for counted repetition. Initialisation sets the counter, condition tests it, update advances it. Use for when you know the iteration count.",
        quiz: [
          ["For loop parts in order?", ["condition, init, update", "init, condition, update", "update, condition, init"], 1, "For loops follow init, then condition, then update."],
          ["What does i++ do?", ["Adds 1 to i", "Prints i", "Ends the loop"], 0, "++ increments the loop counter."],
          ["Loop count for (int i=0; i<5; i++)?", ["4", "5", "6"], 1, "Starting at 0, counting while less than 5 gives 5 iterations."],
          ["Can the loop counter change inside?", ["Yes, always", "Yes, but avoid it", "No"], 1, "Counters can change but usually should not."],
          ["Best use for for loops?", ["Unknown counts", "Counted repetition", "Forever"], 1, "For loops excel when you know the iteration count."]
        ]
      },
      {
        title: "Nested Loops", time: "55 minutes",
        objectives: ["Understand nested loops and their flow.", "Write loops inside loops.", "Trace nested loops to understand output.", "Apply nested loops to patterns and grids."],
        theory: [
          "A nested loop is a loop inside another loop. For each iteration of the outer loop, the inner loop completes all its iterations.",
          "A common example is printing a grid. The outer loop controls rows; the inner loop controls columns. For three rows and three columns, the outer loop repeats three times. Each time, the inner loop prints three items.",
          "Nested loops are essential for processing 2D data or creating patterns. A multiplication table, a checkerboard, a pyramid, or any rectangular structure uses nested loops.",
          "Tracing nested loops carefully is important. When the outer loop increments, the inner loop resets and runs again. Understanding this flow prevents confusion.",
          "Performance matters with nested loops. A loop repeating 10 times containing a loop repeating 10 times executes 100 times total. Nested loops execute frequently. Optimize carefully."
        ],
        terms: [["Nested loop", "A loop inside another loop."], ["Outer loop", "The first loop."], ["Inner loop", "The loop inside the outer loop."], ["Iteration count", "The total executions (outer × inner)."]],
        code: '// Print a 3x3 grid\nfor (int row = 1; row <= 3; row++)\n{\n    for (int col = 1; col <= 3; col++)\n    {\n        Console.Write("* ");\n    }\n    Console.WriteLine();\n}\n\n// Multiplication table\nfor (int i = 1; i <= 3; i++)\n{\n    for (int j = 1; j <= 3; j++)\n    {\n        Console.Write((i * j) + " ");\n    }\n    Console.WriteLine();\n}\n\n// Pyramid pattern\nfor (int row = 1; row <= 5; row++)\n{\n    for (int space = 1; space <= 5 - row; space++)\n    {\n        Console.Write(" ");\n    }\n    for (int star = 1; star <= row; star++)\n    {\n        Console.Write("*");\n    }\n    Console.WriteLine();\n}',
        tryIt: "Write nested loops to print a 4×4 grid of numbers (1-16).",
        challenge: "Create a checkerboard pattern using nested loops, alternating spaces and asterisks.",
        mistakes: ["Trace nested loops on paper to verify logic.", "The inner loop completes before the outer increments.", "Use different variable names for outer and inner loops.", "Test with small values first."],
        summary: "Nested loops repeat code blocks within loops. The outer loop controls outer iteration; the inner loop controls inner iteration. Total executions = outer × inner.",
        quiz: [
          ["Executions for nested 3×4 loops?", ["3", "4", "12"], 2, "3 outer iterations × 4 inner = 12 total."],
          ["When does inner loop reset?", ["Every iteration of inner", "Never", "After outer increments"], 2, "Inner loop resets when outer increments."],
          ["Best use for nested loops?", ["Single lines", "2D patterns and grids", "Simple counting"], 1, "Nested loops create grids and patterns."],
          ["Inner loop variable name?", ["Same as outer", "Different from outer", "Do not use variables"], 1, "Use different names to avoid confusion."],
          ["How many times for (1 to 2) nested in (1 to 3)?", ["3", "6", "2"], 1, "2 × 3 = 6 executions."]
        ]
      },
      {
        title: "The foreach Loop", time: "50 minutes",
        objectives: ["Understand foreach loops and their purpose.", "Iterate through collections of data.", "Compare foreach with for loops.", "Prepare for working with arrays and lists."],
        theory: [
          "A foreach loop is designed to process every item in a collection. The syntax is <code>foreach (type item in collection) { statements }</code>. Unlike for loops with counters, foreach accesses each item directly.",
          "Collections include arrays and lists. The foreach loop reads one item at a time, processes it, then moves to the next. The programmer does not manage counter variables.",
          "Foreach is cleaner and safer than for when processing all items. There is no risk of off-by-one errors or incorrect array indices.",
          "The loop variable can be any valid name. <code>foreach (string name in names)</code> reads each name from the names collection.",
          "Foreach is ideal for reading or processing all items. When you need the index, use for instead. When the collection is unknown or could be large, foreach is usually safer."
        ],
        terms: [["foreach loop", "Accesses each item in a collection."], ["Collection", "An array, list, or similar group of items."], ["Item", "One element from the collection."], ["Loop variable", "The current item being processed."]],
        code: '// Process each name\nstring[] names = { "Alice", "Bob", "Charlie" };\nforeach (string name in names)\n{\n    Console.WriteLine(name);\n}\n\n// Process each score\nint[] scores = { 95, 87, 92, 88 };\nint total = 0;\nforeach (int score in scores)\n{\n    total += score;\n    Console.WriteLine(score);\n}\nConsole.WriteLine($"Total: {total}");\n\n// Simple display\nstring[] colours = { "red", "blue", "green" };\nforeach (string colour in colours)\n{\n    Console.WriteLine($"Colour: {colour}");\n}',
        tryIt: "Write a foreach loop that prints the letters of the alphabet.",
        challenge: "Create an array of numbers and use foreach to find the highest value.",
        mistakes: ["Use foreach for processing all items.", "Use for if you need the index.", "The loop variable type must match collection items.", "foreach is read-only; do not try to modify items."],
        summary: "Foreach loops process each item in a collection. Use foreach for reading; use for when you need indices or custom iteration.",
        quiz: [
          ["When to use foreach?", ["Unknown count", "Processing all items", "Reverse order"], 1, "Foreach processes every item in a collection."],
          ["Syntax for item in collection?", ["for item in collection", "foreach (type item in collection)", "while item in collection"], 1, "Foreach requires type and 'in' keyword."],
          ["Can foreach modify items?", ["Yes, always", "No, items are read-only", "Only with arrays"], 1, "Foreach items cannot be modified directly."],
          ["Best when count is?", ["Unknown", "Known exactly", "Always"], 0, "Foreach is ideal when count is unknown."],
          ["Difference from for?", ["No difference", "Foreach has no counter", "Foreach is slower"], 1, "Foreach eliminates manual counter management."]
        ]
      },
      {
        title: "Loop Control: break and continue", time: "55 minutes",
        objectives: ["Use break to exit loops early.", "Use continue to skip to the next iteration.", "Understand when to use each.", "Apply to search and filtering patterns."],
        theory: [
          "The break statement exits a loop immediately, bypassing remaining iterations. Use break when you have found what you are looking for or when a condition demands stopping.",
          "The continue statement skips the current iteration and moves to the next one. Use continue when you want to skip processing certain items but keep looping.",
          "Break is useful for searching. A program might loop through a list of names looking for a specific one. When found, break stops searching.",
          "Continue is useful for filtering. A program might process numbers, skipping invalid ones. Continue moves to the next number without processing the invalid one.",
          "Both break and continue are powerful but can make loops harder to understand. Use them sparingly and always document their purpose. A well-designed loop should be clear without excessive break and continue."
        ],
        terms: [["break", "Exits the loop immediately."], ["continue", "Skips to the next iteration."], ["Early exit", "Stopping before all iterations complete."], ["Skip iteration", "Bypassing processing for an item."]],
        code: '// Break: search for a value\nint[] numbers = { 10, 20, 30, 40, 50 };\nint target = 30;\nbool found = false;\nforeach (int num in numbers)\n{\n    if (num == target)\n    {\n        found = true;\n        break;\n    }\n}\nConsole.WriteLine(found ? "Found!" : "Not found.");\n\n// Continue: skip invalid values\nint[] scores = { 95, -5, 87, 110, 92 };\nint sum = 0;\nint count = 0;\nforeach (int score in scores)\n{\n    if (score < 0 || score > 100)\n    {\n        continue;\n    }\n    sum += score;\n    count++;\n}\nConsole.WriteLine($"Average: {sum / count}");\n\n// Menu exit with break\nstring choice = "";\nwhile (choice != "exit")\n{\n    Console.Write("Enter command: ");\n    choice = Console.ReadLine() ?? "";\n    if (choice == "quit") break;\n    Console.WriteLine($"You entered: {choice}");\n}',
        tryIt: "Write a loop that searches for a number in an array and breaks when found.",
        challenge: "Create a loop that sums only positive numbers from an array, skipping negatives with continue.",
        mistakes: ["Do not overuse break and continue.", "Ensure break and continue are necessary for clarity.", "Test with edge cases (found on first, found on last, never found).", "Keep loop logic readable."],
        summary: "Break exits loops; continue skips iterations. Use break for early exit; continue for filtering. Both improve efficiency and handle special cases.",
        quiz: [
          ["What does break do?", ["Pauses the loop", "Exits the loop", "Skips to next iteration"], 1, "Break terminates the loop immediately."],
          ["What does continue do?", ["Terminates the loop", "Exits the program", "Skips to the next iteration"], 2, "Continue moves to the next iteration."],
          ["Best use for break?", ["Always needed", "Search patterns", "Loops under 10"], 1, "Break is ideal for searching."],
          ["Best use for continue?", ["Filtering items", "Counting iterations", "Printing output"], 0, "Continue is ideal for filtering."],
          ["Can break exit nested loops?", ["Only the inner", "Only the outer", "Both"], 0, "Break exits only the innermost loop."]
        ]
      },
      {
        title: "Practice Project · Number Guessing Game", time: "90 minutes",
        objectives: ["Combine loops, conditionals, and variables.", "Implement game logic with user interaction.", "Track attempts and provide hints.", "Build a complete console game."],
        theory: [
          "This project integrates all Module 5 concepts. The program generates a random number, asks the player to guess, provides hints, counts attempts, and allows replaying.",
          "The game uses a do...while loop for main gameplay. Each guess is processed by an if...else chain. A for loop could count attempts. The Random class generates a secret number.",
          "Hints help the player: too high, too low, or correct. Attempts count each guess. The player should be able to play again after winning.",
          "Input validation ensures guesses are numeric. Boundary checks prevent guesses outside the range. Feedback makes the game engaging.",
          "The complete game demonstrates modules 1-5: variables store the secret and attempts, operators compare guesses, conditionals provide feedback, and loops repeat gameplay."
        ],
        terms: [["Random number generation", "Using Random class."], ["Game loop", "The do...while repeating gameplay."], ["Hints", "Feedback guiding the player."], ["Attempts", "Tracking number of guesses."]],
        code: 'using System;\n\nRandom random = new Random();\nbool playAgain = true;\n\nwhile (playAgain)\n{\n    int secret = random.Next(1, 101);\n    int attempts = 0;\n    int guess = 0;\n    bool correct = false;\n    \n    Console.WriteLine("\\n=== Number Guessing Game ===" );\n    Console.WriteLine("Guess the number between 1 and 100!");\n    \n    while (!correct)\n    {\n        Console.Write("Your guess: ");\n        if (int.TryParse(Console.ReadLine() ?? "0", out guess))\n        {\n            if (guess < 1 || guess > 100)\n            {\n                Console.WriteLine("Please guess between 1 and 100.");\n                continue;\n            }\n            \n            attempts++;\n            \n            if (guess == secret)\n            {\n                Console.WriteLine($"Correct! You won in {attempts} attempts!");\n                correct = true;\n            }\n            else if (guess < secret)\n            {\n                Console.WriteLine("Too low. Try higher.");\n            }\n            else\n            {\n                Console.WriteLine("Too high. Try lower.");\n            }\n        }\n        else\n        {\n            Console.WriteLine("Please enter a valid number.");\n        }\n    }\n    \n    Console.Write("Play again? (yes/no): ");\n    string response = Console.ReadLine()?.ToLower() ?? "no";\n    playAgain = response == "yes" || response == "y";\n}\n\nConsole.WriteLine("Thanks for playing!");',
        tryIt: "Run the game and play a complete round, guessing the number.",
        challenge: "Extend the game to track high scores, difficulty levels, or best attempts.",
        mistakes: ["Validate all user input before using it.", "Ensure the loop terminates when guesses are correct.", "Provide clear feedback after each guess.", "Test boundary values (1, 100)."],
        summary: "You can now build interactive games using loops, conditionals, variables, and user input. Loops provide repetition; conditionals guide logic; variables track state.",
        quiz: [
          ["Purpose of do...while here?", ["Count attempts", "Repeat gameplay", "Generate random"], 1, "Do...while ensures at least one game before asking to replay."],
          ["What does random.Next(1, 101) do?", ["Always returns 1", "Random 0-100", "Random 1-100"], 2, "Next generates a random number in the range."],
          ["How to exit guess loop?", ["Set correct = true", "Use break", "Stop input"], 0, "Setting correct = true exits the while loop."],
          ["Why validate guess?", ["Improve performance", "Ensure numeric and in range", "Skip processing"], 1, "Validation prevents crashes and invalid states."],
          ["Module 5 learning?", ["Only loops", "Loops + modules 1-4", "Just random"], 1, "This project combines all previous modules."]
        ]
      }
    ]
  },
  methods: {
    eyebrow: "Module 6 · C# foundations · 8 lessons",
    title: "Methods & Reusable Code",
    description: "Learn how to organise your programs into reusable blocks of code using methods in C#. Master method creation, parameters, return values, and scope to write cleaner, more maintainable programs.",
    completion: "Module 6 complete",
    completionText: "You are ready for Module 7, where arrays teach you how to store and manage multiple pieces of information efficiently.",
    lessons: [
      {
        title: "Introduction to Methods", time: "45 minutes",
        objectives: ["Explain what methods are and why they matter.", "Identify problems with writing all code in one place.", "Describe code reusability and organisation.", "Recognise methods as the foundation of professional programming."],
        theory: [
          "A <strong>method</strong> is a named block of code that performs a specific task. Without methods, programmers would write the same instructions repeatedly. This leads to error-prone, hard-to-maintain code.",
          "Consider a greeting program. Without methods, you might write <code>Console.WriteLine(\"Welcome\");</code> three times. With a method, you write it once and call it three times. The method groups related statements into a reusable unit.",
          "Methods solve several problems. They eliminate repetition—write once, use many times. They improve readability—a method name explains what code does. They enable easier debugging—fix once, not multiple times. They organize large programs into smaller, understandable pieces.",
          "A method like <code>DisplayMenu()</code> clearly communicates its purpose. Another like <code>CalculateTotal()</code> is self-documenting. Programmers reading the code understand what each method does without examining every line.",
          "Professional programs contain hundreds of methods. Games have methods for player movement, enemy AI, health systems, and UI updates. Without methods, such programs would be impossible to manage. Learning to write and organize methods is essential for becoming a professional programmer."
        ],
        terms: [["Method", "A named block of code performing a specific task."], ["Reusability", "Using the same code multiple times."], ["Code organisation", "Grouping related instructions logically."], ["Maintainability", "How easy code is to update and fix."]],
        code: '// Without methods: repetitive and hard to maintain\nConsole.WriteLine("Welcome to the game!");\nConsole.WriteLine("Welcome to the game!");\nConsole.WriteLine("Welcome to the game!");\n\n// With methods: clean and reusable\nDisplayWelcome();\nDisplayWelcome();\nDisplayWelcome();\n\nvoid DisplayWelcome()\n{\n    Console.WriteLine("Welcome to the game!");\n}',
        tryIt: "Identify three pieces of code you write repeatedly in your programs. How would methods help?",
        challenge: "Imagine a game with a menu, battle system, and score tracker. List five methods that might exist.",
        mistakes: ["Do not assume methods are optional.", "Remember methods reduce errors through reuse.", "Methods improve code clarity and organisation.", "Professional code is built from many methods."],
        summary: "Methods are named code blocks that perform specific tasks. They eliminate repetition, improve readability, enable reuse, and organise large programs. Methods are the foundation of professional programming.",
        quiz: [
          ["What is a method?", ["A loop type", "A named code block performing a task", "A variable type"], 1, "A method is a named block of code."],
          ["Why use methods?", ["Repetition only", "Reusability and clarity", "Loops only"], 1, "Methods provide reusability and organisation."],
          ["Best benefit of methods?", ["Slower code", "Reusing code reduces errors", "Longer programs"], 1, "Reusing code reduces repeated errors."],
          ["Can methods be called multiple times?", ["No", "Yes", "Only in games"], 1, "Methods are designed to be called repeatedly."],
          ["Do professional programs use methods?", ["No", "Yes, hundreds or more", "Only sometimes"], 1, "Professional programs use many methods."]
        ]
      },
      {
        title: "Creating and Calling Methods", time: "50 minutes",
        objectives: ["Write method declarations.", "Understand method structure and syntax.", "Call methods from Main.", "Trace method execution flow."],
        theory: [
          "A method has a structure: return type, name, parentheses, and a code block. The simplest method returns nothing and looks like <code>void MethodName() { }</code>.",
          "<code>void</code> means the method does not return a value. <code>MethodName</code> is the method's name. Empty parentheses mean it takes no parameters. Curly braces contain the code.",
          "A method name should clearly describe what the method does. <code>DisplayMenu()</code> is clear; <code>DoStuff()</code> is vague. Use camelCase: start with lowercase, capitalize subsequent words.",
          "Calling a method means executing it. In Main, write the method name followed by parentheses: <code>DisplayMenu();</code>. The computer runs the method's code block, then returns to the next line in Main.",
          "Execution flow is important. Main calls a method, the method executes, then control returns to Main. Understanding this flow prevents confusion when multiple methods are involved."
        ],
        terms: [["Method declaration", "Defining a method with its structure."], ["Return type", "What the method returns (void means nothing)."], ["Method name", "The identifier used to call the method."], ["Method call", "Executing a method by name with parentheses."]],
        code: 'void DisplayMenu()\n{\n    Console.WriteLine("=== Main Menu ===" );\n    Console.WriteLine("1. Start Game");\n    Console.WriteLine("2. Settings");\n    Console.WriteLine("3. Exit");\n}\n\nvoid DisplayWelcome()\n{\n    Console.WriteLine("Welcome, adventurer!");\n}\n\n// In Main:\nDisplayWelcome();\nDisplayMenu();\nConsole.WriteLine("Choose an option.");',
        tryIt: "Create two simple methods: one that prints a greeting and one that prints a separator line. Call both from Main.",
        challenge: "Write a calculator menu method displaying arithmetic operations, then a goodbye method.",
        mistakes: ["Use void for methods that do not return values.", "End method names with parentheses when calling.", "Method declarations belong above Main or in a separate class.", "Indentation makes structure clear."],
        summary: "Methods have a return type (void), name, parentheses, and code block. Calling a method executes its code. Control returns to Main after the method completes.",
        quiz: [
          ["Complete the declaration: void DisplayScore() { }?", ["Missing closing brace", "Missing parentheses", "Correct syntax"], 2, "This syntax is correct."],
          ["What does void mean?", ["Returns a number", "Returns nothing", "Returns text"], 1, "Void means the method returns nothing."],
          ["How to call a method?", ["methodName", "methodName()", "void methodName"], 1, "Parentheses are required."],
          ["Where does Main call a method?", ["Inside the method", "In Main's code block", "After all methods"], 1, "Main calls methods from its own code block."],
          ["After a method completes, what happens?", ["Program ends", "Control returns to caller", "Loops forever"], 1, "Control returns to the caller."]
        ]
      },
      {
        title: "Method Parameters", time: "50 minutes",
        objectives: ["Understand what parameters are.", "Pass values into methods.", "Use multiple parameters.", "Apply parameters to real problems."],
        theory: [
          "Parameters let methods receive information. Without parameters, a method always behaves the same way. With parameters, a method adapts based on input.",
          "A method that prints a greeting always prints the same thing. With a parameter, it can greet different names: <code>void SayHello(string name) { Console.WriteLine(\"Hello \" + name); }</code>",
          "Parameters go in parentheses after the method name. Each parameter has a type and name. <code>void Damage(int amount) { health -= amount; }</code> takes an integer amount.",
          "Multiple parameters are separated by commas. <code>void PlayerInfo(string name, int level, int health)</code> receives three values. When called, provide them in order: <code>PlayerInfo(\"Alex\", 5, 100);</code>",
          "Parameter names should be clear. <code>void Attack(int damageAmount)</code> is clearer than <code>void Attack(int x)</code>. Good names make code self-documenting."
        ],
        terms: [["Parameter", "A variable received by a method."], ["Argument", "The value passed to a parameter."], ["Formal parameter", "The parameter defined in the method."], ["Actual argument", "The value provided when calling the method."]],
        code: 'void SayHello(string name)\n{\n    Console.WriteLine($"Hello, {name}!");\n}\n\nvoid TakeDamage(int damageAmount)\n{\n    health -= damageAmount;\n    Console.WriteLine($"You took {damageAmount} damage.");\n}\n\nvoid DisplayPlayerStats(string playerName, int level, int health)\n{\n    Console.WriteLine($"Player: {playerName}");\n    Console.WriteLine($"Level: {level}");\n    Console.WriteLine($"Health: {health}");\n}\n\n// Calls:\nSayHello("Maya");\nTakeDamage(15);\nDisplayPlayerStats("Alex", 7, 80);',
        tryIt: "Create a method that takes a player name and a score, then displays both.",
        challenge: "Write a method accepting three numbers and displaying their sum.",
        mistakes: ["Parameter type and name are required.", "Arguments must be provided in order.", "Types must match.", "Use meaningful parameter names."],
        summary: "Parameters allow methods to receive information. Provide values in the same order as method definition. Parameters make methods flexible and reusable.",
        quiz: [
          ["Method taking parameters syntax?", ["void Method(int x)", "void Method int x", "int Method(x)"], 0, "Parameter type and name go in parentheses."],
          ["Calling SayHello(string name) with \"Bob\"?", ["SayHello(Bob)", 'SayHello("Bob")', "SayHello Bob"], 1, "String arguments use double quotes."],
          ["Multiple parameters?", ["Separated by commas", "Separated by semicolons", "One per method"], 0, "Commas separate multiple parameters."],
          ["What is an argument?", ["Parameter name", "Value passed to parameter", "Method name"], 1, "Arguments are the values passed to parameters."],
          ["Order of arguments?", ["Any order", "Same as definition", "Reversed order"], 1, "Arguments must be in the defined order."]
        ]
      },
      {
        title: "Return Values", time: "55 minutes",
        objectives: ["Return information from methods.", "Distinguish void from returning methods.", "Use return keyword correctly.", "Store and use returned values."],
        theory: [
          "A method can return a value to the caller. Instead of <code>void</code>, specify the return type: <code>int Add(int a, int b)</code> means the method returns an integer.",
          "The <code>return</code> keyword sends a value back. <code>return a + b;</code> calculates and returns the sum. Without return, the method returns nothing and should be void.",
          "A method returning a value must return something of the correct type. <code>int Add(int a, int b) { return \"hello\"; }</code> is wrong—the method promises int but returns string.",
          "When you call a method that returns a value, you can store the result. <code>int sum = Add(5, 3);</code> stores the return value in sum. You can also use it directly: <code>Console.WriteLine(Add(5, 3));</code>",
          "Return types can be int, double, string, bool, or any other type. A method might return a player's health, a calculated score, true or false for success, or a formatted message."
        ],
        terms: [["Return type", "The type of value the method returns."], ["return keyword", "Sends a value back to the caller."], ["Returned value", "The value sent back by the method."], ["Assignment", "Storing a returned value in a variable."]],
        code: 'int Add(int a, int b)\n{\n    return a + b;\n}\n\nstring GetPlayerStatus(int health)\n{\n    if (health > 50)\n        return "Healthy";\n    else if (health > 0)\n        return "Injured";\n    else\n        return "Defeated";\n}\n\nbool IsGameOver(int lives)\n{\n    return lives <= 0;\n}\n\n// Calls:\nint total = Add(10, 5);\nConsole.WriteLine(total);\nstring status = GetPlayerStatus(30);\nbool gameEnded = IsGameOver(-5);',
        tryIt: "Create a method that takes two numbers and returns their product.",
        challenge: "Write a method that calculates and returns a grade (A, B, C, D, F) based on a score.",
        mistakes: ["Specify the correct return type.", "Every path must return a value.", "Return type must match the value.", "Use return keyword."],
        summary: "Methods can return values using the return keyword. Specify the return type instead of void. Store or use returned values in the caller.",
        quiz: [
          ["Method returning int syntax?", ["int MethodName() { return 5; }", "void MethodName() { return 5; }", "MethodName() { return 5; }"], 0, "Return type goes before method name."],
          ["What does return do?", ["Ends the program", "Sends value back to caller", "Prints output"], 1, "Return sends a value back."],
          ["Calling int Add(2, 3)?", ["Prints 5", "Returns 5", "Displays nothing"], 1, "The method returns 5."],
          ["Storing a returned value?", ["int result = Add(2, 3);", "Add(2, 3);", "Add(2, 3) = result;"], 0, "Assign return value to a variable."],
          ["Return value type must match?", ["No", "Yes", "Only for int"], 1, "Return type and value must match."]
        ]
      },
      {
        title: "Method Overloading", time: "50 minutes",
        objectives: ["Understand method overloading.", "Create multiple methods with the same name.", "Distinguish methods by parameter types.", "Apply overloading to real problems."],
        theory: [
          "Method overloading allows multiple methods to share the same name if their parameters differ. C# distinguishes them by the number or type of parameters.",
          "<code>void Attack() { }</code> and <code>void Attack(int damage) { }</code> are two different methods. Both are named Attack, but the first takes no parameters while the second takes an integer. When you call Attack, C# chooses the correct version based on your arguments.",
          "You can overload by parameter count. <code>void Add(int a, int b)</code> and <code>void Add(int a, int b, int c)</code> both add values but handle different quantities.",
          "You can overload by parameter type. <code>void Display(int number)</code> and <code>void Display(string text)</code> both display information but handle different types.",
          "Overloading makes code more flexible. A single method name like Add can handle integers or doubles. A method like Print can display numbers or text. This is convenient and reduces the need to remember many method names."
        ],
        terms: [["Overloading", "Multiple methods with the same name."], ["Signature", "The method name and parameter list."], ["Overload resolution", "How C# chooses the correct method."], ["Polymorphism", "Using the same name for different behaviours."]],
        code: 'void Attack()\n{\n    Console.WriteLine("Basic attack!");\n}\n\nvoid Attack(int damage)\n{\n    Console.WriteLine($"Attack for {damage} damage!");\n}\n\nvoid Attack(string weaponName)\n{\n    Console.WriteLine($"Attack with {weaponName}!");\n}\n\nint Add(int a, int b)\n{\n    return a + b;\n}\n\ndouble Add(double a, double b)\n{\n    return a + b;\n}\n\n// Calls:\nAttack();\nAttack(25);\nAttack("Sword");\nint sum1 = Add(5, 3);\ndouble sum2 = Add(5.5, 3.2);',
        tryIt: "Create two overloaded Display methods: one for int and one for string.",
        challenge: "Write three overloaded Greet methods: no parameters, one string, and two strings.",
        mistakes: ["Methods must differ in parameters.", "Same name but same parameters is an error.", "C# matches based on argument types.", "Return type alone does not overload."],
        summary: "Overloading allows methods to share names if parameters differ. C# chooses the correct method based on arguments. Overloading makes code flexible and intuitive.",
        quiz: [
          ["Can methods have the same name?", ["No", "Yes, if parameters differ", "Yes, if return type differs"], 1, "Overloading requires different parameters."],
          ["Which is overloading?", ["void Test() and void Test(int)", "void Test() and int Test()", "void Test() twice"], 0, "Different parameters enable overloading."],
          ["How does C# choose method?", ["By name only", "By name and parameters", "By return type"], 1, "C# matches name and parameter types."],
          ["Can you overload by return type?", ["Yes", "No", "Only for void"], 1, "Return type alone does not distinguish overloads."],
          ["Calling Attack(25) with two Attack methods?", ["Ambiguous", "Calls Attack() first", "Calls Attack(int)"], 2, "C# matches the integer parameter version."]
        ]
      },
      {
        title: "Variable Scope", time: "55 minutes",
        objectives: ["Understand variable scope.", "Distinguish local and global scope.", "Recognise scope boundaries.", "Pass data between methods."],
        theory: [
          "Variable scope defines where a variable can be accessed. A variable declared inside a method is local to that method. It cannot be accessed elsewhere.",
          "<code>void Test() { int score = 100; }</code> declares score inside Test. The variable exists only within Test's curly braces. Outside Test, score does not exist.",
          "Attempting to use a variable outside its scope causes a compiler error. <code>void Main() { Console.WriteLine(score); }</code> fails because score was declared in a different method.",
          "Local scope is intentional protection. Multiple methods can each have a variable named score without confusion. Each is independent. This prevents accidental overwrites and makes code modular.",
          "To use data across methods, pass it as a parameter or return it from a method. <code>void UpdateScore(int newScore)</code> receives the score. <code>int GetScore()</code> returns it. This controlled data flow is professional practice."
        ],
        terms: [["Scope", "The region where a variable can be accessed."], ["Local variable", "A variable declared inside a method."], ["Method scope", "The boundaries of a method."], ["Lifetime", "How long a variable exists."]],
        code: 'void Test1()\n{\n    int score = 100;\n    Console.WriteLine(score);\n}\n\nvoid Test2()\n{\n    // score is not accessible here\n    // Uncomment to see error:\n    // Console.WriteLine(score);\n}\n\nvoid DisplayScore(int score)\n{\n    Console.WriteLine($"Score: {score}");\n}\n\nint GetScore()\n{\n    return 250;\n}\n\n// In Main:\nint mainScore = 50;\nDisplayScore(mainScore);\nint retrievedScore = GetScore();\nConsole.WriteLine(retrievedScore);',
        tryIt: "Create two methods, each with a local variable named x. Change one and observe the other is unaffected.",
        challenge: "Write a method that calculates and returns a value, then use it in another method.",
        mistakes: ["Variables declared in a method stay local.", "Use parameters to pass data between methods.", "Scope protects variables from unwanted access.", "Each block has its own scope."],
        summary: "Variable scope determines where variables can be accessed. Local variables are confined to their method. Use parameters and return values to share data between methods.",
        quiz: [
          ["Can a variable declared in Method1 be used in Method2?", ["Yes, always", "No, unless passed as parameter", "Yes, if global"], 1, "Local variables stay local."],
          ["What creates a scope?", ["A variable name", "Curly braces {}", "A method call"], 1, "Curly braces define scope boundaries."],
          ["How to use data across methods?", ["Share global variables", "Pass parameters or return values", "Copy the code"], 1, "Parameters and returns are the proper way."],
          ["Can two methods have variables named x?", ["No", "Yes, they are independent", "Only in the same file"], 1, "Each scope has independent variables."],
          ["Scope protects against what?", ["Performance issues", "Accidental variable overwrites", "Slow compilation"], 1, "Scope prevents naming conflicts and accidents."]
        ]
      },
      {
        title: "Static Methods", time: "50 minutes",
        objectives: ["Understand what static means.", "Call methods without object instances.", "Recognise common static patterns.", "Compare static to instance methods."],
        theory: [
          "A static method belongs to a class, not to a specific instance. You can call a static method without creating an object. This is why <code>Console.WriteLine()</code> works—WriteLine is a static method.",
          "<code>static void DisplayMenu()</code> is a static method. Call it directly: <code>DisplayMenu();</code> No object creation required.",
          "The Math class contains many static methods. <code>Math.Abs(-10)</code> returns 10. <code>Math.Sqrt(16)</code> returns 4. These work without creating a Math object.",
          "Beginners typically write static methods in console programs. As you learn objects and classes, you will create instance methods belonging to objects. For now, understand that static methods are called directly on the class.",
          "The keyword <code>static</code> indicates the method belongs to the class itself. Non-static (instance) methods belong to objects created from the class. For learners beginning with console programs, static is the norm."
        ],
        terms: [["static", "Belongs to the class, not instances."], ["Instance method", "Belongs to an object created from the class."], ["Class method", "Another name for static method."], ["Namespace", "Organises related classes and methods."]],
        code: 'static void DisplayMenu()\n{\n    Console.WriteLine("=== Menu ===" );\n    Console.WriteLine("1. Play");\n    Console.WriteLine("2. Quit");\n}\n\nstatic int CalculateTotal(int a, int b)\n{\n    return a + b;\n}\n\nstatic double GetTemperature()\n{\n    Console.Write("Enter temperature: ");\n    return double.Parse(Console.ReadLine() ?? "0");\n}\n\n// Calls:\nDisplayMenu();\nint total = CalculateTotal(10, 20);\ndouble temp = GetTemperature();',
        tryIt: "Create a static method that calculates and returns the area of a rectangle.",
        challenge: "Write two static methods: one that prompts for input and one that displays results.",
        mistakes: ["Use static for console application methods.", "Call static methods directly without objects.", "Non-static methods require object instances.", "Console class methods are static."],
        summary: "Static methods belong to the class and are called directly. Console.WriteLine is static. In console programs, methods are typically static. Instance methods belong to objects and come later.",
        quiz: [
          ["What does static mean?", ["Unchanging value", "Belongs to class, not instances", "A loop type"], 1, "Static means belonging to the class."],
          ["How to call a static method?", ["Create an object first", "Call directly: MethodName()", "Use new keyword"], 1, "Static methods are called directly."],
          ["Is Console.WriteLine static?", ["No", "Yes", "Only sometimes"], 1, "Console.WriteLine is a static method."],
          ["When to use static?", ["Always", "In console programs initially", "Never"], 1, "Static is common in beginner console programs."],
          ["Difference from instance methods?", ["None", "Instance methods require objects", "Same thing"], 1, "Instance methods require object instances."]
        ]
      },
      {
        title: "Practice Project · Text Adventure Game", time: "90 minutes",
        objectives: ["Apply all method concepts.", "Create a complete game with multiple methods.", "Manage game state and player progress.", "Demonstrate professional code organisation."],
        theory: [
          "This project brings together all Module 6 concepts. You will create a simple text adventure game with methods for menus, player interactions, battles, and game flow.",
          "A complete game needs several methods: DisplayMenu displays choices, GetPlayerChoice reads input, StartBattle handles combat, CalculateDamage applies harm, CheckGameOver tests win/loss conditions, and more.",
          "Methods receive parameters for flexibility. StartBattle might take enemy health and damage. CalculateDamage takes player and enemy stats. Methods return values for decision-making.",
          "The game demonstrates scope: local variables in each method, parameters for data exchange, and return values for results. Main orchestrates the overall flow.",
          "A professional program is built from many small, focused methods. Each method has a clear purpose and name. Methods call other methods in a logical order."
        ],
        terms: [["Game loop", "Continuous gameplay cycle."], ["State management", "Tracking health, choices, outcomes."], ["Method orchestration", "Calling methods in a logical order."], ["Game flow", "The progression from start to end."]],
        code: 'static void DisplayMenu()\n{\n    Console.WriteLine("\\n=== Adventure ===" );\n    Console.WriteLine("1. Explore");\n    Console.WriteLine("2. Rest");\n    Console.WriteLine("3. Quit");\n}\n\nstatic string GetPlayerChoice()\n{\n    Console.Write("Choose: ");\n    return Console.ReadLine() ?? "";\n}\n\nstatic int CalculateDamage(int baseDamage, bool critical)\n{\n    return critical ? baseDamage * 2 : baseDamage;\n}\n\nstatic void StartBattle(int playerHealth, int enemyHealth)\n{\n    Console.WriteLine("\\n=== Battle ===" );\n    Console.WriteLine($"Enemy HP: {enemyHealth}");\n    Console.WriteLine($"Your HP: {playerHealth}");\n    int damage = CalculateDamage(15, false);\n    Console.WriteLine($"You deal {damage} damage!");\n}\n\nstatic bool IsGameOver(int playerHealth)\n{\n    return playerHealth <= 0;\n}\n\n// In Main:\nint health = 100;\nbool playing = true;\nwhile (playing)\n{\n    DisplayMenu();\n    string choice = GetPlayerChoice();\n    if (choice == "1") StartBattle(health, 50);\n    else if (choice == "3") playing = false;\n}\nConsole.WriteLine("Thanks for playing!");',
        tryIt: "Build a simple game with a menu, player input, and battle system.",
        challenge: "Extend the game with inventory, leveling, or multiple enemies.",
        mistakes: ["Each method should have a clear purpose.", "Pass necessary data as parameters.", "Use meaningful method and variable names.", "Organize methods logically."],
        summary: "A complete game is built from many methods. Each method has a specific role. Methods exchange data through parameters and return values. Professional code is organized and reusable.",
        quiz: [
          ["Best method for displaying options?", ["In Main only", "Separate DisplayMenu method", "In every method"], 1, "Separate methods improve organisation."],
          ["Purpose of parameters in methods?", ["Speed up code", "Pass data between methods", "Create variables"], 1, "Parameters enable data exchange."],
          ["How does Main coordinate?", ["Manually doing everything", "Calling organised methods", "Writing all code inline"], 1, "Main calls methods in logical order."],
          ["Why separate battle logic?", ["Shorter code", "Clearer purpose", "Both"], 2, "Separation improves clarity and reuse."],
          ["Module 6 learning?", ["Only static methods", "All method concepts", "Just return values"], 1, "This covers methods comprehensively."]
        ]
      }
    ]
  },
  arrays: {
    eyebrow: "Module 7 · C# data collections · 8 lessons",
    title: "Arrays & Data Collections",
    description: "Learn how to store, organise, and manage multiple values using arrays and basic collections in C#. Master arrays, lists, and collection methods to build scalable applications and prepare for game development.",
    completion: "Module 7 complete",
    completionText: "You are ready for Module 8, where object-oriented programming teaches you how to create custom classes and objects for building professional applications and games.",
    lessons: [
      {
        title: "Introduction to Arrays", time: "45 minutes",
        objectives: ["Explain what arrays are and why they matter.", "Identify problems with creating separate variables.", "Describe array indexing and zero-based positioning.", "Access array elements using indexes."],
        theory: [
          "An <strong>array</strong> is a collection of values all of the same type stored in a single variable. Without arrays, storing ten scores would require ten separate variables: score1, score2, ..., score10. This is tedious and hard to manage.",
          "With an array, you store all ten scores in one variable: <code>int[] scores = new int[10];</code> Each score has a position in the array.",
          "C# uses zero-based indexing. The first element is at index 0, the second at index 1, and so on. An array of 10 elements has indices 0 through 9. This is universal across programming languages.",
          "Arrays are especially useful when processing groups of related data. Game inventories, enemy lists, high scores, and player statistics all use arrays. Professional programs rely on arrays and collections.",
          "Arrays are fixed size. Once you declare <code>int[] scores = new int[10];</code>, the array always holds 10 elements. If you need a flexible size, you can use a List instead, which you will learn in Lesson 6."
        ],
        terms: [["Array", "A collection of values of the same type."], ["Index", "The position of an element in an array."], ["Zero-based indexing", "First element at index 0."], ["Element", "One value in an array."]],
        code: '// Without arrays: tedious and hard to scale\nstring enemy1 = "Goblin";\nstring enemy2 = "Dragon";\nstring enemy3 = "Knight";\n\n// With an array: clean and scalable\nstring[] enemies = {"Goblin", "Dragon", "Knight"};\nConsole.WriteLine(enemies[0]);\nConsole.WriteLine(enemies[1]);\nConsole.WriteLine(enemies[2]);',
        tryIt: "Create an array of five numbers and print each one using its index.",
        challenge: "Create an array of animal names and print them all using a loop.",
        mistakes: ["Remember arrays are zero-indexed.", "Arrays are fixed size once created.", "All elements must be the same type.", "Index errors cause exceptions."],
        summary: "Arrays store multiple values of the same type in one variable. Zero-based indexing positions elements. Arrays are essential for managing groups of data.",
        quiz: [
          ["What is an array?", ["A method", "A collection of values of same type", "A loop"], 1, "An array groups multiple values."],
          ["First element index?", ["1", "0", "First"], 1, "C# uses zero-based indexing."],
          ["How to access enemies[1]?", ["First element", "Second element", "Error"], 1, "Index 1 is the second element."],
          ["Array size set?", ["At creation", "During runtime", "Whenever needed"], 0, "Array size is fixed at creation."],
          ["Can different types mix?", ["Yes", "No", "Only sometimes"], 1, "All array elements must be the same type."]
        ]
      },
      {
        title: "Creating and Initialising Arrays", time: "50 minutes",
        objectives: ["Declare arrays with the correct syntax.", "Initialise arrays with values.", "Understand array size and default values.", "Create arrays for different data types."],
        theory: [
          "An array declaration specifies the type and size. <code>int[] scores = new int[5];</code> creates an integer array with 5 elements. The <code>new</code> keyword allocates memory.",
          "When declared this way, elements receive default values. Numeric arrays default to 0. Boolean arrays default to false. String arrays default to null.",
          "You can also initialise an array with specific values. <code>int[] scores = {90, 85, 88};</code> creates an array and fills it immediately. The size is inferred from the number of values.",
          "Arrays can hold any data type. <code>string[] names</code> holds text. <code>bool[] flags</code> holds true/false values. <code>double[] temperatures</code> holds decimal numbers. <code>char[] letters</code> holds individual characters.",
          "Choosing between empty initialization and value initialization depends on your needs. Empty arrays are useful when filling data later. Value initialization is useful when you know the data upfront."
        ],
        terms: [["Declaration", "Specifying type and size."], ["Initialisation", "Providing initial values."], ["new keyword", "Allocates memory for the array."], ["Default values", "What empty elements contain."]],
        code: '// Empty array: filled with defaults\nint[] scores = new int[5];\nConsole.WriteLine(scores[0]);\n\n// Array with values\nstring[] weapons = {"Sword", "Bow", "Staff"};\nConsole.WriteLine(weapons[2]);\n\n// Different types\nbool[] achievements = {true, false, true};\ndouble[] health = {100.0, 75.5, 50.0};\nchar[] grades = {\'A\', \'B\', \'C\'};\n\n// Modify an element\nscores[0] = 95;\nConsole.WriteLine(scores[0]);',
        tryIt: "Create an array of five player scores, then change the first score to a new value.",
        challenge: "Create three arrays: one of strings, one of integers, and one of booleans. Print all values.",
        mistakes: ["Use the correct type syntax (int[], string[], etc.).", "Remember the new keyword for empty arrays.", "Array size is fixed after creation.", "All values must match the array type."],
        summary: "Arrays are declared with type and size. Initialise with defaults or specific values. Different types create different arrays. Modify elements using index assignment.",
        quiz: [
          ["Syntax for integer array?", ["int array", "int[] scores", "array[int]"], 1, "Type and square brackets precede the name."],
          ["Creating empty array?", ["int[] x = {};", "int[] x = new int[5];", "Both"], 1, "new keyword allocates memory."],
          ["Size of new int[3]?", ["1", "3", "Variable"], 1, "Size is specified in brackets."],
          ["Default int value?", ["1", "null", "0"], 2, "Numeric arrays default to 0."],
          ["Initialising with values?", ["int[] x = new int[3];", "int[] x = {1, 2, 3};", "Both"], 1, "Both syntax forms are valid."]
        ]
      },
      {
        title: "Accessing and Modifying Array Values", time: "50 minutes",
        objectives: ["Read values from arrays using indexes.", "Change array values.", "Understand index boundaries.", "Handle common index errors."],
        theory: [
          "Reading an array element uses the index. <code>int firstScore = scores[0];</code> reads the first element. <code>Console.WriteLine(weapons[2]);</code> prints the third element.",
          "Changing an array element uses assignment. <code>scores[0] = 95;</code> replaces the first element with 95. <code>inventory[2] = \"Key\";</code> changes the third inventory item.",
          "Index boundaries are critical. An array of size 5 has valid indices 0 through 4. Accessing <code>scores[5]</code> is out of bounds and causes an IndexOutOfRangeException.",
          "The .Length property tells you the array size. <code>scores.Length</code> returns 5 for an array of 5 elements. Use it to prevent index errors: <code>if (i < scores.Length)</code>",
          "Common mistakes include forgetting zero-based indexing, accessing beyond array bounds, and confusing index numbers. Always verify indices are within 0 to length−1."
        ],
        terms: [["Index bounds", "Valid range 0 to length−1."], ["IndexOutOfRangeException", "Error accessing invalid index."], ["Length property", "Returns array size."], ["Out of bounds", "Accessing invalid index."]],
        code: 'string[] weapons = {"Sword", "Bow", "Staff"};\n\n// Read values\nConsole.WriteLine(weapons[0]);\nConsole.WriteLine(weapons[1]);\n\n// Modify values\nweapons[0] = "Great Sword";\nConsole.WriteLine(weapons[0]);\n\n// Check length\nConsole.WriteLine(weapons.Length);\n\n// Verify index before accessing\nint index = 1;\nif (index < weapons.Length)\n{\n    Console.WriteLine(weapons[index]);\n}\nelse\n{\n    Console.WriteLine("Index out of bounds");\n}',
        tryIt: "Create an array, modify a value, and print it before and after the change.",
        challenge: "Create an array and verify the index is valid before accessing each element.",
        mistakes: ["Remember zero-based indexing starts at 0.", "Use .Length to check valid range.", "Index out of bounds causes exceptions.", "Always verify before accessing unfamiliar indices."],
        summary: "Access array elements using indexes within bounds. Modify with assignment. Use .Length to check validity. Index errors are a common source of bugs.",
        quiz: [
          ["Accessing second element?", ["scores[1]", "scores[2]", "scores[0]"], 0, "Index 1 is the second element."],
          ["Out of bounds error?", ["Syntax error", "RuntimeException", "IndexOutOfRangeException"], 2, "This exception is thrown for invalid indices."],
          ["Check array size?", ["Length()", "length", "Length"], 2, "Length is a property without parentheses."],
          ["Valid indices for int[5]?", ["0 to 5", "0 to 4", "1 to 5"], 1, "Last index is length−1."],
          ["Modify element?", ["array[i]", "array[i] = value", "element(i)"], 1, "Assignment updates the element."]
        ]
      },
      {
        title: "Looping Through Arrays", time: "55 minutes",
        objectives: ["Use for loops with arrays.", "Process each element with foreach.", "Combine loops and arrays.", "Choose the right loop type."],
        theory: [
          "Processing every array element is common. A for loop with a counter is perfect for this. <code>for (int i = 0; i < scores.Length; i++) { }</code> iterates through each index.",
          "The foreach loop is even simpler when you only need the values, not indices. <code>foreach (int score in scores) { }</code> automatically provides each element.",
          "For loops give you the index, useful when you need to know position or modify elements. Foreach is cleaner when you just want to read each value.",
          "Nested loops process multi-dimensional data. Outer loops iterate rows, inner loops iterate columns. This is essential for game grids and matrices.",
          "Combining loops and arrays unlocks powerful data processing. Calculating sums, finding averages, searching for values, and transforming data all use loops over arrays."
        ],
        terms: [["for loop with arrays", "Using index to access elements."], ["foreach loop", "Iterating without explicit index."], ["Loop variable", "Current element or index."], ["Array length", "Property used in loop condition."]],
        code: 'int[] scores = {90, 85, 88, 92, 87};\n\n// For loop: access by index\nint sum = 0;\nfor (int i = 0; i < scores.Length; i++)\n{\n    sum += scores[i];\n}\nConsole.WriteLine($"Total: {sum}");\n\n// Foreach loop: direct element access\nforeach (int score in scores)\n{\n    Console.WriteLine(score);\n}\n\n// Find highest\nint highest = scores[0];\nforeach (int score in scores)\n{\n    if (score > highest) highest = score;\n}\nConsole.WriteLine($"Highest: {highest}");',
        tryIt: "Create an array and calculate the sum using a for loop.",
        challenge: "Use a foreach loop to find the average of array values.",
        mistakes: ["For loop condition uses < not <=.", "Use scores[i], not scores.", "Foreach creates a new variable each iteration.", "Initialize accumulator variables before loops."],
        summary: "For loops process arrays by index. Foreach loops process by value. Choose based on needs: for when you need index, foreach when you don't. Both are essential.",
        quiz: [
          ["For loop array syntax?", ["for (int i=0; i<array.Length; i++)", "for (i in array)", "for (array)"], 0, "For loops use index and .Length."],
          ["Foreach syntax?", ["foreach (type var in array)", "foreach array", "foreach type array"], 0, "Type, variable, in, array."],
          ["Sum accumulator start?", ["1", "array[0]", "0"], 2, "Sums start at 0."],
          ["Find highest?", ["Min value first", "First element as initial", "array[0]"], 2, "Start with first element."],
          ["When use foreach?", ["Need index", "Just reading values", "Modifying array"], 1, "Foreach is for reading without index."]
        ]
      },
      {
        title: "Multi-Dimensional Arrays", time: "55 minutes",
        objectives: ["Understand multi-dimensional arrays.", "Create and access 2D arrays.", "Use nested loops with grids.", "Apply to game maps and grids."],
        theory: [
          "A multi-dimensional array has rows and columns. A 2D array is like a table. <code>int[,] grid = new int[3, 3];</code> creates a 3×3 grid.",
          "Access 2D elements with two indices. <code>grid[0, 1]</code> accesses row 0, column 1. <code>grid[2, 2]</code> is bottom-right of a 3×3 grid.",
          "Looping through 2D arrays requires nested loops. Outer loop iterates rows, inner loop iterates columns. <code>for (int row = 0; row < 3; row++) { for (int col = 0; col < 3; col++) { } }</code>",
          "Games use 2D arrays for maps, tile systems, and game boards. A chess board is 8×8. A tic-tac-toe board is 3×3. Dungeon levels are large grids.",
          "Higher dimensions exist: 3D arrays, 4D arrays, etc. But 2D is most common and sufficient for most applications. 3D arrays are rare in basic programming."
        ],
        terms: [["Multi-dimensional array", "Arrays with multiple dimensions."], ["2D array", "Rows and columns."], ["Index pair", "Two indices for row and column."], ["Grid", "A 2D data structure."]],
        code: '// Create 3x3 grid\nint[,] grid = new int[3, 3];\n\n// Set values\ngrid[0, 0] = 1;\ngrid[1, 1] = 5;\ngrid[2, 2] = 9;\n\n// Initialize with values\nint[,] board = {\n    {1, 2, 3},\n    {4, 5, 6},\n    {7, 8, 9}\n};\n\n// Loop through grid\nfor (int row = 0; row < 3; row++)\n{\n    for (int col = 0; col < 3; col++)\n    {\n        Console.WriteLine($"[{row},{col}] = {board[row, col]}");\n    }\n}',
        tryIt: "Create a 2×2 grid, set all values, and print them using nested loops.",
        challenge: "Create a tic-tac-toe board and print it with X and O symbols.",
        mistakes: ["Use comma between dimensions, not separate brackets.", "Nested loops: outer for rows, inner for columns.", "Two indices required for 2D access.", "Check both dimensions for bounds."],
        summary: "Multi-dimensional arrays store tabular data. 2D arrays use row and column indices. Nested loops process grids. Games use 2D arrays for maps and boards.",
        quiz: [
          ["2D array syntax?", ["int[] array[,]", "int[,] array", "int array[,]"], 1, "Type, comma in brackets, name."],
          ["Access element?", ["array[0][1]", "array[0,1]", "array[0;1]"], 1, "Comma separates dimensions."],
          ["Nested loop order?", ["Cols then rows", "Rows then cols", "Doesn't matter"], 1, "Outer loop rows, inner loop columns."],
          ["3x3 grid dimensions?", ["New int[2,2]", "New int[3,3]", "New int[4,4]"], 1, "3x3 requires [3,3]."],
          ["Real-world 2D use?", ["Calculations", "Game maps", "Strings"], 1, "Maps and grids use 2D arrays."]
        ]
      },
      {
        title: "Lists (List<T>)", time: "55 minutes",
        objectives: ["Understand why Lists are useful.", "Create and use Lists.", "Add and remove items.", "Compare Lists and arrays."],
        theory: [
          "An array has fixed size. A <strong>List</strong> grows and shrinks dynamically. <code>List&lt;string&gt; inventory = new List&lt;string&gt;();</code> creates an empty list.",
          "Lists use angle brackets <code>&lt;&gt;</code> to specify the item type. <code>List&lt;int&gt;</code> holds integers. <code>List&lt;string&gt;</code> holds text. The syntax reads 'List of type'.",
          "Add items with <code>Add()</code>. <code>inventory.Add(\"Sword\");</code> adds a sword. Remove items with <code>Remove()</code> or <code>RemoveAt()</code>.",
          "Lists have many useful methods. <code>Count</code> returns the number of items. <code>Contains()</code> checks if an item exists. <code>Clear()</code> removes all items.",
          "Use arrays for fixed-size data. Use Lists for dynamic data. Game inventories, enemy lists, and collectible items all benefit from Lists because they change during gameplay."
        ],
        terms: [["List", "A dynamic collection that grows."], ["Generic type", "Specified in angle brackets <T>."], ["Add method", "Inserts an item."], ["Remove method", "Deletes an item."]],
        code: '// Create a list\nList<string> inventory = new List<string>();\n\n// Add items\ninventory.Add("Sword");\ninventory.Add("Shield");\ninventory.Add("Potion");\nConsole.WriteLine($"Items: {inventory.Count}");\n\n// Access by index\nConsole.WriteLine(inventory[0]);\n\n// Check if item exists\nif (inventory.Contains("Sword"))\n{\n    Console.WriteLine("You have a sword!");\n}\n\n// Remove item\ninventory.Remove("Potion");\nConsole.WriteLine($"Items after removal: {inventory.Count}");\n\n// Loop through list\nforeach (string item in inventory)\n{\n    Console.WriteLine(item);\n}',
        tryIt: "Create a list of numbers, add five values, print them all, then remove one.",
        challenge: "Create a list of player names and remove anyone whose name starts with 'Z'.",
        mistakes: ["Use angle brackets for type: List<type>.", "Count is a property, not a method.", "Lists use the same index access as arrays.", "RemoveAt uses index; Remove uses value."],
        summary: "Lists are dynamic arrays that grow and shrink. Use Add to insert, Remove to delete, Count to check size. Lists are essential for data that changes during runtime.",
        quiz: [
          ["Create list syntax?", ["List array", "List<T>()", "ListT()"], 1, "Angle brackets specify type."],
          ["Add item?", ["inventory.Add()", "inventory.Insert()", "inventory.Push()"], 0, "Add method appends item."],
          ["Check count?", ["inventory.Count()", "inventory.Count", "inventory.Length"], 1, "Count is a property."],
          ["List vs array?", ["Same thing", "List is dynamic", "Array is flexible"], 1, "Lists grow; arrays are fixed."],
          ["Remove item?", ["inventory.Remove(item)", "inventory.RemoveAt(index)", "Both work"], 2, "Both methods are valid for different purposes."]
        ]
      },
      {
        title: "Useful Collection Methods", time: "55 minutes",
        objectives: ["Use common List methods.", "Understand method purposes.", "Apply methods to real problems.", "Build practical solutions."],
        theory: [
          "Lists have many useful methods beyond Add and Remove. <code>Add()</code> appends to the end. <code>RemoveAt(int index)</code> removes by position. <code>Remove(T item)</code> removes by value.",
          "<code>Contains(T item)</code> returns true if the item exists, useful for inventory checks. <code>IndexOf(T item)</code> returns the position of an item, or −1 if not found.",
          "<code>Clear()</code> removes all items. <code>Count</code> returns the number of items. <code>Insert(int index, T item)</code> adds an item at a specific position.",
          "Practical examples show method power. Inventory systems check Contains before using an item. Quest systems clear objectives with Clear(). Undo systems use RemoveAt on the most recent action.",
          "Mastering these methods makes programs cleaner and more efficient. Instead of manual loops searching for items, Contains does it directly. Professional code uses built-in methods rather than reinventing them."
        ],
        terms: [["Contains", "Checks if item exists."], ["IndexOf", "Finds item position."], ["Insert", "Adds at specific position."], ["Clear", "Removes all items."]],
        code: 'List<string> inventory = new List<string> {"Sword", "Shield", "Potion", "Key"};\n\n// Check if item exists\nif (inventory.Contains("Key"))\n{\n    Console.WriteLine("Door unlocked!");\n}\n\n// Find position\nint pos = inventory.IndexOf("Potion");\nif (pos >= 0)\n{\n    Console.WriteLine($"Potion at position {pos}");\n}\n\n// Insert at position\ninventory.Insert(0, "Crown");\nConsole.WriteLine($"First item: {inventory[0]}");\n\n// Remove by position\ninventory.RemoveAt(2);\n\n// Show all items\nforeach (string item in inventory)\n{\n    Console.WriteLine(item);\n}\n\n// Clear inventory\ninventory.Clear();\nConsole.WriteLine($"Items remaining: {inventory.Count}");',
        tryIt: "Create a list, use Contains to check for an item, then use IndexOf to find its position.",
        challenge: "Build an inventory where you can add, remove, and search for weapons by name.",
        mistakes: ["IndexOf returns −1 if not found, not null.", "Insert shifts other items, does not replace.", "Remove removes first occurrence only.", "Clear removes everything permanently in that session."],
        summary: "Essential List methods include Add, Remove, Contains, IndexOf, Insert, and Clear. These methods handle common tasks efficiently. Master them for professional code.",
        quiz: [
          ["Contains method?", ["Checks if item exists", "Adds item", "Removes item"], 0, "Contains returns true/false."],
          ["IndexOf not found?", ["Returns null", "Returns -1", "Throws error"], 1, "IndexOf returns −1 if not found."],
          ["Insert at position?", ["Replaces item", "Adds and shifts items", "Appends only"], 1, "Insert shifts existing items right."],
          ["Difference Remove and RemoveAt?", ["Same", "Remove uses value, RemoveAt uses index", "No difference"], 1, "Remove takes item, RemoveAt takes index."],
          ["Clear method?", ["Removes one item", "Removes all items", "Shows all items"], 1, "Clear empties the entire list."]
        ]
      },
      {
        title: "Practice Project · Inventory Management System", time: "90 minutes",
        objectives: ["Build a complete RPG inventory system.", "Apply array and list concepts.", "Implement menu-driven interface.", "Demonstrate practical collection usage."],
        theory: [
          "This project brings together all Module 7 concepts. You will create a simple RPG-style inventory system where players can view, add, and remove items.",
          "The program uses a List to store inventory items. A menu offers choices: view inventory, add item, remove item, search for item, or exit.",
          "For each choice, appropriate methods handle the logic. View loops through items. Add uses Add(). Remove uses RemoveAt after finding the index. Search uses IndexOf.",
          "Input validation ensures menu choices are valid and item names are not empty. Error handling manages invalid operations gracefully.",
          "A complete system demonstrates professional software design: clear menus, input validation, appropriate data structures, and logical method organization."
        ],
        terms: [["Menu system", "Offering user choices."], ["Inventory logic", "Managing items."], ["Input validation", "Checking user input."], ["Item management", "Add, remove, search operations."]],
        code: 'List<string> inventory = new List<string>();\nbool playing = true;\n\nwhile (playing)\n{\n    Console.WriteLine("\\n=== INVENTORY ===" );\n    Console.WriteLine($"Items: {inventory.Count}");\n    Console.WriteLine("1. View items");\n    Console.WriteLine("2. Add item");\n    Console.WriteLine("3. Remove item");\n    Console.WriteLine("4. Search item");\n    Console.WriteLine("5. Exit");\n    Console.Write("Choose: ");\n    \n    string choice = Console.ReadLine() ?? "";\n    \n    if (choice == "1")\n    {\n        if (inventory.Count == 0)\n        {\n            Console.WriteLine("Inventory empty.");\n        }\n        else\n        {\n            foreach (string item in inventory)\n            {\n                Console.WriteLine($"- {item}");\n            }\n        }\n    }\n    else if (choice == "2")\n    {\n        Console.Write("Item name: ");\n        string item = Console.ReadLine() ?? "";\n        if (!string.IsNullOrEmpty(item))\n        {\n            inventory.Add(item);\n            Console.WriteLine("Added!");\n        }\n    }\n    else if (choice == "3")\n    {\n        Console.Write("Item name to remove: ");\n        string item = Console.ReadLine() ?? "";\n        if (inventory.Remove(item))\n        {\n            Console.WriteLine("Removed!");\n        }\n        else\n        {\n            Console.WriteLine("Item not found.");\n        }\n    }\n    else if (choice == "4")\n    {\n        Console.Write("Search for: ");\n        string item = Console.ReadLine() ?? "";\n        int pos = inventory.IndexOf(item);\n        if (pos >= 0)\n        {\n            Console.WriteLine($"Found at position {pos + 1}");\n        }\n        else\n        {\n            Console.WriteLine("Not found.");\n        }\n    }\n    else if (choice == "5")\n    {\n        playing = false;\n    }\n}',
        tryIt: "Build a basic version where you can add and view items.",
        challenge: "Extend the system to show item count, limit inventory size, or track item quantities.",
        mistakes: ["Validate all user input before using it.", "Check if inventory is empty before viewing.", "Use appropriate List methods for each operation.", "Handle edge cases like empty names."],
        summary: "A complete inventory system demonstrates practical list usage. Menu-driven interfaces, input validation, and appropriate methods create professional applications.",
        quiz: [
          ["Best collection for inventory?", ["Array", "List", "Dictionary"], 1, "Lists grow with new items."],
          ["View all items?", ["for loop", "foreach loop", "Both work"], 1, "Foreach is cleaner here."],
          ["Check item exists?", ["Contains method", "Loop search", "Both"], 0, "Contains is direct and clear."],
          ["Remove by name?", ["Remove method", "RemoveAt", "Need IndexOf first"], 0, "Remove takes the item name directly."],
          ["Module 7 learning?", ["Arrays only", "Lists only", "Arrays and Lists"], 2, "This covers both comprehensively."]
        ]
      }
    ]
  },
  classes: {
    eyebrow: "Module 8 · C# object-oriented programming · 8 lessons",
    title: "Classes & Objects",
    description: "Learn how to model game entities with classes, objects, fields, properties, constructors, and methods in C#.",
    completion: "Module 8 complete",
    completionText: "You are ready to use object-oriented design to build larger C# applications and game systems.",
    lessons: [
      {
        title: "Introduction to Classes", time: "45 minutes",
        objectives: ["Explain a class as a blueprint for objects.", "Create a class with fields.", "Instantiate objects with new.", "Access data through an object."],
        theory: ["A class defines the data and behaviour that objects of a particular kind will have. A Player class can describe every player, while each Player object represents one specific player.", "The <code>new</code> keyword creates an object from a class. Each object has its own instance data, so two players can have different names and scores.", "Good classes model one clear concept. In a game, classes might represent players, enemies, weapons, inventory items, or quests."],
        terms: [["Class", "A definition used to create objects."], ["Object", "An instance created from a class."], ["Instance", "A specific object belonging to a class."], ["Field", "Data stored inside an object."]],
        code: 'class Player\n{\n    public string Name = "Mira";\n    public int Score = 100;\n}\n\nPlayer player = new Player();\nConsole.WriteLine(player.Name);\nConsole.WriteLine(player.Score);',
        tryIt: "Create a Player class with name and health fields, then create one Player object and print its values.",
        challenge: "Create two Enemy objects with different names and health values. Display both objects.",
        mistakes: ["A class definition does not create an object by itself.", "Use new to create an instance.", "Access instance fields through an object variable.", "Give classes and fields meaningful names."],
        summary: "Classes define a type of object. The new keyword creates instances, and each instance stores its own values.",
        quiz: [["What is a class?", ["A blueprint for objects", "A loop", "A compiler error"], 0, "A class defines the structure and behaviour of objects."], ["Which keyword creates an object?", ["make", "new", "class"], 1, "new creates an instance."], ["What is an object?", ["An instance of a class", "A comment", "A data type only"], 0, "An object is a specific instance created from a class."], ["How is a field accessed?", ["Through the object", "Through a comment", "Through a loop only"], 0, "The dot accesses a member on an object."], ["Can two objects have different values?", ["Yes", "No", "Only strings"], 0, "Each instance has its own instance data."]]
      },
      {
        title: "Fields and Properties", time: "50 minutes",
        objectives: ["Distinguish fields from properties.", "Use access modifiers.", "Expose controlled object data.", "Apply encapsulation."],
        theory: ["A field stores data directly inside a class. A property provides a controlled way to read or change a value using <code>get</code> and <code>set</code>.", "Keeping data private protects an object's internal state. A property can allow other code to read a value while only the class can change it.", "Use properties when validation or controlled access matters, such as preventing a player's health from becoming negative."],
        terms: [["Property", "A controlled way to access data."], ["Access modifier", "A keyword controlling visibility."], ["private", "Accessible only within its containing class."], ["Encapsulation", "Protecting internal state behind a public interface."]],
        code: 'class Player\n{\n    public string Name { get; set; } = "Mira";\n    public int Health { get; private set; } = 100;\n\n    public void TakeDamage(int amount)\n    {\n        Health = Math.Max(0, Health - amount);\n    }\n}',
        tryIt: "Create a Character class with a public Name property and a Health property that cannot be changed directly outside the class.",
        challenge: "Add validation so TakeDamage cannot reduce Health below zero.",
        mistakes: ["Do not expose every field publicly without a reason.", "private members cannot be accessed from unrelated classes.", "A property is not the same as a method.", "Validate values before changing state."],
        summary: "Properties provide controlled access to data. Encapsulation protects object state and keeps values valid.",
        quiz: [["What does private control?", ["Visibility", "Loop count", "File size"], 0, "private limits access to the containing class."], ["What does a property provide?", ["Controlled data access", "A namespace", "A comment"], 0, "Properties expose controlled get and set operations."], ["What does private set allow?", ["Only the class changes it", "Nobody reads it", "Any code changes it"], 0, "The class controls assignment while readers can still access it."], ["What is encapsulation?", ["Protecting internal state", "Removing all methods", "Creating arrays"], 0, "Encapsulation protects implementation details and state."], ["Why validate Health?", ["Keep state valid", "Increase screen size", "Rename the class"], 0, "Validation prevents invalid object data."]]
      },
      {
        title: "Constructors", time: "45 minutes",
        objectives: ["Explain a constructor.", "Write a parameterised constructor.", "Use this to refer to the current object.", "Initialise objects consistently."],
        theory: ["A constructor is a special member that runs when an object is created. It has the same name as the class and no return type.", "Constructors establish a valid starting state. A parameterised constructor receives values so each object can be initialised with the data it needs.", "A class can have multiple constructors with different parameter lists. This is called constructor overloading."],
        terms: [["Constructor", "A member that initialises a new object."], ["Parameter", "Input supplied to a method or constructor."], ["this", "A reference to the current object."], ["Overloading", "Multiple members with different parameter lists."]],
        code: 'class Enemy\n{\n    public string Name { get; }\n    public int Health { get; }\n\n    public Enemy(string name, int health)\n    {\n        Name = name;\n        Health = health;\n    }\n}\n\nEnemy dragon = new Enemy("Dragon", 250);',
        tryIt: "Create a Weapon class with a constructor that receives a name and damage value.",
        challenge: "Add a second constructor that creates a default weapon with no arguments.",
        mistakes: ["Constructors do not have a return type.", "The constructor name must match the class name.", "Initialise required properties in the constructor.", "Pass arguments in the correct order and type."],
        summary: "Constructors run during object creation and establish the object's initial valid state.",
        quiz: [["When does a constructor run?", ["When an object is created", "Only after a loop", "When a file closes"], 0, "Constructors initialise new objects."], ["Does a constructor have a return type?", ["Yes, int", "No", "Only string"], 1, "Constructors have no return type."], ["What must match the class name?", ["Constructor name", "Field value", "Namespace"], 0, "The constructor has the class name."], ["What does a parameter provide?", ["Input data", "A colour", "A comment"], 0, "Parameters supply values to initialise the object."], ["What is overloading?", ["Different parameter lists", "Deleting a class", "Changing a file"], 0, "Overloads share a name but accept different parameters."]]
      },
      {
        title: "Instance Methods", time: "50 minutes",
        objectives: ["Add behaviour to a class.", "Call methods through objects.", "Change state through methods.", "Return useful results."],
        theory: ["An instance method is behaviour that belongs to an object. A Player object might have Heal, Jump, or AddScore methods.", "Instance methods can read and change the current object's state. A method can return a value when its caller needs a result, or use void when it performs an action without returning data.", "Methods should have one clear responsibility and should use parameters for information supplied by the caller."],
        terms: [["Instance method", "Behaviour belonging to one object."], ["void", "A return type meaning no value is returned."], ["Return value", "The result sent back by a method."], ["Behaviour", "An action an object can perform."]],
        code: 'class Player\n{\n    public int Score { get; private set; }\n\n    public void AddScore(int points)\n    {\n        Score += points;\n    }\n\n    public bool HasWon(int winningScore)\n    {\n        return Score >= winningScore;\n    }\n}',
        tryIt: "Add Heal and IsAlive methods to your Character class.",
        challenge: "Build a Player class with methods to add score, lose health, and report whether the player has won.",
        mistakes: ["Call instance methods on an object.", "Keep method names descriptive.", "Return a value when the caller needs an answer.", "Keep each method focused."],
        summary: "Instance methods give objects behaviour and allow them to manage their own state.",
        quiz: [["Where does an instance method belong?", ["An object", "Only a comment", "The HTML page"], 0, "Instance methods belong to objects created from a class."], ["What does void mean?", ["No return value", "Private data", "A Boolean"], 0, "void methods perform an action without returning a value."], ["How is an instance method called?", ["object.Method()", "class = Method", "Method only"], 0, "The dot accesses the method on an object."], ["Why use parameters?", ["Supply method data", "Hide all logic", "Create a class"], 0, "Parameters let callers provide required information."], ["What should a method usually have?", ["One clear responsibility", "Every responsibility", "No name"], 0, "Focused methods are easier to understand and test."]]
      },
      {
        title: "Static Members", time: "40 minutes",
        objectives: ["Distinguish static and instance members.", "Call static methods through a class.", "Identify shared behaviour.", "Avoid unnecessary static state."],
        theory: ["A static member belongs to the class itself rather than to one object. It can be used without creating an instance.", "Static members suit shared utilities and values common to the whole type. Instance members represent data or behaviour that differs between objects.", "Static state is shared by every caller, so use it deliberately."],
        terms: [["static", "A member belonging to the class itself."], ["Shared state", "Data accessed by all users of a type."], ["Utility", "A general-purpose helper operation."], ["Instance state", "Data belonging to one object."]],
        code: 'class ScoreTools\n{\n    public static int DoubleScore(int score)\n    {\n        return score * 2;\n    }\n}\n\nint bonus = ScoreTools.DoubleScore(50);\nConsole.WriteLine(bonus);',
        tryIt: "Create a static method that converts game minutes into seconds.",
        challenge: "Create ScoreTools methods for doubling a score and checking a pass mark.",
        mistakes: ["Do not call an instance member as if it were static.", "Static data is shared, not copied per object.", "Use static only when object state is unnecessary.", "Call static members through the class name."],
        summary: "Static members belong to the class and are useful for shared utilities. Instance members belong to individual objects.",
        quiz: [["What does static belong to?", ["The class", "One object only", "A loop"], 0, "Static members belong to the type itself."], ["How do you call a static method?", ["Through the class name", "Through an unrelated object", "With new only"], 0, "Static methods are called through their class."], ["When is an instance member useful?", ["When objects have separate state", "For every constant", "Only for HTML"], 0, "Instance members store or use per-object data."], ["Is static state shared?", ["Yes", "No", "Only for strings"], 0, "All callers see the same static state."], ["What should static state be used for?", ["Genuinely shared data", "Every changing player value", "All methods"], 0, "Static state is appropriate only when sharing is intentional."]]
      },
      {
        title: "Inheritance", time: "50 minutes",
        objectives: ["Explain base and derived classes.", "Reuse common members with inheritance.", "Recognise an is-a relationship.", "Identify when composition is clearer."],
        theory: ["Inheritance lets a derived class reuse members from a base class. A Mage is a Character, so Mage can inherit common name and health behaviour from Character.", "The colon in <code>class Mage : Character</code> declares the inheritance relationship. Derived classes can add their own members.", "Inheritance models an is-a relationship. If the relationship is has-a, composition is usually clearer: a Player has an Inventory."],
        terms: [["Base class", "The class whose members are inherited."], ["Derived class", "A class that inherits from another class."], ["Inheritance", "Reusing and extending a base class."], ["Composition", "Building a type from other objects."]],
        code: 'class Character\n{\n    public string Name { get; }\n\n    public Character(string name)\n    {\n        Name = name;\n    }\n}\n\nclass Mage : Character\n{\n    public int Mana { get; } = 100;\n\n    public Mage(string name) : base(name) { }\n}',
        tryIt: "Create a Character base class and derive Warrior and Mage classes from it.",
        challenge: "Give Warrior a Strength property and Mage a Mana property while keeping Name in the base class.",
        mistakes: ["Inheritance should represent an is-a relationship.", "Use base to call the base constructor.", "Do not duplicate common members.", "Prefer composition for has-a relationships."],
        summary: "Inheritance allows a derived class to reuse and extend a base class. Use it for clear is-a relationships.",
        quiz: [["What is a derived class?", ["A class that inherits", "A loop", "A namespace"], 0, "A derived class receives members from a base class."], ["What does class Mage : Character mean?", ["Mage inherits Character", "Mage deletes Character", "Character inherits Mage"], 0, "The colon declares inheritance."], ["What relationship suits inheritance?", ["is-a", "has-a only", "prints-a"], 0, "Inheritance models an is-a relationship."], ["What does base(name) do?", ["Calls the base constructor", "Creates a loop", "Changes the namespace"], 0, "base forwards values to the base class constructor."], ["What is composition?", ["Building with other objects", "A compiler error", "A static method"], 0, "Composition models has-a relationships."]]
      },
      {
        title: "Polymorphism and Interfaces", time: "55 minutes",
        objectives: ["Explain polymorphism.", "Override virtual methods.", "Use a shared base type.", "Describe an interface contract."],
        theory: ["Polymorphism allows code to work with a common type while each derived object provides its own behaviour.", "A base method marked <code>virtual</code> can be replaced by a derived class using <code>override</code>.", "An interface defines a contract that a class promises to provide. Interfaces are useful when unrelated classes share a capability, such as being damageable."],
        terms: [["Polymorphism", "One interface with multiple implementations."], ["virtual", "A method that derived classes may replace."], ["override", "A derived implementation of a virtual member."], ["Interface", "A contract describing required members."]],
        code: 'interface IDamageable\n{\n    void TakeDamage(int amount);\n}\n\nclass Enemy : IDamageable\n{\n    public int Health { get; private set; } = 100;\n\n    public void TakeDamage(int amount)\n    {\n        Health = Math.Max(0, Health - amount);\n    }\n}\n\nIDamageable target = new Enemy();\ntarget.TakeDamage(25);',
        tryIt: "Create an IDamageable interface and implement it in an Enemy class.",
        challenge: "Create two different IDamageable types and write a method that damages either one through the interface.",
        mistakes: ["Implement every required interface member.", "Use override only for an inherited virtual member.", "Use a shared base type or interface for polymorphism.", "Keep interfaces focused on capabilities."],
        summary: "Polymorphism supports interchangeable implementations, while interfaces define capabilities different classes can share.",
        quiz: [["What does polymorphism allow?", ["Different implementations through one type", "Only one object", "No methods"], 0, "Polymorphism supports interchangeable implementations."], ["What does override do?", ["Replaces an inherited virtual method", "Creates an array", "Makes a field private"], 0, "override supplies a derived implementation."], ["What is an interface?", ["A contract", "A constructor only", "A loop"], 0, "Interfaces describe members a class promises to implement."], ["Can unrelated classes share an interface?", ["Yes", "No", "Only if static"], 0, "Interfaces can describe a shared capability."], ["What must an implementing class provide?", ["Required interface members", "Every class in the project", "Only comments"], 0, "The class must fulfil the interface contract."]]
      },
      {
        title: "Object-Oriented Game Project", time: "75 minutes",
        objectives: ["Plan a small object-oriented game system.", "Combine classes, constructors, properties, and methods.", "Represent game state with objects.", "Test interactions between objects."],
        theory: ["Object-oriented design breaks a game into collaborating objects. A Player can hold health and score, an Enemy can hold health and damage, and a Battle can coordinate their interactions.", "Identify nouns that may become classes and verbs that may become methods. Keep each class responsible for one concept.", "Test each class separately, then test the interactions between objects."],
        terms: [["Object-oriented design", "Organising software around collaborating objects."], ["Responsibility", "The work a class should own."], ["Collaboration", "Objects working together through members."], ["State", "The current data held by an object."]],
        code: 'class Player\n{\n    public string Name { get; }\n    public int Health { get; private set; } = 100;\n\n    public Player(string name)\n    {\n        Name = name;\n    }\n\n    public void TakeDamage(int amount)\n    {\n        Health = Math.Max(0, Health - amount);\n    }\n}\n\nPlayer player = new Player("Mira");\nplayer.TakeDamage(30);\nConsole.WriteLine($"{player.Name}: {player.Health} HP");',
        tryIt: "Build a Player and Enemy class, then make the player take damage and display updated health.",
        challenge: "Extend the project with score, an enemy attack method, and a win condition. Test three scenarios.",
        mistakes: ["Do not put every responsibility into one class.", "Protect state changes with methods when validation is needed.", "Test normal and boundary values.", "Keep object responsibilities clear."],
        summary: "Classes and objects model game entities. Constructors, properties, methods, and collaboration create maintainable game systems.",
        quiz: [["What should a class own?", ["A clear responsibility", "Every feature", "Only output"], 0, "Focused responsibilities make designs easier to maintain."], ["What establishes starting state?", ["A constructor", "A comment", "An icon"], 0, "Constructors initialise objects."], ["What protects state?", ["Controlled properties and methods", "Random changes", "Duplicate code"], 0, "Encapsulation controls valid changes."], ["What should you test?", ["Classes and their interactions", "Only colours", "Nothing until release"], 0, "Individual behaviour and collaboration need testing."], ["What does Module 8 combine?", ["Classes, objects, and object-oriented design", "Only arrays", "Only loops"], 0, "The project applies the module's object-oriented concepts."]]
      }
    ]
  }
};

const pageNames = ["home", "dashboard", "courses", "practice", "unity", "resources", "module"];
const progress = {
  fundamentals: new Set(),
  variables: new Set(),
  operators: new Set(),
  conditionals: new Set(),
  loops: new Set(),
  methods: new Set(),
  arrays: new Set(),
  classes: new Set()
};
const progressStorageKey = "jaylearn-progress-v1";
const practiceStorageKey = "jaylearn-practice-v1";
const supabaseClient = supabase.createClient(
  "https://xgmaefjrcdtyzxesmmnw.supabase.co",
  "sb_publishable_k3FcY5cJBMB0QX7uyAsHzw_6XKIeLke"
);
let activeModule = "fundamentals";
let activeLesson = 0;

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(progressStorageKey) || "{}");
    Object.keys(progress).forEach(moduleKey => {
      const lessonIndexes = Array.isArray(saved[moduleKey]) ? saved[moduleKey] : [];
      progress[moduleKey] = new Set(lessonIndexes.filter(index => Number.isInteger(index) && index >= 0 && index < modules[moduleKey].lessons.length));
    });
  } catch (error) {
    localStorage.removeItem(progressStorageKey);
  }
}

function saveProgress() {
  const saved = Object.fromEntries(Object.entries(progress).map(([moduleKey, lessons]) => [moduleKey, [...lessons].sort((a, b) => a - b)]));
  localStorage.setItem(progressStorageKey, JSON.stringify(saved));
}

function practiceDraftKey() {
  return `${activeModule}-${activeLesson}`;
}

function savePracticeDraft() {
  const editor = document.getElementById("practice-editor");
  if (!editor) return;
  const drafts = JSON.parse(localStorage.getItem(practiceStorageKey) || "{}");
  drafts[practiceDraftKey()] = editor.value;
  localStorage.setItem(practiceStorageKey, JSON.stringify(drafts));
  document.getElementById("practice-status").textContent = "Draft saved on this device.";
}

async function loadRemoteProgress() {
  const { data: { user } } = await supabaseClient.auth.getUser();
  setAuthenticated(user);
  if (!user) return;

  const { data, error } = await supabaseClient
    .from("lesson_progress")
    .select("module_key, lesson_index")
    .eq("user_id", user.id);

  if (error) {
    showAuthMessage("Progress could not be loaded: " + error.message);
    return;
  }

  data.forEach(({ module_key, lesson_index }) => {
    if (progress[module_key] && Number.isInteger(lesson_index)) progress[module_key].add(lesson_index);
  });
  saveProgress();
  renderModule();
}

async function saveRemoteProgress(moduleKey, lessonIndex) {
  const { data: { user } } = await supabaseClient.auth.getUser();
  if (!user) return;

  const { error } = await supabaseClient.from("lesson_progress").upsert({
    user_id: user.id,
    module_key: moduleKey,
    lesson_index: lessonIndex
  });

  if (error) showAuthMessage("Progress could not be saved: " + error.message);
}

function showAuthMessage(message) {
  ["auth-status", "mobile-auth-status", "gate-auth-status"].forEach(statusId => {
    const status = document.getElementById(statusId);
    if (status) status.textContent = message;
  });
}

function setAuthenticated(user) {
  document.getElementById("app-shell").classList.toggle("hidden", !user);
  document.getElementById("auth-gate").classList.toggle("is-hidden", Boolean(user));
  updateAccountControls(user);
}

function updateAccountControls(user) {
  ["sign-in-button", "mobile-sign-in-button"].forEach(buttonId => document.getElementById(buttonId).classList.toggle("hidden", Boolean(user)));
  ["sign-up-button", "mobile-sign-up-button"].forEach(buttonId => document.getElementById(buttonId).classList.toggle("hidden", Boolean(user)));
  ["sign-out-button", "mobile-sign-out-button"].forEach(buttonId => document.getElementById(buttonId).classList.toggle("hidden", !user));
  showAuthMessage(user ? "Signed in" : "");
}

async function authenticate(action, prefix = "") {
  const email = document.getElementById(`${prefix}auth-email`).value.trim();
  const password = document.getElementById(`${prefix}auth-password`).value;
  if (!email || !password) {
    showAuthMessage("Enter an email and password.");
    return;
  }

  const result = action === "signUp"
    ? await supabaseClient.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${window.location.origin}${window.location.pathname}` }
    })
    : await supabaseClient.auth.signInWithPassword({ email, password });
  if (result.error) {
    showAuthMessage(result.error.message);
    return;
  }

  if (action === "signUp" && !result.data.session) {
    showAuthMessage("Account created. Check your email to confirm it, then click 'Already have an account? Sign in'.");
  } else {
    showAuthMessage("Signed in");
    await loadRemoteProgress();
  }
}

function showPage(page) {
  if (!pageNames.includes(page)) page = "home";
  document.querySelectorAll(".page-view").forEach(view => view.classList.toggle("is-active", view.dataset.page === page));
  document.querySelectorAll("[data-page-target]").forEach(button => {
    const active = button.dataset.pageTarget === page;
    button.classList.toggle("is-active", active);
    active ? button.setAttribute("aria-current", "page") : button.removeAttribute("aria-current");
  });
  document.getElementById("mobile-menu").classList.remove("is-open");
  document.getElementById("mobile-menu-button").setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openModule(key) {
  activeModule = key;
  activeLesson = modules[key].lessons.findIndex((_, index) => !progress[key].has(index));
  if (activeLesson === -1) activeLesson = modules[key].lessons.length - 1;
  renderModule();
  showPage("module");
}

function renderModule() {
  const module = modules[activeModule];
  document.getElementById("module-eyebrow").textContent = module.eyebrow;
  document.getElementById("module-title").textContent = module.title;
  document.getElementById("module-description").textContent = module.description;
  document.getElementById("module-complete-title").textContent = module.completion;
  document.getElementById("module-complete-text").textContent = module.completionText;

  const nav = document.getElementById("lesson-navigation");
  const select = document.getElementById("mobile-lesson-select");
  nav.replaceChildren();
  select.replaceChildren();

  module.lessons.forEach((lesson, index) => {
    const unlocked = index === 0 || progress[activeModule].has(index - 1);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "lesson-nav-button" + (index === activeLesson ? " is-active" : "");
    button.disabled = !unlocked;
    button.dataset.lessonTarget = String(index);
    button.innerHTML = `<span>${String(index + 1).padStart(2, "0")}</span><span>${lesson.title}</span>`;
    button.addEventListener("click", () => showLesson(index));
    nav.appendChild(button);

    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `${String(index + 1).padStart(2, "0")} · ${lesson.title}`;
    option.disabled = !unlocked;
    option.selected = index === activeLesson;
    select.appendChild(option);
  });
  renderLesson();
  updateProgress();
}

function renderLesson() {
  const lesson = modules[activeModule].lessons[activeLesson];
  const content = document.getElementById("lesson-content");
  content.innerHTML = `
    <article class="lesson-view is-active">
      <header>
        <p class="eyebrow text-sky-300">Lesson ${String(activeLesson + 1).padStart(2, "0")} · ${lesson.time}</p>
        <h2 class="mt-3 text-4xl font-extrabold">${lesson.title}</h2>
      </header>
      <section class="surface mt-5 rounded-3xl p-6">
        <h3 class="text-2xl font-bold">Learning objectives</h3>
        <ul class="lesson-list">${lesson.objectives.map(item => `<li>${item}</li>`).join("")}</ul>
      </section>
      <section class="surface mt-5 rounded-3xl p-6">
        <h3 class="text-2xl font-bold">Theory</h3>
        <div class="lesson-copy mt-4">${lesson.theory.map(item => `<p>${item}</p>`).join("")}</div>
      </section>
      <section class="surface mt-5 rounded-3xl p-6">
        <h3 class="text-2xl font-bold">Key terminology</h3>
        <dl class="term-grid mt-4 sm:grid-cols-2">${lesson.terms.map(term => `<div class="term"><dt>${term[0]}</dt><dd>${term[1]}</dd></div>`).join("")}</dl>
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
        <ul class="lesson-list">${lesson.mistakes.map(item => `<li>${item}</li>`).join("")}</ul>
      </section>
      <section class="success mt-5 rounded-2xl p-5">
        <h3 class="text-xl font-bold">${activeLesson === 7 ? "Module summary" : "Lesson summary"}</h3>
        <p class="mt-3 text-slate-300">${lesson.summary}</p>
      </section>
      <div class="lesson-actions mt-5 flex flex-wrap justify-between gap-3">
        ${activeLesson > 0 ? '<button id="previous-lesson" class="btn-secondary" type="button">Previous lesson</button>' : "<span></span>"}
        <button id="complete-lesson" class="btn-primary opacity-40" type="button" disabled>${activeLesson === 7 ? "Complete module" : "Complete lesson and continue"}</button>
      </div>
    </article>`;

  content.querySelector("code").textContent = lesson.code;
  const drafts = JSON.parse(localStorage.getItem(practiceStorageKey) || "{}");
  const practiceEditor = document.getElementById("practice-editor");
  practiceEditor.value = drafts[practiceDraftKey()] || "";
  document.getElementById("save-practice").addEventListener("click", savePracticeDraft);
  const quizList = content.querySelector(".quiz-list");
  lesson.quiz.forEach((question, qIndex) => {
    const block = document.createElement("div");
    block.className = "quiz-question";
    block.dataset.correct = String(question[2]);
    block.innerHTML = `<p class="font-bold">${qIndex + 1}. ${question[0]}</p><div class="mt-3 grid gap-2">${question[1].map((option, index) => `<button type="button" class="quiz-option" data-option="${index}">${String.fromCharCode(65 + index)} · ${option}</button>`).join("")}</div><p class="quiz-feedback" aria-live="polite"></p>`;
    block.querySelectorAll(".quiz-option").forEach(option => option.addEventListener("click", () => answerQuestion(block, Number(option.dataset.option), question[3])));
    quizList.appendChild(block);
  });

  const previous = document.getElementById("previous-lesson");
  if (previous) previous.addEventListener("click", () => showLesson(activeLesson - 1));
  document.getElementById("complete-lesson").addEventListener("click", completeLesson);
  lucide.createIcons();
}

function answerQuestion(question, selected, explanation) {
  const correct = Number(question.dataset.correct);
  const options = [...question.querySelectorAll(".quiz-option")];
  const feedback = question.querySelector(".quiz-feedback");
  options.forEach(option => option.classList.remove("is-wrong"));
  if (selected === correct) {
    options[selected].classList.add("is-correct");
    options.forEach(option => option.disabled = true);
    feedback.textContent = "Correct. " + explanation;
    feedback.className = "quiz-feedback is-visible bg-emerald-400/10 text-emerald-100";
  } else {
    options[selected].classList.add("is-wrong");
    feedback.textContent = "Not quite. " + explanation;
    feedback.className = "quiz-feedback is-visible bg-rose-400/10 text-rose-100";
    setTimeout(() => options[selected].classList.remove("is-wrong"), 700);
  }
  const allCorrect = [...document.querySelectorAll("#lesson-content .quiz-question")].every(item => item.querySelector(".quiz-option.is-correct"));
  const complete = document.getElementById("complete-lesson");
  complete.disabled = !allCorrect;
  complete.classList.toggle("opacity-40", !allCorrect);
}

async function completeLesson() {
  progress[activeModule].add(activeLesson);
  saveProgress();
  await saveRemoteProgress(activeModule, activeLesson);
  updateProgress();
  if (activeLesson < 7) {
    activeLesson++;
    renderModule();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    renderModule();
    document.getElementById("module-complete-panel").scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function showLesson(index) {
  if (index < 0 || index > 7) return;
  if (index > 0 && !progress[activeModule].has(index - 1)) return;
  activeLesson = index;
  renderModule();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateProgress() {
  const count = progress[activeModule].size;
  const percent = Math.round(count / 8 * 100);
  document.getElementById("module-progress-value").textContent = percent + "%";
  document.getElementById("module-progress-fill").style.width = percent + "%";
  document.getElementById("module-complete-panel").classList.toggle("hidden", count !== 8);
}

document.querySelectorAll("[data-page-target]").forEach(button => button.addEventListener("click", () => showPage(button.dataset.pageTarget)));
document.querySelectorAll("[data-open-module]").forEach(button => button.addEventListener("click", () => openModule(button.dataset.openModule)));
document.getElementById("mobile-menu-button").addEventListener("click", () => {
  const menu = document.getElementById("mobile-menu");
  const open = menu.classList.toggle("is-open");
  document.getElementById("mobile-menu-button").setAttribute("aria-expanded", String(open));
});
document.getElementById("mobile-lesson-select").addEventListener("change", event => showLesson(Number(event.target.value)));
document.getElementById("sign-in-button").addEventListener("click", () => authenticate("signIn"));
document.getElementById("sign-up-button").addEventListener("click", () => authenticate("signUp"));
document.getElementById("sign-out-button").addEventListener("click", async () => {
  await supabaseClient.auth.signOut();
  setAuthenticated(null);
});
document.getElementById("mobile-sign-in-button").addEventListener("click", () => authenticate("signIn", "mobile-"));
document.getElementById("mobile-sign-up-button").addEventListener("click", () => authenticate("signUp", "mobile-"));
document.getElementById("mobile-sign-out-button").addEventListener("click", async () => {
  await supabaseClient.auth.signOut();
  setAuthenticated(null);
});
document.getElementById("gate-sign-in-button").addEventListener("click", () => authenticate("signIn", "gate-"));
document.getElementById("gate-sign-up-button").addEventListener("click", () => authenticate("signUp", "gate-"));

lucide.createIcons();
loadProgress();
renderModule();
loadRemoteProgress();