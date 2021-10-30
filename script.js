'use strict'

let matchEnder = false;

let input = false;

let playerName = false;

// Tracks and records wins, loses and draws
let winLog = 0;
let loseLog = 0;
let drawLog = 0;

// Converts number into string for output
const itemConverter = function (chooserRandom) {
  chooserRandom;

  if (chooserRandom === 1) {
    chooserRandom = 'scissors';
  }
  if (chooserRandom === 2) {
    chooserRandom = 'paper';
  }
  if (chooserRandom === 3) {
    chooserRandom = 'stone';
  }
  return chooserRandom;
}
// Allows script to choose scissors paper stone randomly
const randomChooser = function (num) {
  // return 2;
  const randomDecimal = Math.random() * num
  const randomInteger = Math.floor(randomDecimal);
  const numberChooser = randomInteger + 1;

  return numberChooser;
}
// Calculates who wins, loses or ties
const winLossChecker = function (input, chooserRandom) {
  // Allows random strings

  let totalLog = winLog + loseLog + drawLog;
  const scissors = 1;
  const paper = 2;
  const stone = 3;
  let computerChoiceString;
  let myOutputValue = "";

  // Draw, Lose, and Win conditions, respectively
  if ((chooserRandom === scissors && input === 'scissors') || (chooserRandom === paper && input === 'paper') || (chooserRandom === stone && input === 'stone')) {

    computerChoiceString = itemConverter(chooserRandom);

    drawLog = drawLog + 1;
    totalLog = totalLog + 1;

    myOutputValue = `Round ${totalLog}:` + '<br>' + `Tie!` + '<br>' + `${playerName} chose ${input}.` + '<br>' + `Computer chose ${computerChoiceString}.` + '<br>' + `Win/Lose/Draw: ${winLog}/${loseLog}/${drawLog}`

  } else if ((chooserRandom === scissors && input === 'paper') || (chooserRandom === paper && input === 'stone') || (chooserRandom === stone && input === 'scissors')) {

    computerChoiceString = itemConverter(chooserRandom);

    loseLog = loseLog + 1;
    totalLog = totalLog + 1;

    myOutputValue = `Round ${totalLog}:` + '<br>' + `You lost!` + '<br>' + `${playerName} chose ${input}.` + '<br>' + `Computer chose ${computerChoiceString}.` + '<br>' + `Win/Lose/Draw/Total: ${winLog}/${loseLog}/${drawLog}`

  } else if ((chooserRandom === scissors && input === 'stone') || (chooserRandom === paper && input === 'scissors') || (chooserRandom === stone && input === 'paper')) {

    computerChoiceString = itemConverter(chooserRandom);

    winLog = winLog + 1;
    totalLog = totalLog + 1;

    myOutputValue = `Round ${totalLog}:` + '<br>' + `You win!` + '<br>' + `${playerName} chose ${input}.` + '<br>' + `Computer chose ${computerChoiceString}.` + '<br>' + `Win/Lose/Draw: ${winLog}/${loseLog}/${drawLog}`
  }
  return myOutputValue;
}
// Shows who is winning in the match
const winnerShower = function () {
  let myOutputValue = "";

  if (winLog > loseLog) {
    myOutputValue = myOutputValue + '<br>' + `${playerName} is winning!`
  } else if (winLog < loseLog) {
    myOutputValue = myOutputValue + '<br>' + `Computer is winning!`
  } else if (winLog === loseLog) {
    myOutputValue = myOutputValue + '<br>' + `Both are tied!`
  }

  return myOutputValue;
}
// If match is over
const winnerDisplayer = function () {
  let myOutputValue = "";

  if (winLog >= 10) {
    myOutputValue = `Match is over! ${playerName} wins! Please type 'restart' to play another match.`
    matchEnder = true;
  } else if (loseLog >= 10) {
    myOutputValue = `Match is over! Computer wins! Please type 'restart' to play another match.`
    matchEnder = true;
  }

  return myOutputValue;
}
// Puts all functions into one function
const winLossFinder = function (input) {
  let myOutputValue;

  let chooserRandom = randomChooser(3);

  let resultChecker = winLossChecker(input, chooserRandom);
  let showWinner = winnerShower();
  let loggerChecker = winnerDisplayer();

  if (matchEnder === false) {
    myOutputValue = resultChecker + showWinner + loggerChecker;
  } else if (matchEnder === true) {
    myOutputValue = loggerChecker;
  }

  return myOutputValue;
}

let main = function (input) {
  let myOutputValue;
  // Default message for output
  if (input === 'scissors' || input === 'paper' || input === 'stone') {
    myOutputValue = winLossFinder(input);
  } else {
    myOutputValue = `Invalid input. ${playerName}, please type "scissors", "paper", or "stone".` + '<br>' + '<br>' + `If you wish to restart, please type 'restart'.`;
  }

  if (input === '') {
    input = true;
  }

  if (playerName === false) {
    if (input === true)
      return 'Invalid username. Enter another username.'
    playerName = input;

    myOutputValue = `Hello, ${playerName}! (username) Please type "scissors", "paper", or "stone" to start a match.` + '<br>' + '<br>' + `If you would like to change your username, refresh the page and enter your username in the first input.` + '<br>' + '<br>' + `If you wish to restart, please type 'restart'.`
  }

  if (input == 'restart') {
    matchEnder = false;
    winLog = 0;
    loseLog = 0;
    drawLog = 0;
    let totalLog = winLog + loseLog + drawLog;

    myOutputValue = "Please type 'scissors', 'paper', or stone to start the match!";
  }

  return myOutputValue;
}