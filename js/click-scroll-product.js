//jquery-click-scroll
//by syamsul'isul' Arifin

var sectionArray = [1, 2, 3, 4, 5];

$.each(sectionArray, function (index, value) {
  $(document).scroll(function () {
    console.log("value", value, index);
    var offsetSection = $("#" + "section_" + value).offset().top - 94;
    var docScroll = $(document).scrollTop();
    var docScroll1 = docScroll + 1;

    if (docScroll1 >= offsetSection) {
      $(".navbar-nav .nav-item .nav-link").removeClass("active");
      $(".navbar-nav .nav-item .nav-link:link").addClass("inactive");
      $(".navbar-nav .nav-item .nav-link").eq(index).addClass("active");
      $(".navbar-nav .nav-item .nav-link").eq(index).removeClass("inactive");
    }
  });

  $(".click-scroll")
    .eq(index)
    .click(function (e) {
      console.log("value 2", value, index);
      if (value === 5 && index === 4) {
        $(".navbar-nav .nav-item .nav-link:link").addClass("inactive");
        //$(".navbar-nav .nav-item .nav-link").eq(0).addClass("active");
        $(".navbar-nav .nav-item .nav-link:link").eq(0).removeClass("inactive");
      }
      var offsetClick = $("#" + "section_" + value).offset().top - 94;
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: offsetClick,
        },
        300
      );
    });
});

$(document).ready(function () {
  //   $(".navbar-nav .nav-item .nav-link:link").addClass("inactive");
  //   $(".navbar-nav .nav-item .nav-link").eq(0).addClass("active");
  //   $(".navbar-nav .nav-item .nav-link:link").eq(0).removeClass("inactive");
});
