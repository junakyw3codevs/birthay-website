(function($) {
    "use strict";

     $('.featured').slick({
        infinite: true,
         speed: 250,
         arrows: false,
         slidesToShow: 3,
         centerMode: true,
         accessibility: true,
         touchMove: true,
        
     });


     $('.other-feature').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        swipe: true,
      });


      $('.screenshoots').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });

      $('.sponsor').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
      });

    
})(jQuery);