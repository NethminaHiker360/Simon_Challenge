//===========================Variables=================================

var colorId = {
  red: 1,
  green: 2,
  blue: 3,
  yellow: 4,
};

var generatedPattern = [];
var userInputPattern = [];

//==========================MAIN=======================

start();

function start() {
  $(document).keypress(function (e) {
    startGame();
  });
}

//==============================================

function startGame() {
  generateValue();
  buttonClickTrigger();
}



//===========check userpattern & generatedPattern (DONE)================

function checkPatternMatch() {
  return JSON.stringify(generatedPattern) === JSON.stringify(userInputPattern);
}

//====================button click Trigger (DONE)=======================

function buttonClickTrigger() {
  $('.col').click(function (e) {
    let buttonId = $(this).attr('id'); //get triggerd button id
    playSound(buttonId);
    buttonAnimate(buttonId);
  });
}

//======================Generate Pattern & Play Sound (Done)====================================

function generateValue() {
  let generateNumber = RandomNumber();
  generatedPattern.push(generateNumber);
  let key = Object.keys(colorId).find((k) => colorId[k] === generateNumber);
  playSound(key);
  buttonAnimate(key);
}

//==========================Generate Random Number (DONE)=================================

function RandomNumber() {
  return Math.round(Math.random() * 3) + 1;
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

//====================Button Animate (Done)========================

function buttonAnimate(key) {
  $('#' + key).addClass('animateButton');
  setTimeout(function(){
    $('#' + key).removeClass('animateButton');
  },200);
}

//==============================Play Sound (DONE)===================================
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
