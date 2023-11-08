var content = document.getElementsByTagName('body')[0];
var content2 = document.getElementsByTagName('nav')[0];
var content3 = document.querySelectorAll('.txt_cor_light_menu');
var content4 = document.querySelectorAll('.txt_cor_light');
var content5 = document.querySelectorAll('.logo_nav');

const mainContent = document.querySelectorAll(".main");
const switchBTN = document.querySelectorAll(".switch");

function clickEvent(event) {
  mainContent.forEach((element) => {
    element.classList.toggle("main--light");
    element.classList.toggle("main--dark");
  });


  content.classList.toggle('night');

  content2.classList.toggle('nav_d');

  content3.forEach(function(element) {
    element.classList.toggle('txt_cor_light_menu_d');
  });

  content4.forEach(function(element) {
    element.classList.toggle('txt_cor_dark');
  });

  content5.forEach(function(element) {
    element.classList.toggle('logo_nav_d');
  });
}

switchBTN.forEach((button) => {
  button.addEventListener("click", clickEvent);
});



