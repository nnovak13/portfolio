$( document ).ready(function() {
  // on about nav button click animate to about div offset -150px
  $('#about-nav').click(function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $('.about').offset().top -150
    }, 1200);
  });
  // on nav work button click animate to work div offset -150px
  $('#work-nav').click(function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $('.work').offset().top -150
    }, 1200);
  });
  // on nav up arrow button click animate to hello div
  $('.hello-nav').click(function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $('.hello').offset().top
    }, 1200);
  });
});
