$(document).ready(function () {
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
if (type && type < 6) {
  //   $(".fade")[type - 1].addClass("active");
  $(".fade").addClass((e) => {
    if (e == type - 1) return "active in";
  });
} else $("#blog5").addClass("active in");

if (type && type < 5) {
  //   $(".fade")[type - 1].addClass("active");
  $(".panel-collapse").addClass((e) => {
    if (e == type - 1) return "in";
  });
} else $("#collapse1").addClass(" in");
