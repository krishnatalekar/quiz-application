const questions = [
    {
      "title": "What is the capital of France?",
      "A": "Paris",
      "B": "Rome",
      "C": "Berlin",
      "D": "London",
      "Answer": "Paris"
    },
    {
      "title": "Who wrote 'Romeo and Juliet'?",
      "A": "William Shakespeare",
      "B": "Charles Dickens",
      "C": "Jane Austen",
      "D": "F. Scott Fitzgerald",
      "Answer": "William Shakespeare"
    },
    {
      "title": "What is the chemical symbol for water?",
      "A": "H2O",
      "B": "CO2",
      "C": "NaCl",
      "D": "O2",
      "Answer": "H2O"
    },
    {
      "title": "Which planet is known as the 'Red Planet'?",
      "A": "Mars",
      "B": "Jupiter",
      "C": "Saturn",
      "D": "Uranus",
      "Answer": "Mars"
    },
    {
      "title": "Who painted the Mona Lisa?",
      "A": "Leonardo da Vinci",
      "B": "Pablo Picasso",
      "C": "Vincent van Gogh",
      "D": "Michelangelo",
      "Answer": "Leonardo da Vinci"
    },
    {
      "title": "What is the largest ocean on Earth?",
      "A": "Pacific",
      "B": "Atlantic",
      "C": "Indian",
      "D": "Arctic",
      "Answer": "Pacific"
    },
    {
      "title": "Who is credited with discovering the theory of relativity?",
      "A": "Albert Einstein",
      "B": "Isaac Newton",
      "C": "Galileo Galilei",
      "D": "Stephen Hawking",
      "Answer": "Albert Einstein"
    },
    {
      "title": "What is the hardest natural substance on Earth?",
      "A": "Diamond",
      "B": "Graphite",
      "C": "Topaz",
      "D": "Quartz",
      "Answer": "Diamond"
    },
    {
      "title": "Which country is the largest by land area?",
      "A": "Russia",
      "B": "Canada",
      "C": "China",
      "D": "United States",
      "Answer": "Russia"
    },
    {
      "title": "Who wrote 'To Kill a Mockingbird'?",
      "A": "Harper Lee",
      "B": "J.D. Salinger",
      "C": "Mark Twain",
      "D": "George Orwell",
      "Answer": "Harper Lee"
    }
];
    

const title = document.querySelector("h1");
const firstOption = document.querySelector(".first");
const secondOption = document.querySelector(".second");
const thirdOption = document.querySelector(".third");
const fourthOption = document.querySelector(".fourth");
const continueButton = document.querySelector(".continue");
const submitButton = document.querySelector(".submit");

function loadQuestion(info) {
    title.textContent = info.title;
    firstOption.textContent = info.A;
    secondOption.textContent = info.B;
    thirdOption.textContent = info.C;
    fourthOption.textContent = info.D;
}

loadQuestion(questions[0]);

let questionIndex = 1;

let score = 0;

let allOptions = document.querySelectorAll(".option");

allOptions.forEach((i) => {
    i.addEventListener("click", (event) => {
        i.style.backgroundColor = "#001219";
        i.style.color = "#94d2bd";
        let actualOptionChoosen = event.target.innerText;
        questions.map((i) => {
            if (i.Answer == actualOptionChoosen) {
                score++;
                console.log(score);
            }
        });
    });
});

continueButton.addEventListener("click", () => {
    allOptions.forEach((i) => {
        i.style.backgroundColor = "#94d2bd";
        i.style.color = "#001219";
    });
    loadQuestion(questions[questionIndex]);
    questionIndex++;

    if (questionIndex > questions.length - 1) {
        submitButton.hidden = false;
        continueButton.hidden = true;
    }
});

submitButton.addEventListener("click", () => {
    console.log(score);
    firstOption.hidden = true;
    secondOption.hidden = true;
    thirdOption.hidden = true;
    fourthOption.hidden = true;
    submitButton.hidden = true;
    continueButton.hidden = true;
    title.innerHTML = "Your score is " + score;
    title.classList.add("center");
});