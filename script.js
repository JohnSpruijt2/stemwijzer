

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
        document.getElementById("whatAbout").innerHTML = next+1+". "+subjects[next]['title'];
        document.getElementById("question").innerHTML = subjects[next]['statement'];
        document.getElementById("agree").setAttribute('onclick' , 'answer("pro",'+next+')');
        document.getElementById("none").setAttribute('onclick' , 'answer("none",'+next+')');
        document.getElementById("disagree").setAttribute('onclick' , 'answer("contra",'+next+')');
        document.getElementById("skip").setAttribute('onclick' , 'answer("skip",'+next+')');
    }
}
function results() {
    for (var i = 0; i < subjects.length; i++) {
        for (var j = 0; j < subjects[i]['parties'].length; j++) {
            if (subjects[i]['parties'][j]['position'] == answers[i]) {
                for (var k = 0; k < resultsArray.length; k++) {
                    if (resultsArray[k]['name'] == subjects[i]['parties'][j]['name']) {
                        resultsArray[k]['amount']++;
                        console.log(resultsArray);
                    }
                }
            }
        }
    }
}