$(document).foundation();


$(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 200 ) {
          $("#desktopMenu").addClass("changeColor");
       }
       else {
          $("#desktopMenu").removeClass("changeColor");
       }
    });
 });