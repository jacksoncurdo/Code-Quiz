var questionToShowIndex = 0
var singleChoice = document.createElement(`button`);
var score = 0;
var time = 30;
var clockDisplay = document.getElementById('timer');

var questions = [{
    // include if else statement if they get right score and move forward, else deduct time and move forward in my functions on the main
    question: "which one of these is not a data type?",
    choices: [
        "string",
        "boolean",
        "number",
        "div"
    ],
    answer: "div"
},
{
    question: "an array is represented by which of these characters",
    choices: ["[]", "{}", "()", "#"],
    answer: "[]"
},
{
    question: "true and false represent what type of data type?",
    choices: [
        "boolean",
        "number",
        "string",
        "none of these"
    ],
    answer: "boolean"
},]

//Calls the end function when time runs out
setTimeout(end, 30000)
//call the gameClock function that updates the timer every second
 var myVar = setInterval(gameClock, 1000);
//Calls the function that renders the questions and choices
showQuestion()


function showQuestion() {
    // renders the question
    console.log(`make something happen` + questionToShowIndex)
    document.getElementById(`questions`).innerHTML = questions[questionToShowIndex].question
    document.getElementById(`score`).innerHTML = `Your Score is: ${score}`
    //Clears the old options every time
    document.getElementById(`choices`).innerHTML = ""
    for (let i = 0; i < questions[questionToShowIndex].choices.length; i++) {
        console.log(`the question is ${questions[questionToShowIndex].question}`)
        console.log(`the index is ${questionToShowIndex}`)
        var singleChoice = document.createElement(`button`)
        singleChoice.innerText = (questions[questionToShowIndex].choices[i])
        singleChoice.classList.add(`choice`)
        document.getElementById(`choices`).appendChild(singleChoice)
    }
    checkAnswer()
}




// add a click event for the class of choice


function checkAnswer() {
    document.querySelectorAll(".choice").forEach(function (each) {
        each.addEventListener("click", function (event) {
            var userChose = event.target.innerText
            let correctAnswer = questions[questionToShowIndex].answer
            console.log(`User chose ${userChose}`);
            if (correctAnswer === userChose) {
                alert("you are correct")
                console.log(`correctAnswer is ${correctAnswer}`)
                questionToShowIndex++
                score++
                console.log(`questionToShowIndex = ${questionToShowIndex}`)
                document.querySelectorAll(".choice").innerText = ""
                showQuestion()
            } else {
                alert("you are incorrect")
            }
        })
    })
}

function gameClock(){
    time--;
    clockDisplay.innerHTML = `Seconds Remaining: ${time}`
    }


    function end() {
        document.getElementById(`questions`).innerHTML = `The quiz is over, your score is
        ${score}`
        //Clears the quiz and displays the final score
        document.getElementById(`choices`).innerHTML = ""
        clockDisplay.innerHTML = `Times Up`
        clearInterval(myVar);
        }


        document.getElementById("myBtn").addEventListener("click", showQuestion())
        // need to set the score higher under "your score" for the final question
        // need to clear the timer and display score when final question is answered
        // need a start button
        
