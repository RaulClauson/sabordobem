var content = document.getElementsByTagName('body')[0];
var content2 = document.getElementsByClassName('svg_inicio2')[0];
var content3 = document.querySelectorAll('.svg_inicio3'); // Seleciona todos os elementos com a classe 'svg_inicio3'
var content5 = document.querySelectorAll('.btn');
var content6 = document.querySelectorAll('.icone_inicio');
var content7 = document.querySelectorAll('.folhas');
var content8 = document.querySelectorAll('.cirulo_fundo');
var content9 = document.querySelectorAll('.circulo_cortado');
var content10 = document.querySelectorAll('.circulo_cortado2');
var content11 = document.querySelectorAll('.texto_branco');
var content12 = document.querySelectorAll('.texto_branco2');
var content13 = document.querySelectorAll('.saber_mais_inicio');
var content14 = document.getElementsByClassName('imagem_sacola_inicio')[0];
var content15 = document.getElementsByClassName('lutamos')[0];
var content16 = document.querySelectorAll('.light_text');
var content17 = document.getElementsByClassName('divide_oque')[0];
var content18 = document.querySelectorAll('.fundo_oq');
var content19 = document.querySelectorAll('.light_text2');
var content20 = document.querySelectorAll('.logo_oq');
var content21 = document.querySelectorAll('.porque_caixa_darkk');
var content22 = document.querySelectorAll('.svg_caixas');
var content23 = document.getElementsByClassName('porque_textos_dentro')[0];
var content24 = document.querySelectorAll('.play');
var content25 = document.querySelectorAll('.play2');
var content26 = document.getElementsByClassName('juntos_podemos')[0];
var content27 = document.querySelectorAll('.fundo_junto');
var content28 = document.querySelectorAll('.fundo_junto2');
var content29 = document.getElementsByClassName('porque_baixar')[0];
var content30 = document.getElementsByClassName('porque_baixar2')[0];
var content31 = document.getElementsByClassName('porque_baixar3')[0];
var content32 = document.getElementsByClassName('juntos_podemos_conteudo_botao')[0];
var content33 = document.getElementsByClassName('svg_quem_light')[0];
var content34 = document.getElementsByClassName('verde_mobile')[0];
var content35 = document.getElementsByClassName('lutamos_caixas_mobile')[0];
var content36 = document.getElementsByClassName('imagem_inicio_mobile')[0];
var content37 = document.getElementsByClassName('divide_o_que_mobile')[0];
var content38 = document.getElementsByClassName('quem_mobile')[0];
var content39 = document.getElementsByClassName('imagem_quem_mobile')[0];
var content40 = document.getElementsByClassName('antes_rodape_mobile')[0];
var content41 = document.getElementsByClassName('verde_antes_rodape_mobile')[0];
var content42 = document.getElementsByClassName('saiba_mais_inicio_mobile')[0];
var content43 = document.querySelectorAll('.buttom_doar_mobile');
var content44 = document.getElementsByClassName('baixe_app_mobile')[0];
var content45 = document.getElementsByClassName('button_antes_rodape_mobile')[0];
var content46 = document.querySelectorAll('.o_que_gif');

const mainContent = document.querySelectorAll(".main");
const switchBTN = document.querySelectorAll(".switch");

function clickEvent(event) {
  mainContent.forEach((element) => {
    element.classList.toggle("main--light");
    element.classList.toggle("main--dark");
  });


  content.classList.toggle('night');
  content2.classList.toggle('svg_inicio2_dark');
  content14.classList.toggle('imagem_sacola_inicio_dark');
  content15.classList.toggle('lutamos_dark');
  content17.classList.toggle('divide_oque_dark');
  content23.classList.toggle('porque_textos_dentro_dark');
  content26.classList.toggle('juntos_podemos_dark');
  content31.classList.toggle('porque_baixar3_dark');
  content32.classList.toggle('juntos_podemos_conteudo_botao_dark');
  content33.classList.toggle('svg_quem_dark');
  content34.classList.toggle('verde_mobile_dark');
  content35.classList.toggle('lutamos_caixas_mobile_dark');
  content36.classList.toggle('imagem_inicio_mobile_dark');
  content37.classList.toggle('divide_o_que_mobile_dark');
  content38.classList.toggle('quem_mobile_dark');
  content39.classList.toggle('imagem_quem_mobile_dark');
  content40.classList.toggle('antes_rodape_mobile_dark');
  content41.classList.toggle('verde_antes_rodape_mobile_dark');
  content42.classList.toggle('saiba_mais_inicio_mobile_dark');
  content44.classList.toggle('baixe_app_mobile_dark');
  content45.classList.toggle('button_antes_rodape_mobile_dark');

  if(content29.classList.contains('porque_baixar')) {
    content29.classList.remove('porque_baixar')
    content29.classList.add('porque_baixar_dark')
  } else {
    content29.classList.remove('porque_baixar_dark')
    content29.classList.add('porque_baixar')
  }

  if(content30.classList.contains('porque_baixar2')) {
    content30.classList.remove('porque_baixar2')
    content30.classList.add('porque_baixar2_dark')
  } else {
    content30.classList.remove('porque_baixar2_dark')
    content30.classList.add('porque_baixar2')
  }
  
  // Loop para percorrer todos os elementos com a classe 'svg_inicio3' e alternar a classe 'svg_inicio3_dark'
  content3.forEach(function(element) {
      element.classList.toggle('svg_inicio3_dark');
  });

  content5.forEach(function(element) {
      element.classList.toggle('btn_dark');
  });

  content6.forEach(function(element) {
    element.classList.toggle('icone_inicio_dark');
});

content7.forEach(function(element) {
  element.classList.toggle('folhas_dark');
});

content8.forEach(function(element) {
element.classList.toggle('cirulo_fundo_dark');
});

content9.forEach(function(element) {
element.classList.toggle('circulo_cortado_dark');
});

content10.forEach(function(element) {
element.classList.toggle('circulo_cortado2_dark');
});

content11.forEach(function(element) {
element.classList.toggle('texto_branco_dark');
});
content12.forEach(function(element) {
element.classList.toggle('texto_branco_dark2');
});

content13.forEach(function(element) {
element.classList.toggle('saber_mais_inicio_dark');
});

content16.forEach(function(element) {
element.classList.toggle('dark_text');
});

content18.forEach(function(element) {
element.classList.toggle('fundo_oq_dark');
});

content19.forEach(function(element) {
element.classList.toggle('dark_text2');
});

content20.forEach(function(element) {
element.classList.toggle('logo_oq_dark');
});

content21.forEach(function(element) {
element.classList.toggle('porque_caixa_dark');
});

content22.forEach(function(element) {
element.classList.toggle('svg_caixas_dark');
});

content24.forEach(function(element) {
element.classList.toggle('play_dark');
});

content25.forEach(function(element) {
element.classList.toggle('play_dark2');
});

content27.forEach(function(element) {
element.classList.toggle('fundo_junto_dark');
});

content28.forEach(function(element) {
element.classList.toggle('fundo_junto2_dark');
});

content43.forEach(function(element) {
element.classList.toggle('buttom_doar_mobile_dark');
});

content46.forEach(function(element) {
  element.classList.toggle('o_que_gif_d');
  });
}

switchBTN.forEach((button) => {
  button.addEventListener("click", clickEvent);
});



