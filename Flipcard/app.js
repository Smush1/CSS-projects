const front = document.querySelector(".front")
const back = document.querySelector(".back")
const theCard = document.querySelector(".thecard")
theCard.addEventListener('click', function(){
    console.log(theCard.classList.toggle("flipcard"))
}) 
