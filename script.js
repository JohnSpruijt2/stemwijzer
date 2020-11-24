

var answers = ["",""];
var resultsArray = ["",""];


function answer(answer, current) {
    if (answer == "skip") {
        if (answers[current] == null) {
            answers[current] = "";
        }
    } else {
        answers[current] = answer;
    }
    nextQuestion(current);
}

function nextQuestion(current) {
    var next = current+1;

    if (current == subjects.length-1) {
        results();
    } else {
        document.getElementById("whatAbout").innerHTML = next+1+". "+subjects[next]['title'];
        document.getElementById("question").innerHTML = subjects[next]['statement'];
        document.getElementById("agree").setAttribute('onclick' , 'answer("agree",'+next+')');
        document.getElementById("none").setAttribute('onclick' , 'answer("none",'+next+')');
        document.getElementById("disagree").setAttribute('onclick' , 'answer("disagree",'+next+')');
        document.getElementById("skip").setAttribute('onclick' , 'answer("skip",'+next+')');
    }
}
function results() {
    alert("end");
}