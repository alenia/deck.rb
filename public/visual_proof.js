var showExtras = function() {
  $('.visual_proof .fadein').animate({opacity: 1});
}

var animateDots = function() {
  if($('.visual_proof ol.right').length > 1) {return false;}
  var right = $('.visual_proof ol.right').clone().addClass('dup').appendTo('.visual_proof');
  var left = $('.visual_proof ol.left').clone().addClass('dup').appendTo('.visual_proof');
  right.animate({left: '+579'}, 'slow', 'linear');
  left.animate({left: '+600'}, 'slow', 'linear', showExtras);
};

$(document).on('keyup', function(event) {
  if(event.keyCode===68){
    animateDots();
  }
});



