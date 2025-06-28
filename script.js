document.getElementById("start-btn").addEventListener("click", function(){
    document.getElementById("start-screen").classList.remove("active");
    document.getElementById("quiz-screen").classList.add("active");
    renderQuestion();
});

function renderQuestion(){
    let question = questions[currentQuestion];
    document.getElementById("question-text").innerHTML = question.question;
    document.getElementById("answers-container").innerHTML = "";
    question.answers.forEach(function(answer){
        let button = document.createElement("button");
        button.classList.add("answer");
        button.innerHTML = answer.text;
        button.addEventListener("click", function(){
            if(answer.correct){
                score++;
                document.getElementById("score").innerHTML = score;
            }
            currentQuestion++;
            if(currentQuestion >= questions.length){
                endQuiz();
            }else{
                renderQuestion();
            }
        });
        document.getElementById("answers-container").appendChild(button);
    });
}
