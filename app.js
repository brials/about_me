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

var response2 = prompt('Do you think milk was the reason I am so tall?').toLowerCase();

if (response2 === 'yes' || response2 === 'y'){
  alert('Sorry, Milk was not the reason I grew so much.');
} else if(response2 === 'no' || response2 === 'n'){
  alert('Yes you are correct there is no known reason why I grew so freakishly much');
}else {
  alert('Seriously you really can not figure out yes/no questions can you? ');
}
console.log('For question number 2 they answered ' + response2);

var response3 = prompt('Are you a fan of Game of Thrones?').toLowerCase();

if (response3 === 'yes' || response3 === 'y'){
  alert('That is great, we will have plenty to talk about.');
} else if(response3 === 'no' || response3 === 'n'){
  alert('The Mother of Dragons will reign fire upon you');
}else {
  alert('Seriously ');
}

var response4 = prompt('Does Sam have any cats?').toLowerCase();

if (response4 === 'yes' || response4 === 'y'){
  alert('yes, Sam does have three cats!');
} else if(response4 === 'no' || response4 === 'n'){
  alert('Sorry, you\'re wrong, Sam has three cats.');
}else {
  alert('you fail to understand yes/no questions. So that is as good as wrong. You lose.');
}

var response5 = prompt('Does Sam have any cats?').toLowerCase();

if (response5 === 'yes' || response5 === 'y'){
  alert('yes, Sam does have three cats!');
} else if(response5 === 'no' || response5 === 'n'){
  alert('Sorry, you\'re wrong, Sam has three cats.');
}else {
  alert('you fail to understand yes/no questions. So that is as good as wrong. You lose.');
}
