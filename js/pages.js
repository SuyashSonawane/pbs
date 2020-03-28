// $(document).ready(function() {
//   $.get("../header.html", function(data) {
//     $("header").html(data);
//   });

//   $.get("../nav.html", function(data) {
//     $("nav").html(data);
//   });

//   $.get("../footer.html", function(data) {
//     $("footer").html(data);
//   });
// });
var type = window.location.hash.substr(1);
// console.log(type);
if (type && type < 6) {
  //   $(".fade")[type - 1].addClass("active");
  $(".fade").addClass(e => {
    if (e == type - 1) return "active in";
  });
} else $("#blog5").addClass("active in");

if (type && type < 4) {
  //   $(".fade")[type - 1].addClass("active");
  $(".panel-collapse").addClass(e => {
    if (e == type - 1) return "in";
  });
} else $("#collapse1").addClass(" in");
