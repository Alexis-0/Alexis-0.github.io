"use.strict";
let userGuess = document.getElementById("number-input");
let guessBtn = document.getElementById("guess-button");
let scoreSpan = document.getElementById("counter");
let score = 10;
let randomNumber = Math.floor(Math.random() * 101);
let toggle = document.getElementById("toggle")

let inputGroup = document.querySelector(".input-group");

// add ebvent listener to reset button
// try again button


guessBtn.addEventListener('click', function(){
    console.log(userGuess.value);
    console.log(randomNumber);

    if(!Number(userGuess.value)){
        toggle.innerHTML = "You must enter a number!"
        console.log(userGuess.value);
    } else if (Number(userGuess.value) == randomNumber) {
        toggle.innerHTML = `you guessed right, your number was ${randomNumber}`
        // win case
        // disable functionality
        // css to change color and image
    } else if (score > 0) {
        if (Number(userGuess.value) < randomNumber) {
            toggle.innerHTML = "You guessed too low!";
            score--;
            // if score==0 entire game should terminate
            if (score == 0) {
                toggle.innerHTML = "You lose!";
                // change css
            }
            scoreSpan.innerHTML = score;
        } else if(Number(userGuess.value) > randomNumber) {
            toggle.innerHTML = "You guessed too high ";
            score--;
            if (score == 0) {
                toggle.innerHTML = "You lose!";
                inputGroup.style.backgroundColor = 'rgb(185, 0, 0)';
               
            }
            scoreSpan.innerHTML = score;
        }
    }

    // when lose, change button to try again

    // part of function body
    // if (score > 0) {
    //     if (userGuess.value < randomNumber) {
    //         toggle.innerHTML = "You guessed too low!"
    //         score--;
    //         // if score==0 entire game should terminate
    //         // youLose();
    //         scoreSpan.innerHTML = score;
    //     } else if(userGuess.value > randomNumber) {
    //         toggle.innerHTML = "You guessed too high "
    //         score--;
    //         scoreSpan.innerHTML = score;
    //     }
    // }

   

})


function reset(){
    //
}

// it has to iterate once every time a user clicks the button or if the score reaches 0
// function addToHistory(number) {
//     let guessItem = document.getElementById("number")
//     for (let i = 0; i <= score; i++) {
//         guessItem.innerHTML += `<li id="number">${number}</li>`
//     }
//     return history;
// }
