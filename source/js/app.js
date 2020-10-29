
$(document).ready(function(){


$(window).on('load',function(){
  $('.preloader').addClass('complete')
});

// sticky nav bar. if scroll more than 50 pixel, add a class called "stickyadd"

$(window).on('scroll',function(){
  var scroll = $(window).scrollTop();
  console.log(scroll);
  if(scroll >=50){
    $(".sticky").addClass("stickyadd");
  }else{
    $(".sticky").removeClass("stickyadd");
  }
});

// progress bars
// once we scroll down to the experience section, this waypoint js function will run all the experience bar. offset value is to trigger this animation earlier

var waypoint = new Waypoint({
  element: document.getElementById('experience'),
  handler: function() { 

    var p = document.querySelectorAll('.progress-bar');
    p[0].setAttribute("style", "width:100%;transition:1s all;");
    p[1].setAttribute("style", "width:95%;transition:1.5s all;");
    p[2].setAttribute("style", "width:85%;transition:1.7s all;");
    p[3].setAttribute("style", "width:99%;transition:2s all;");
    p[4].setAttribute("style", "width:85%;transition:2.3s all;");
    p[5].setAttribute("style", "width:95%;transition:2.5s all;");


  },
   offset: '90%'
});

// adding fadeInUp animation to child of div with class .way-col
var $child = $('.way-fade-up').children();
$child.each(function(){
  var self= $(this);
  $(this).waypoint(function(){
    self.addClass('animated fadeInUp');
  },{offset: '90%'});
});

var $child = $('.way-fade-left').children();
$child.each(function(){
  var self= $(this);
  $(this).waypoint(function(){
    self.addClass('animated fadeInLeft');
  },{offset: '90%'});
});

var $child = $('.way-fade-right').children();
$child.each(function(){
  var self= $(this);
  $(this).waypoint(function(){
    self.addClass('animated fadeInRight');
  },{offset: '90%'});
});

$('.owl-carousel').owlCarousel({
    loop:true,
    // margin:10,   // since one item ou can remove it
    nav:false,
    // dots:true,
    autoplay:true,
    autoplayTimeout:4000,
    items:1,
    // animateOut : "fadeOut",
    animateIn : "fadeInRight"

});


var filterizd = $('.filter-container').filterizr({
   animationDuration: .5,

});

// $('.img-loaded').imagesLoaded()
//   .done( function( instance ) {
//     var filterizd = $('.filter-container').filterizr({
//        animationDuration: .5,
//
//     });
//   });

/*typing effect in the hero image*/


  var typed = new Typed(".element", {
  strings: ["a Web Developer","a Web Designer","a Businessman"],
  smartBackspace: true,
   typeSpeed: 100,
   backSpeed: 100,
   loop: true,
  loopCount: Infinity,
  startDelay: 1000
});


$('a').smoothScroll({

  speed:2000,
});

});
