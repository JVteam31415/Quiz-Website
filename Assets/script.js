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
var questionText = ["Which of these was NOT an axis power during WWII?","Who was in command of US forces in the Phillipenes?","Which did not serve on the Eastern Front?","Which was not a British Dominion at the time of the war's start?"];
var questions = {
    "Which of these was NOT an axis power during WWII?":[["Thailand","Bulgaria","Yugoslavia","Slovakia"], 2],
    "Who was in command of US forces in the Phillipenes?":[["MacArthur","Eisenhower","Patton","Nimitz"] ,0],
    "Which did not serve on the Eastern Front?":[["Rommel","Mannstein","Bock","Paulus"] ,0],
    "Which was not a British Dominion at the time of the war's start?":[["Canada","India","Australia","New Zealand"] ,1]
}
var nameInput = document.querySelector("#name");
var nameButton = document.querySelector("#Enter-Name");
var playerName="YOUR NAME";
var scores = [];
var highScoringPlayers=[];

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
    var earliest = highScoringPlayers.length;
    q.textContent="High Scores:";
    for(var i=0;i<highScoringPlayers.length;i++){
        console.log(i)
        answerButtons[i].textContent = highScoringPlayers[i]+" "+scores[i];
        if(scores[i]<correct){
            earliest=i;
        }
    }
    console.log("first printed")
    for(var x = highScoringPlayers.length;x<4;x++){
        console.log(x)
        answerButtons[x].textContent = "EMPTY";
    }
    console.log(earliest);
    if(earliest<4){
        //get name
        //add to list at spot of earliest, 
        highScoringPlayers.splice(earliest,0,playerName);
        scores.splice(earliest,0,correct);
        //bump everything afterwards down
        if(highScoringPlayers.length>4){
            highScoringPlayers.length = 4;
            scores.length=4;
        }
    }
    for(var i=0;i<highScoringPlayers.length;i++){


        answerButtons[i].textContent = highScoringPlayers[i]+" "+scores[i];
    }
    for(var x = highScoringPlayers.length;x<4;x++){
        
        answerButtons[x].textContent = "EMPTY";
    }
    console.log("updated with player")
    

    activeQuestion=-1;
    timerButton.textContent="Start";
    console.log("done");
}
var getNextQuestion = function(){
    activeQuestion++;
    if(activeQuestion==questionText.length){
        //gameEnd();
        timeLeft=0;
        return;
    }
    q.textContent = questionText[activeQuestion];
    for(var i=0;i<4;i++){
        console.log(questions[q.textContent]);
        answerButtons[i].textContent = questions[q.textContent][0][i];
    }


}
nameButton.addEventListener("click",function(event){
    event.preventDefault();
    playerName = document.querySelector("#name").value;


})

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




