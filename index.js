
const heading = document.querySelector("h1");
const playButton = document.querySelector(".play");
let img1 = document.getElementsByClassName("img1")[0];
let img2 = document.getElementsByClassName("img2")[0];

const randomGenerator=()=>{

}

function diceImg() {

}

function checkCase() {

}

playButton.addEventListener('click',()=>{
    // 
    let randomNumber1 = Math.floor(Math.random()*6) + 1;
    let randomNumber2 = Math.floor(Math.random()*6) + 1;


    switch (randomNumber1){
        case (1):
            img1.setAttribute("src","images/dice1.png");
            break;
    
        case (2):
            img1.setAttribute("src","images/dice2.png");
            break;   
    
        case (3):
            img1.setAttribute("src","images/dice3.png");
            break;
            
        case (4):
            img1.setAttribute("src","images/dice4.png");
            break;
    
        case (5):
            img1.setAttribute("src","images/dice5.png");
            break;
    
        case (6):
            img1.setAttribute("src","images/dice6.png");
            break;
    }
    
    switch (randomNumber2){
        case (1):
            img2.setAttribute("src","images/dice1.png");
            break;
    
        case (2):
            img2.setAttribute("src","images/dice2.png");
            break;   
    
        case (3):
            img2.setAttribute("src","images/dice3.png");
            break;
            
        case (4):
            img2.setAttribute("src","images/dice4.png");
            break;
    
        case (5):
            img2.setAttribute("src","images/dice5.png");
            break;
    
        case (6):
            img2.setAttribute("src","images/dice6.png");
            break;
    }

    if (randomNumber1 > randomNumber2) {
        heading.textContent = "Player 1 won!!";
    }
    
    else if (randomNumber1 < randomNumber2) {
        heading.textContent = "Player 2 won!!";
    }
    
    else {
        heading.textContent = "Its a draw!";
    }
})