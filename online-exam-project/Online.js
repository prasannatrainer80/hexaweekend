var selected = 0;
var questionNo = 0;
var questions = new Array();
var score = 0;

questions[0] = "The father of C,C++ & Unix is";
questions[1] = "The Open source among following is";
questions[2] = "Pancake Sorting Algorithm and BASIC Interpreter was written by";
questions[3] = "Larry page and Sergei Brinn are Co-Founders of";
questions[4] = "The first computer to defeat Chess Grandmaster was";

var totalQuestions = questions.length;

var correctAnswers = new Array(totalQuestions);
var answers = new Array(totalQuestions);
var correctAnswers = new Array(totalQuestions);

for(var i=0;i<=4;i++) {
     answers[i] = new Array(4);
}

answers[0][0] ="Forouzan";
answers[0][1] ="Dennis Ritchie";
answers[0][2] = "Andrew Tenenbaum";
answers[0][3] = "Dijkstra"
correctAnswers[0] = 2;

answers[1][0] ="Windows XP";
answers[1][1] ="Mac OS X";
answers[1][2] = "Linux Ubuntu";
answers[1][3] = "Sun Solaris";
correctAnswers[1] = 4;


answers[2][0] ="Steve Jobs";
answers[2][1] ="Steve William";
answers[2][2] = "Bill Gates";
answers[2][3] = "Jerry yang";
correctAnswers[2] = 3;

answers[3][0] ="Yahoo";
answers[3][1] ="Rediff";
answers[3][2] = "Google";
answers[3][3] = "Apple";
correctAnswers[3] = 3;

answers[4][0] ="Chess Zeus";
answers[4][1] ="Armageddon";
answers[4][2] = "White Knight";
answers[4][3] = "Deep Blue";
correctAnswers[4] = 4;

const AnsweerChoosed = (ans) => {
    selected = ans;
}

const nextQuestion = () => {
    if (selected == correctAnswers[questionNo]) {
        score++;
    }
    questionNo++;
    if (questionNo == totalQuestions) {
         alert("Exam Over Your Score is " +score);
        questionNo = totalQuestions - 1;
    }
    loadQuestion();
}
const loadQuestion = () => {
      document.getElementById("Opt1").checked = false;
      document.getElementById("Opt2").checked = false;
      document.getElementById("Opt3").checked = false;                    
      document.getElementById("Opt4").checked = false;

    document.getElementById("Question").innerHTML =  
        "("+ (questionNo+1) + ") :" +questions[questionNo];
    document.getElementById("Option0").innerHTML = 
                    answers[questionNo][0];
    document.getElementById("Option1").innerHTML = 
                    answers[questionNo][1];
    document.getElementById("Option2").innerHTML = 
                    answers[questionNo][2];
    document.getElementById("Option3").innerHTML = 
                    answers[questionNo][3];

}