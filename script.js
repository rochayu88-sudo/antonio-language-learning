// Exercise Modal
const modal = document.getElementById("exerciseModal");
const closeBtn = document.getElementsByClassName("close")[0];

function openExercise(exerciseName) {
  modal.style.display = "block";
  document.getElementById("exerciseContent").innerHTML = getExerciseContent(exerciseName);
}

function closeExercise() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    closeExercise();
  }
}

// Vocabulary Flashcard
const vocabCard = document.getElementById("vocabCard");
const vocabWord = document.getElementById("vocabWord");
let isFlipped = false;

function flipCard() {
  if (!isFlipped) {
    vocabCard.style.transform = "rotateY(180deg)";
    vocabWord.textContent = "hello";
  } else {
    vocabCard.style.transform = "rotateY(0deg)";
    vocabWord.textContent = "ciao";
  }
  isFlipped = !isFlipped;
}

// Progress Bar
const progressBar = document.getElementById("overallProgress");
const progressText = document.getElementById("progressPercent");
let progress = 0;

function updateProgress(amount) {
  progress += amount;
  progressBar.style.width = `${progress}%`;
  progressText.textContent = `${progress.toFixed(0)}%`;
}

// Exercise Content Functions
function getExerciseContent(exerciseName) {
  switch (exerciseName) {
    case "articles":
      return `
        <h2>Article Detective</h2>
        <p>Match the correct article (il, la, lo) to the noun.</p>
        <div id="articleExercise"></div>
        <button onclick="checkArticles()">Submit</button>
      `;
    case "pronunciation":
      return `
        <h2>Pronunciation Trainer</h2>
        <p>Listen and repeat the Italian sounds.</p>
        <div id="pronunciationExercise"></div>
        <button onclick="practicePronunciation()">Practice</button>
      `;
    case "verbs":
      return `
        <h2>Verb Conjugation Wheel</h2>
        <p>Spin the wheel to practice conjugating verbs.</p>
        <div id="verbExercise"></div>
        <button onclick="spinVerbWheel()">Spin</button>
      `;
    case "prepositions":
      return `
        <h2>Preposition Puzzle</h2>
        <p>Drag and drop the objects using the correct prepositions.</p>
        <div id="prepositionExercise"></div>
        <button onclick="checkPrepositions()">Submit</button>
      `;
    default:
      return "";
  }
}
