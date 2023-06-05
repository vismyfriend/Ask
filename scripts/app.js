const askMe = document.querySelector(".ask")
const check = document.querySelector(".check")
const next = document.querySelector(".next")
const cardQuestion = document.querySelector(".card_question")
const cardAnswer = document.querySelector(".card_answer")
const cardValueQuestion = cardQuestion.querySelector(".card__value")
const cardHintQuestion = cardQuestion.querySelector(".card__hint")
// document - ищет по всему файлу(документу)
const cardValueAnswers = cardAnswer.querySelector(".card__value")
const cardHintAnswers = cardAnswer.querySelector(".card__hint")
const manual1 = document.querySelector(".manual-1")
const manual2 = document.querySelector(".manual-2")
const manual3 = document.querySelector(".manual-3")
const hint = document.querySelector(".notebook__hint")
let value = null
let questionNumber = 0
let answerNumber = 0


let shuffledQuestions = null

let shuffledAnswers = null


function shuffleDecks() {
    shuffledQuestions = questions.sort(function () {
        return Math.random() - 0.5;
    });
    shuffledAnswers = answers.sort(function () {
        return Math.random() - 0.5;
    });
    questionNumber= 0
    answerNumber = 0
    askMe.classList.remove("finish")
    askMe.disabled = false
    next.classList.remove("finish")
    next.disabled = false
    cardQuestion.classList.remove("open")
    cardQuestion.style.border = 'none';
    cardAnswer.classList.remove("open")
    cardAnswer.style.border = 'none';

}

function getAnswers() {
    if (answerNumber < shuffledAnswers.length) {


        cardAnswer.classList.remove("open")
        value = shuffledAnswers[answerNumber]

        cardHintAnswers.classList.remove("show")
        // ищет объект в массиве и сравнивает с id
        setTimeout(function () { cardAnswer.classList.add("open") }, 0);
        cardAnswer.style.border = "solid 4px rgb(235, 70, 70)";
        cardValueAnswers.textContent = value.eng
        cardHintAnswers.textContent = value.ru
        answerNumber++
    } else {
        askMe.classList.add("finish")
        // foo.setAttribute('disabled', 'disabled')
        askMe.disabled = true
    }

}

function showQuestionsManual() {

}
function showCheckManual() {
}




// глагол на первом месте
function getquestions() {
    if (questionNumber < shuffledQuestions.length) {
        cardQuestion.classList.remove("open")

        setTimeout(function () { cardQuestion.classList.add("open") }, 0);
        value = shuffledQuestions[questionNumber]
        cardHintQuestion.classList.remove("show")
        // обновляет blur на каждой новой карточке
        cardValueQuestion.textContent = value.eng
        cardHintQuestion.textContent = value.ru
        cardQuestion.style.border = "solid 4px rgb(5, 184, 5)";
        questionNumber++
    } else {
        next.classList.add("finish")
        // foo.setAttribute('disabled', 'disabled')
        next.disabled = true
    }
}


shuffleDecks ()
// сразу перемешивание при входе 

cardHintQuestion.addEventListener("click", () => {
    cardHintQuestion.classList.toggle("show")
})
cardHintAnswers.addEventListener("click", () => {
    cardHintAnswers.classList.toggle("show")
})

askMe.addEventListener("click", getAnswers)
check.addEventListener("click", shuffleDecks)
next.addEventListener("click", getquestions)
cardQuestion.addEventListener("click", () => {
    cardQuestion.classList.contains("open") ? null : getquestions()
    
})
cardAnswer.addEventListener("click", () => {
    cardAnswer.classList.contains("open") ? null : getAnswers()
    //  тоже самое, что if else 
})