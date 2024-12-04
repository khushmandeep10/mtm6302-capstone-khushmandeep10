const errorBox = document.getElementById("msg");
const store_corrected = document.getElementById("store_correct");
const store_incorrected = document.getElementById("store_incorrect");
const question_d = document.getElementById("question");
const start_button = document.querySelector(".start_button");
const question_container = document.querySelector(".question-container");
const register_container = document.querySelector(".register-container");
let answer_o1_d = document.getElementById("option1");
let answer_o2_d = document.getElementById("option2");
let answer_o3_d = document.getElementById("option3");
let answer_o4_d = document.getElementById("option4");
let quiz_diff = "easy";

store_corrected.innerText = localStorage.getItem("correct") ? localStorage.getItem("correct") : 0;
store_incorrected.innerText = localStorage.getItem("incorrect") ? localStorage.getItem("incorrect") : 0;



function onStartClick() {
    let selectElement = document.getElementById("difficulty");
    quiz_diff = selectElement.value;
}

function onResetScoreClick() {
    store_corrected.innerText = 0;
    store_incorrected.innerText = 0;
    localStorage.setItem("correct", 0);
    localStorage.setItem("incorrect", 0);
}

const callAPI = () => {
    const api_url = `https://quizapi.io/api/v1/questions?apiKey=rCGVCEDqJJd8TXsunCOyAilovahAzmbg6yGp4XQT&limit=10&difficulty=${quiz_diff}`;
    register_container.classList.add("remove");
    getdata(api_url);
};

start_button.addEventListener("click", callAPI);

let index = 0;
let api_data;
let total = 0;
let time;
let interval;

async function getdata(url) {
    const response = await fetch(url);
    api_data = await response.json();
    question_container.classList.remove("remove");
    onNextquestion();
}

const onSetTimer = () => {
    interval = setInterval(() => {
        time -= 1;
        if (time == 0) {
            onNextquestion();
        }
    }, 1000);
};

const onNextquestion = () => {
    time = 59;
    if (index < 10) {
        clearInterval(interval);
        onSetTimer();
    }

    if (index >= 10) {
        const inc = (index - 1) - total;
        if ((inc + total) == 10) {
            localStorage.setItem("correct", total);
            localStorage.setItem("incorrect", inc);
        } else {
            localStorage.setItem("correct", total);
            localStorage.setItem("incorrect", 10 - total);
        }
        question_container.classList.add("remove");
        register_container.classList.remove("remove");
        location.reload();
        return;
    }

    index++;

    let timer = document.getElementById("timer");
    setInterval(() => {
        timer.innerText = time;
    }, 1000);

    if (api_data) {
        errorBox.innerText = "";
        const allAnswers = [answer_o1_d, answer_o2_d, answer_o3_d, answer_o4_d];
        allAnswers.forEach((option) => {
            if (option) {
                option.disabled = false;
            }
        });
        const qnumber = document.getElementById("qnumber");
        const correct_a = document.getElementById("correctanswer");
        const incorrect_a = document.getElementById("incorrectanswer");

        qnumber.innerText = index;
        question_d.innerText = api_data[index - 1].question;
        correct_a.innerText = total;
        incorrect_a.innerText = (index - 1) - total;

        const options = [
            { element: answer_o1_d, text: api_data[index - 1].answers.answer_a },
            { element: answer_o2_d, text: api_data[index - 1].answers.answer_b },
            { element: answer_o3_d, text: api_data[index - 1].answers.answer_c },
            { element: answer_o4_d, text: api_data[index - 1].answers.answer_d },
        ];

        options.forEach((opt, idx) => {
            if (opt.text !== null) {
                opt.element.classList.remove("remove");
                opt.element.innerText = opt.text;
                opt.element.onclick = () => onScoreCalculator(idx + 1, opt.element);
            } else {
                opt.element.classList.add("remove");
            }
        });

        const nextq_btn = document.getElementById("s-answer");
        nextq_btn.classList.add("nextq-btn");
        nextq_btn.innerText = index <= 9 ? "Next Question" : "Submit";
        nextq_btn.onclick = onNextquestion;
    }
};

const onScoreCalculator = (user_choice, button) => {
    const allAnswers = [answer_o1_d, answer_o2_d, answer_o3_d, answer_o4_d];
    allAnswers.forEach(answer => {
        if (answer && answer.classList.contains("choosen")) {
            answer.classList.remove("choosen");
        }
    });
    button.classList.add("choosen");
    const isAnswer = Object.values(api_data[index - 1].correct_answers)[user_choice - 1];

    allAnswers.forEach((ans) => {
        if (ans) {
            ans.disabled = true;
        }
    });

    if (isAnswer === "true") {
        total++;
        errorBox.innerText = "😀 Correct Answer!";
        errorBox.classList.add("text-success", "suc-bg");
        errorBox.classList.remove("text-danger", "fail-bg");
    } else {
        errorBox.innerText = "😢 Incorrect Answer!";
        errorBox.classList.add("text-danger", "fail-bg");
        errorBox.classList.remove("text-success", "suc-bg");

    }
};