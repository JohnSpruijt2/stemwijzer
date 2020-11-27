var answers = ["",""];
var resultsArray = [
    {
        name: "VVD",
        amount: 0
    },
    {
        name: "CDA",
        amount: 0
    },
    {
        name: "PVV",
        amount: 0
    },
    {
        name: "D66",
        amount: 0
    },
    {
        name: "GroenLinks",
        amount: 0
    },
    {
        name: "SP",
        amount: 0
    },
    {
        name: "PvdA",
        amount: 0
    },
    {
        name: "ChristenUnie",
        amount: 0
    },
    {
        name: "Partij voor de Dieren",
        amount: 0
    },
    {
        name: "SGP",
        amount: 0
    },
    {
        name: "DENK",
        amount: 0
    },
    {
        name: "Forum voor Democratie",
        amount: 0
    },
    {
        name: "Lokaal in de Kamer",
        amount: 0
    },
    {
        name: "OndernemersPartij",
        amount: 0
    },
    {
        name: "VNL",
        amount: 0
    },
    {
        name: "Nieuwe Wegen",
        amount: 0
    },
    {
        name: "Piratenpartij",
        amount: 0
    },
    {
        name: "Artikel 1",
        amount: 0
    },
    {
        name: "Libertarische Partij",
        amount: 0
    },
    {
        name: "50Plus",
        amount: 0
    },
    {
        name: "Vrijzinnige Partij",
        amount: 0
    },
    {
        name: "Libertarische Parti",
        amount: 0
    },
    {
        name: "Niet Stemmers",
        amount: 0
    }
];



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
        showQuestion(next);
    }

    showPreviousAnswer(next)
}

function previousQuestion(current) {
    var previous = current-1;

    showQuestion(previous);

    showPreviousAnswer(previous);

}

function results() {
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
    document.getElementById('form').innerHTML = "";
    for (let i = 0; i < resultsArray.length; i++) {
        document.getElementById('form').innerHTML += "<h1 class='result'>"+resultsArray[i]['name']+" - "+resultsArray[i]['amount']+" overeenkomsten</h1>"
        
    }
}

function back(current) {
    if (current == 0 || current == subjects.length-1) {
        window.location.href = "../index.html";
    } else {
        previousQuestion(current);
    }
}

function showPreviousAnswer(which) {
    if (answers[which] == 'pro') {
        document.getElementById("pro").setAttribute('class','w3-button w3-round-large w3-blue w3-hover-cyan w3-hover-text-white');
        document.getElementById("none").setAttribute('class','w3-button w3-round-large w3-black w3-hover-cyan w3-hover-text-white');
        document.getElementById("contra").setAttribute('class','w3-button w3-round-large w3-black w3-hover-cyan w3-hover-text-white');
    } else if (answers[which] == 'none') {
        document.getElementById("pro").setAttribute('class','w3-button w3-round-large w3-black w3-hover-cyan w3-hover-text-white');
        document.getElementById("none").setAttribute('class','w3-button w3-round-large w3-blue w3-hover-cyan w3-hover-text-white');
        document.getElementById("contra").setAttribute('class','w3-button w3-round-large w3-black w3-hover-cyan w3-hover-text-white');
    } else if (answers[which] == 'contra') {
        document.getElementById("pro").setAttribute('class','w3-button w3-round-large w3-black w3-hover-cyan w3-hover-text-white');
        document.getElementById("none").setAttribute('class','w3-button w3-round-large w3-black w3-hover-cyan w3-hover-text-white');
        document.getElementById("contra").setAttribute('class','w3-button w3-round-large w3-blue w3-hover-cyan w3-hover-text-white');
    } else {
        document.getElementById("pro").setAttribute('class','w3-button w3-round-large w3-black w3-hover-cyan w3-hover-text-white');
        document.getElementById("none").setAttribute('class','w3-button w3-round-large w3-black w3-hover-cyan w3-hover-text-white');
        document.getElementById("contra").setAttribute('class','w3-button w3-round-large w3-black w3-hover-cyan w3-hover-text-white');
    }
}

function showQuestion(which) {
        document.getElementById("whatAbout").innerHTML = which+1+". "+subjects[which]['title'];
        document.getElementById("question").innerHTML = subjects[which]['statement'];
        document.getElementById("pro").setAttribute('onclick' , 'answer("pro",'+which+')');
        document.getElementById("none").setAttribute('onclick' , 'answer("none",'+which+')');
        document.getElementById("contra").setAttribute('onclick' , 'answer("contra",'+which+')');
        document.getElementById("skip").setAttribute('onclick' , 'answer("skip",'+which+')');
        document.getElementById("back").setAttribute('onclick' , 'back('+which+')');
}