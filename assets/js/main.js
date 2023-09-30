$('.count').each(function () {
    $(this).prop('Counter',0).animate({
     Counter: $(this).text()
     }, {
      duration: 1500,
      easing: 'swing',
      step: function (now) {
         $(this).text(Math.ceil(now));
      }
     });
 });

 $('.owl-cars').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:6
        }
    }
});
$('.owl-flags').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoWidth:true,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:2
        },
        1000:{
            items:8
        }
    }
});