$(".col").click(function (e) { 
    playSound($(this).attr("id"));
});


function playSound(key){
    switch (key) {
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