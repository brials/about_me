'use strict'

var counter = 0;

alert('Hello, and welcome to my introduction page. We are going to play a little guessing game to begin. Please respond with yes/y or no/n answers. ')
var reallyTallQ = prompt('Question 1: Do you think I am over 6.5 feet tall?').toLowerCase();

if(reallyTallQ === 'yes' || reallyTallQ === 'y'){
  alert('Yes, I am over 6.5 feet tall. Thanks for noticing');
  document.write('<p class="affirmative">For question 1 you answered ' + reallyTallQ + ' which is correct</p>');
  counter += 1;
} else if(reallyTallQ === 'no' || reallyTallQ === 'n'){
  alert('Sorry, you\'re wrong. I am over 6.5 feet tall.');
  document.write('<p class="negative">For question 1 you answered ' + reallyTallQ + ' which is incorrect</p>');
} else {
  alert('I would appreciate a yes or no answer please.');
  document.write('<p class="nonsense">For question 1 you answered ' + reallyTallQ + ' which is nonsense</p>');
}
console.log('For question number 1 they answered ' + reallyTallQ);

var grewAlotQ = prompt('Do you think milk was the reason I am so tall?').toLowerCase();

if (grewAlotQ === 'yes' || grewAlotQ === 'y'){
  alert('Sorry, Milk was not the reason I grew so much.');
  document.write('<p class="negative">For question 2 you answered ' + grewAlotQ + ' which is incorrect</p>');
} else if(grewAlotQ === 'no' || grewAlotQ === 'n'){
  alert('Yes you are correct there is no known reason why I grew so freakishly much');
  document.write('<p class="affirmative">For question 2 you answered ' + grewAlotQ + ' which is correct</p>');
  counter += 1;
} else {
  alert('Seriously you really can not figure out yes/no questions can you? ');
  document.write('<p class="nonsense">For question 2 you answered ' + grewAlotQ + ' which is nonsense</p>');
}
console.log('For question number 2 they answered ' + grewAlotQ);

var gameOfThronesQ = prompt('Am I a fan of Game Thrones?').toLowerCase();

if(gameOfThronesQ === 'yes' || gameOfThronesQ === 'y'){
  alert('Of course I am it is the best show ever.');
  document.write('<p class="affirmative">For question 3 you answered ' + gameOfThronesQ + ' which is correct</p>');
  counter += 1;
} else if(gameOfThronesQ === 'no' || gameOfThronesQ === 'n'){
  alert('The Mother of Dragons will reign fire upon you');
  document.write('<p class="negative">For question 3 you answered ' + gameOfThronesQ + ' which is incorrect</p>');
} else {
  alert('Seriously? Tyrion would take a drink, saddened you will not answer yes or no.');
  document.write('<p class="nonsense">For question 3 you answered ' + gameOfThronesQ + ' which is nonsense</p>');
}
console.log('For question number 3 they answered ' + gameOfThronesQ);


var montyPythonQ = prompt('Is blue my favorite color?').toLowerCase();

if(montyPythonQ === 'yes' || montyPythonQ === 'y'){
  alert('You may proceed across the bridge.');
  document.write('<p class="affirmative">For question 4 you answered ' + montyPythonQ + ' which is correct</p>');
  counter += 1;
} else if(montyPythonQ === 'no' || montyPythonQ === 'n'){
  alert('No, It\'s yellow? AGGGHHHH');
  document.write('<p class="negative">For question 4 you answered ' + montyPythonQ + ' which is incorrect</p>');
} else {
  alert('Even a swallow carrying a coconut could answer yes or no.');
  document.write('<p class="nonsense">For question 4 you answered ' + montyPythonQ + ' which is nonsense</p>');
}
console.log('For question number 4 they answered ' + montyPythonQ);

var jamesBondQ = prompt('Is being an internationl spy my dream job?').toLowerCase();

if(jamesBondQ === 'yes' || jamesBondQ === 'y'){
  alert('You are correct. Long have I wanted to be able to go by Alspach, Brian Alspach.');
  document.write('<p class="affirmative">For question 5 you answered ' + jamesBondQ + ' which is correct</p>');
  counter += 1;
} else if(jamesBondQ === 'no' || jamesBondQ === 'n'){
  alert('No? What do you think I want to be, a Web Developer? As if.');
  document.write('<p class="negative">For question 5 you answered ' + jamesBondQ + ' which is incorrect</p>');
} else {
  alert('Jaws\' metal teeth smile widely as he shows you how to say nooooooooo.');
  document.write('<p class="nonsense">For question 5 you answered ' + jamesBondQ + ' which is nonsense</p>');
}
console.log('For question number 5 they answered ' + jamesBondQ);

alert('This next question will be a little different. Please enter a numeral for your answer. You have 4 attempts to get ir right.')
var howOldQ = parseInt(prompt('How old will I be in 20 years?'));
var oldCount = 0;

while(oldCount < 3){
  if(howOldQ === 46){
    alert('Congratulations you guessed it correctly.')
    counter += 1;
    break;
  } else if(isNaN(howOldQ) === true){
    oldCount += 1;
    howOldQ = parseInt(prompt('Please insert a number in the prompt. Do not write out a number.'))
  } else if(howOldQ > 46){
    oldCount += 1;
    howOldQ = parseInt(prompt('Sorry your guess was too high please try again :\).'))
  } else{
    oldCount += 1;
    howOldQ = parseInt(prompt('Sorry your guess was too low please try again :\).'))
  }
}

if(oldCount === 3){
  alert('I am sorry you guessed incorrectly too many times')
  console.log('The user was unable to guess the correct answer in their four tries.')
} else {
  console.log('The user was able to guess the correct answer in ' + oldCount + 1 + 'tries.')
}



var favAnimalsQ = prompt('For this last question please try to guess one of my favorite animals. You have 6 total guesses.').toLowerCase();
var myFavAnimals = ['red panda', 'goat', 'elephant', 'bear', 'dog', 'cat'];
var animalCount = 0;
var animalCorrect = false;

while (animalCount < 5){
  for(var i = 0; i < myFavAnimals.length; i++){
    if(favAnimalsQ === myFavAnimals[i]){
      alert('Congratulations you guessed one correctly');
      counter += 1;
      animalCorrect = true;
      break;
    }
  }
  if(animalCorrect){
    break;
  }
  animalCount += 1;
  favAnimalsQ = prompt('I am sorry that is not one of my favorite animals.')
}

if(animalCount === 5){
  console.log('The user was unable to guess the correct answer in their six tries.')
} else {
  console.log('The user was able to guess the correct answer in ' + animalCount + 1 + 'tries.')
}

if(4 > counter){
  alert('I am sorry you only got ' + counter + ' out of 7. Better luck next time.');
} else {
  alert('Congratulations you got ' + counter + ' out of 7. You know me so well!')
}
