start();


function start(){
  buttonClickTrigger();
  generateValue();
    
}

//===========================Variables=================================

var colorId = {
  'red':1,
  'green':2,
  'blue':3,
  'yellow':4,
};

var generatedPattern=[];
var userInputPattern=[];

//==============================user input Array=======================

function userPattern(key){
  userInputPattern.push(colorId[key]);
}

//===========check userpattern & generate3dPattern================

function checkPatternMatch(){
  if(userInputPattern===generatedPattern){
    console.log("true");
  }
}

//========================When mouse click get button keyValue===========================


function checkPatternByNumber(key){  //key="id"
  let keyValue=colorId[key];
  for (let i = 0; i < generatedPattern.length; i++) {
    const element = array[i];
  }
}



//====================button click Trigger=======================

function buttonClickTrigger(){
  $('.col').click(function (e) {
    let buttonId = $(this).attr('id'); //get triggerd button id
    playSound(buttonId);
  
    userPattern(buttonId);

    console.log("User: "+userInputPattern);

  });
}


//================================================================

function generateValue(){
  var generateNumber=RandomNumber();
  generatedPattern.push(generateNumber);
  // let key=Object.keys(colorId).find(k=>colorId[k]===generateNumber);
  console.log("generate: "+generateNumber);
}



function animateButton(idvalue) {

}

//====================Game Over State (Done)========================

function gameOver() {
  playSound();
  $('.level').text('Game Over, Press Any Key to Restart');
  $('body').attr('class', 'wrong');
  setTimeout(function () {
    $('body').removeAttr('class');
  }, 100);
}

//===========================================================

function RandomNumber() {
  return (Math.round(Math.random() * 3))+1;
}

//==============================Play Sound (done)===================================
function playSound(idvalue) {
  switch (idvalue) {
    case 'blue':
      new Audio('sounds/blue.mp3').play();
      break;

    case 'green':
      new Audio('sounds/green.mp3').play();
      break;

    case 'red':
      new Audio('sounds/red.mp3').play();
      break;

    case 'yellow':
      new Audio('sounds/yellow.mp3').play();
      break;

    default:
      new Audio('sounds/wrong.mp3').play();
      break;
  }
}

//===========================================================================
