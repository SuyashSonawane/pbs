var type = window.location.hash.substr(1);
// console.log(type);
if (type && type < 5) {
  $(".fal").addClass(e => {
    if (e == type - 1) return "showFal";
  });
}
