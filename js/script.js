// $(function () {
//     var apps = $('#manu').offset().top;

//     $(window).scroll(function () {
//         var appscroll = $(this).scrollTop();

//         if (appscroll > apps) {
//             $('#manu').addClass('manu_fixed');
//         } else {
//             $('#manu').removeClass('manu_fixed');
//         }
//     });


//     $('.back_top').click(function () {
//         var scrolling = $('html, body').animate({
//             scrollTop: 0,
//         }, 1000);
//     });

//     $(window).scroll(function () {
//         var scroll = $(this).scrollTop();
//         if (scroll > 200) {
//             $('.back_top').fadeIn();
//         } else {

//             $('.back_top').fadeOut();
//         }
//     });
$(function (){

'use strict';
//+++++++++++++++ manu fixed start +++++++++++

var manu = $('.manu').offset().top;

$(window).scroll(function(){
    var fix = $(this).scrollTop();
    if( fix > manu ){
        $('.manu').addClass('fixed');
    }
    else{
        $('.manu').removeClass('fixed');

    }
});


//+++++++++++++++ manu fixed end +++++++++++
//+++++++++++++++++ back to top start+++++++++++++++++
$('.back_top').click(function(){
  var scroll = $('html, body').animate({
      scrollTop: 0,
  },1000);
});

$(window).scroll(function(){
    var scrolli = $(this).scrollTop();
    if( scrolli > 500 ){
        $('.back_top').fadeIn();
    }
    else{
        $('.back_top').fadeOut();

    }
});
//+++++++++++++++++ back to top end +++++++++++++++++
//+++++++++++++counter up start++++++++++++
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
//+++++++++++++counter up end++++++++++++

});



    // $('.team_row').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: false,
    //     autoplaySpeed: 1000,
    //     prevArrow: '<i class="fas fa-chevron-left prvarr"></i>',
    //     nextArrow: '<i class="fas fa-chevron-right nxtarr"></i>',
    // });






    // //================



    // new VenoBox({
    //     selector: '.my-image-links',
    //     numeration: true,
    //     infinigall: true,
    //     share: true,
    //     spinner: 'rotating-plane'
    // });






    
    
//     $('.bannerslider').slick({
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         arrows: false,
    
//     });



// });
/*++++++++++++++++++++++hamburger icon start+++++++++++++++++*/  
$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
  });
/*++++++++++++++++++++++hamburger icon end+++++++++++++++++*/  
/*++++++++++++++++++++++slick slider start+++++++++++++++++*/
  
$('.about_details').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false,
            autoplay: true,
            speed: 300,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false,
            autoplay: true,
            speed: 300,
          }
        },]
  });
          
  
$('.team_details').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false,
            autoplay: true,
            speed: 300,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false,
            autoplay: true,
            speed: 300,
          }
        },]
  });
          
  

          
/*++++++++++++++++++++++slick slider end+++++++++++++++++*/  