function reajustar (){
	var altura_total = $('body').height();
	var altura_navegador = $(window).height();
	// $('body').height(altura_total - altura_navegador);
	$('.suelo').width($(window).width()).css({'left':'-'+(($(window).width()-1000)/2)+'px'});
	$('.nubefondo').width($(window).width()).css({'left':'-'+(($(window).width()-1000)/2)+'px'});
	$('.estrellasfondo').width($(window).width()).css({'left':'-'+(($(window).width()-1000)/2)+'px'});
}

$(document).ready(function(){
	console.log('ready');

	$(window).scroll(function(e) {
	        
	        scrollAmount = $('body').scrollTop();   
	        console.log(scrollAmount);


	});
	$(window).resize(function(){
		reajustar();
	});


	// animations

	var astronauta1 = new TimelineMax({repeat: -1, yoyo: false})
		.add(TweenMax.to("#pagina1 .astronauta", 2, {top: "+=10", ease: Sine.easeInOut}))
		.add(TweenMax.to("#pagina1 .astronauta", 2, {top: "-=10", ease: Sine.easeInOut}));

	var navepeque = new TimelineMax({repeat: -1, yoyo: false})
		.add(TweenMax.to("#pagina1 .navepeque", 0, {css:{zIndex:10}}))
		.add(TweenMax.to("#pagina1 .navepeque", 0, {css:{zIndex:10}}))
		.add(TweenMax.to("#pagina1 .navepeque", 3, {width: "57px",left: "500px", ease: Sine.easeIn}))
		.add(TweenMax.to("#pagina1 .navepeque", 3, {width: "37px",left: "250px",rotation: 30, ease: Sine.easeOut}))
		.add(TweenMax.to("#pagina1 .navepeque", 0, {css:{zIndex:1}}))
		.add(TweenMax.to("#pagina1 .navepeque", 3, {width: "17px",left: "500px", ease: Sine.easeIn}))
		.add(TweenMax.to("#pagina1 .navepeque", 0, {css:{zIndex:1}}))
		.add(TweenMax.to("#pagina1 .navepeque", 3, {width: "37px",left: "750px",rotation: 0, ease: Sine.easeOut}))

		// .add(TweenMax.to("#pagina1 .navepeque", 1, {css:{zIndex:10}}))
		// .add(TweenMax.to("#pagina1 .navepeque", 5, {left: "200px", ease: Cubic.easeInOut}))

	var astronauta1 = new TimelineMax({repeat: -1, yoyo: false})
		.add(TweenMax.to("#pagina1 .navetop", 3, {bottom: "+=10", ease: Sine.easeInOut}))
		.add(TweenMax.to("#pagina1 .fuego", 0.5, {opacity: "0", ease: Sine.easeInOut}))
		.add(TweenMax.to("#pagina1 .navetop", 3, {bottom: "-=10", ease: Sine.easeInOut}))
		.add(TweenMax.to("#pagina1 .fuego", 0.5, {opacity: "1", ease: Sine.easeInOut}));

	// var navepeque = new TimelineMax({repeat: -1, yoyo: false})
	// 	.add(TweenMax.to("#pagina1 .navetop .fuego", 0.5, {opacity: "1"}))
	// 	.add(TweenMax.to("#pagina1 .navetop", 5, {bottom: "300px", ease: Cubic.easeInOut}))
	// 	.add(TweenMax.to("#pagina1 .navetop .fuego", 0.5, {opacity: "0"}))
	// 	.add(TweenMax.to("#pagina1 .navetop", 5, {bottom: "0px", ease: Cubic.easeInOut}));

	// var navepeque = new TimelineMax({repeat: -1, yoyo: false})
	// 	.add(TweenMax.to("#pagina1 .navetop .fuego", 0.5, {opacity: "1"}))
	// 	.add(TweenMax.to("#pagina1 .navetop", 10, {bottom: "700px", right: "1000px", ease:Linear.easeNone}))

	var navepeque = new TimelineMax({repeat: -1})
		.add(TweenMax.to("#pagina1 .astronauta", 10, {rotation: -360, ease:Linear.easeNone}))

	var navepeque = new TimelineMax({repeat: -1})
		.add(TweenMax.to("#pagina2 .satelite", 10, {rotation: -360, ease:Linear.easeNone}))

	var navepeque = new TimelineMax({repeat: -1})
		.add(TweenMax.to("#pagina3 .satelite", 10, {rotation: -360, ease:Linear.easeNone}))

	var navepeque = new TimelineMax({repeat: -1})
		.add(TweenMax.to("#pagina7 .satelite", 10, {rotation: -360, ease:Linear.easeNone}))

	var navepeque = new TimelineMax({repeat: -1, yoyo: true})
		.add(TweenMax.to("#pagina1 .raton_volador", 2, {bottom: "+=20", rotation: -0.5, ease: Cubic.easeInOut}))
		.add(TweenMax.to("#pagina1 .raton_volador", 2, {bottom: "-=20", rotation: 1.5, ease: Cubic.easeInOut}));

	var navepeque = new TimelineMax({repeat: -1, yoyo: true})
		.add(TweenMax.to("#pagina4 .raton_volador", 2, {bottom: "+=20", rotation: -0.5}))
		.add(TweenMax.to("#pagina4 .raton_volador", 2, {bottom: "-=20", rotation: 1.5}));

		var navepeque = new TimelineMax({repeat: -1, yoyo: true})
		.add(TweenMax.to("#pagina1 .saturnosup", 2, {top: "+=40", rotation:0, ease: Linear.easeNone}));
		// .add(TweenMax.to("#pagina1 .saturnosup", 2, {top: "+=200", rotation: 1.5, ease: Linear.easeNone}));

	var navepeque = new TimelineMax({repeat: -1, yoyo: true})
		.add(TweenMax.to("#pagina4 .saturnosup", 2, {bottom: "+=20", rotation: -0.5}))
		.add(TweenMax.to("#pagina4 .saturnosup", 2, {bottom: "-=20", rotation: 1.5}));	

	var navepeque = new TimelineMax({repeat: -1, yoyo: false})
		.add(TweenMax.to("#pagina5 .satelite2", 2, {top: "+=20", rotation: -1}))
		.add(TweenMax.to("#pagina5 .satelite2", 2, {top: "-=20", rotation: 1.5}));

	var astronauta1 = new TimelineMax({repeat: -1, yoyo: false})
		.add(TweenMax.to("#pagina6 .astronauta", 2, {top: "+=20", ease: Sine.easeInOut}))
		.add(TweenMax.to("#pagina6 .astronauta", 2, {top: "-=20", ease: Sine.easeInOut}));

	var navepeque = new TimelineMax({repeat: -1})
		.add(TweenMax.to("#pagina9 .rueda1", 5, {rotation: -360, ease:Linear.easeNone}))
	
	var navepeque = new TimelineMax({repeat: -1})
		.add(TweenMax.to("#pagina9 .rueda2", 5, {rotation: -360, ease:Linear.easeNone}))

	var navepeque = new TimelineMax({repeat: -1})
		.add(TweenMax.to("#pagina11 .nubebot", 2, {top: "+=15", ease: Cubic.easeInOut}))
		.add(TweenMax.to("#pagina11 .nubebot", 2, {top: "-=15", ease: Cubic.easeInOut}));

	var navepeque = new TimelineMax({repeat: -1})
		.add(TweenMax.to("#pagina10 .rayos", 5, {rotation: +360, ease:Linear.easeNone}))
	
	var navepeque = new TimelineMax({repeat: -1})
		.add(TweenMax.to("#pagina11 .mouse1", .5, {top: "-=5", ease: Linear.easeNone}))
		.add(TweenMax.to("#pagina11 .mouse1", .5, {top: "+=5", ease: Linear.easeNone}));

	var navepeque = new TimelineMax({repeat: -1})
		.add(TweenMax.to("#pagina11 .mouse2", .5, {top: "+=5", ease: Linear.easeNone}))
		.add(TweenMax.to("#pagina11 .mouse2", .5, {top: "-=5", ease: Linear.easeNone}));

	var tiempo = 200;
	var cont = 0;
	var tid = setTimeout(mycode, tiempo);
	
	function mycode() {
		if(cont==0){
			$('#pagina7 .raton1').hide();
			$('#pagina7 .raton2').show();
			$('#pagina3 .pajaro11').hide();
			$('#pagina3 .pajaro22').show();
			// $('#pagina2 .esp11').hide();
			// $('#pagina2 .esp22').show();
			$('#pagina1 .pajaro11').hide();
			$('#pagina1 .pajaro22').show();
			// $('#pagina1 .raton1').hide();
			// $('#pagina1 .raton2').show();
			cont = 1;
		}else{
			$('#pagina7 .raton2').hide();
			$('#pagina7 .raton1').show();
			$('#pagina3 .pajaro22').hide();
			$('#pagina3 .pajaro11').show();
			// $('#pagina2 .esp22').hide();
			// $('#pagina2 .esp11').show();
			$('#pagina1 .pajaro22').hide();
			// $('#pagina1 .raton2').hide();
			// $('#pagina1 .raton1').show();
			$('#pagina1 .pajaro11').show();
			cont = 0;
		}
		tid = setTimeout(mycode, tiempo);
		// console.log('count');
	  
	}
	var tiempo2 = 1000;
	var permanece = 1800;
	var cont2 = 0;
	var tid2 = setTimeout(mycode2, tiempo2);

	function mycode2() {
		if($('.zetas').css("opacity")>'0.5'){
			if(cont2==0){
				$('.z1').addClass('visible');
				setTimeout(function(){$('.z1').removeClass('visible');}, permanece);
				cont2 = 1;
				console.log('z1');
			}else if(cont2==1){
				$('.z2').addClass('visible');
				setTimeout(function(){$('.z2').removeClass('visible');}, permanece);
				cont2 = 2;
				console.log('z2');
			}else if(cont2==2){
				$('.z3').addClass('visible');
				setTimeout(function(){$('.z3').removeClass('visible');}, permanece);
				cont2 = 3;
				console.log('z3');
			}else{
				cont2 = 0;
				console.log('z4');
			}
		}
		tid2 = setTimeout(mycode2, tiempo2);
		console.log(cont2);
	  
	}

});
$(window).load(function(){
	reajustar();

	// $("html, body").animate({ scrollTop: $(document).height() }, 0);
	// $('html, body').animate({scrollTop: 5000}, 0);
});