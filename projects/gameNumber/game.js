
function guessNumber(minimum, maximum) {    //fce mi vrátí nejmenší hádané číslo mezi minimem a maximem
    // return minimum;
    // return maximum;
    return vysledek = Math.round((minimum + maximum)/2); // počítač tipuje prostředek rozmezí čísel a zaokrouhluje nahoru
    //  return Math.floor(Math.random() * (maximum - minimum + 1) + minimum); // tu je varianta s náhodným číslem - může hádat dost blbě, je to nespolehlivá metoda
}

window.addEventListener('load', function () {

    let lowerBoundary = 1;
    let upperBoundary = 100;
    let currentGuess;
    let numberOfGuesses = 0;
    
    

    // locate elements in the document
    let startGameButton = document.querySelector('.start-game');
    let playAgainButton = document.querySelector('.play-again');
    let currentGuessElement = document.querySelector('.current-guess');
    let guessHigherButton = document.querySelector('.guess-higher');
    let guessLowerButton = document.querySelector('.guess-lower');
    let bingoButton = document.querySelector('.bingo');
    let h1Element = document.querySelector('h1');

    function guessAndRedraw() {
        numberOfGuesses = numberOfGuesses + 1;
        currentGuess = guessNumber(lowerBoundary, upperBoundary); // generate first guess
        currentGuessElement.innerHTML = currentGuess; // show the guess
        console.log(`Computer already used ${numberOfGuesses} guesses.`)
    }

    startGameButton.addEventListener('click', function () {
        document.body.className = "during-game";    // přejmenuje body section class --> css živí jinou class
        guessAndRedraw();
        
    })

    //event handler for clicking on the "play again" button
    playAgainButton.addEventListener('click', function () {
        window.location.reload();
    })

    // vygeneruji nové číslo, které je větší, než předchozí
    guessHigherButton.addEventListener('click',function(){   
        if (currentGuess === upperBoundary) {
            alert("Cheater!!!");        
           } else {  
        lowerBoundary = currentGuess + 1;
        guessAndRedraw();
        }
    })

    // vygeneruji nové číslo, které je menší, než předchozí
    guessLowerButton.addEventListener('click', function(){
       if (currentGuess === lowerBoundary) {
        alert("Cheater!!!");        
       } else {       
        upperBoundary = currentGuess - 1;
        guessAndRedraw();
       }
    })

    // Trefa = počítač uhodl číslo
  
    // objeví se tlačíko nová hra a zmizí Už si myslím
    bingoButton.addEventListener('click', function() {   
        document.body.className = "after-game";
        h1Element.innerHTML = `Vyhrál jsem jen za ${numberOfGuesses} pokus(ů)!`  // změní se nadpis
     })

});



