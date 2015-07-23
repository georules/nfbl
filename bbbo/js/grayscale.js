/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var location = 0;
        if ($anchor.attr('href') == "#page-top") {
          //maybe do something
          history.pushState(null,null,"")
        }
        else {
          $($anchor.attr('href')).offset().top
          history.pushState(null,null,$anchor.attr('href'))
        }

        $('html, body').stop().animate({
            scrollTop: location
        }, 1500, 'easeInOutExpo');

        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('.navbar-brand').click(function() {
  $('.navbar-toggle:visible').click();
})
