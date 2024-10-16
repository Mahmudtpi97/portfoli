
 /* --------------------------------------------------
  * Copyright 2024 - Develop by MHTheme
  * --------------------------------------------------*/
 (function($) {
	'use strict';

$(document).ready(function(){
    // Typed 
    var typed = new Typed('#typed-text', {
      stringsElement: '#typed-content',
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 1000,
      loop:true,
    });
    
    // Counter Up 
    $('.mh-counter').counterUp({
        delay: 10,
        time: 1000
    });
    
    // Mixitup 
    var mixer = mixitup('.mh_grid_filter',{
        selectors: {
          control: '.mh_filter_item button',
        },
        load: {
          filter: '*',
      }
    });
    // Smooth scroll to top
    $('.mh-back-to-top').click(function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 1000);
      return false;
    });

    $('.mh-hamburger').on('click', function() {
        $(this).toggleClass('active');
        $("header .navbar .navbar-nav").animate({
          width: 'toggle',
          marginLeft: 'toggle'
        }, 800);
    });

});


// progress
jQuery('.mh-progress-bar').each(function() {
  var value = jQuery(this).attr('data-value');
  jQuery(this).find(".mh-progress-line").attr('data-value', value);
  jQuery(this).find(".mh-progress-line").css({'width': value }, "slow");
});

//Testimonial Slider 
var swiper = new Swiper(".mh-testimonial-slider", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  breakpoints: {
    1500: {
      slidesPerView:2,
    },
    1199: {
      slidesPerView:2,
    },
    991: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    }
  },
});

//Client Brand Slider 
var swiper = new Swiper(".mh-client-slider", {
  loop: true,
  spaceBetween: 25,
  slidesPerGroup: 1,
  breakpoints: {
    1199: {
      slidesPerView:5,
    },
    991: {
      slidesPerView: 4,
    },
    767: {
      slidesPerView: 3,
    },
    575: {
      slidesPerView: 3,
    },
  },
});

// Page Scroll to Header class add 
$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    // Sticky Header 
    if (scroll >= 80) {
        $('header').addClass('sticky');
    } else {
        $('header').removeClass('sticky');
    }
    // Page Scrolling by Section id to Header Menu Link Active Class Add 
    var headerHeight = $("header").innerHeight();
    var HscrollPos = $(window).scrollTop() + headerHeight;
    $('section[id], div[id]').each(function () {
        var top = $(this).offset().top;
        var bottom = top + $(this).outerHeight();
        if (HscrollPos >= top && HscrollPos <= bottom) {
            var sectionId = $(this).attr('id');
            $('header .navbar ul li a.nav-link').removeClass('active');
            $('header .navbar ul li a.nav-link[href="#' + sectionId + '"]').addClass('active');
        }
    });

    // Show or hide the Back to Top button
    if ($(this).scrollTop() > 300) {
      $('.mh-back-to-top').fadeIn();
    } else {
        $('.mh-back-to-top').fadeOut();
    }
    // progress circle
    var scrollPos = $(document).scrollTop();
    var docHeight = $(document).height() - $(window).height();
    var scrollPercent = (scrollPos / docHeight) * 100;
    var strokeDashOffset = 300 - (scrollPercent / 100) * 300;
    $('.mh-progress-circle .progress').css('stroke-dashoffset', strokeDashOffset);
});

// wow class add to animation div 
Array.from(document.getElementsByClassName('animated')).forEach(function(element) {
  element.classList.add('wow');
});
new WOW().init();

})(jQuery);