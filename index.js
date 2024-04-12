const questions = [
    {
        title: "What is the largest moon in our solar system?",
        A: "Ganymede",
        B: "Titan",
        C: "Europa",
        D: "Triton",
        Answer: "A" //Ganymede
    },
    {
        title: "Which planet has the Great Red Spot?",
        A: "Venus",
        B: "Mars",
        C: "Jupiter",
        D: "Saturn",
        Answer: "C" //Jupiter
    },
    {
        title: "What is the hottest planet in our solar system?",
        A: "Venus",
        B: "Earth",
        C: "Mercury",
        D: "Mars",
        Answer: "A" // Venus
    },
    {
        title: "Which planet has the most rings?",
        A: "Jupiter",
        B: "Saturn",
        C: "Uranus",
        D: "Neptune",
        Answer: "B" //Saturn
    },
    {
        title: "What is the farthest planet from the Sun in our solar system?",
        A: "Neptune",
        B: "Uranus",
        C: "Pluto",
        D: "Mercury",
        Answer: "A" //Neptune
    },
    {
        title: "What is the second smallest planet in our solar system?",
        A: "Venus",
        B: "Mars",
        C: "Mercury",
        D: "Earth",
        Answer: "B" //Mars
    },
    {
        title: "Which planet has the most elliptical orbit?",
        A: "Venus",
        B: "Mars",
        C: "Mercury",
        D: "Pluto",
        Answer: "C" //Mercury
    },
    {
        title: "What is the densest planet in our solar system?",
        A: "Earth",
        B: "Mercury",
        C: "Mars",
        D: "Venus",
        Answer: "A" //Earth
    },
    {
        title: "Which planet has the largest volcano in the solar system?",
        A: "Mars",
        B: "Earth",
        C: "Venus",
        D: "Mercury",
        Answer: "A" //Mars
    }    
];

const title = document.querySelector("h1");
const firstButton = document.querySelector(".first");
const secondButton = document.querySelector(".second");
const thirdButton = document.querySelector(".third");
const fourthButton = document.querySelector(".fourth");
const continueButton = document.querySelector(".continue");
const submitButton = document.querySelector(".submit");

function loadQuestion(info) {
    title.textContent = info.title;
    firstButton.textContent = info.A;
    secondButton.textContent = info.B;
    thirdButton.textContent = info.C;
    fourthButton.textContent = info.D;
}

loadQuestion(questions[0]);
let questionIndex = 1;

continueButton.addEventListener("click", () => {
    loadQuestion(questions[questionIndex]);
    questionIndex++;

    if (questionIndex === questions.length) {
        submitButton.hidden = false;
        continueButton.hidden = true;
    }
})