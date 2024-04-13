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

  function filterJobs(category) {
    $(".data-filter").hide();
    if (category === "all job") {
      $(".data-filter").show();
    } else if (category === "remote job") {
      $('.data-filter[data-specialist="' + category + '"]').show();
    }
    else if (category === "featured job") {
      $('.data-filter[data-specialist="' + category + '"]').show();
    }
    else if (category === "high paying job") {
      $('.data-filter[data-specialist="' + category + '"]').show();
    }
    else if (category === "it and software") {
      $('.data-filter[data-specialist="' + category + '"]').show();
    }
    else if (category === "fresh job") {
      $('.data-filter[data-specialist="' + category + '"]').show();
    }
    else if (category === "fresh job") {
      $('.data-filter[data-specialist="' + category + '"]').show();
    }
    

  }

  $(".search-button").click(function () {
    var selectedSpecialist = $("#filter-search").val();

    $(".data-filter").hide();

    $(".data-filter").each(function () {
      var specialist = $(this).data("specialist");

      if (selectedSpecialist === "" || selectedSpecialist === specialist) {
        $(this).show();
      }
    });

    return false;
  });

  $(".konten-category").click(function (e) {
    e.preventDefault();
    var category = $(this).find("h5").text().toLowerCase();
    filterJobs(category);
  });
  animateOnScroll();

  $(window).scroll(function () {
    animateOnScroll();
  });
$(".button-view").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".container-pilihan").offset().top,
    },
    300
    );
  });
});

