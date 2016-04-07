
$(function(){
      $(".player").YTPlayer();
    });

$(document).ready(function () {

    if($(".video")){

    }

    $(function(){
        var base=$("base").attr("href");
        url_completa = location.href; 
        var pathIni=url_completa.replace( base, "" );
        var pathFinal = pathIni.split( '/' );


        $("nav ul li a[href='"+ pathFinal[0] +"']").parent().addClass("active"); 
        if(pathFinal[0].length==0){

          $("nav ul li a[href='"+base+"']").parent().addClass("active"); 
        }
    });

    $(function(){    
      url_completa = location.href; 
      url_incio = url_completa.lastIndexOf("/"); 
      pagina_actual = url_completa.slice(url_incio+1);
      $("nav li a[href='"+ pagina_actual +"']").parent().addClass("activo");            
      if(pagina_actual == ""){
          $("nav li a[href='index.php']").parent().addClass("activo"); 
      }
  });
    
    $(function () {
        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.element-item',
            layoutMode: 'fitRows'
        });
        // filter functions
        var filterFns = {
            // show if number is greater than 50
            numberGreaterThan50: function () {
                var number = $(this).find('.number').text();
                return parseInt(number, 10) > 50;
            },
            // show if name ends with -ium
            ium: function () {
                var name = $(this).find('.name').text();
                return name.match(/ium$/);
            }
        };
        // bind filter button click
        $('.filters-button-group').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            // use filterFn if matches value
            filterValue = filterFns[filterValue] || filterValue;
            $grid.isotope({
                filter: filterValue
            });
        });
        // change is-checked class on buttons
        $('.button-group').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function () {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });

    });

    // $('section.areas article:eq(0), section.areas article:eq(2)').addClass('fadeInLeft')
    // $('section.areas article:eq(1), section.areas article:eq(3)').addClass('fadeInRight')


    // $('section.areas article:eq(1) .col.l5').insertAfter('section.areas article:eq(1) .col.l7')
    // $('section.areas article:eq(3) .col.l5').insertAfter('section.areas article:eq(3) .col.l7')


//$(function() {
//  $('#consultant').change(function(){
//    $('.colors').hide();
//				$('.consultant').removeClass('consultant-active')
//    $('#' + $(this).val()).addClass('consultant-active')
//
//  });
//});


    $(document).scroll(function () {
        //console.log($(document).scrollTop());
    })

    var url_completa = location.href;
    $("nav li a[href='" + url_completa + "']").addClass("activo");

    $(function () {

        $(' #da-thumbs .myBox ').each(function () {
            $(this).hoverdir();

        });

    });

// 	$('.da-thumbs .theBox').hover(function () {
// 		$(this).children('.myBox').next('.myText').toggleClass('myText-active')
// 		return false;
// 	})

    $('section.outstanding article').hover(function () {
        $(this).children('.caption').toggleClass('caption-active')
        return false;
    })

    $('.next-form').click(function () {
        $('.form.step-1').removeClass('form-active')
        $('.form.step-2').addClass('form-active')
        return false;
    })

//		


    //@Tabs

    $('#video').click(function () {
        $(this).get(0).paused ? $(this).get(0).play() : $(this).get(0).pause();
    });


    $('#news').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 0
    });

    $('.myTabs').easyResponsiveTabs({
        type: 'vertical',
        width: 'auto',
        fit: true,
        tabidentify: 'tab',
    });


    $(".button-collapse").sideNav();
    $('.slider').slider({
        interval: 5000,
        indicators: true,
        full_width: true

    });
    //	$('.highlight article').hover(function () {
    //		$(this).toggleClass('z-depth-4')
    //		return false;
    //	})
    //	
    //		$('.card').on('mouseenter', function () {
    //		$(this).toggleClass('z-depth-3')
    //		return false;
    //	})
    $('.modal-trigger').leanModal();
// 	$('.dropdown-button').dropdown({
// 		inDuration: 300,
// 		outDuration: 225,
// 		constrain_width: false, // Does not change width of dropdown to that of the activator
// 		hover: true, // Activate on hover
// 		gutter: 0, // Spacing from edge
// 		belowOrigin: true // Displays dropdown below the button
// 	});


    $('.submenu-open').hover(function () {
        $(this).nextAll('.submenu-open').children('.submenu').removeClass('submenu-active')
        $(this).prevAll('.submenu-open').children('.submenu').removeClass('submenu-active')
        $(this).children('.submenu').addClass('submenu-active')
        return false;
    })

    $(".banner, main h1").hover(function () {
        $('.submenu').removeClass('submenu-active')
        return false;
    });



    	$(".fancybox").fancybox({
    		openEffect: 'none',
    		closeEffect: 'none'
    	});
    $(".fancybox-thumb").fancybox({
        prevEffect: 'none',
        nextEffect: 'none',
        helpers: {
            title: {
                type: 'outside'
            },
            thumbs: {
                width: 50,
                height: 50
            }
        }
    });


    $('.bxslider').bxSlider({
        mode: 'fade',
        nextSelector: '.banner .next',
        prevSelector: '.banner .prev',
        nextText: '',
        prevText: '',
        useCSS: false,
        infiniteLoop: true,
        hideControlOnEnd: true,
        easing: 'easeInBack',
        speed: 1000,
        auto: true,
        pause: 8500,
    });

    $('.bxslider2').bxSlider({
        mode: 'fade',
        auto: true,
        pause: 4500,
        pager: false


    });



    $('#carousel').bxSlider({
        slideWidth: 210,
        minSlides: 2,
        maxSlides: 4,
        slideMargin: 15,
        auto: true,
        pause: 3500,
		speed: 1000
    });

      $('.slideritemscontent').bxSlider({
        slideWidth: 300,
        minSlides: 2,
        maxSlides: 3,
 
        slideMargin: 10,
        auto: true,
      });

    var wd = $(window).width();
    if (wd < 600) {



    } else if (wd > 599) {
        $('.highlight.myAccordeon article').click(function () {
            $(this).addClass('myAccordeon-active')
            $(this).prevAll('article').removeClass('myAccordeon-active')
            $(this).nextAll('article').removeClass('myAccordeon-active')
        });

    }
    new WOW().init();
});


$(document).ready(function(){
    var header = $('header');
    if ($(document).scrollTop() > 0) {
        header.addClass("fixed");
        header.addClass("myHeader");        
    }
});
$(window).load(function () {
    $('.parallax').parallax();

    var header = $('header');

    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            header.addClass("myHeader");
        } else {
            header.removeClass("myHeader");
        }
    });

    //	$('.preload').fadeOut(300);
// 	 var nav = $('header');
// 	
// 	    $(window).scroll(function () {
// 	        if ($(this).scrollTop() < 560) {
// 	            nav.addClass("fixed-menu");
// 	        } else {
// 	            nav.removeClass("fixed-menu");
// 	        }
// 	    });
//	 
//	  	 var nav2 = $('nav');
// 	
// 	    $(window).scroll(function () {
// 	        if ($(this).scrollTop() < 560) {
// 	            nav2.addClass("fixed-nav");
// 	        } else {
// 	            nav2.removeClass("fixed-nav");
// 	        }
// 	    });

    $('#subject').change(function () {

        var valor = $('#subject').val();

        if (valor === 'trabaje') {
            $('.no').removeClass('hide');
        } else {
            $('.no').addClass('hide');
        }
    });

});

$(".open").click(function () {
    var id = $(this).data('id');

    $('.info1').removeClass('active');

    $("." + id).addClass('active');
});

$(".close").click(function () {
    $(".info1").removeClass('active');
});

$(document).ready(function(){
    
    // var prueba = $(".scroll").position().top  -185;

    // $('.icono_flecha').click(function(){
    //           $('html, body').animate({
    //     scrollTop: prueba.offset().top
    // }, 600);
    // });

  $(document).scroll(function () {
   //console.log($(document).scrollTop());
  })

  $('.icono_flecha').click(function () {
   $('body').animate({
    scrollTop: 540
   }, 600)
  })

});


$(document).ready(function() {
   

    $('.dropdownlevel2').mouseover (function(e) {
        $("ul",this).show(100);
        e.preventDefault();

    });
    
    $('.dropdownlevel2').mouseleave (function(e) {
        $("ul",this).hide(100);
        e.preventDefault();

    });

});


//ALTO DE CAJAS AUTOMATICO

    //RECIBO EL PARAMETRO GROUP= EL SELECTOR DE LOS ELEMENTOS A IGUALAR EL TAMAÑO, SLIDER= BOOLEAN SI ES PARA CAROUSEL BXSLIDER O NO
    function equalHeight(group, slider) {
       

        if (slider == 2) {
            tallest = 0;
            if($(window).width() > 990)
            {
                var heightplus = 100;
            }else{
                var heightplus = 100;
            }
            group.each(function () {
                thisHeight = $(this).height();

                if (thisHeight > tallest) {
                    tallest = thisHeight;

                }

            });
            group.each(function(){
                $(this).attr("style",$(this).attr("style")+";height: "+ (tallest + heightplus) +"px!important");     
            });
           
        }
    }

$(document).ready(function () {

    equalHeight($(".contentheightauto .heightauto"), 2);
})

$(window).resize(function () {
    equalHeight($(".contentheightauto .heightauto"), 2);
})