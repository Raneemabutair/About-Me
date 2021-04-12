'use strict';


alert ('welcome to my website!');

//eslint-disable-next-line no-unused-vars
let Name = prompt('what is your name?');
alert('Hello!  ' + Name + '  I am Raneem hope you enjoy this guessing game about me');


alert('OK! lets start <3');

let Travel = prompt('Do you think I love to travel a lot?! Please answer “yes” or “no”');
Travel= Travel.toLocaleLowerCase();
if (Travel==='yes') {
  alert('You gusset it; I love traveling so much and I traveled a lot');
  console.log('true answer i love traveling');
}
else if (Travel=== 'no') {
  alert('I am afraid you are wrong because I love traveling');
  console.log('false answer i love traveling');


}


let Time = prompt('Do you think I love to the night more than the daylight?! Please answer “yes” or “no”');
Time= Time.toLocaleLowerCase();
if (Time==='yes') {
  alert('Yes, you’re right; I love night more than the daylight specially in summer');
  console.log('true answer i love tne night');
}
else if (Time=== 'no') {
  alert('I am afraid you are wrong because I love night more than the daylight');
  console.log('false answer i love tne night');


}


let Animals = prompt('What about animals do you think I like animals?! Please answer “yes” or “no”');
Animals= Animals.toLocaleLowerCase();
if (Animals==='yes') {
  alert('That’s true; I love animals so much I even have a cat');
  console.log('true answer i love animals');
}
else if (Animals=== 'no'){
  alert('I am afraid you are wrong because I love animals they are nice creatures');
  console.log('false answer i love animals');}


let Fashion = prompt('Do I love fashion! what do think?! Please answer “yes” or “no”');
Fashion= Fashion.toLocaleLowerCase();
if (Fashion==='yes') {
  alert('Actually no!  I am not a big fan of fashion I try to but it’s so hard to follow 😊');
  console.log('false answer i dont love fashion');
}
else if (Fashion=== 'no'){
  alert('Yes, that’s true I am so basic with my fashion');
  console.log('true answer i not good with fashion ');}




let Sport  = prompt('What about sport do you think I like football games?! Please answer “yes” or “no”');
Sport= Sport.toLocaleLowerCase();
if (Sport==='yes') {
  alert('That’s not true actually LOL   I try my best to watch it but I can’t  ');
  console.log('false answer i dont love sport');
}
else if (Sport=== 'no'){
  alert('That’s true you are right I don’t really understand a lot about football games.');

  console.log('true answer i not good with sport ');}


alert('Thank you so much '+Name+' for enjoying with me playing this game');
