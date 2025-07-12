$(document).ready(function(){

    // 抓高度用
    /* let myHeight = $('#firstLeftCase').offset().top
    alert(myHeight) */


    $(window).scroll(function(){
        let mainScrollHeight = parseInt($(window).scrollTop())
        if(mainScrollHeight > 200){
            $('#mainTop').addClass('showTopMain')
        }

        if(mainScrollHeight > 700){
            $('#mainBottom').addClass('showBottomMain')
        }
    })

})