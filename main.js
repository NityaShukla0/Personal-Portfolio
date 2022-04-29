(function ($) {
    "use strict"

    //navbar on scrolling

    $(window).scroll(function(){
        if ($(this).scrollTop() > 200){
            $('.navbar').fadeIn('slow').css('display','flex');
        }else{
            $('.navbar').fadeOut('slow').css('display','none');
        }
    });
    //typed initiate
    if ($('.typed-text-output').length == 1){
         var typed_strings = $('.typed-text').text();
         var typed = new Typed('.typed-text-output',{
             strings:typed_strings.split(','),
             typespeed:100,
             backspeed:20,
             smartbackspace:false,
             loop:true
         });
         //smooth scrolling on navbar linnks 
$(",navbar-nav a").on('click',function (event){
    if(this.hash!=="") {
        event.preventDefault();

        $('html,body').amimate({
            scrollTop: $(this.hash).offset().top-45
        }, 1500,'easeInOutExpo');

        if($(this).parents('.navbar-nav').length){
            $('.navbar-nav.active').removeClass('active');
            $(this).closest('a').addClass('active');
        }
    }
});
//projects isotope and filter

    //skill bar
    $('.skill').waypoint(function(){
        $('.progress .progress-bar').each(function(){
            $(this).css("width",$(this).attr("aria-valuenow") + '%');
        });
    },{offset: '30%'});
    }
})(jQuery);

.position-absolute{
    font-weight: 700;
}

