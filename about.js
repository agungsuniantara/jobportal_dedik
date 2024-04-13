$(document).ready(function () {
    $(".navbar").click(function (e) {
      e.preventDefault();
  
      $(".dropdown").toggleClass("active");
    });
  
    function animateOnScroll() {
      $(".fade").each(function () {
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > position - windowHeight + 200) {
          $(this).addClass("fade-in");
        } else {
          $(this).removeClass("fade-in");
        }
      });
    }
})