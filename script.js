var xhttp = new XMLHttpRequest();
var ko = new Date("2018-07-11T18:00:00Z");
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var latestScores = JSON.parse(xhttp.responseText)[0];
        if (latestScores.home_team.code === "CRO" && latestScores.away_team.code === "ENG") {
            console.log("ENG v CRO");
            var engGoals = latestScores.away_team.goals;
            var croGoals = latestScores.home_team.goals;
            document.getElementById("score").innerHTML = "<img src='eng.png' height='20'/>󠁧󠁢󠁥󠁮󠁧󠁿 ENG " + engGoals + " - " + croGoals + " CRO <img src='cro.png' height='20'/>"
        }
        var d = Date.now();
        if(d < ko) {
            document.getElementById("ko").innerHTML = "Today 19:00";
        } else {
            document.getElementById("ko").innerHTML = latestScores.time;
        }
        setTimeout(function () {
            getLatestScores();
        }, 5000);
    }
};

function getLatestScores() {
    xhttp.open("GET", "https://api.hasitcomehome.com", true);
    xhttp.send();


}

getLatestScores();