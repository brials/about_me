'use strict'

var counter = 0;

alert('Hello, and welcome to my introduction page. We are going to play a little guessing game to begin. Please respond with yes/y or no/n answers. ')
var reallyTallQ = prompt('Question 1: Do you think I am over 6.5 feet tall?').toLowerCase();

if (reallyTallQ === 'yes' || reallyTallQ === 'y'){
  alert('Yes, I am over 6.5 feet tall. Thanks for noticing');
  document.write('<p class="affirmative">For question 1 you answered ' + reallyTallQ + ' which is correct</p>');
  counter += 1;
} else if(reallyTallQ === 'no' || reallyTallQ === 'n'){
  alert('Sorry, you\'re wrong. I am over 6.5 feet tall.');
  document.write('<p class="negative">For question 1 you answered ' + reallyTallQ + ' which is incorrect</p>');
} else {
  alert('I would appreciate an yes or no answer please.');
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

if (gameOfThronesQ === 'yes' || gameOfThronesQ === 'y'){
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

if (montyPythonQ === 'yes' || montyPythonQ === 'y'){
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

if (jamesBondQ === 'yes' || jamesBondQ === 'y'){
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
