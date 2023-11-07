var content = document.getElementsByTagName('body')[0];
var content2 = document.getElementsByTagName('nav')[0];

const mainContent = document.querySelectorAll(".main");
const switchBTN = document.querySelectorAll(".switch");

function clickEvent(event) {
  mainContent.forEach((element) => {
    element.classList.toggle("main--light");
    element.classList.toggle("main--dark");
  });


  content.classList.toggle('night');

  content2.classList.toggle('nav_d');
  
  content2.forEach(function(element) {
    element.classList.toggle('missao_dark');
  });

  content3.forEach(function(element) {
    element.classList.toggle('inicio_dark');
  });

  content4.forEach(function(element) {
    element.classList.toggle('txt_cor_dark');
  });

  content6.forEach(function(element) {
    element.classList.toggle('logo_nav_d');
  });

  content7.forEach(function(element) {
    element.classList.toggle('txt_cor_light_menu_d');
  });

  content8.forEach(function(element) {
    element.classList.toggle('juntos_podemos_d');
  });

  content9.forEach(function(element) {
    element.classList.toggle('historia_direita_d');
  });

  content10.forEach(function(element) {
    element.classList.toggle('gradient_historia_topo_d');
  });

  content11.forEach(function(element) {
    element.classList.toggle('gradient_historia_baixo_d');
  });

  content12.forEach(function(element) {
    element.classList.toggle('svg_d');
  });

  content13.forEach(function(element) {
    element.classList.toggle('baixe_historia_d');
  });

  content14.forEach(function(element) {
    element.classList.toggle('svg_d2');
  });

  content15.forEach(function(element) {
    element.classList.toggle('entrevista_topo2_d');
  });
  content16.forEach(function(element) {
    element.classList.toggle('juntos_podemos_conteudo_botao_d');
  });
}

switchBTN.forEach((button) => {
  button.addEventListener("click", clickEvent);
});



