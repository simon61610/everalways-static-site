$(document).ready(function(){
    // ----------------- 點擊按鈕後滑動 -----------------
    // 確認座標位置
    // console.log($('#fullWeddingBlock').offset().top)

    // 確認 nav 高度
    // console.log($('.main-nav-outer').height())

    // Banner按鈕，座標減掉 nav 的高度，才不會擋到內容
    $('#fullWedding').click(function(){
        $('html').animate({scrollTop: $('#fullWeddingBlock').offset().top - $('.main-nav-outer').height()}, 'slow')
    })
    $('#westernWedding').click(function(){
        $('html').animate({scrollTop: $('#westernWeddingBlock').offset().top - $('.main-nav-outer').height()}, 'slow')
    })
    $('#traditionalWedding').click(function(){
        $('html').animate({scrollTop: $('#traditionalWeddingBlock').offset().top - $('.main-nav-outer').height()}, 'slow')
    })

    // 點選後了解價格後，滑到方案細項和價格介紹
    $('.service-block a').click(function(){
        $('html').animate({scrollTop: $('#planBlock').offset().top - $('.main-nav-outer').height() - 40}, 'slow')
    })

    /* $('#fullWeddingBtn').click(function(){
        $('#allWeddingCard').addClass('card-move')
        $('#allWeddingCard .plan-title').addClass('title-bgc')

        setTimeout(() => {
            $('#allWeddingCard').removeClass('card-move')
            $('#allWeddingCard .plan-title').removeClass('title-bgc')
        }, 3000);
    }) */

    // 寫成 function
    function cardAnimation(selector){
        $(selector).addClass('card-move')
        $(selector).find('.plan-title').addClass('title-bgc')

        setTimeout(() => {
            $(selector).removeClass('card-move')
            $(selector).find('.plan-title').removeClass('title-bgc')
        }, 2000);
    }

    $('#fullWeddingBtn').click(function(){
        cardAnimation('#allWeddingCard')
    })
    $('#westernWeddingBtn').click(function(){
        cardAnimation('#westernWeddingCard')
    })
    $('#tradWeddingBtn').click(function(){
        cardAnimation('#chineseWeddingCard')
    })
})