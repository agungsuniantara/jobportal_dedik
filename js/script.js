$(document).ready(function () {
  $(".navbar").click(function (e) {
    e.preventDefault();

    $(".dropdown").toggleClass("active");
  });

  function filterJobs(category) {
    $(".data-filter").hide();
    if (category === "all job") {
      $(".data-filter").show();
    } else if (category === "remote job") {
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
});
