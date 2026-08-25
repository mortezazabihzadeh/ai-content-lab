const decisionInput = document.getElementById("decision");
const analyzeButton = document.getElementById("analyzeBtn");
const result = document.getElementById("result");

const ambitionBar = document.getElementById("ambitionBar");
const curiosityBar = document.getElementById("curiosityBar");
const riskBar = document.getElementById("riskBar");
const confidenceBar = document.getElementById("confidenceBar");

const ambitionScore = document.getElementById("ambitionScore");
const curiosityScore = document.getElementById("curiosityScore");
const riskScore = document.getElementById("riskScore");
const confidenceScore = document.getElementById("confidenceScore");


analyzeButton.addEventListener("click", () => {

    const text = decisionInput.value.trim();

    if (!text) {
        alert("Write a decision first");
        return;
    }

    const ambition = calculateScore(text, [
        "build",
        "startup",
        "business",
        "career",
        "goal",
        "create",
        "launch",
        "grow"
    ]);

    const curiosity = calculateScore(text, [
        "learn",
        "explore",
        "discover",
        "why",
        "how",
        "research",
        "new",
        "experiment"
    ]);

    const risk = calculateScore(text, [
        "quit",
        "risk",
        "invest",
        "bet",
        "change",
        "leave",
        "move",
        "start"
    ]);

    const confidence = calculateScore(text, [
        "will",
        "can",
        "believe",
        "ready",
        "decide",
        "commit",
        "sure",
        "do"
    ]);

    result.classList.remove("hidden");

    setTimeout(() => {
        showScore(ambitionBar, ambitionScore, ambition);
        showScore(curiosityBar, curiosityScore, curiosity);
        showScore(riskBar, riskScore, risk);
        showScore(confidenceBar, confidenceScore, confidence);
    }, 100);

});


function calculateScore(text, keywords) {

    const lowerText = text.toLowerCase();

    let score = 35;

    keywords.forEach(keyword => {

        if (lowerText.includes(keyword)) {
            score += 8;
        }

    });

    score += Math.floor(Math.random() * 16);

    return Math.min(score, 99);
}


function showScore(bar, number, value) {

    bar.style.width = `${value}%`;
    number.textContent = value;

}