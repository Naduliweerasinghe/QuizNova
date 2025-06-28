document.getElementById("start-btn").addEventListener("click", function(){
    document.getElementById("start-screen").classList.remove("active");
    document.getElementById("quiz-screen").classList.add("active");
});
var questions = [
    {
        question: "What is the capital of France?",
        answers: [
            {
                text: "Paris",
                isCorrect: true
            },
            {
                text: "London",
                isCorrect: false
            },
            {
                text: "Berlin",
                isCorrect: false
            },
            {
                text: "Madrid",
                isCorrect: false
            }
        ]
    },
    {
        question: "What is the biggest planet in our solar system?",
        answers: [
            {
                text: "Jupiter",
                isCorrect: true
            },
            {
                text: "Saturn",
                isCorrect: false
            },
            {
                text: "Mars",
                isCorrect: false
            },
            {
                text: "Uranus",
                isCorrect: false
            }
        ]
    },
    {
        question: "What is the largest living species of lizard?",
        answers: [
            {
                text: "Komodo dragon",
                isCorrect: true
            },
            {
                text: "Saltwater Crocodile",
                isCorrect: false
            },
            {
                text: "Black Mamba",
                isCorrect: false
            },
            {
                text: "Box Jellyfish",
                isCorrect: false
            }
        ]
    },
    {
        question: "What is the driest desert in the world?",
        answers: [
            {
                text: "Atacama Desert",
                isCorrect: true
            },
            {
                text: "Sahara Desert",
                isCorrect: false
            },
            {
                text: "Gobi Desert",
                isCorrect: false
            },
            {
                text: "Mojave Desert",
                isCorrect: false
            }
        ]
    },
    {
        question: "What is the world's largest waterfall?",
        answers: [
            {
                text: "Victoria Falls",
                isCorrect: true
            },
            {
                text: "Niagara Falls",
                isCorrect: false
            },
            {
                text: "Angel Falls",
                isCorrect: false
            },
            {
                text: "Iguazu Falls",
                isCorrect: false
            }
        ]
    }
];

var currentQuestion = 0;
var score = 0;
var progress = 0;

function showQuestion(){
    document.getElementById("question-text").innerText = questions[currentQuestion].question;
    var answers = questions[currentQuestion].answers;
    var container = document.getElementById("answers-container");
    container.innerHTML = "";
    for(var i = 0; i < answers.length; i++){
        var button = document.createElement("button");
        button.innerText = answers[i].text;
        button.classList.add("answer-btn");
        if(answers[i].isCorrect){
            button.classList.add("correct");
        } else {
            button.classList.add("incorrect");
        }
        button.addEventListener("click", checkAnswer);
        container.appendChild(button);
    }
}

function checkAnswer(event){
    var clickedButton = event.target;
    if(clickedButton.classList.contains("correct")){
        score++;
    }
    currentQuestion++;
    progress = (currentQuestion / questions.length) * 100;
    document.getElementById("progress").style.width = progress + "%";
    if(currentQuestion < questions.length){
        showQuestion();
    } else {
        document.getElementById("quiz-screen").classList.remove("active");
        document.getElementById("result-screen").classList.add("active");
        document.getElementById("final-score").innerText = score;
        document.getElementById("max-score").innerText = questions.length;
    }
}

showQuestion();

function updateQuizInfo() {
    document.getElementById("current-question").innerText = currentQuestion + 1;
    document.getElementById("score").innerText = score;
}

function checkAnswer(event){
    var clickedButton = event.target;
    if(clickedButton.classList.contains("correct")){
        score++;
    }
    currentQuestion++;
    progress = (currentQuestion / questions.length) * 100;
    document.getElementById("progress").style.width = progress + "%";
    updateQuizInfo();
    if(currentQuestion < questions.length){
        showQuestion();
    } else {
        document.getElementById("quiz-screen").classList.remove("active");
        document.getElementById("result-screen").classList.add("active");
        document.getElementById("final-score").innerText = score;
        document.getElementById("max-score").innerText = questions.length;
    }
}

showQuestion();
updateQuizInfo();

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    progress = 0;
    document.getElementById("quiz-screen").classList.add("active");
    document.getElementById("result-screen").classList.remove("active");
    showQuestion();
    updateQuizInfo();
}