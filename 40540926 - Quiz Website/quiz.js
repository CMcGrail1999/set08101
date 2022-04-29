var questionIndex = 0;
var questions = document.getElementsByClassName("question");

function checkAnswers() {

var q1 = document.quiz.q1.value;
var q2 = document.quiz.q2.value;
var q3 = document.quiz.q3.value;
var q4 = document.quiz.q4.value;
var q5 = document.quiz.q5.value;
var q6 = document.quiz.q6.value;
var q7 = document.quiz.q7.value;
var q8 = document.quiz.q8.value;
var q9 = document.quiz.q9.value;
var q10 = document.quiz.q10.value;

  // User points start at 0
var points = 0;

  // Add point if question correct
if (q1 == "false") {
	points += 2;
}
if (q1 == "true") {
	points -= 1;
}

if (q2 == "false") {
	points += 2;
}
if (q2 == "true") {
	points -= 1;
}

if (q3 == "true") {
	points += 2;
}
if (q3 == "false") {
	points -= 1;
}

if (q4 == "false") {
	points += 2;
}
if (q4 == "true") {
	points -= 1;
}

if (q5 == "true") {
	points += 2;
}
if (q5 == "false") {
	points -= 1;
}

if (q6 == "false") {
	points += 2;
}
if (q6 == "true") {
	points -= 1;
}

if (q7 == "true") {
	points += 2;
}
if (q7 == "false") {
	points -= 1;
}

if (q8 == "false") {
	points += 2;
}
if (q8 == "true") {
	points -= 1;
}

if (q9 == "false") {
	points += 2;
}
if (q9 == "true") {
	points -= 1;
}

if (q10 == "true") {
	points += 2;
}
if (q10 == "false") {
	points -= 1;
}

	alert('You scored ' + points + '/20 points');
}




function showQuestionAtIndex() {
	for (let index = 0; index < questions.length; index++) {
		if (index === questionIndex) {
		questions[index].classList.add('show-question');
		questions[index].classList.remove('hide-question');
		} else {
		questions[index].classList.add('hide-question');
		questions[index].classList.remove('show-question');
		}
	}
}

function previousQuestion() {
	if (questionIndex === 0) {
    console.log('FIRST');
	} else {
    questionIndex -= 1;
    showQuestionAtIndex();
  }
}

function nextQuestion() {
	if (questionIndex === questions.length - 1) {
    console.log('LAST');
	} else {
    questionIndex += 1;
    showQuestionAtIndex();
  }   
}

