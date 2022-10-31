
/*
const min = document.getElementById("minimize");
const max = document.getElementById("maximize");
const close = document.getElementById("close");


var SPD_window = {head:document.getElementById("window-header"),
body:document.getElementById("window-content")}

min.onclick = function(){
    SPD_window.body.style.display = "none";
    // SPD_window.head.style.width = "300px";
    SPD_window.head.style.position = "absolute";
    SPD_window.head.style.bottom = "5px";
    SPD_window.head.style.right = "5px";

}*/

//TOGGLING NESTED ul
$(function() {
    var list = $('.js-dropdown-list');
    var link = $('.js-link');
    link.click(function(e) {
      e.preventDefault();
      list.slideToggle(200);
    });
    list.find('li').click(function() {
      var text = $(this).html();
      var icon = '<i class="fa fa-chevron-down"></i>';
      link.html(text+icon);
      list.slideToggle(200);
      if (text === '* Reset') {
        link.html('Select one option'+icon);
      }
    });
  });