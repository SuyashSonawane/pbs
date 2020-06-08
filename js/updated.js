ScrollRate = 50;

function scrollDiv_init() {
  DivElmnt = document.getElementById("newsDiv");
  ReachedMaxScroll = false;

  DivElmnt.scrollTop = 0;
  PreviousScrollTop = 0;

  ScrollInterval = setInterval("scrollDiv()", ScrollRate);
}

function scrollDiv() {
  if (!ReachedMaxScroll) {
    DivElmnt.scrollTop = PreviousScrollTop;
    PreviousScrollTop++;

    ReachedMaxScroll =
      DivElmnt.scrollTop >= DivElmnt.scrollHeight - DivElmnt.offsetHeight;
  } else {
    ReachedMaxScroll = DivElmnt.scrollTop == 0 ? false : true;

    DivElmnt.scrollTop = PreviousScrollTop;
    PreviousScrollTop--;
  }
}

function pauseDiv() {
  clearInterval(ScrollInterval);
}

function resumeDiv() {
  PreviousScrollTop = DivElmnt.scrollTop;
  ScrollInterval = setInterval("scrollDiv()", ScrollRate);
}

document.getElementById("submit").addEventListener("click", () => {
  setTimeout(() => {
    $("#newsletter")[0].reset();
  }, 1000);
});
$.get("../floater.html", function(data) {
  $("#floater").html(data);
});
