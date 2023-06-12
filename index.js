$('.col').click(function (e) {
  playSound($(this).attr('id'));
  gameOver();
});

var colorId = {
  0: 'red',
  1: 'green',
  2: 'blue',
  3: 'yellow',
};

function animateButton(value) {}

function gameOver() {
  $('.level').text('Game Over, Press Any Key to Restart');
  $('body').attr('class', 'wrong');
  setTimeout(function () {
    $('body').removeAttr('class');
  }, 100);
}

function generateRandomNumber() {
  return Math.round(Math.random() * 3);
}

//==============================Play Sound===================================
function playSound(value) {
  animateButton(value);
  switch (value) {
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
