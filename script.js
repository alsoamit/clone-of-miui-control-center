$(document).ready(() => {
  $(".c1").click(function () {
    $(this).toggleClass("clr1");
    $(this).addClass("press");
    setInterval(() => {
      $(this).removeClass("press");
    }, 300);
  });
  $(".c2").click(function () {
    $(this).toggleClass("clr2");
    $(this).addClass("press");
    setInterval(() => {
      $(this).removeClass("press");
    }, 300);
  });
  $(".c3").click(function () {
    $(this).toggleClass("clr3");
    $(this).addClass("press");
    setInterval(() => {
      $(this).removeClass("press");
    }, 300);
  });
});
