console.log('hi');

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' ||userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
    } else {
    console.log('Used item error. Use rock or paper or scissors.'); 
    } 
  }
// console.log(`Human's choice is: ${getUserChoice('Rock')}`);
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

// console.log(`Computer's choice is: ${getComputerChoice()}`);

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'The bomb went off. You won!'
  }
  if (userChoice === computerChoice) {
    return 'It\'s a tie! Try again.';
  } 

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins!';
    } else {
      return 'Yaaay, you won!';
    }
  }

  if (userChoice === 'paper') {
     if (computerChoice === 'scissors') {
      return 'Computer wins!';
    } else {
      return 'Yaaay, you won!';
    }
  }

  if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer wins!';
      } else {
        return 'Yaaay, you won!';
      }
    }
}

const playGame = () => {
  const userChoice = getUserChoice('bomb'); // ! USER CHOICE'S HERE !
  const computerChoice = getComputerChoice();
  console.log('You threw: '+ userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
