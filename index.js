'use strict';
//$(document).ready(function(){});
$(function () {
  var Score = 0;
  var questionNum = 0;

// function that runs through questions that have not been rendered
// if questions get to final number (10) then the results are displayed
function displayQuestion () {
  if (questionNum < STORE.length){
    $(`#questionNum`).text (questionNum + 1);
    // quiz container is empty from what main rendered
    $(`.quizContainer`).empty();
    // allows container to be used to display current questions
    $(`.quizContainer`).html(`
      <div class="question">${STORE[questionNum].question}?</div>
          <form>
            <fieldset>
            <legend> Possible Answers</legend>
            ${displayPossibleAnswers(STORE[questionNum].answers)}
            <br>
            <button type ='submit' class ='submitAnswerButton'>Submit</button> 
            </fieldset>
          </form>
    `);
    // will go to amount correcct based on the number of questions in STORE
    } else  {
    displayFinalResults();
}
}
function displayPossibleAnswers(answers) {
  let answerHtml = '';
  // standard loop to run a set of instructions until end
  for (let i=0; i<answers.length; i++) {
    let currentAnswer = 
    `<label class="possibleAnswer">
      <div class="answer"><input type="radio" value="${answers[i]}" name="answer" required>
      ${answers[i]}
    </div></label>`
    answerHtml += currentAnswer;
  }
  return answerHtml;
}
function rightOrWrong() {
  $('form').on('submit', function (event) {
    event.preventDefault();
    // this is what answer you choose
    let userAnswer = $('input:checked').val();
    let actualAnswer = STORE[questionNum].correctAnswer;
    // if user input matches answer
    if (userAnswer === actualAnswer) {
      isRightFeedback();
      addPoint();
    } else {
      isWrongFeedback();
    }
  })
}

function isRightFeedback() {
  $('.quizContainer').empty();
  /*$('.quizContainer').html(`
    <h3>THAT'S RIGHT!</h3>
    <img src="${STORE[questionNum].photo}">
    <h3>${STORE[questionNum].correctAnswer}</h3>
    <p>${STORE[questionNum].Information}</p>
    <button type='submit' id='nextQuestionButton'>Next Question</button>
  `);*/
  $('.quizContainer').html(`
    <h3>THAT'S RIGHT!</h3>
    <div class= "myimageboxwrapper"> <div class = "myimagebox" style="background-image:url('${STORE[questionNum].photo}');"></div></div>
    <h3>${STORE[questionNum].correctAnswer}</h3>
    <p class="information">${STORE[questionNum].information}</p>
    <button type='submit' id='nextQuestionButton'>Next Question</button>
  `);
}

function isWrongFeedback() {
  $('.quizContainer').empty ();
  $('.quizContainer').html(`
    <h3>Sorry, that's incorrect!</h3>
    <h4>The answer is ${STORE[questionNum].correctAnswer}</h3>
    <div class= "myimageboxwrapper"> <div class = "myimagebox" style="background-image:url('${STORE[questionNum].photo}');"></div></div>
    <h3>${STORE[questionNum].correctAnswer}</h3>
    <p class="information">${STORE[questionNum].information}</p>
    <button type="submit" id="nextQuestionButton">Next Question</button>
  `);
}

function nextQuestion() {
  $('.quizContainer').on('click', '#nextQuestionButton', function (event) {
    questionNum++;
    displayQuestion();
    rightOrWrong();
  });
}

function addPoint() {
  Score++;
  $('#Score').text(Score);
}
// needs data input
function displayFinalResults() {
  console.log("displayQuestion");
  $('.quizContainer').empty();
  if (Score <= 3) {
    $('.quizContainer').html(`
      <p>Are you an Avenger or still in training. A score of ${Score} points. You will never defeat Thanos like that!</p>
      <button type="submit" id="restartQuizButton">Try Again</button>`
    );
  } else if (Score <=7) {
    $('.quizContainer').html(`
      </p>I Guess this is good for a rookie on his first mission, But a score of ${Score} points will be no match against the Infinity Stones.</p>
      <button type="submit" id="restartQuizButton">Try Again</button>`
    );
  } else {
    $('.quizContainer').html(`
      <p> I can see you have what it takes to assist the Avengers in defeating Thanos. That  score of ${Score} points is whats needed to protect earth!  </p>
      <button type="submit" id="restartQuizButton">Try Again</button>`
    );
  }
  $('.quizContainer').on('click', '#restartQuizButton', function(event) {
   location.reload();
  });
}

    /*console.log(Score);
    console.log(questionNum);
    var Score = 0;
    var questionNum = 0;
    console.log(Score);
    console.log(questionNum);
    /*displayQuestion();
    rightOrWrong();
    nextQuestion();
    startQuiz();
    $('.quizContainer').css('border','solid 3px black');
        $(`#questionNum`).text (questionNum + 1);
    // quiz container is empty from what main rendered
    $(`.quizContainer`).empty();
    // allows container to be used to display current questions
    $(`.quizContainer`).html(`
      <div class="question">${STORE[questionNum].question}?</div>
          <form>
            <fieldset>
            <legend> Possible Answers</legend>
            ${displayPossibleAnswers(STORE[questionNum].answers)}
            <br>
            <button type ='submit' class ='submitAnswerButton'>Submit</button> 
            </fieldset>
          </form>
    `);
  });
}*/

function startQuiz() {
  $('.quizContainer').on('click', '.start', function(event) {
    displayQuestion();
    rightOrWrong();
    nextQuestion();
  });
}

  startQuiz();
});