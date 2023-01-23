
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

//practice




/* let age=20;
if (age<21){
    console.log("Sorry! Underage are not allowed to the club");
}
    else{
        console.log("Welcome to the club");
    } */
    /* let newVariable = Math.floor(Math.random()*13)+1;

function rolldice(){
    
    if (newVariable===1 ){
        return 11
    }
    if (newVariable >10)
    {return 10;}
    else
    return newVariable;

}
console.log("Variable is " + newVariable);
console.log(rolldice()); */






//Logical operator (OR and AND)





/* let hasCompletedCourse = true;
let getCompleteCourse = true;

if (hasCompletedCourse===true && getCompleteCourse===true)
{ showresult();};
function showresult(){
console.log("generate certificate")
}

let likeDocumentaries = false;
let likeStartups = true;

if(likeDocumentaries === true || likeStartups === true){
        opinion();
}

function opinion(){
    console.log("I think you will like it") 
}
*/



/* let createObject = {
    name:"Sumesh",
    age:25,
    hasComputerKnowledge: true,
    likes: ["books", "blockchain"]
};

console.log(createObject.name);
console.log(createObject.age);
console.log(createObject.hasComputerKnowledge);
console.log(createObject.likes); */