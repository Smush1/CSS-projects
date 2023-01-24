
// BLACK JACK GAME



let cards=[]
let sum=0;
let hasValue =false;
let isAlive = false;
let message = "";

let player ={
    name:"Sumesh",
    chips: 50
};

document.querySelector(".player-el").textContent = player.name +" : $" +player.chips;



function randomNumber(){
return Math.floor((Math.random() *10)+2)
};

function startgame(){
    if(isAlive===false && player.chips>0 || hasValue ===true)
        {   hasValue = false
            isAlive = true;
            let firstCard = randomNumber();
            let secondCard = randomNumber();
            cards =[firstCard, secondCard]
            sum=firstCard+secondCard;
            rendergame();
        } 
     else if (isAlive===true)
     {
        document.querySelector(".test").textContent = "You already have card. Please be serious.";
    }
    else {
        document.querySelector(".test").textContent = "You are out of cash"
    }


}

function rendergame(){ 
    document.querySelector(".test").textContent = ""
    document.querySelector("#cards-el").innerHTML = "Cards : "; 
    for (let i=0; i<cards.length;i++){
        document.querySelector("#cards-el").textContent += cards[i]+" ";
    }
    document.querySelector(".sum-el").textContent ="Sum :" + sum;
    if (sum <= 20){
        message="Do you want to draw a card 😀";
    } else if(sum === 21){
            message = "Wohoo ! You've made it 🤩";
            hasValue =true;
            player.chips+=50;

        }
            else{
                message = "You are out of the game 😭";
                isAlive =false;
                player.chips-=20;
            }
            document.querySelector(".player-el").textContent = player.name +" : $" +player.chips;
    document.getElementById("message-el").textContent = message;
    };

function newcard(){
    if (isAlive === true && hasValue ===false)
    {
        let thirdCard = randomNumber();
        cards.push(thirdCard);
        sum +=thirdCard;
        rendergame();
    }

};
