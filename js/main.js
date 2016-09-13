/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// Old browser notification
$(function() { 
  $.reject({
    reject: {
      msie: 9
    },
    imagePath: 'img/icons/jReject/',
    display: [ 'chrome','firefox','safari','opera' ],
    closeCookie: true,
    cookieSettings: {
      expires: 60*60*24*365
    },
    header: 'Ваш браузер устарел!',
    paragraph1: 'Вы пользуетесь устаревшим браузером, который не поддерживает современные веб-стандарты и представляет угрозу вашей безопасности.',
    paragraph2: 'Пожалуйста, установите современный браузер:',
    closeMessage: 'Закрывая это уведомление вы соглашаетесь с тем, что сайт в вашем браузере может отображаться некорректно.',
    closeLink: 'Закрыть это уведомление',
  });
});
// Equal Height function
$(window).on('resize', function(){

  $.fn.equialHeight = function() {
    var $tallestcolumn = 0;
    var $currentHeight = 0;
    $.each($(this), function (index, value) {
      $currentHeight = $(this).height();
      if($currentHeight > $tallestcolumn)
      {
        $tallestcolumn = $currentHeight;
      }
    });
    $(this).height($tallestcolumn);
    return $(this);
  } 

  if( $( window ).width() >= 768 ) {
    $('.help__img').equialHeight();
    $('.help__box--a .help__title').equialHeight();
    $('.help__box--a .help__info').equialHeight();
    $('.help__box--b .help__title').equialHeight();
    $('.help__box--b .help__info').equialHeight();
    $('.employee__container').equialHeight();
    $('.employee__name').equialHeight();
    $('.modal__height').equialHeight();
  }

}).trigger('resize');


// Scroll to bottom block
if( $( window ).width() >= 320 ) {
  $('.exp__btn').click(function(){
    $("html, body").animate({ scrollTop: $(".case").offset().top }, 2500);
    return false;
  });
}

// Employee spoiler 
$(document).ready( function() {
  var $elemHeight = $('.help__img').height();
  $('.help__img').css('line-height',  $elemHeight + 'px');
});
$(document).ready( function() {
  $('.girl1__btn').click(function () {
    $('.girl1__btn').css('visibility',  'hidden');
    $('.girl1').css({'visibility' : 'visible', 'opacity':'1'});
  });
  $('.girl2__btn').click(function () {
    $('.girl2__btn').css('visibility',  'hidden');
    $('.girl2').css({'visibility' : 'visible', 'opacity':'1'});
  });
  $('.girl3__btn').click(function () {
    $('.girl3__btn').css('visibility',  'hidden');
    $('.girl3').css({'visibility' : 'visible', 'opacity':'1'});
  });
});

$('.sertificates__slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous<i class="fa fa-angle-left" aria-hidden="true"></i></button>',
  nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next<i class="fa fa-angle-right" aria-hidden="true"></i></button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.case__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous<i class="fa fa-angle-left" aria-hidden="true"></i></button>',
  nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next<i class="fa fa-angle-right" aria-hidden="true"></i></button>'
});