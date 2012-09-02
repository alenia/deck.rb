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
  right.animate({left: '+529'}, 'slow', 'linear');
  left.animate({left: '+550'}, 'slow', 'linear', showExtras);
};


var scrollTable = function() {
  var oldWaiting, nextWaiting;

  var resetClasses = function() {
    oldWaiting = $table.find('.waiting');
    nextWaiting = oldWaiting.next();

    $table.find('.middle').addClass('top').removeClass('middle');
    oldWaiting.addClass('middle').removeClass('waiting');
    nextWaiting.addClass('waiting');
  };
  var moveRowsUp= function() {

    if($table.find('.middle').length > 0){
      $table.find('.top td:nth-child(3)').animate({opacity: 0});
    }
    $table.find('.middle td:first-child').animate({opacity: 0});
    $table.find('.middle td:nth-child(2)').animate({opacity: 0});
    $table.find('.middle').animate({top: '0'});
    $table.find('.waiting').animate({top: '5em', opacity: 1}, resetClasses);
  };
  moveRowsUp();
};

var tableTransitionCallCount = 0;
var $table = $('table.math');

$(document).on('keyup', function(event) {
  switch(event.keyCode){
    case 80: //p
      animateDots();
    break;
    case 76: //l
      fadeIn('.lc');
    break;
    case 78: //n
      if(tableTransitionCallCount === 0) {
        $table.find('.want').animate({opacity: 1});
    } else if(tableTransitionCallCount === 1) {
        $table.find('.top').animate({opacity: 1});
    } else {
      scrollTable();
    }
    tableTransitionCallCount += 1;
    break;
  }
});



