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