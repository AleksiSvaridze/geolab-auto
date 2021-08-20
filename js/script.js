$(document).ready(function() {

$('.burgerMenu').on('click', function () {
    $(this).toggleClass('openBurger');
    $(this).toggleClass('openHiddenMenu');

    $('.second, .third, .ninth').toggleClass('cube');

    if ($('.burgerMenu').hasClass('openBurger')) {

    	$('.logo').attr('src', 'img/logo-red.png');

    } else { $('.logo').attr('src', 'img/logo-white.png'); }
    
});

$('.hidden-li-a').on('click', function () {
  
  if( $('.burgerMenu').hasClass('openHiddenMenu') ) {

    $('.burgerMenu').removeClass('openHiddenMenu');
    $('.burgerMenu').removeClass('openBurger');
    $('.second, .third, .ninth').removeClass('cube');

  };

  if ( $('.logo').attr('src', 'img/logo-red.png')) {

      $('.logo').attr('src', 'img/logo-white.png');

    };

});


var scrollLink = $('.scroll');

scrollLink.click(function(e) {
  e.preventDefault();
  $('body,html').animate({
    scrollTop: $(this.hash).offset().top
  }, 500);
});


$(window).scroll(function() {
  var scrollBarLocation = $(this).scrollTop();
  scrollLink.each(function() {
    var divOffset = $(this.hash).offset().top

    if ( divOffset <= scrollBarLocation ) {
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
    }
  });
});












// scroll

var scrollTop = $(".scrollTop");

$(window).scroll(function() {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
if (topPos > 100) {
      $(scrollTop).css("opacity", "1");

    } else {
      $(scrollTop).css("opacity", "0");
    }

}); // scroll END

  //Click event to scroll to top
$(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;

}); // click() scroll top EMD








$(".bus").addClass("hidden").viewportChecker({
    classToAdd: "animated movingBus",
    offset: 100
});


});  // Document.Ready