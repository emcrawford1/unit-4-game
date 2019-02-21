
$(document).ready(function () {
//Crystal Collector game.  This file is for the javascript of the crystal collector game.  This game provides
//a random number that the user will attempt to guess.  The user will be provided with four "crystals" to 
//click.  Each crystal will have a random number between 1-12 assigned to it.  The user will then click the 
//crystals to try generate a score that is exactly the same as the random number generated.  


//Global variables

var guessNumber;
var winTotal = 0;
var lossTotal = 0;
var jewelValueArray = [0, 0, 0, 0];
var totalScore = 0;


//This function is a random number generator that takes the following parameters: 1) number - this is the 
//variable that will store the randomnly generated number, 2) firstNumber - this is the starting point of 
//possible random numbers, and 3) range - this is the range of possible random numbers.  For example, if 
//you want to generate a random number between 30-120, firstNumber will be 30 and range will be 90.

function randomNumberGenerator(number, firstNumber, range) {

    return Math.floor(Math.random() * range) + firstNumber;

}



//This function sets the random values (1-12) of each jewel.  It does so by calling the randomNumberGenerator 
//function for each of the data elements in the jewelValueArray.  

function setJewelValues() {

    var firstNumber = 1;
    var range = 12;

    for (var i = 0; i < jewelValueArray.length; i++) {
        jewelValueArray[i] = randomNumberGenerator(jewelValueArray[i], firstNumber, range);
    }
}


//This function sets the random number that the user is trying to guess/get to.  It does so by calling the
//randomNumberGenerator function.

function setGuessNumber() {
    var firstNumber = 19;
    var range = 101;

    guessNumber = randomNumberGenerator(guessNumber, firstNumber, range);
    $('#randomNumber').text(guessNumber);

}


//This function adds the amount from the button to the total score and then calls the gameChecker() function 
//to determine if the game has been won or lost.  

function tallyScore(scoreAmount){
    
    totalScore += scoreAmount;
    $('#totalScore').text(totalScore);
    gameChecker(totalScore);

}


//This function checks to see if the game has been won or lost and iterates the winTotal or lossTotal and 
//calls the resetGame() function.  If the user has not won the game, nothing happens.

function gameChecker(score){

    if(score === guessNumber){
        winTotal++;
        $('#wins').text("Wins: " + winTotal);
        resetGame();
    }

    if(score > guessNumber){
        lossTotal++;
        $('#losses').text("Losses: " + lossTotal);
        resetGame();
    }
}


//This function resets the game.  The only variable that needs to be explicitly reset by this function is 
//the totalScore.  The guessNumber and jewelValueArray values are reset by calling the setJewelValues() and
//setGuessNumber() functions.

function resetGame(){
    totalScore = 0;
    $('#totalScore').text('0');
    setJewelValues();
    setGuessNumber();
}


//This function processes the user's clicks.

function clickScore(buttonValue) {

    switch (buttonValue) {

        case 'emerald':
            tallyScore(jewelValueArray[0]);

            break;

        case 'sapphire':
            tallyScore(jewelValueArray[1]);

            break;

        case 'ruby':
            tallyScore(jewelValueArray[2]);

            break;

        case 'amethyst':
            tallyScore(jewelValueArray[3]);

            break;

    }
}



    setJewelValues();
    setGuessNumber();


    //Click events

    $('#emerald-button').on('click', function () {

        clickScore('emerald');
    });

    $('#sapphire-button').on('click', function () {
        clickScore('sapphire');
    });

    $('#ruby-button').on('click', function () {
        clickScore('ruby');
    });

    $('#amethyst-button').on('click', function () {
        clickScore('amethyst');
    });



});