var typed = new Typed('.typing', {
    strings: ['Developer.', 'Designer.'],
    typeSpeed: 100,
    backSpeed:90,
    loop: true,
 
  });


$(document).ready(function(){
 $(window).scroll(function(){
     if ($(window).scrollTop() > 20){
         $('.navbar').addClass('active')
     }else{
        $('.navbar').removeClass('active')
     }
 })
 $(window).scroll(function(){
    if ($(window).scrollTop() > 200){
        $('.fa-angle-up').addClass('active')
    }else{
       $('.fa-angle-up').removeClass('active')
    }
    $('.fa-angle-up').click(function(){
        window.scrollTo(0, 0);
    })
})

$('.fa-moon').click(function(){
    $('.fa-moon').toggleClass('fa-sun')
    $('body').toggleClass('dark')
})


$('.fa-bars').click(function(){
    $('.fa-bars').toggleClass('fa-times')
    $('nav').toggleClass('toggle')
})


$('.links a').click(function(){
    $('nav').removeClass('toggle')
    $('.fa-bars').toggleClass('fa-times')


})


})

