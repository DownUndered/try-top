$(document).foundation();

var targetOffset = $("#shop").offset().top;
$(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > targetOffset ) {
          $("#desktopMenu").addClass("changeColor");
       }
       else {
          $("#desktopMenu").removeClass("changeColor");
       }
    });
 });