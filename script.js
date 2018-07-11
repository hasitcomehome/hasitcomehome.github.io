var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var latestScores = JSON.parse(xhttp.responseText)[0];
        if (latestScores.home_team.code === "CRO" && latestScores.away_team.code === "ENG") {
            console.log("ENG v CRO");
            var engGoals = latestScores.away_team.goals;
            var croGoals = latestScores.home_team.goals;
            document.getElementById("score").innerHTML = "🏴󠁧󠁢󠁥󠁮󠁧󠁿 ENG " + engGoals + " - " + croGoals + " CRO 🇭🇷"
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