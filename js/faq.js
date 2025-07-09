$(document).ready(function(){
    $('.question').click(function(){

        $(this).next().slideToggle(400);
        $(this).toggleClass('open');

        $('.question').not(this).removeClass('open');
        $('.question').not(this).next().slideUp(400)
    })
})