'use strict';

var response1 = prompt('Does Sam have any cats?').toLowerCase();

if (response1 === 'yes' || response1 === 'y'){
  alert('yes, Sam does have three cats!')
} else if(response1 === 'no' || response1 === 'n'){
  alert('Sorry, you\'re wrong, Sam has three cats.')
}else {
  alert('you fail to understand yes/no questions. So that is as good as wrong. You lose.')
}
