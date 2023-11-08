var content = document.getElementsByTagName('body')[0];
var content2 = document.querySelectorAll('.missao');
var content3 = document.querySelectorAll('.inicio');
var content4 = document.querySelectorAll('.txt_cor_light');
var content5 = document.getElementsByTagName('nav')[0];
var content6 = document.querySelectorAll('.logo_nav');
var content7 = document.querySelectorAll('.txt_cor_light_menu');
var content8 = document.querySelectorAll('.juntos_podemos');
var content9 = document.querySelectorAll('.historia_direita');
var content10 = document.querySelectorAll('.gradient_historia_topo');
var content11 = document.querySelectorAll('.gradient_historia_baixo');
var content12 = document.querySelectorAll('.svg_l');
var content13 = document.querySelectorAll('.baixe_historia');
var content14 = document.querySelectorAll('.svg_l2');
var content15 = document.querySelectorAll('.entrevista_topo2');
var content16 = document.querySelectorAll('.juntos_podemos_conteudo_botao');
var content17 = document.querySelectorAll('.fundo');
var content18 = document.querySelectorAll('.fundo_claro');
var content19 = document.querySelectorAll('.pessoa_mobile');
var content20 = document.querySelectorAll('.pessoa_mobile2');
var content21 = document.querySelectorAll('.pessoa_mobile3');
var content22 = document.querySelectorAll('.pessoa_mobile4');
var content23 = document.querySelectorAll('.pessoa_mobile5');
var content24 = document.querySelectorAll('.indica');
var content25 = document.querySelectorAll('.como_comecou_mobile');
var content26 = document.querySelectorAll('.gradient_historia_topo_mobile');
var content27 = document.querySelectorAll('.gradient_historia_baixo_mobile');
var content28 = document.querySelectorAll('.svg_l3');
var content29 = document.querySelectorAll('.entre_mobile');
var content30 = document.querySelectorAll('.fim_entre_mobile');

const mainContent = document.querySelectorAll(".main");
const switchBTN = document.querySelectorAll(".switch");

function clickEvent(event) {
  mainContent.forEach((element) => {
    element.classList.toggle("main--light");
    element.classList.toggle("main--dark");
  });


  content.classList.toggle('night');

  content5.classList.toggle('nav_d');
  
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

  content17.forEach(function(element) {
    element.classList.toggle('fundo_d');
  });

  content18.forEach(function(element) {
    element.classList.toggle('fundo_claro_d');
  });

  content19.forEach(function(element) {
    element.classList.toggle('pessoa_mobile_d');
  });
  content20.forEach(function(element) {
    element.classList.toggle('pessoa_mobile2_d');
  });
  content21.forEach(function(element) {
    element.classList.toggle('pessoa_mobile3_d');
  });
  content22.forEach(function(element) {
    element.classList.toggle('pessoa_mobile4_d');
  });
  content23.forEach(function(element) {
    element.classList.toggle('pessoa_mobile5_d');
  });

  content24.forEach(function(element) {
    element.classList.toggle('indica_d');
  });

  content25.forEach(function(element) {
    element.classList.toggle('como_comecou_mobile_d');
  });

  content26.forEach(function(element) {
    element.classList.toggle('gradient_historia_topo_mobile_d');
  });

  content27.forEach(function(element) {
    element.classList.toggle('gradient_historia_baixo_mobile_d');
  });

  content28.forEach(function(element) {
    element.classList.toggle('svg_d3');
  });

  content29.forEach(function(element) {
    element.classList.toggle('entre_mobile_d');
  });

  content30.forEach(function(element) {
    element.classList.toggle('fim_entre_mobile_d');
  });
}

switchBTN.forEach((button) => {
  button.addEventListener("click", clickEvent);
});



