var nav = document.getElementsByTagName("nav")[0];

window.addEventListener("load", function(){
  var loader = document.querySelector(".loader");

  loader.className += " hidden";
  nav.classList.remove("hide");
  nav.classList.add("show");
});

var prevScrollpos = window.pageYOffset,
    button        = document.getElementsByClassName("version")[0],
    section       = document.getElementsByTagName("section")[0];

button.addEventListener("click", function(){
  section.classList.toggle("section-1");
  section.classList.toggle("section-2");
});

window.onscroll = function() {
  nav.classList.remove("show");
  var currentScrollPos = window.pageYOffset;
  if(prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-76px";
  }
  prevScrollpos = currentScrollPos;
}