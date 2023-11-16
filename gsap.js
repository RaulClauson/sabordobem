ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load" // notice "resize" isn't in the list
  });

  gsap.to(".antes_continue", {
    scrollTrigger:{
        trigger: ".antes_continue",
        start: "1000% top",
        end: "1000% 0",
        toggleActions: "restart none none reverse",
    },
    marginTop: "15vh",
    opacity: 0,
    ease: "back.inOut(1.7)",
    smooth: true,
    duration: 0.8,
});

gsap.to(".posi_continue", {
    scrollTrigger:{
        trigger: ".posi_continue",
        start: "0% top",
        end: "150% 0",
        pin:true,
        scrub: 1,
    },
    ease:"none",
    smooth: true,
    duration: 0.3
});



gsap.to(".antes_continue2", {
    scrollTrigger:{
        trigger: ".antes_continue2",
        start: "-1300% top",
        end: "-500% 0",
        toggleActions: "restart reverse reverse reverse",
    },
    bottom: "1.5%",
    opacity: 1,
    display:"block",
    ease: "back.inOut(1.7)",
    smooth: true,
    duration: 0.8,
});


gsap.to(".antes_continue3", {
    scrollTrigger:{
        trigger: ".posi_continue3",
        start: "0% top",
        end: "2% 0",
        toggleActions: "restart none none reverse",
    },
    marginTop: "15vh",
    opacity: 0,
    ease: "back.inOut(1.7)",
    smooth: true,
    duration: 0.8,
});




gsap.to(".posi_continue4", {
    scrollTrigger:{
        trigger: ".posi_continue4",
        start: "0% top",
        end: "450% 80%",
        pin:true,
        scrub: 1,
    },
    ease:"none",
    smooth: true,
    duration: 0.3
});

gsap.to(".antes_continue4", {
    scrollTrigger:{
        trigger: ".antes_continue4",
        start: "-1300% top",
        end: "4800% 80%",
        toggleActions: "restart reverse reverse reverse",
    },
    bottom: "1.5%",
    opacity: 1,
    display:"block",
    ease: "back.inOut(1.7)",
    smooth: true,
    duration: 0.8,
});

gsap.to(".posi_continue5", {
    scrollTrigger:{
        trigger: ".posi_continue5",
        start: "0% top",
        end: "300% 80%",
        pin:true,
        scrub: 1,
    },
    ease:"none",
    smooth: true,
    duration: 0.3
});

gsap.to(".antes_continue5", {
    scrollTrigger:{
        trigger: ".antes_continue5",
        start: "-1300% top",
        end: "2400% 80%",
        toggleActions: "restart reverse reverse reverse",
    },
    bottom: "1.5%",
    opacity: 1,
    display:"block",
    ease: "back.inOut(1.7)",
    smooth: true,
    duration: 0.8,
});



gsap.to(".links", {
    scrollTrigger:{
        trigger: ".links",
        start: "20% top",
        end: "bottom 0",
        scrub: 1,
    },
    marginTop: -80,
    opacity: 0,
    ease:"none",
    smooth: true,
    duration: 0.3
});

gsap.to(".logo_nav", {
    scrollTrigger:{
        trigger: ".logo_nav",
        start: "20% top",
        end: "bottom 0",
        scrub: 1,
    },
    marginTop: -80,
    opacity: 0,
    ease:"none",
    smooth: true,
    duration: 0.3
});


gsap.to("nav", {
    scrollTrigger:{
        trigger: "nav",
        start: "20% top",
        end: "bottom 0",
        scrub: 1,
    },
    marginTop: -300,
    opacity: 0,
    ease:"none",
    smooth: true,
    duration: 0.3
});




gsap.to(".svg_inicio", {
    scrollTrigger:{
        trigger: ".svg_inicio",
        start: "5% top",
        end: "50% 0",
        scrub: 3,
    },
    marginLeft:"-110.0vh",
    ease:"none",
    smooth: true,
    duration: 2
});

gsap.to(".imagem_sacola_inicio", {
    scrollTrigger:{
        trigger: ".imagem_sacola_inicio",
        start: "-15% top",
        end: "20% 0",
        scrub: 3,
    },
    top: "90%",
    left: "47%",
    transform: "translate(-50%, -50%)",
    ease:"none",
    smooth: true,
    duration: 2
});

gsap.to(".estrela_inicio", {
    scrollTrigger:{
        trigger: ".estrela_inicio",
        start: "-65% top",
        end: "140% 0",
        scrub: 3,
    },
    marginLeft:"40%",
    ease:"none",
    smooth: true,
    duration: 2
});

gsap.to(".lampada_inicio", {
    scrollTrigger:{
        trigger: ".lampada_inicio",
        start: "-20% top",
        end: "170% 0",
        scrub: 5,
    },
    marginLeft:"-40%",
    ease:"none",
    smooth: true,
    duration: 2
});

gsap.to(".flor_inicio", {
    scrollTrigger:{
        trigger: ".flor_inicio",
        start: "-270% top",
        end: "-70% 0",
        scrub: 3,
    },
    marginLeft:"-22%",
    marginTop:"38%",
    ease:"none",
    smooth: true,
    duration: 2
});


gsap.to(".titulo_lutamos", {
    scrollTrigger:{
        trigger: ".titulo_lutamos",
        start: "300% top",
        end: "300% 0",
        scrub: 1,
    },
    marginTop:"2%",
    ease:"none",
    opacity:1,
    smooth: true,
    duration: 0.3
});

gsap.to(".sub_titulo_lutamos", {
    scrollTrigger:{
        trigger: ".sub_titulo_lutamos",
        start: "1150% top",
        end: "1150% 0",
        scrub: 1,
    },
    marginTop:"2%",
    ease:"none",
    opacity:1,
    smooth: true,
    duration: 0.3
});

gsap.to(".div_desperdicio", {
    scrollTrigger:{
        trigger: ".div_desperdicio",
        start: "80% top",
        end: "80% 0",
        scrub: 1,
    },
    marginTop:"0px",
    ease:"none",
    opacity:1,
    smooth: true,
    duration: 0.3
});


gsap.to(".div_saude", {
    scrollTrigger:{
        trigger: ".div_saude",
        start: "0% 50%",
        end: "0% 50%",
        scrub: 1,
    },
    height: "700px",
    width: "20%",
    duration: 0.01
});


gsap.to(".div_saude", {
    scrollTrigger:{
        trigger: ".div_saude",
        start: "120% top",
        end: "120% 0",
        scrub: 1,
    },
    marginTop:"0px",
    ease:"none",
    opacity:1,
    smooth: true,
    duration: 0.3
});




gsap.to(".div_beneficios", {
    scrollTrigger:{
        trigger: ".div_beneficios",
        start: "150% top",
        end: "150% 0",
        scrub: 1,
    },
    marginTop:"0px",
    ease:"none",
    opacity:1,
    smooth: true,
    duration: 0.3
});



gsap.to(".div_alimentos", {
    scrollTrigger:{
        trigger: ".div_alimentos",
        start: "160% top",
        end: "160% 0",
        scrub: 1,
    },
    marginTop:"0px",
    ease:"none",
    opacity:1,
    smooth: true,
    duration: 0.3
});











gsap.to(".porque_textos_dentro", {
    scrollTrigger:{
        trigger: ".porque_textos_dentro",
        start: "20% top",
        end: "400% 0",
        scrub: 1,
    },
    right:"0",
    ease:"none",
    opacity:1,
    smooth: true,
    duration: 0.3
});

gsap.to(".porque_textos_alinhar", {
    scrollTrigger:{
        trigger: ".porque_textos_alinhar",
        start: "30% top",
        end: "30% 0",
        scrub: 0.5,
    },
    ease:"none",
    opacity:0,
    smooth: true,
    duration: 0.1
});

gsap.to(".quem_textos_alinhar", {
    scrollTrigger:{
        trigger: ".quem_textos_alinhar",
        start: "30% top",
        end: "30% 0",
        scrub: 0.5,
    },
    ease:"none",
    opacity:1,
    smooth: true,
    duration: 0.1
});






gsap.to(".baixe_1_passo", {
    scrollTrigger:{
        trigger: ".baixe_1_passo",
        start: "top 75%",
        end: "70% 75%",
        toggleActions: "restart reverse restart reverse",
    },
    opacity: 1,
    duration: 0.2
});
gsap.to(".baixe_2_passo", {
    scrollTrigger:{
        trigger: ".baixe_2_passo",
        start: "top 75%",
        end: "70% 75%",
        toggleActions: "restart reverse restart reverse",
    },
    opacity: 1,
    duration: 0.2
});
gsap.to(".baixe_3_passo", {
    scrollTrigger:{
        trigger: ".baixe_3_passo",
        start: "top 75%",
        end: "70% 75%",
        toggleActions: "restart reverse restart reverse",
    },
    opacity: 1,
    duration: 0.2
});









gsap.to(".quem_doar_alinhar", {
    scrollTrigger:{
        trigger: ".quem_doar_alinhar",
        start: "130% top",
        end: "165% top",
        toggleActions: "restart reverse restart reverse",
    },
    opacity:1,
    duration: 0.2
});
gsap.to(".quem_doar_alinhar3", {
    scrollTrigger:{
        trigger: ".quem_doar_alinhar3",
        start: "240% top",
        end: "285% top",
        toggleActions: "restart reverse restart reverse",
    },
    opacity:1,
    duration: 0.2
});

gsap.to(".porque_baixar", {
    scrollTrigger:{
        trigger: ".porque_baixar",
        start: "530% top",
        end: "850% top",
        toggleActions: "restart reverse restart reverse",
    },
    opacity:1,
    duration: 0.2
});
gsap.to(".porque_baixar2", {
    scrollTrigger:{
        trigger: ".porque_baixar2",
        start: "1530% top",
        end: "1930% top",
        toggleActions: "restart reverse restart reverse",
    },
    opacity:1,
    duration: 0.2
});

gsap.to(".porque_baixar_dark", {
    scrollTrigger:{
        trigger: ".porque_baixar_dark",
        start: "530% top",
        end: "850% top",
        toggleActions: "restart reverse restart reverse",
    },
    opacity:1,
    duration: 0.2
});
gsap.to(".porque_baixar2_dark", {
    scrollTrigger:{
        trigger: ".porque_baixar2_dark",
        start: "1530% top",
        end: "1930% top",
        toggleActions: "restart reverse restart reverse",
    },
    opacity:1,
    duration: 0.2
});

gsap.to(".svg_quem_doar", {
    scrollTrigger:{
        trigger: ".svg_quem_doar",
        start: "150% top",
        end: "195% top",
        toggleActions: "restart reverse restart reverse",
    },
    opacity: 1,
    width:1035, 
    height:966,
    duration: 0.2
});
gsap.to(".svg_quem_doar2", {
    scrollTrigger:{
        trigger: ".svg_quem_doar2",
        start: "290% top",
        end: "348% top",
        toggleActions: "restart reverse restart reverse",
    },
    opacity: 1,
    width:1091, 
    height:966,
    duration: 0.2
});

gsap.to(".svg_quem", {
    scrollTrigger:{
        trigger: ".svg_quem",
        start: "1500% top",
        end: "2800%  top",
        toggleActions: "restart reverse restart reverse",
    },
    fill: "#F3FCF4",
    width:1068, 
    height:299,
    smooth: true,
    ease:"none",
    duration: 0.2
});
gsap.to(".o_que_e_texto", {
    scrollTrigger:{
        trigger: ".o_que_e_titulo",
        start: "top 100%",
        end: "top 100%",
        scrub: 1,
    },
    opacity:1,
    marginTop:0,
    ease:"none",
    opacity:1,
    smooth: true,
    duration: 0.3
});

gsap.to(".o_que_e_logo", {
    scrollTrigger:{
        trigger: ".o_que_e_titulo",
        start: "top 100%",
        end: "top 100%",
        scrub: 1,
    },
    opacity:1,
    ease:"none",
    opacity:1,
    smooth: true,
    duration: 0.3
});

gsap.to(".o_que_e_titulo", {
    scrollTrigger:{
        trigger: ".o_que_e_titulo",
        start: "top 100%",
        end: "top 100%",
        toggleActions: "restart none none reverse",
    },
    marginTop: "0px",
    ease: "power4.out",
    smooth: true,
    duration: 1
});

gsap.to(".o_que_e_titulo2", {
    scrollTrigger:{
        trigger: ".o_que_e_titulo",
        start: "top 100%",
        end: "top 100%",
        toggleActions: "restart none none reverse",
    },
    marginTop: "0px",
    ease: "power4.out",
    smooth: true,
    delay: 0.2,
    duration: 1
});

gsap.to(".o_que_e_titulo2", {
    scrollTrigger:{
        trigger: ".o_que_e_titulo",
        start: "top 100%",
        end: "top 100%",
        toggleActions: "restart none none reverse",
    },
    marginTop: "0px",
    ease: "power4.out",
    smooth: true,
    delay: 0.2,
    duration: 1
});

gsap.to(".porque_textos_titulo", {
    scrollTrigger:{
        trigger: ".porque_textos_alinhar",
        start: "-48% top",
        end: "30% top",
        toggleActions: "restart reverse restart reverse",
    },
    marginTop: "0px",
    ease: "power4.out",
    smooth: true,
    duration: 1
});
gsap.to(".porque_textos_titulo2", {
    scrollTrigger:{
        trigger: ".quem_textos_alinhar",
        start: "30% top",
        end: "30% 0",
        toggleActions: "restart none none reverse",
    },
    marginTop: "0px",
    ease: "power4.out",
    smooth: true,
    duration: 1
});
gsap.to(".porque_textos_titulo3", {
    scrollTrigger:{
        trigger: ".quem_textos_alinhar",
        start: "30% top",
        end: "30% 0",
        toggleActions: "restart none none reverse",
    },
    marginTop: "0px",
    ease: "power4.out",
    smooth: true,
    delay: 0.2,
    duration: 1
});
gsap.to(".porque_textos_titulo4", {
    scrollTrigger:{
        trigger: ".quem_textos_alinhar",
        start: "30% top",
        end: "30% 0",
        toggleActions: "restart none none reverse",
    },
    marginTop: "0px",
    ease: "power4.out",
    smooth: true,
    delay: 0.4,
    duration: 1
});


gsap.to(".baixe_titulo", {
    scrollTrigger:{
        trigger: ".baixe_titulo",
        start: "top 80%",
        end: "top 80%",
        toggleActions: "restart none none reverse",
    },
    marginTop: "0px",
    ease: "power4.out",
    smooth: true,
    duration: 1
});
gsap.to(".baixe_titulo2", {
    scrollTrigger:{
        trigger: ".baixe_titulo",
        start: "top 80%",
        end: "top 80%",
        toggleActions: "restart none none reverse",
    },
    marginTop: "0px",
    ease: "power4.out",
    smooth: true,
    delay:0.2,
    duration: 1
});


gsap.to(".porque_caixa", {
    scrollTrigger:{
        trigger: ".porque_caixa",
        start: "top 60%",
        end: "top 60%",
        toggleActions: "restart none none reverse",
    },
    opacity:1,
    marginBottom: 0,
    ease: "power4.out",
    smooth: true,
    duration: 1
});
gsap.to(".porque_caixa2", {
    scrollTrigger:{
        trigger: ".porque_caixa",
        start: "top 60%",
        end: "top 60%",
        toggleActions: "restart none none reverse",
    },
    opacity:1,
    marginBottom: 0,
    ease: "power4.out",
    smooth: true,
    delay:0.2,
    duration: 1
});
gsap.to(".porque_caixa3", {
    scrollTrigger:{
        trigger: ".porque_caixa",
        start: "top 60%",
        end: "top 60%",
        toggleActions: "restart none none reverse",
    },
    opacity:1,
    marginBottom: 0,
    ease: "power4.out",
    smooth: true,
    delay:0.4,
    duration: 1
});





gsap.to(".fundo_baixe1", {
    scrollTrigger:{
        trigger: ".fundo_baixe1",
        start: "100% 100%",
        end: "100% 100%",
        toggleActions: "restart none none reverse",
    },
    height: 0,
    ease: "power4.inOut",
    smooth: true,
    duration: 1.5
});
gsap.to(".fundo_baixe2", {
    scrollTrigger:{
        trigger: ".fundo_baixe2",
        start: "150% 100%",
        end: "150% 100%",
        toggleActions: "restart none none reverse",
    },
    height: 0,
    ease: "power4.inOut",
    smooth: true,
    duration: 1.5
});























// TUDO MOBILE //


gsap.to(".tela_inteira_inicio_mobile", {
    scrollTrigger:{
        trigger: ".tela_inteira_inicio_mobile",
        start: "top top",
        end: "150% 0",
        pin:true,
        scrub: 1,
    },
    ease:"none",
    smooth: true,
    duration: 0.3
});

gsap.to(".imagem_inicio_mobile", {
    scrollTrigger:{
        trigger: ".imagem_inicio_mobile",
        start: "top 50%",
        end: "80% 50%",
        scrub: 1,
    },
    top: "50%",
    left: "48%",
    transform: "translate(-50%, -50%)",
    ease:"none",
    smooth: true,
    duration: 0.3
});


gsap.to(".verde_mobile", {
    scrollTrigger:{
        trigger: ".verde_mobile",
        start: "top 50%",
        end: "80% 50%",
        scrub: 1,
    },
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    ease:"none",
    smooth: true,
    duration: 0.3
});

gsap.to(".titulo_lutamos_mobile", {
    scrollTrigger:{
        trigger: ".titulo_lutamos_mobile",
        start: "650% top",
        end: "650% top",
        scrub: 1,
    },
    top: "15%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    opacity:1,
    ease:"none",
    smooth: true,
    duration: 0.3
});

gsap.to(".porque_cima_mobile", {
    scrollTrigger:{
        trigger: ".porque_cima_mobile",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin:true,
    },
    ease:"none",
    smooth: true,
    duration: 0.3
});

gsap.to(".quem_mobile", {
    scrollTrigger:{
        trigger: ".quem_mobile",
        start: "top top",
        end: "bottom top",
        scrub: 1,
    },
    marginTop:"0vh",
    ease:"none",
    smooth: true,
    duration: 0.3
});








//------------- SOBRE NOS -------------//


gsap.to(".missao", {
    scrollTrigger:{
        trigger: ".missao",
        start: "-80% top",
        end: "top 0",
        scrub: 1,
    },
    width:"100%",
    ease:"none",
    smooth: true,
    duration: 0.3
});

gsap.to(".integrante_conheca", {
    scrollTrigger:{
        trigger: ".integrante_conheca",
        start: "top 60%",
        end: "top 0",
        toggleActions: "restart none none reverse",
    },
    opacity: "1",
    marginTop: "0px",
    ease: "power4.out",
    smooth: true,
    duration: 1
});
gsap.to(".integrante_conheca2", {
    scrollTrigger:{
        trigger: ".integrante_conheca2",
        start: "top 60%",
        end: "top 0",
        toggleActions: "restart none none reverse",
    },
    opacity: "1",
    marginTop: "0px",
    ease: "power4.out",
    smooth: true,
    delay:0.2,
    duration: 1
});
gsap.to(".integrante_conheca3", {
    scrollTrigger:{
        trigger: ".integrante_conheca3",
        start: "top 60%",
        end: "top 0",
        toggleActions: "restart none none reverse",
    },
    opacity: "1",
    marginTop: "0px",
    ease: "power4.out",
    smooth: true,
    delay:0.4,
    duration: 1
});
gsap.to(".integrante_conheca4", {
    scrollTrigger:{
        trigger: ".integrante_conheca4",
        start: "top 60%",
        end: "top 0",
        toggleActions: "restart none none reverse",
    },
    opacity: "1",
    marginTop: "0px",
    ease: "power4.out",
    smooth: true,
    delay:0.6,
    duration: 1
});
gsap.to(".integrante_conheca5", {
    scrollTrigger:{
        trigger: ".integrante_conheca5",
        start: "top 60%",
        end: "top 0",
        toggleActions: "restart none none reverse",
    },
    opacity: "1",
    marginTop: "0px",
    ease: "power4.out",
    smooth: true,
    delay:0.8,
    duration: 1
});

gsap.to(".titulo_conheca", {
    scrollTrigger:{
        trigger: ".titulo_conheca",
        start: "top 60%",
        end: "top 60%",
        toggleActions: "restart none none reverse",
    },
    marginTop: "0px",
    ease: "power4.out",
    smooth: true,
    duration: 0.5
});











//------------- IMPACTO -------------//

gsap.to(".path", {
    scrollTrigger:{
        trigger: ".path",
        start: "top 60%",
        end: "100% 0",
        scrub: 2,
    },
    strokeDashoffset: "0",
    ease:"none",
    opacity:1,
    smooth: true,
    duration: 0.3
});
gsap.to(".path2", {
    scrollTrigger:{
        trigger: ".path",
        start: "top 60%",
        end: "100% 0",
        scrub: 2,
    },
    strokeDashoffset: "0",
    ease:"none",
    opacity:1,
    smooth: true,
    duration: 0.3
});
gsap.to(".path3", {
    scrollTrigger:{
        trigger: ".path3",
        start: "top 50%",
        end: "1100% 0",
        scrub: 2,
    },
    strokeDashoffset: "0",
    ease:"none",
    opacity:1,
    smooth: true,
    duration: 0.3
});
gsap.to(".path4", {
    scrollTrigger:{
        trigger: ".path4",
        start: "top 80%",
        end: "400% 0",
        scrub: 2,
    },
    strokeDashoffset: "0",
    ease:"none",
    opacity:1,
    smooth: true,
    duration: 0.3
});

gsap.to(".path5", {
    scrollTrigger:{
        trigger: ".path5",
        start: "-1000% 80%",
        end: "-100% 0",
        scrub: 2,
    },
    strokeDashoffset: "0",
    ease:"none",
    opacity:1,
    smooth: true,
    duration: 1
});

gsap.to(".noticias_inicio_titulo", {
    scrollTrigger:{
        trigger: ".noticias_inicio_titulo",
        start: "top 60%",
        end: "top 60%",
        toggleActions: "restart none none reverse",
    },
    marginTop: "0px",
    ease: "power4.out",
    smooth: true,
    duration: 1
});
gsap.to(".noticias_inicio_titulo3", {
    scrollTrigger:{
        trigger: ".noticias_inicio_titulo",
        start: "top 60%",
        end: "top 60%",
        toggleActions: "restart none none reverse",
    },
    marginTop: "0px",
    ease: "power4.out",
    smooth: true,
    delay:0.1,
    duration: 1
});
gsap.to(".noticias_inicio_titulo4", {
    scrollTrigger:{
        trigger: ".noticias_inicio_titulo",
        start: "top 60%",
        end: "top 60%",
        toggleActions: "restart none none reverse",
    },
    marginTop: "0px",
    ease: "power4.out",
    smooth: true,
    delay:0.2,
    duration: 1
});

gsap.to(".sub_titulo_missao", {
    scrollTrigger:{
        trigger: ".sub_titulo_missao",
        start: "top 60%",
        end: "top 60%",
        toggleActions: "restart none none reverse",
    },
    marginTop: "0px",
    ease: "power4.out",
    smooth: true,
    duration: 1
});

gsap.to(".titulo_missao", {
    scrollTrigger:{
        trigger: ".sub_titulo_missao",
        start: "top 60%",
        end: "top 60%",
        toggleActions: "restart none none reverse",
    },
    marginTop: "0px",
    ease: "power4.out",
    smooth: true,
    delay:0.1,
    duration: 1
});

gsap.to(".titulo_missao2", {
    scrollTrigger:{
        trigger: ".sub_titulo_missao",
        start: "top 60%",
        end: "top 60%",
        toggleActions: "restart none none reverse",
    },
    marginTop: "0px",
    ease: "power4.out",
    smooth: true,
    delay:0.2,
    duration: 1
});

gsap.to(".titulo_inicio", {
    scrollTrigger:{
        trigger: ".titulo_inicio",
        start: "top 80%",
        end: "top 80%",
        toggleActions: "restart none none reverse",
    },
    marginTop: "0px",
    ease: "power4.out",
    smooth: true,
    duration: 1
});

gsap.to(".titulo_inicio2", {
    scrollTrigger:{
        trigger: ".titulo_inicio",
        start: "top 80%",
        end: "top 80%",
        toggleActions: "restart none none reverse",
    },
    marginTop: "0px",
    ease: "power4.out",
    smooth: true,
    delay:0.2,
    duration: 1
});


gsap.to(".noticias_inicio_texto", {
    scrollTrigger:{
        trigger: ".noticias_inicio_texto",
        start: "top 80%",
        end: "top 80%",
        toggleActions: "restart none none reverse",
    },
    opacity:1,
    lineHeight: "99%",
    ease: "power4.out",
    smooth: true,
    duration: 1
});

gsap.to(".texto_missao", {
    scrollTrigger:{
        trigger: ".texto_missao",
        start: "30% 80%",
        end: "30% 80%",
        toggleActions: "restart none none reverse",
    },
    opacity:1,
    lineHeight: "99%",
    ease: "power4.out",
    smooth: true,
    duration: 1
});

gsap.to(".porque_textos_texto", {
    scrollTrigger:{
        trigger: ".porque_textos_texto",
        start: "-30% 100%",
        end: "-30% 100%",
        toggleActions: "restart none none reverse",
    },
    opacity:1,
    lineHeight: "99%",
    ease: "power4.out",
    smooth: true,
    duration: 1
});
gsap.to(".porque_textos_texto2", {
    scrollTrigger:{
        trigger: ".quem_textos_alinhar",
        start: "30% top",
        end: "30% 0",
        toggleActions: "restart none none reverse",
    },
    opacity:1,
    lineHeight: "99%",
    ease: "power4.out",
    smooth: true,
    duration: 1
});

gsap.to(".baixe_texto", {
    scrollTrigger:{
        trigger: ".baixe_titulo",
        start: "top 80%",
        end: "top 80%",
        toggleActions: "restart none none reverse",
    },
    opacity:1,
    lineHeight: "99%",
    ease: "power4.out",
    smooth: true,
    duration: 1
});

gsap.to(".impacto", {
    scrollTrigger:{
        trigger: ".impacto",
        start: "top 60%",
        end: "top 60%",
        toggleActions: "restart none none reverse",
    },
    opacity:1,
    marginLeft: "0",
    ease: "power4.out",
    smooth: true,
    duration: 1
});

gsap.to(".impacto2", {
    scrollTrigger:{
        trigger: ".impacto",
        start: "top 60%",
        end: "top 60%",
        toggleActions: "restart none none reverse",
    },
    opacity:1,
    marginLeft: "0",
    ease: "power4.out",
    smooth: true,
    duration: 1
});

gsap.to(".impacto3", {
    scrollTrigger:{
        trigger: ".impacto",
        start: "top 60%",
        end: "top 60%",
        toggleActions: "restart none none reverse",
    },
    opacity:1,
    marginLeft: "0",
    ease: "power4.out",
    smooth: true,
    duration: 1
});



gsap.to(".textos", {
    scrollTrigger:{
        trigger: ".textos",
        start: "20% top",
        end: "80% top",
        toggleActions: "restart reverse restart reverse",
    },
    top: "0vh",
    opacity: 1,
    smooth: true,
});

gsap.to(".textos2", {
    scrollTrigger:{
        trigger: ".textos2",
        start: "20% top",
        end: "80% top",
        toggleActions: "restart reverse restart reverse",
    },
    top: "0vh",
    opacity: 1,
    smooth: true,
});

gsap.to(".textos3", {
    scrollTrigger:{
        trigger: ".textos3",
        start: "20% top",
        end: "80% top",
        toggleActions: "restart reverse restart reverse",
    },
    top: "0vh",
    opacity: 1,
    smooth: true,
});


gsap.to(".noticias_verde", {
    scrollTrigger:{
        trigger: ".noticias_verde",
        start: "-35% top",
        end: "top 0",
        scrub: 1,
    },
    width:"100%",
    ease:"none",
    smooth: true,
    duration: 0.3
});






gsap.to(".estrela_cima", {
    scrollTrigger:{
        trigger: ".estrela_cima",
        start: "100% top",
        end: "200% 0",
        scrub: 1,
    },
    height:"220%",
    ease:"none",
    smooth: true,
    duration: 0.3
});

gsap.to(".estrela_baixo", {
    scrollTrigger:{
        trigger: ".estrela_baixo",
        start: "-50% top",
        end: "50% 0",
        scrub: 1,
    },
    height:"220%",
    marginTop: "-20%",
    ease:"none",
    smooth: true,
    duration: 0.3
});

gsap.to(".lutamos_caixa", {
    scrollTrigger:{
        trigger: ".lutamos_caixa",
        start: "top 70%",
        end: "top 70%",
        scrub: 1,
    },
    opacity:1,
    ease:"none",
    smooth: true,
    duration: 0.3
});

gsap.to(".lutamos_caixa2", {
    scrollTrigger:{
        trigger: ".lutamos_caixa2",
        start: "top 70%",
        end: "top 70%",
        scrub: 1,
    },
    opacity:1,
    ease:"none",
    smooth: true,
    duration: 0.3
});

gsap.to(".lutamos_caixa3", {
    scrollTrigger:{
        trigger: ".lutamos_caixa3",
        start: "top 70%",
        end: "top 70%",
        scrub: 1,
    },
    opacity:1,
    ease:"none",
    smooth: true,
    duration: 0.3
});

gsap.to(".lutamos_caixa4", {
    scrollTrigger:{
        trigger: ".lutamos_caixa4",
        start: "top 70%",
        end: "top 70%",
        scrub: 1,
    },
    opacity:1,
    ease:"none",
    smooth: true,
    duration: 0.3
});
gsap.to(".titulo_o_que_e", {
    scrollTrigger:{
        trigger: ".titulo_o_que_e",
        start: "top 70%",
        end: "top 70%",
        scrub: 1,
    },
    opacity:1,
    ease:"none",
    smooth: true,
    duration: 0.3
});
gsap.to(".texto_o_que_e", {
    scrollTrigger:{
        trigger: ".texto_o_que_e",
        start: "top 70%",
        end: "top 70%",
        scrub: 1,
    },
    opacity:1,
    ease:"none",
    smooth: true,
    duration: 0.3
});
gsap.to(".oque_inicio_mobile", {
    scrollTrigger:{
        trigger: ".oque_inicio_mobile",
        start: "top 70%",
        end: "top 70%",
        scrub: 1,
    },
    opacity:1,
    ease:"none",
    smooth: true,
    duration: 0.3
});
gsap.to(".titulo_porque_mobile", {
    scrollTrigger:{
        trigger: ".titulo_porque_mobile",
        start: "top 70%",
        end: "top 70%",
        scrub: 1,
    },
    opacity:1,
    ease:"none",
    smooth: true,
    duration: 0.3
});
gsap.to(".texto_porque_mobile", {
    scrollTrigger:{
        trigger: ".texto_porque_mobile",
        start: "top 70%",
        end: "top 70%",
        scrub: 1,
    },
    opacity:1,
    ease:"none",
    smooth: true,
    duration: 0.3
});
gsap.to(".caixa_porque", {
    scrollTrigger:{
        trigger: ".caixa_porque",
        start: "top 70%",
        end: "top 70%",
        scrub: 1,
    },
    opacity:1,
    ease:"none",
    smooth: true,
    duration: 0.3
});
gsap.to(".caixa_porque2", {
    scrollTrigger:{
        trigger: ".caixa_porque2",
        start: "top 70%",
        end: "top 70%",
        scrub: 1,
    },
    opacity:1,
    ease:"none",
    smooth: true,
    duration: 0.3
});
gsap.to(".caixa_porque3", {
    scrollTrigger:{
        trigger: ".caixa_porque3",
        start: "top 70%",
        end: "top 70%",
        scrub: 1,
    },
    opacity:1,
    ease:"none",
    smooth: true,
    duration: 0.3
});
gsap.to(".quem_doar_mobile", {
    scrollTrigger:{
        trigger: ".quem_doar_mobile",
        start: "top 50%",
        end: "top 50%",
        scrub: 0.5,
    },
    opacity:1,
    ease:"none",
    smooth: true,
    duration: 0.2
});
gsap.to(".quem_doar_mobile2", {
    scrollTrigger:{
        trigger: ".quem_doar_mobile2",
        start: "top 50%",
        end: "top 50%",
        scrub: 0.5,
    },
    opacity:1,
    ease:"none",
    smooth: true,
    duration: 0.2
});
gsap.to(".titulo_fim_doar_mobile", {
    scrollTrigger:{
        trigger: ".titulo_fim_doar_mobile",
        start: "top 50%",
        end: "top 50%",
        scrub: 0.5,
    },
    opacity:1,
    ease:"none",
    smooth: true,
    duration: 0.2
});
gsap.to(".titulo_baixe_mobile", {
    scrollTrigger:{
        trigger: ".titulo_baixe_mobile",
        start: "top 80%",
        end: "top 80%",
        scrub: 1,
    },
    opacity:1,
    ease:"none",
    smooth: true,
    duration: 0.3
});
gsap.to(".texto_baixe_mobile", {
    scrollTrigger:{
        trigger: ".texto_baixe_mobile",
        start: "top 80%",
        end: "top 80%",
        scrub: 1,
    },
    opacity:1,
    ease:"none",
    smooth: true,
    duration: 0.3
});
gsap.to(".baixe1_mobile", {
    scrollTrigger:{
        trigger: ".baixe1_mobile",
        start: "top 80%",
        end: "top 80%",
        scrub: 1,
    },
    opacity:1,
    ease:"none",
    smooth: true,
    duration: 0.3
});
gsap.to(".seta_baixe", {
    scrollTrigger:{
        trigger: ".seta_baixe",
        start: "top 80%",
        end: "top 80%",
        scrub: 1,
    },
    opacity:1,
    ease:"none",
    smooth: true,
    duration: 0.3
});
gsap.to(".seta_baixe2", {
    scrollTrigger:{
        trigger: ".seta_baixe2",
        start: "top 80%",
        end: "top 80%",
        scrub: 1,
    },
    opacity:1,
    ease:"none",
    smooth: true,
    duration: 0.3
});
gsap.to(".baixe1_mobile2", {
    scrollTrigger:{
        trigger: ".baixe1_mobile2",
        start: "top 80%",
        end: "top 80%",
        scrub: 1,
    },
    opacity:1,
    ease:"none",
    smooth: true,
    duration: 0.3
});
gsap.to(".baixe1_mobile3", {
    scrollTrigger:{
        trigger: ".baixe1_mobile3",
        start: "top 80%",
        end: "top 80%",
        scrub: 1,
    },
    opacity:1,
    ease:"none",
    smooth: true,
    duration: 0.3
});
























































//MOBILE SOBRE NOS//


gsap.to(".time_sticky_mobile", {
    scrollTrigger:{
        trigger: ".time_sticky_mobile",
        start: "0% top",
        end: "300% 0",
        scrub: 1,
        pin:true,
    },
    ease:"none",
    smooth: true,
    duration: 0.3
});

gsap.to(".fundo", {
    scrollTrigger:{
        trigger: ".fundo",
        start: "0% top",
        end: "100% 0",
        scrub: 1,
        pin:true,
    },
    ease:"none",
    smooth: true,
    duration: 0.3
});
gsap.to(".antes_pessoa_mobile", {
    scrollTrigger:{
        trigger: ".antes_pessoa_mobile",
        start: "30% 0",
        end: "30% 0",
        toggleActions: "restart none none reverse",
    },
    ease:"power4.inOut",
    marginLeft:"-200vw",
    duration: 1
});
gsap.to(".pessoa_mobile2", {
    scrollTrigger:{
        trigger: ".pessoa_mobile2",
        start: "30% 0",
        end: "30% 0",
        toggleActions: "restart none none reverse",
    },
    ease:"power4.inOut",
    marginLeft:0,
    duration: 1
});
gsap.to(".antes_pessoa_mobile2", {
    scrollTrigger:{
        trigger: ".antes_pessoa_mobile2",
        start: "150% 0",
        end: "150% 0",
        toggleActions: "restart none none reverse",
    },
    ease:"power4.inOut",
    marginLeft:"-200vw",
    duration: 1
});
gsap.to(".pessoa_mobile3", {
    scrollTrigger:{
        trigger: ".pessoa_mobile2",
        start: "150% 0",
        end: "150% 0",
        toggleActions: "restart none none reverse",
    },
    ease:"power4.inOut",
    marginLeft:0,
    duration: 1
});
gsap.to(".antes_pessoa_mobile3", {
    scrollTrigger:{
        trigger: ".antes_pessoa_mobile2",
        start: "300% 0",
        end: "300% 0",
        toggleActions: "restart none none reverse",
    },
    ease:"power4.inOut",
    marginLeft:"-200vw",
    duration: 1
});
gsap.to(".pessoa_mobile4", {
    scrollTrigger:{
        trigger: ".pessoa_mobile2",
        start: "300% 0",
        end: "300% 0",
        toggleActions: "restart none none reverse",
    },
    ease:"power4.inOut",
    marginLeft:0,
    duration: 1
});
gsap.to(".antes_pessoa_mobile4", {
    scrollTrigger:{
        trigger: ".antes_pessoa_mobile2",
        start: "430% 0",
        end: "430% 0",
        toggleActions: "restart none none reverse",
    },
    ease:"power4.inOut",
    marginLeft:"-200vw",
    duration: 1
});
gsap.to(".pessoa_mobile5", {
    scrollTrigger:{
        trigger: ".pessoa_mobile2",
        start: "430% 0",
        end: "430% 0",
        toggleActions: "restart none none reverse",
    },
    ease:"power4.inOut",
    marginLeft:0,
    duration: 1
});

gsap.to(".barra", {
    scrollTrigger:{
        trigger: ".antes_pessoa_mobile2",
        start: "-50% top",
        end: "430% 0",
        scrub: 1,
    },
    width:"100%",
    ease:"none",
    smooth: true,
    duration: 0.3
});
gsap.to(".linha2", {
    scrollTrigger:{
        trigger: ".antes_pessoa_mobile2",
        start: "400% top",
        end: "430% 0",
        scrub: 1,
    },
    marginRight:"-45px",
    ease:"none",
    smooth: true,
    duration: 0.3
});

gsap.to(".nome2", {
    scrollTrigger:{
        trigger: ".antes_pessoa_mobile2",
        start: "30% 0",
        end: "30% 0",
        toggleActions: "restart none none reverse",
    },
    opacity:1,
    ease:"power4.inOut",
    duration: 0.5
});
gsap.to(".nome3", {
    scrollTrigger:{
        trigger: ".antes_pessoa_mobile2",
        start: "150% 0",
        end: "150% 0",
        toggleActions: "restart none none reverse",
    },
    opacity:1,
    ease:"power4.inOut",
    duration: 0.5
});
gsap.to(".nome4", {
    scrollTrigger:{
        trigger: ".antes_pessoa_mobile2",
        start: "300% 0",
        end: "300% 0",
        toggleActions: "restart none none reverse",
    },
    opacity:1,
    ease:"power4.inOut",
    duration: 0.5
});
gsap.to(".nome5", {
    scrollTrigger:{
        trigger: ".antes_pessoa_mobile2",
        start: "430% 0",
        end: "430% 0",
        toggleActions: "restart none none reverse",
    },
    opacity:1,
    ease:"power4.inOut",
    duration: 0.5
});












gsap.to(".historia_mobile", {
    scrollTrigger:{
        trigger: ".historia_mobile",
        start: "0% top",
        end: "250% 100%",
        scrub: 1,
        pin:true,
    },
    ease:"none",
    smooth: true,
    duration: 0.3
});















































































// MOBILE IMPACTO //

gsap.to(".svg_realidades_mobile", {
    scrollTrigger:{
        trigger: ".svg_realidades_mobile",
        start: "105% bottom",
        end: "260% bottom",
        scrub: 1,
        pin:true,
    },
    ease:"none",
    smooth: true,
    duration: 0.3
});

gsap.to(".realidades_sticky2", {
    scrollTrigger:{
        trigger: ".realidades_sticky2",
        start: "0% top",
        end: "400% bottom",
        scrub: 1,
        pin:true,
    },
    ease:"none",
    smooth: true,
    duration: 0.3
});

gsap.to(".textos4", {
    scrollTrigger:{
        trigger: ".realidades2",
        start: "0% bottom",
        end: "50% bottom",
        toggleActions: "restart none none reverse",
    },
    top: "0vh",
    opacity: 1,
    smooth: true,
    ease: "power4.inOut",
    delay:0.2,
    duration: 1
});

gsap.to(".textos5", {
    scrollTrigger:{
        trigger: ".realidades2",
        start: "50% bottom",
        end: "75% bottom",
        toggleActions: "restart none none reverse",
    },
    top: "0vh",
    opacity: 1,
    smooth: true,
    ease: "power4.inOut",
    delay:0.2,
    duration: 1
});

gsap.to(".textos6", {
    scrollTrigger:{
        trigger: ".realidades2",
        start: "75% bottom",
        end: "125% bottom",
        toggleActions: "restart none none reverse",
    },
    top: "0vh",
    opacity: 1,
    smooth: true,
    ease: "power4.inOut",
    delay:0.2,
    duration: 1
});


gsap.to(".textos7", {
    scrollTrigger:{
        trigger: ".realidades2",
        start: "50% bottom",
        end: "50% bottom",
        toggleActions: "restart none none reverse",
    },
    marginTop: "-15vh",
    opacity: 0,
    smooth: true,
    ease: "power4.inOut",
    duration: 1
});

gsap.to(".textos8", {
    scrollTrigger:{
        trigger: ".realidades2",
        start: "75% bottom",
        end: "75% bottom",
        toggleActions: "restart none none reverse",
    },
    marginTop: "-15vh",
    opacity: 0,
    smooth: true,
    ease: "power4.inOut",
    duration: 1
});

gsap.to(".textos9", {
    scrollTrigger:{
        trigger: ".realidades2",
        start: "125% bottom",
        end: "125% bottom",
        toggleActions: "restart none none reverse",
    },
    marginTop: "-15vh",
    opacity: 0,
    smooth: true,
    ease: "power4.inOut",
    duration: 1
});

gsap.to(".noticias_verde2", {
    scrollTrigger:{
        trigger: ".noticias_verde2",
        start: "-80% top",
        end: "-30% 0",
        scrub: 1,
    },
    width:"100%",
    ease:"none",
    smooth: true,
    duration: 0.3
});

gsap.to(".fundo_frase_impacto_mobile", {
    scrollTrigger:{
        trigger: ".fundo_frase_impacto_mobile",
        start: "0% top",
        end: "100% top",
        scrub: 1,
        pin:true,
    },
    backgroundColor:"#04A96E",
    ease:"none",
    smooth: true,
    duration: 0.3
});































































/* DARK MODE */

