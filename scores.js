var restartBtn = document.querySelector("button.restartBtn"),
    clearBtn = document.querySelector("button.clearBtn"),
    // get the highScores list and turn it back into an object
    highScores = JSON.parse(localStorage.getItem("highScores") || "[]"),
    scoreList = document.getElementById("score-list");

// Sorts the scores from highest to lowest
highScores.sort(function (a, b) {
    return b.score - a.score
})

// The display
for (var s = 0; s < highScores.length; s++) {
    var newLi = document.createElement("li")
    newLi.textContent = highScores[s].name + " - " + highScores[s].score
    scoreList.appendChild(newLi)
}


// click functions for clearing and restarting
clearBtn.addEventListener("click", function () {
    localStorage.clear();
    history.back()
});
restartBtn.addEventListener("click", function () {
    history.back();
});
