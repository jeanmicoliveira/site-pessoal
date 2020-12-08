$(document).ready(function(){

  if(window.SimpleAnime); {
    new SimpleAnime();
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
        $('.navbar').addClass('navbar-resize')
    } else {
        $('.navbar').removeClass('navbar-resize')
    }
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() <= 0) {
        $('.intro').addClass('hidden')
    } else {
        $('.intro').removeClass('hidden')
    }
  });

  // $(window).scroll(function(){
  //   var id = $('.separador').offset().top;
  //   if ($(id) > $(this).scrollTop()){
  //     $('.separador').addClass('hidden')
  //   } else {
  //     $('.separador').removeClass('hidden')
  //   }
  //     console.log(id)
  // });

  var $alvo = $('[data-anime="scroll"]'),
      anima = 'anime',
      offset = $(window).height() * 3/4;

  function animeScroll() {
    var docTop = $(window).scrollTop();
    $alvo.each(function () {
      var itemTop = $(this).offset().top;
      if (docTop > itemTop - offset) {
        $(this).addClass(anima);
      } else {
        $(this).removeClass(anima);
      }
     });
  }

  animeScroll();

  $(document).scroll(function(){
    animeScroll();
  });



  $('[data-proj]').each(function(){
    var $allTargets = $(this).find('[data-target]'),
        $allClicks = $(this).find ('[data-click]'),
        activeClass = 'active';

    $allTargets.first().addClass(activeClass);
    $allClicks.first().addClass(activeClass);

    $allClicks.click(function(e) {
      e.preventDefault();

      var id = $(this).data('click'),
          $targets = $('[data-target="' + id + '"]');

      $allClicks.removeClass(activeClass);
      $allTargets.removeClass(activeClass);

      $targets.addClass(activeClass);
      $(this).addClass(activeClass);

    });
  });








});