function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }
  
  Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
  };
  
  Quiz.prototype.guess = function (answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
      this.score++;
    }
  
    this.questionIndex++;
  };
  
  Quiz.prototype.isEnded = function () {
    return this.questionIndex === this.questions.length;
  };
  
  function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  
  Question.prototype.isCorrectAnswer = function (choice) {
    return this.answer === choice;
  };
  
  function populate() {
    if (quiz.isEnded()) {
      showScores();
    } else {
      // show question
      var element = document.getElementById("question");
      element.innerHTML = quiz.getQuestionIndex().text;
  
      // show options
      var choices = quiz.getQuestionIndex().choices;
      for (var i = 0; i < choices.length; i++) {
        var element = document.getElementById("choice" + i);
        element.innerHTML = choices[i];
        guess("btn" + i, choices[i]);
      }
  
      showProgress();
    }
  }
  
  function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
      quiz.guess(guess);
      populate();
    };
  }
  
  function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML =
      "Question " + currentQuestionNumber + " of " + quiz.questions.length;
  }
  
  function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
  }
  
  // questions here 
  var questions = [
    new Question(
      "How do you write 'Hello World' in an alert box?",
      [
        "alertmsg(“Hello, World”)",
        "Alert{‘Hello World’};",
        "alertmsg(“Hello, World”)",
        "alert(“Hello World”);",
      ],
      "alert(“Hello World”);"
    ),
    new Question(
      "How does a FOR loop start?",
      [
        "for i <= i++",
        "for(i = 0; i <= 5; i++;)",
        "for (i = 0; i <= 5)",
        "for (i <= 5, i++)",
      ],
      "for (i = 0; i <= 5)"
    ),
    new Question(
      "How can you add a comment in a JavaScript?",
      [
        "'This is a comment'",
        "**this is a comment**",
        "//This is a comment",
        "!--this is a comment",
      ],
      "//This is a comment"
    ),
    new Question(
      "How do you declare a JavaScript variable?",
      ["var highScore;", "variable highScore", "v carName;", "var carname;"],
      "var highScore;"
    ),
    new Question(
      "Which event occurs when the user clicks on an HTML element?",
      ["onClick", "clickEvent", "onchange", "onclick"],
      "onclick"
    ),
    new Question(
      "Which operator is used to assign a value to a variable?",
      [
        "=",
        "+",
        "X",
        "*",
      ],
      "="
    ),
    new Question(
      "What year was JavaScript invented?",
      [
        "1985",
        "1995",
        "1992",
        "1999",
      ],
      "1995"
    ),
    new Question(
      "Who invented JavaScript?",
      [
        "Jack Dorsey",
        "Bill Gates",
        "Brendan Eich",
        "Mark Zuckerberg",
      ],
      "Brendan Eich"
    ),
    new Question(
      "How to insert a comment that has more than one line?",
      [
        "** like this",
        "/** like this",
        "/* like this */",
        "!* like this",
      ],
      "/* like this */"
    ),
    new Question(
      "How do you create a function in JavaScript?",
      [
        "function var = myFunction",
        "function myFunction()",
        "function = myFunction;",
        "fun = myFunction;",
      ],
      "function myFunction()"
    ),
  ];
  
  
  // create quiz
  var quiz = new Quiz(questions);
  
  // display quiz
  populate();
  