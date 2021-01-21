var answers = []; //creation of array to keep track of the inputted answers
var resultsArray = []; //array to keep track of the amount of points of agreement
for (let i = 0; i < parties.length; i++) {
    resultsArray[i] = {
        name: parties[i]['name'],
        amount: 0
    }
}
const bigOrSmall = 14; //const to determine what is a primary or a secondary party


function answer(answer, current) { //function to store userers answer
    if (answer == "skip") {
        if (answers[current] == null) {
            answers[current] = "";
        }
    } else {
        answers[current] = answer;
    }
    nextQuestion(current);
}

function nextQuestion(current) { // function to determine if there is a next question
    if (current == subjects.length-1) {
        results();
    } else {
        showQuestion(current+1);
        showPreviousAnswer(current+1)
    }
}

function previousQuestion(current) { 
    showQuestion(current-1);
    showPreviousAnswer(current-1);
}

function results() { //function to determine how many points of agreement there are for each party
    for (var i = 0; i < subjects.length; i++) {
        for (var j = 0; j < subjects[i]['parties'].length; j++) {
            if (subjects[i]['parties'][j]['position'] == answers[i]) {
                for (var k = 0; k < resultsArray.length; k++) {
                    if (resultsArray[k]['name'] == subjects[i]['parties'][j]['name']) {
                        resultsArray[k]['amount']++;
                    }
                }
            }
        }
    }
    showResults('all');
}

function showResults(what) { //function to show the results in different ways

    document.getElementById('form').innerHTML = "";
    document.getElementById('form').innerHTML += `<button onclick="showResults('big')" id="bigBtn" class="w3-button w3-round-large w3-black w3-hover-cyan w3-hover-text-white">Alleen grote partijen</button>`
    document.getElementById('form').innerHTML += `<button onclick="showResults('small')" id="smallBtn" class="w3-button w3-round-large w3-black w3-hover-cyan w3-hover-text-white">Alleen kleine partijen</button>`
    document.getElementById('form').innerHTML += `<button onclick="showResults('all')" id="allBtn" class="w3-button w3-round-large w3-black w3-hover-cyan w3-hover-text-white">alle partijen</button>`

    if (what == 'all') {
        document.getElementById('allBtn').setAttribute('class','w3-button w3-round-large w3-blue w3-hover-cyan w3-hover-text-white');
        for (let i = 0; i < resultsArray.length; i++) {
            document.getElementById('form').innerHTML += "<h1 class='result'>"+resultsArray[i]['name']+" - "+resultsArray[i]['amount']+" overeenkomsten</h1>"
        }
    } else if (what == 'big') {
        document.getElementById('bigBtn').setAttribute('class','w3-button w3-round-large w3-blue w3-hover-cyan w3-hover-text-white');
        for (let i = 0; i < resultsArray.length; i++) {
            for (let j = 0; j < parties.length; j++) {
                if (parties[j]['name'] == resultsArray[i]['name']) {
                    if (parties[j]['size'] >= bigOrSmall) {
                        document.getElementById('form').innerHTML += "<h1 class='result'>"+resultsArray[i]['name']+" - "+resultsArray[i]['amount']+" overeenkomsten</h1>"
                    }
                }
                
            }
        }
    } else if (what == 'small') {
        document.getElementById('smallBtn').setAttribute('class','w3-button w3-round-large w3-blue w3-hover-cyan w3-hover-text-white');
        for (let i = 0; i < resultsArray.length; i++) {
            for (let j = 0; j < parties.length; j++) {
                if (parties[j]['name'] == resultsArray[i]['name']) {
                    if (parties[j]['size'] < bigOrSmall) {
                        document.getElementById('form').innerHTML += "<h1 class='result'>"+resultsArray[i]['name']+" - "+resultsArray[i]['amount']+" overeenkomsten</h1>"
                    }
                }
                
            }
        }
    }
}

function back(current) { //function for the back button (left arrow button)
    if (current == 0 || current == subjects.length-1) {
        window.location.href = "../index.html";
    } else {
        previousQuestion(current);
    }
}

function showPreviousAnswer(which) { //function to show the previous answer incase the user goes a question back
        document.getElementById("pro").setAttribute('class','w3-button w3-round-large w3-black w3-hover-cyan w3-hover-text-white');
        document.getElementById("none").setAttribute('class','w3-button w3-round-large w3-black w3-hover-cyan w3-hover-text-white');
        document.getElementById("contra").setAttribute('class','w3-button w3-round-large w3-black w3-hover-cyan w3-hover-text-white');
    if (answers[which] == 'pro') {
        document.getElementById("pro").setAttribute('class','w3-button w3-round-large w3-blue w3-hover-cyan w3-hover-text-white');
    } else if (answers[which] == 'none') {
        document.getElementById("none").setAttribute('class','w3-button w3-round-large w3-blue w3-hover-cyan w3-hover-text-white');
    } else if (answers[which] == 'contra') {
        document.getElementById("contra").setAttribute('class','w3-button w3-round-large w3-blue w3-hover-cyan w3-hover-text-white');
    }
}

function showQuestion(which) { //function to move to the next question
        document.getElementById("whatAbout").innerHTML = which+1+". "+subjects[which]['title'];
        document.getElementById("question").innerHTML = subjects[which]['statement'];
        document.getElementById("pro").setAttribute('onclick' , 'answer("pro",'+which+')');
        document.getElementById("none").setAttribute('onclick' , 'answer("none",'+which+')');
        document.getElementById("contra").setAttribute('onclick' , 'answer("contra",'+which+')');
        document.getElementById("skip").setAttribute('onclick' , 'answer("skip",'+which+')');
        document.getElementById("back").setAttribute('onclick' , 'back('+which+')');
}