'use strict';

let result = 0;

alert ('welcome to my website!');

//eslint-disable-next-line no-unused-vars
let Name = prompt('what is your name?');
alert('Hello!  ' + Name + '  I am Raneem hope you enjoy this guessing game about me');


alert('OK! lets start <3');

function Traveling (){
  let Travel = prompt('Do you think I love to travel a lot?! Please answer “yes” or “no”');
Travel= Travel.toLocaleLowerCase();
if (Travel==='yes' || Travel === 'y') {
  alert('You gusset it; I love traveling so much and I traveled a lot');
  result++;
}
//console.log('true answer i love traveling');}


else if (Travel=== 'no' || Travel === 'n') {
  alert('I am afraid you are wrong because I love traveling');
  //console.log('false answer i love traveling');
}
else{
  alert('please enter yes or no');
}
}

Traveling();


function dayTime (){
  let Time = prompt('Do you think I love to the night more than the daylight?! Please answer “yes” or “no”');
  Time= Time.toLocaleLowerCase();
  if (Time==='yes' || Time === 'y') {
    alert('Yes, you’re right; I love night more than the daylight specially in summer');
    result++;
    //console.log('true answer i love tne night');
  }
  else if (Time=== 'no'|| Time === 'n') {
    alert('I am afraid you are wrong because I love night more than the daylight');
    //console.log('false answer i love tne night');
  }
  else{
    alert('please enter yes or no');
  }
  
}
dayTime ();



function aboutAnimals (){
  let Animals = prompt('What about animals do you think I like animals?! Please answer “yes” or “no”');
  Animals= Animals.toLocaleLowerCase();
  if (Animals==='yes' || Animals === 'y') {
    alert('That’s true; I love asnimals so much I even have a cat');
    result++;
    //console.log('true answer i love animals');
  }
  else if (Animals=== 'no' || Animals === 'n'){
    alert('I am afraid you are wrong because I love animals they are nice creatures');}
  //console.log('false answer i love animals');
  
  else{
    alert('please enter yes or no');
  }
}
aboutAnimals ();



let Fashion = prompt('Do I love fashion! what do think?! Please answer “yes” or “no”');
Fashion= Fashion.toLocaleLowerCase();
if (Fashion==='yes' || Fashion === 'y') {
  alert('Actually no!  I am not a big fan of fashion I try to but it’s so hard to follow 😊');

  //console.log('false answer i dont love fashion');
}
else if (Fashion=== 'no' || Fashion === 'n'){
  alert('Yes, that’s true I am so basic with my fashion');
  result++;}
//console.log('true answer i not good with fashion ');

else{
  alert('please enter yes or no');
}


let Sport  = prompt('What about sport do you think I like football games?! Please answer “yes” or “no”');
Sport= Sport.toLocaleLowerCase();
if (Sport==='yes' || Sport === 'y') {
  alert('That’s not true actually LOL   I try my best to watch it but I can’t  ');

  //console.log('false answer i dont love sport');
}
else if (Sport=== 'no' || Sport === 'n'){
  alert('That’s true you are right I don’t really understand a lot about football games.');
  result++;}

//console.log('true answer i not good with sport ');

else{
  alert('please enter yes or no');
}

const myAge=27;

let guessAge = prompt( 'Can you guess how old i am!? please type numbers only' );
console.log( guessAge );

for( let i = 4; i > 0 ; i-- ){
  if( guessAge <5 ){
    guessAge = prompt( 'mmmmm! not really this so young lol' );
    console.log( guessAge );
  }
  else if ( guessAge >40 ){
    guessAge = prompt( 'still no i am younger than this' );
    console.log( guessAge );
  }
  else if ( guessAge >= 20 && guessAge <= 26 ) {
    guessAge = prompt( 'you are so close');
    console.log( guessAge );
  }
  else if ( guessAge >= 6 && guessAge <= 19 ) {
    guessAge = prompt( 'Nope , Oldar than this');
    console.log( guessAge );
  }


  if (Number(guessAge) === myAge)
  {alert('AMAZIIING! good job yes i am 27 years old <3');
    // eslint-disable-next-line no-undef
    result++;
    break;
  }
}

let Moviestype = prompt( 'Can you guess my favorite type of movies',
  'Action, Romance, Horror, Drama, Romance comedy, Fantasy, Asian' ).
  toLowerCase();

let mytype = ['romance comedy', 'fantasy',];
let usrname=true;
for( let i = 0; i < 6; i++ ){
  for(let j=0; j < mytype.length ; j++ ) {
    if( Moviestype === mytype[j] ){
      alert( 'Amazing you guesst it i love to watch ' + mytype[0] +'  and  '+ mytype[1] );
      // eslint-disable-next-line no-undef
      result++;
      i=100;
      usrname=false;
      break;
    }

  }

  if( usrname) {
    Moviestype = prompt( 'I am afraid its wrong please try again')
      .toLowerCase();
    console.log( mytype );
  }

}
alert('Thank you so much ' + Name + 'you got ' + result + '/7, good for you');
