$(document).ready(function(){
    /* $(window).on('scroll', function(){
        let scrollTop = $(window).scrollTop();
    
        // 控制圖片位移程度，可以調整數字
        let moveAmount = scrollTop * 0.2;
    
        $('.parallax-img').css('transform', `translateY(${moveAmount}px)`);
    });
 */
    let lastScrollTop = 0;

    $(window).on('scroll', function(){
        let currentScrollTop = $(this).scrollTop();
        let direction = currentScrollTop > lastScrollTop ? 'down' : 'up';

        let moveAmount = direction === 'down' ? -50 : 50;

        $('.parallax-img').css('transform', `translateY(${moveAmount}px)`);

        lastScrollTop = currentScrollTop;
    });



    
})
