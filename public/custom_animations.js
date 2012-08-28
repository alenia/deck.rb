var fadeIn = function(selector) {
  $(selector + '.fadein').animate({opacity: 1});
};

var animateDots = function() {
  var showExtras = function() {
    fadeIn('.visual_proof ')
  };

  if($('.visual_proof ol.right').length > 1) {return false;}
  var right = $('.visual_proof ol.right').clone().addClass('dup').appendTo('.visual_proof');
  var left = $('.visual_proof ol.left').clone().addClass('dup').appendTo('.visual_proof');
  right.animate({left: '+579'}, 'slow', 'linear');
  left.animate({left: '+600'}, 'slow', 'linear', showExtras);
};

var tableTransitions = function() {
  var oldWaiting, nextWaiting;
  var $table = $('table.math');

  var resetClasses = function() {
    $table.find('.middle').addClass('top').removeClass('middle');
    oldWaiting.addClass('middle').removeClass('waiting');
    nextWaiting.addClass('waiting');
  };
  var moveRowsUp= function() {
    oldWaiting = $table.find('.waiting');
    nextWaiting = oldWaiting.next();

    $table.find('.top td:nth-child(3)').animate({opacity: 0});
    $table.find('.middle td:first-child').animate({opacity: 0});
    $table.find('.middle td:nth-child(2)').animate({opacity: 0});
    $table.find('.middle').animate({top: '0'});
    $table.find('.waiting').animate({top: '+80', opacity: 1}, resetClasses);
    nextWaiting.animate({opacity: '.2'});
  };
  moveRowsUp();
};

$(document).on('keyup', function(event) {
  switch(event.keyCode){
    case 80: //p
      animateDots();
    break;
    case 76: //l
      fadeIn('.lc');
    break;
    case 78: //n
      tableTransitions();
    break;
  }
});



