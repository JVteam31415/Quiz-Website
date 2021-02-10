var active = false;
var nextQuestion = true;
var timeLeft;
var timerButton = document.querySelector("#timerStart");
var q = document.getElementById("question");
var b1 = document.getElementById("ans1");
var b2 = document.getElementById("ans2");
var b3 = document.getElementById("ans3");
var b4 = document.getElementById("ans4");
var answerButtons = [b1,b2,b3,b4];
var timerEl = document.getElementById("countdown");
var correct;
var activeQuestion;
var questionText = ["q1","q2","q3"];
var questions = {
    "q1":[["a","b","c","d"], 2],
    "q2":[["a2","b2","c2","d2"] ,0],
    "q3":[["a3","b3","c3","d3"] ,0]
}

timerButton.addEventListener("click", function() {
    if(active){
       return; 
    }
    active=true;
    timerButton.textContent="";
    
    correct = 0;
    activeQuestion=-1;
    getNextQuestion();
    
    runClock();
    
    
  });

var runClock = function(){
    timeLeft=30;
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
          // Set the `textContent` of `timerEl` to show the remaining seconds
          timerEl.textContent = timeLeft + ' seconds remaining';
          // Decrement `timeLeft` by 1
          timeLeft--;
        } else if (timeLeft === 1) {
          // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
          timerEl.textContent = timeLeft + ' second remaining';
          timeLeft--;
        } else {
          // Once `timeLeft` gets to 0, set `timerEl` to an empty string
          timerEl.textContent = "Time's up!";
          gameEnd();
          active=false;
          // Use `clearInterval()` to stop the timer
          clearInterval(timeInterval);
        }
      }, 1000);
}

var gameEnd = function(){
    q.textContent = "Quiz over. You got "+correct+" questions correct.";
    timeLeft=0;
    console.log("done");
}
var getNextQuestion = function(){
    activeQuestion++;
    if(activeQuestion==questionText.length){
        gameEnd();
        return;
    }
    q.textContent = questionText[activeQuestion];
    for(var i=0;i<4;i++){
        console.log(questions[q.textContent]);
        answerButtons[i].textContent = questions[q.textContent][0][i];
    }


}

b1.addEventListener("click", function(){
        if(active){
            if(0==questions[questionText[activeQuestion]][1]){
                //correct
                correct++;
            }
            else{
                //incorrect
                timeLeft-=5;
            }
    
            //next question
            getNextQuestion();
        }
    })
b2.addEventListener("click", function(){
        if(active){
            if(1==questions[questionText[activeQuestion]][1]){
                //correct
                correct++;
            }
            else{
                //incorrect
                timeLeft-=5;
            }
    
            //next question
            getNextQuestion();
        }
    })

    b3.addEventListener("click", function(){
        if(active){
            if(2==questions[questionText[activeQuestion]][1]){
                //correct
                correct++;
            }
            else{
                //incorrect
                timeLeft-=5;
            }
    
            //next question
            getNextQuestion();
        }
    })
    b4.addEventListener("click", function(){
        if(active){
            if(3==questions[questionText[activeQuestion]][1]){
                //correct
                correct++;
            }
            else{
                //incorrect
                timeLeft-=5;
            }
    
            //next question
            getNextQuestion();
        }
    })




