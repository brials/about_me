'use strict'

alert('Hello, and welcome to my introduction page. We are going to play a little guessing game to begin. Please respond with yes/y or no/n answers. ')
var response1 = prompt('Question 1: Do you think I am over 6.5 feet tall?').toLowerCase();

if (response1 === 'yes' || response1 === 'y'){
  alert('Yes, I am over 6.5 feet tall. Thanks for noticing');
} else if(response1 === 'no' || response1 === 'n'){
  alert('Sorry, you\'re wrong. I am over 6.5 feet tall.');
}else {
  alert('I would appreciate an yes or no answer please.');
}
console.log('For question number 1 they answered ' + response1);

var response2 = prompt('Do you think milk was the reason I am so tall?').toLowerCase();

if (response2 === 'yes' || response2 === 'y'){
  alert('Sorry, Milk was not the reason I grew so much.');
} else if(response2 === 'no' || response2 === 'n'){
  alert('Yes you are correct there is no known reason why I grew so freakishly much');
}else {
  alert('Seriously you really can not figure out yes/no questions can you? ');
}
console.log('For question number 2 they answered ' + response2);

var response3 = prompt('Are you a fan of Game of Thrones like I am?').toLowerCase();

if (response3 === 'yes' || response3 === 'y'){
  alert('That is great, we will have plenty to talk about.');
} else if(response3 === 'no' || response3 === 'n'){
  alert('The Mother of Dragons will reign fire upon you');
}else {
  alert('Seriously? Tyrion would take a drink, saddened you will not answer yes or no.');
}
console.log('For question number 3 they answered ' + response3);

var response4 = prompt('Is blue my favorite color?').toLowerCase();

if (response4 === 'yes' || response4 === 'y'){
  alert('You may proceed across the bridge.');
} else if(response4 === 'no' || response4 === 'n'){
  alert('No, It\'s yellow? AGGGHHHH');
}else {
  alert('Even a swallow carrying a coconut could answer yes or no.');
}
console.log('For question number 4 they answered ' + response4);

var response5 = prompt('Is being an internationl spy my dream job?').toLowerCase();

if (response5 === 'yes' || response5 === 'y'){
  alert('You are correct. Long have I wanted to be able to go by Alspach, Brian Alspach.');
} else if(response5 === 'no' || response5 === 'n'){
  alert('No? What do you think I want to be, a Web Developer? As if.');
}else {
  alert('Jaws\' metal teeth smile widely as he shows you how to say nooooooooo.');
}
console.log('For question number 5 they answered ' + response5);
