//Jeff Fung | Yebinabox

//click event
$(function(){
  offset = 0;
  $('.main-nav li a[href^="#"]').click(function(event) {

      //prevent from default action to intitiate
      event.preventDefault();
      $(this).addClass('active');

      //the id of the section we want to go to
      var anchorId = $(this).attr('href');

      //scroll target : the top position of the section that has the id referenced by href
      var target = $(anchorId).offset().top - offset;

      $('html, body').animate({ scrollTop: target }, 1000, function () {
          window.location.hash = anchorId;
      });

      return false;
  })


  //check the pages when scroll event occurs
  $(window).scroll(function(){
      //get the current vertical position of the scroll bar
      position = $(this).scrollTop();
      $('.main-nav li a[href^="#"]').each(function(){
            var anchorId = $(this).attr('href');
            var target = $(anchorId).offset().top - 75;
          // check if the document has crossed the page
          if(position>=target){
              //remove active from all anchor and add it to the clicked anchor
              $('.main-nav li a[href^="#"]').removeClass("active")
              $(this).addClass('active');
          }
      })
  });
  $(function(){
      //set scroll state after dom ready
      $(window).scroll();
  });
});

$(function () {

    //need to learn how to properly code this, will save some lines
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

//click event
$(function(){
  offset = 0;
  $('.slide-nav li a[href^="#"]').click(function(event) {

      $('li > ul').not($(this).children("ul")).hide();
      document.getElementById("slide-nav").style.background = "transparent";
      document.getElementById("drop-icon").style.display = "block";
      document.getElementById("drop-icon2").style.display = "none";

      //prevent from default action to intitiate
      event.preventDefault();
      $(this).addClass('active');

      //the id of the section we want to go to
      var anchorId = $(this).attr('href');

      //scroll target : the top position of the section that has the id referenced by href
      var target = $(anchorId).offset().top - offset;

      $('li > ul').not($(this).children("ul")).hide();
      $(this).children("ul").toggle();

      $('html, body').animate({ scrollTop: target }, 1000, function () {
          window.location.hash = anchorId;

      });

      return false;
  })


  //check the pages when scroll event occurs
  $(window).scroll(function(){
      //get the current vertical position of the scroll bar
      position = $(this).scrollTop();
      $('.slide-nav li a[href^="#"]').each(function(){
            var anchorId = $(this).attr('href');
            var target = $(anchorId).offset().top - 150;
          //check if the document has crossed the page
          if(position>=target){
              //remove active from all anchor and add it to the clicked anchor
              $('.slide-nav li a[href^="#"]').removeClass("active")
              $(this).addClass('active');
          }
      })
  });
  $(function(){
      //set scroll state after dom ready
      $(window).scroll();
  });

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;

      //removes dropdown when scrolling if nav is not visible
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
