const quizData = [
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Delhi"
  },
  {
    question: "Which is the largest planet in our Solar System?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Jupiter"
  },
  {
    question: "What is the national animal of India?",
    options: ["Elephant", "Lion", "Tiger", "Leopard"],
    answer: "Tiger"
  }
];

let currentQuestion = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const curr = quizData[currentQuestion];
  questionEl.textContent = curr.question;

  optionsEl.innerHTML = ""; // clear previous options

  curr.options.forEach(option => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => selectAnswer(button, curr.answer);
    li.appendChild(button);
    optionsEl.appendChild(li);
  });
}

function selectAnswer(button, correctAnswer) {
  const allButtons = document.querySelectorAll("#options button");
  allButtons.forEach(btn => btn.disabled = true);

  if (button.textContent === correctAnswer) {
    button.style.backgroundColor = "green";
  } else {
    button.style.backgroundColor = "red";
  }
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "Quiz Completed!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
  }
});

loadQuestion(); // load the first question
