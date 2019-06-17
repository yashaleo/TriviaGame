var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("choice"));

var currentQuestion = {};
var score = 0;
var acceptingAnswers = false;
var questionCounter = 0;
var avaiableQuestions = [];

var questions = [
  {
    question: "How did Daenerys Targaryen eventually hatch her dragon eggs?",
    choice1: "In a lightning storm",
    choice2: "In a funeral pyre",
    choice3: "In a fireplace",
    choice4: "In a frozen cave",
    answer: 2
  },
  {
    question:
      "Which U.S. city was one of 8 international locations visited by the 2015 'Game of Thrones' Exhibition?",
    choice1: "Chicago",
    choice2: "New York City",
    choice3: "San Diego",
    choice4: "Boston",
    answer: 3
  },
  {
    question:
      "The phrase 'Valar Morghulis' or 'all men must die' is usually responded with:",
    choice1: "Valar Dohaeris or 'all men must serve’",
    choice2: "Valar Rohnas or 'all men must live’",
    choice3: "Valar GoGo or 'all men must dance’",
    choice4: "Valar Daenerys or 'all men serve Daenerys’",
    answer: 1
  },
  {
    question:
      "American actor Peter Dinklage, who plays Tyrion Lannister, also had a starring role in this fantasy franchise:",
    choice1: "Lord of the Rings",
    choice2: "Highlander",
    choice3: "The Chronicles of Narnia",
    choice4: "The Legend of Zelda",
    answer: 3
  },
  {
    question:
      "What is the only thing that can put out volatile Wildfire?",
    choice1: "Sand",
    choice2: "Water",
    choice3: "Dragon's Blood",
    choice4: "Sunlight",
    answer: 1
  },
  {
    question:
      "Besides dragonglass, what is the only other substance capable of defeating White Walkers?",
    choice1: "Weirwood",
    choice2: "Wildfire",
    choice3: "Valyrian Steel",
    choice4: "Snowballs",
    answer: 3
  },
  {
    question:
      "How many times has Beric Dondarrion been brought back to life?",
    choice1: "Three times",
    choice2: "Five times",
    choice3: "Six times",
    choice4: "Seven times",
    answer: 3
  },
  {
    question:
      "'Game of Thrones' star Ania Bukstein is not only a famous Israeli actress, but also a:",
    choice1: "Ballet dancer",
    choice2: "Watercolor artist",
    choice3: "Singer and songwriter",
    choice4: "Synchronized swimming instructor",
    answer: 3
  },
  {
    question:
      "Which Stark family direwolf was killed in retaliation for an attack on Prince Joffrey?",
    choice1: "Ghost",
    choice2: "Lady",
    choice3: "Nymeria",
    choice4: "Summer",
    answer: 2
  },
  {
    question:
      "Arya's punishment for stealing from the Many-Face God is:",
    choice1: "Death",
    choice2: "Memory Loss",
    choice3: "Blindness",
    choice4: "Uncontrollable laughter",
    answer: 3
  },
  {
    question:
      "'It's nothing' were the last words of this infamous character",
    choice1: "Renly Baratheon",
    choice2: "Tywin Lannister",
    choice3: "Robb Stark",
    choice4: "King Joffrey",
    answer: 4
  },
  {
    question:
      "The name of King Tommen's favorite cat is:",
    choice1: "Battle Pus",
    choice2: "Little Lion",
    choice3: "Ser Pounce",
    choice4: "Prince Fuzzy",
    answer: 3
  },
  {
    question:
      "What was the name of Ned Stark's greatsword?",
    choice1: "Ice",
    choice2: "Oathkeeper",
    choice3: "Widow's Wail",
    choice4: "Northguard",
    answer: 1
  },
  {
    question:
      "Who shoots the flaming arrow that subsequently destroy's Stannis' fleet in Blackwater Bay?",
    choice1: "Tyrion Lannister",
    choice2: "King Joffrey",
    choice3: "Jaime Lannister",
    choice4: "Bronn",
    answer: 4
  },
  {
    question:
      "Prince Oberyn Martell is nicknamed the 'Red Viper' because of his combat and:",
    choice1: "Pride in drawing blood first",
    choice2: "Knowledge of poisons",
    choice3: "Nighttime attacks",
    choice4: "Ruby-colored armor",
    answer: 2
  },
  {
    question:
      "The Night King was created using a dagger made of:",
    choice1: "Valyrian Steel",
    choice2: "Blue Ice",
    choice3: "Dragonglass",
    choice4: "Weirwood",
    answer: 3
  },
  {
    question:
      "How many arrows does Ramsay Bolton let loose at Rickon Stark?",
    choice1: "Three",
    choice2: "Five",
    choice3: "Two",
    choice4: "Four",
    answer: 4
  },
  {
    question:
      "Who created the secret tunnel in the sewers under Casterly Rock?",
    choice1: "Tyrion Lannister",
    choice2: "Lord Baelish",
    choice3: "Jaime Lannister",
    choice4: "Varys",
    answer: 1
  },
  {
    question:
      "What is Sansa Stark's favorite treat?",
    choice1: "Apple cranberry crisp",
    choice2: "Strawberry rhubarb pie",
    choice3: "Lemon cakes",
    choice4: "Honey cakes",
    answer: 3
  },
  {
    question:
      "Dead creatures revived by White Walkers are known as:",
    choice1: "Walkers",
    choice2: "Wights",
    choice3: "Zombie",
    choice4: "Claws",
    answer: 2
  },
];

var answerScore = 1;
var maxQuestions = 10;

startGame = () => {
  questionCounter = 0;
  score = 0;
  avaiableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
    if (avaiableQuestions.length == 0 || questionCounter >= maxQuestions) {
    return window.location.assign("end.html");
}
  questionCounter++;
  var questionIndex = Math.floor(Math.random() * avaiableQuestions.length);
  currentQuestion = avaiableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    var number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  avaiableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    var selectedChoice = e.target;
    var selectedAnswer = selectedChoice.dataset["number"];
    var check = "incorret";
    if (selectedAnswer == currentQuestion.answer){
        check = "correct";
    }

    selectedChoice.parentElement.classList.add(check);
setTimeout( () => {
    selectedChoice.parentElement.classList.remove(check);
    getNewQuestion();
}, 500);

  });
});

incrementScor = num => {
    score +=num;
    scoreText.innerText = score;
}

startGame();
