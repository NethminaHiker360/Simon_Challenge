

//===========================Variables=================================

var colorId = {
  0: 'red',
  1: 'green',
  2: 'blue',
  3: 'yellow',
};

var array=[];



//====================button click Trigger=======================

function buttonClickTrigger(){
  $('.col').click(function (e) {
    var buttonId = $(this).attr('id');
    playSound(buttonId);
    animateButton(buttonId);
  });
}


//================================================================

function sequense(){
  array.push(generateRandomNumber());
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

function generateRandomNumber() {
  return Math.round(Math.random() * 3);
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
