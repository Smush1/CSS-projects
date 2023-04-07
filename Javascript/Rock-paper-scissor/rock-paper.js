const computerChoiceDisplay = document.querySelector("#computer-choice")
const userChoiceDisplay = document.querySelector("#user-choice")
const result = document.querySelector("#result")
const possibleChoices = document.querySelectorAll("button")
let userChoice

possibleChoices.forEach(possiblechoice => possiblechoice.addEventListener("click", (e)=> {
    userChoice =e.target.id
    userChoiceDisplay.innerHTML = userChoice

})) 

