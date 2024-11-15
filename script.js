const store_corrected = document.getElementById("store_correct");
const store_incorrected = document.getElementById("store_incorrect");
store_corrected.innerText = localStorage.getItem("correct") ? localStorage.getItem("correct") : 0;
store_incorrected.innerText = localStorage.getItem("incorrect") ? localStorage.getItem("incorrect") : 0;

var quiz_diff = "easy";
function onStartClick() {
    var selectElement = document.getElementById("difficulty");
    quiz_diff = selectElement.value;
}

function onResetScoreClick() {
    localStorage.setItem("correct", 0);
    localStorage.setItem("incorrect", 0);
    location.reload();
}

const start_button = document.querySelector(".start_button");
const question_container = document.querySelector(".question-container");
const register_container = document.querySelector(".register-container");

const callAPI = () => {
    const api_url = `https://quizapi.io/api/v1/questions?apiKey=rCGVCEDqJJd8TXsunCOyAilovahAzmbg6yGp4XQT&limit=10&difficulty=${quiz_diff}`;
    register_container.classList.add("remove");
    getdata(api_url);
};

start_button.addEventListener("click", callAPI);

var index = 0;
var api_data;
var total = 0;
var same_question;
var answer_o1_d;
var answer_o2_d;
var answer_o3_d;
var answer_o4_d;
var time;
var interval;

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
    same_question = false;

    var timer = document.getElementById("timer");
    setInterval(() => {
        timer.innerText = time;
    }, 1000);

    if (api_data) {
        const question_d = document.getElementById("question");
        answer_o1_d = document.getElementById("option1");
        answer_o2_d = document.getElementById("option2");
        answer_o3_d = document.getElementById("option3");
        answer_o4_d = document.getElementById("option4");
        const qnumber = document.getElementById("qnumber");
        const correct_a = document.getElementById("correctanswer");
        const incorrect_a = document.getElementById("incorrectanswer");

        qnumber.innerText = index;
        question_d.innerText = api_data[index - 1].question;
        correct_a.innerText = total;
        incorrect_a.innerText = (index - 1) - total;


        if (api_data[index - 1].answers.answer_a !== null) {
            answer_o1_d.classList.remove("remove")
            answer_o1_d.innerText = api_data[index - 1].answers.answer_a;
            answer_o1_d.classList.add("option-1");
            answer_o1_d.onclick = () => {
                onScoreCalculator("1", answer_o1_d);
            };
        } else {
            answer_o1_d.classList.add("remove")
        }

        if (api_data[index - 1].answers.answer_b !== null) {
            answer_o2_d.classList.remove("remove")
            answer_o2_d.innerText = api_data[index - 1].answers.answer_b;
            answer_o2_d.classList.add("option-2");
            answer_o2_d.onclick = () => {
                onScoreCalculator("2", answer_o2_d);
            };
        } else {
            answer_o2_d.classList.add("remove")
        }

        if (api_data[index - 1].answers.answer_c !== null) {
            answer_o3_d.classList.remove("remove")
            answer_o3_d.innerText = api_data[index - 1].answers.answer_c;
            answer_o3_d.classList.add("option-3");
            answer_o3_d.onclick = () => {
                onScoreCalculator("3", answer_o3_d);
            };
        } else {
            answer_o3_d.classList.add("remove")
        }

        if (api_data[index - 1].answers.answer_d !== null) {
            answer_o4_d.classList.remove("remove")
            answer_o4_d.innerText = api_data[index - 1].answers.answer_d;
            answer_o4_d.classList.add("option-4");
            answer_o4_d.onclick = () => {
                onScoreCalculator("4", answer_o4_d);
            };
        } else {
            answer_o4_d.classList.add("remove")
        }

        const nextq_btn = document.getElementById("s-answer");
        nextq_btn.classList.add("nextq-btn");
        if (index <= 9) {
            nextq_btn.innerText = "Next Question";
        } else {
            nextq_btn.innerText = "Submit";
        }
        nextq_btn.onclick = onNextquestion;
    }
};

const onScoreCalculator = (user_choice, button) => {
    if (answer_o1_d && answer_o1_d.classList.contains("choosen")) {
        answer_o1_d.classList.remove("choosen");
    } else if (answer_o2_d && answer_o2_d.classList.contains("choosen")) {
        answer_o2_d.classList.remove("choosen");
    } else if (answer_o3_d && answer_o3_d.classList.contains("choosen")) {
        answer_o3_d.classList.remove("choosen");
    } else if (answer_o4_d && answer_o4_d.classList.contains("choosen")) {
        answer_o4_d.classList.remove("choosen");
    }

    button.classList.add("choosen");

    const isAnswer = Object.values(api_data[index - 1].correct_answers)[
        user_choice - 1
    ];
    if (isAnswer == "true" && !same_question) {
        total++;
        same_question = true;
    }
    if (isAnswer == "false" && same_question) {
        total--;
        same_question = null;
    }
};