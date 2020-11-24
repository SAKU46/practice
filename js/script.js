$(function(){

  var imgHeight = $('.top__bg-img').height();
  var bgHeight = $('.top__background').height();
  var aboutImgHeight = $('.about-top__bg-img').height();
  var aboutBgHeight = $('.about-top__background').height();
  var contactImgHeight = $('.contact-top__bg-img').height();
  var contactBgHeight = $('.contact-top__background').height();

  /* ハンバーガーボタンクリック時の操作 */
  /* index.html */
  $(".hamburger-btn").click(function(){
    if($(window).scrollTop() < bgHeight -50){
      $(".bar").toggleClass("cross");
      $('.hamburger-btn__musk').fadeToggle(300);
      $(".header-list").toggleClass("slide");
      $("body").toggleClass("stop");
    }else{
      $(".bar").toggleClass("black");
      $(".text").toggleClass("black");
      $(".bar").toggleClass("cross");
      $('.hamburger-btn__musk').fadeToggle(300);
      $(".header-list").toggleClass("slide");
      $("body").toggleClass("stop");
    }
  });

  /* about.html */
  $(".hamburger-btn").click(function(){
    if($(window).scrollTop() < aboutBgHeight -50){
      $(".bar-about").toggleClass("cross");
      $('.hamburger-btn__musk--about').fadeToggle(300);
      $(".about-list").toggleClass("slide");
    }else{
      $(".bar-about").toggleClass("black");
      $(".text-about").toggleClass("black");
      $(".bar-about").toggleClass("cross");
      $('.hamburger-btn__musk--about').fadeToggle(300);
      $(".about-list").toggleClass("slide");
    }
  });

  /* contact.html */
  $(".hamburger-btn").click(function(){
    if($(window).scrollTop() < contactBgHeight -50){
      $(".bar-contact").toggleClass("cross");
      $('.hamburger-btn__musk--contact').fadeToggle(300);
      $(".contact-list").toggleClass("slide");
    }else{
      $(".bar-contact").toggleClass("black");
      $(".text-contact").toggleClass("black");
      $(".bar-contact").toggleClass("cross");
      $('.hamburger-btn__musk--contact').fadeToggle(300);
      $(".contact-list").toggleClass("slide");
    }
  });

  /* ハンバーガーボタンの色の変化 */
  /* index.html */
  $(window).scroll(function(){
    if($(window).scrollTop() < bgHeight - 50){
      $(".bar").removeClass("black");
      $(".text").removeClass("black");
    }else{
      $(".bar").addClass("black");
      $(".text").addClass("black");
    }
  });

  /* about.html */
  $(window).scroll(function(){
    if($(window).scrollTop() < aboutBgHeight -50){
      $(".bar-about").removeClass("black");
      $(".text-about").removeClass("black");
    }else{
      $(".bar-about").addClass("black");
      $(".text-about").addClass("black");
    }
  });

  /* contact.html */
  $(window).scroll(function(){
    if($(window).scrollTop() < contactBgHeight -50){
      $(".bar-contact").removeClass("black");
      $(".text-contact").removeClass("black");
    }else{
      $(".bar-contact").addClass("black");
      $(".text-contact").addClass("black");
    }
  });

  /* ロゴ画像の色の変化 */
  /* index.html */
  $(window).scroll(function(){
    if($(window).scrollTop() < imgHeight - 50){
      $("#site-logo").removeClass("black");
    }else{
      $("#site-logo").addClass("black");
    }
  });

  /* about.html */
  $(window).scroll(function(){
    if($(window).scrollTop() < aboutImgHeight -50){
      $("#site-logo-about").removeClass("black");
    }else{
      $("#site-logo-about").addClass("black");
    }
  });

  /* contact.html */
  $(window).scroll(function(){
    if($(window).scrollTop() < contactImgHeight -50){
      $("#site-logo-contact").removeClass("black");
    }else{
      $("#site-logo-contact").addClass("black");
    }
  });
});