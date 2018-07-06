//Jeff Fung | Yebinabox

$(function(){
  offset = 0;
  $('.main-nav li a[href^="#"]').click(function(event) {

      event.preventDefault();
      $(this).addClass('active');

      var anchorId = $(this).attr('href');

      var target = $(anchorId).offset().top - offset;

      $('html, body').animate({ scrollTop: target }, 1000, function () {
          window.location.hash = anchorId;
      });

      return false;
  })


  $(window).scroll(function(){

      position = $(this).scrollTop();
      $('.main-nav li a[href^="#"]').each(function(){
            var anchorId = $(this).attr('href');
            var target = $(anchorId).offset().top - 75;

          if(position>=target){

              $('.main-nav li a[href^="#"]').removeClass("active")
              $(this).addClass('active');
          }
      })
  });
  $(function(){

      $(window).scroll();
  });
});

$(function () {

    $("#drop-icon").click(function () {
        $('li > ul').not($(this).children("ul")).show();
        document.getElementById("slide-nav").style.background = "rgba(238, 238, 238, 0.9)";
        document.getElementById("slide-nav").style.width = "100vw";
        document.getElementById("slide-nav").style.height = "100vh";
        document.getElementById("drop-icon").style.display = "none";
        document.getElementById("drop-icon2").style.display = "block";
    });
    $("#drop-icon2").click(function () {
        $('li > ul').not($(this).children("ul")).hide();
        document.getElementById("slide-nav").style.background = "transparent";
        document.getElementById("slide-nav").style.width = "auto";
        document.getElementById("slide-nav").style.height = "auto";
        document.getElementById("drop-icon").style.display = "block";
        document.getElementById("drop-icon2").style.display = "none";
    });
});

$(function(){
  offset = 0;
  $('.slide-nav li a[href^="#"]').click(function(event) {

      $('li > ul').not($(this).children("ul")).hide();
      document.getElementById("slide-nav").style.background = "transparent";
      document.getElementById("drop-icon").style.display = "block";
      document.getElementById("drop-icon2").style.display = "none";

      event.preventDefault();
      $(this).addClass('active');

      var anchorId = $(this).attr('href');

      var target = $(anchorId).offset().top - offset;

      $('li > ul').not($(this).children("ul")).hide();
      $(this).children("ul").toggle();

      $('html, body').animate({ scrollTop: target }, 1000, function () {
          window.location.hash = anchorId;

      });

      return false;
  })

  $(window).scroll(function(){

      position = $(this).scrollTop();
      $('.slide-nav li a[href^="#"]').each(function(){
            var anchorId = $(this).attr('href');
            var target = $(anchorId).offset().top - 150;

          if(position>=target){

              $('.slide-nav li a[href^="#"]').removeClass("active")
              $(this).addClass('active');
          }
      })
  });
  $(function(){

      $(window).scroll();
  });

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;

      if (prevScrollpos >= currentScrollPos) {
        document.getElementById("slide-nav").style.top = "0";
      }
      else if($("#drop-icon2").is(':visible')){
        document.getElementById("slide-nav").style.top = "0";
      }
      else {
        document.getElementById("slide-nav").style.top = "-100px";
      }
      prevScrollpos = currentScrollPos;
  }
});
//Jeff Fung | Yebinabox
