//===========================Variables==================

var colorId = {
  red: 1,
  green: 2,
  blue: 3,
  yellow: 4,
};

var gameLevel = 0;

var generatedPattern = []; //store by number
var userInputPattern = []; //store by number

//==========================MAIN=======================

start();

function start() {
  $(document).keypress(function (e) {
    $('.level').text('Level ' + (gameLevel + 1));
    startGame();
  });
}

function startGame() {
  generateValue();
  buttonClickTrigger();
}

//===============Reset game=============

function resetGame() {
  gameLevel = 0;
  generatedPattern = [];
  userInputPattern = [];
}

//===========check ?? userpattern===generatedPattern ?? (DONE)================

function checkPatternMatch(userNumber) {
  for (let i = 0; i < generatedPattern.length; i++) {
    const element = array[i];
  }
}

//====================button click Trigger (DONE)=======================

function buttonClickTrigger() {
  for (let i = 0; i < generatedPattern.length; i++) {
    $('.col').click(function (e) {
      var buttonId = $(this).attr('id'); //get triggerd button id
      buttonAnimate(buttonId);
      playSound(buttonId);
      if (generatedPattern[i] !== colorId[buttonId]) {
        gameOver();
      }
    });
  }
}

//======================Generate Pattern & Play Sound (Done)====================================

function generateValue() {
  let generateNumber = RandomNumber();
  generatedPattern.push(generateNumber);
  let key = Object.keys(colorId).find((k) => colorId[k] === generateNumber);
  setTimeout(function () {
    buttonAnimate(key);
    playSound(key);
  }, 800);
}

function RandomNumber() {
  return Math.round(Math.random() * 3) + 1;
}

//====================Game-Over State (Done)========================

function gameOver() {
  resetGame();
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
  setTimeout(function () {
    $('#' + key).removeClass('animateButton');
  }, 200);
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
