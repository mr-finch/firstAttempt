$(document).ready(function() {

  var speed = 15;

  var count = 100;
  var direction = 'right';

  var swing = function() {
    if (count == 0) {
      direction = 'left'
    };
    if (count == 100) {
      direction = 'right'
    };
    var rotate = (count - 50) / 10;
    $('#light').css('transform', 'rotate(' + rotate + 'deg)')
    if (direction == 'left') {
      count++
    } else if (direction == 'right') {
      count--;
    }

  };

  setInterval(function() {
    swing();
  }, speed);
  $('#lit').hide();

  $("#bulbBase").hover(function() {

    $(this).toggleClass('shadow')
    $('#bulbTop').toggleClass('shadow')
    $('#cord').toggleClass('shadow')
    $('#lit').toggle();
  });

  $("#bulbBase").mouseover(function() {
    $('#back').css('background', 'linear-gradient(#3FB0A1,#BFA76F)')
  });
  $("#bulbBase").mouseleave(function() {
    $('#back').css('background', 'linear-gradient(#3FB0A1, #383132)')
  });

});
