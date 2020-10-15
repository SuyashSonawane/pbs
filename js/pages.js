$(document).ready(function () {
  $.get("../top-bar.html", function (data) {
    $("#top-bar").html(data);
  });
  $.get("../nav.html", function (data) {
    $("nav").html(data);
  });

  $.get("../header.html", function (data) {
    $("header").html(data);
  });
  $.get("../footer.html", function (data) {
    $("footer").html(data);
  });

  $("body").on("click", "#megamenu-button-mobile", (e) => {
    $(".megamenu").slideToggle(400);
    $(e.target).toggleClass("active");
  });
  $("body").on("click", ".megamenu .drop-down", (e) => {
    // console.log(e.target);
    if ($(e.target).next("div").is(":visible")) {
      $(e.target).next("div").slideToggle("normal");
    } else {
      $(".megamenu .drop-down-container").fadeOut("fast");
      $(e.target).next("div").slideToggle("slow");

      $("#map_1").each(function () {
        var embed =
          "<iframe style='height:300px; width:100%; border:0' frameborder='0' scrolling='no'  marginheight='0' marginwidth='0'   src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2482.336900888852!2d-0.18850530000000001!3d51.52538029999999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x10d04b6d1a254faa!2sMaida+Vale+Library!5e0!3m2!1sit!2sit!4v1410245771307'></iframe>";
        $(e.target).html(embed);
      });
    }
  });
  // $("body").on("mouseout", ".megamenu .drop-down", e => {
  //   setTimeout(() => {
  //     $(".megamenu .drop-down-container").fadeOut("fast");
  //   }, 3000);
  // });

  // DROP DOWN MENU TABS ====================================== //
  $("body").on("click", "ul.tabs > li > a", function (e) {
    // console.log("44");
    //Get Location of tab's content
    var contentLocation = $(this).attr("href");
    //Let go if not a hashed one
    if (contentLocation.charAt(0) == "#") {
      e.preventDefault();
      //Make Tab Active
      $(this).parent().siblings().children("a").removeClass("active");
      $(this).addClass("active");
      //Show Tab Content & add active class
      $(contentLocation)
        .show()
        .addClass("active")
        .siblings()
        .hide()
        .removeClass("active");
    }
  });
});
var type = window.location.hash.substr(1);
// console.log(type);
if (type && type < 7) {
  console.log(type);
  //   $(".fade")[type - 1].addClass("active");
  $(".fade").addClass((e) => {
    if (e == type - 1) return "active in";
  });
} else $("#blog5").addClass("active in");

if (type && type < 6) {
  $(".panel-collapse").addClass((e) => {
    if (e == type - 1) return "in";
  });
} else $("#collapse1").addClass(" in");
