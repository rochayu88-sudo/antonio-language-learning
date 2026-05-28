// Exercise Modal Functions
function openExercise(exerciseName) {
    document.getElementById("exerciseModal").style.display = "block";
    document.getElementById("exerciseContent").innerHTML = getExerciseContent(exerciseName);
}

function closeExercise() {
    document.getElementById("exerciseModal").style.display = "none";
}

function getExerciseContent(exerciseName) {
    switch (exerciseName) {
        case "articles":
            return `
                <h2>Article Detective</h2>
                <p>Match the correct article (il, la, lo) to the noun.</p>
                <!-- Add interactive exercise content here -->
            `;
        case "pronunciation":
            return `
                <h2>Pronunciation Trainer</h2>
                <p>Practice pronouncing Italian sounds and syllables.</p>
                <!-- Add interactive exercise content here -->
            `;
        case "verbs":
            return `
                <h2>Verb Conjugation Wheel</h2>
                <p>Spin the wheel to practice conjugating common Italian verbs.</p>
                <!-- Add interactive exercise content here -->
            `;
        case "prepositions":
            return `
                <h2>Preposition Puzzle</h2>
                <p>Drag and drop the objects to the correct locations using Italian prepositions.</p>
                <!-- Add interactive exercise content here -->
            `;
        default:
            return "";
    }
}

// Vocabulary Flashcard Functions
function flipCard() {
    document.getElementById("vocabCard").classList.toggle("flipped");
}

// Progress Bar Functions
function updateProgress(percentage) {
    document.getElementById("overallProgress").style.width = percentage + "%";
    document.getElementById("progressPercent").textContent = percentage + "%";
}
