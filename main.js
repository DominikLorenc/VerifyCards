import checkCardNumber from "./modules/verifyCard";

const verifyCard = document.querySelector(".verify-card");
const inputNumber = document.querySelector(".number-card");
const btn = document.querySelector(".btn");


verifyCard.addEventListener('submit', (e) =>{
    e.preventDefault()
    checkCardNumber(inputNumber.value)
    inputNumber.value = ''
})