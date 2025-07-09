$(document).ready(function(){
    // ----------------- 點擊搜尋功能 -----------------
    // 放大鏡 icon 點擊後，上面搜尋欄滑出 | 關閉
    $('#searchIcon').click(function(){
        $('#topSearch').slideToggle(500, function(){
            // slide 後讓 input 自動 focus
            $(this).find('input').focus()
        })

        // 點擊後呼叫清空功能
        clearInputValue()
    })

    // 點叉叉後關閉搜尋欄
    $('#topSearch i:last-child').click(function(){
        $('#topSearch').slideUp(500)
    })

    // 功能: 清空搜尋欄的文字
    function clearInputValue(){
        let searchInput = $('#topSearch input')
        searchInput.val('')
    }

    // ----------------- 漢堡選單點擊滑出功能 -----------------

    let isClose = true

    $('#hamburgerBtn').click(function(){
        if(isClose){
            $('#mainNav').animate({right: '0'}, 600)
        }else{
            $('#mainNav').animate({right: '-100%'}, 600)
        }

        // 我每次點擊一次，開關狀態都會改變
        isClose = !isClose
    })

    // ----------------- 解決導覽列在螢幕寬度恢復後消失的問題 -----------------
    // 如果 window 的寬度超過斷點 1000px，那 right 就改回 0，讓導覽列出現在畫面上
    // 多新增一個調整 window 大小，小於1000px 會自動關掉的功能
    $(window).resize(function(){
        if($(window).width() > 1000){
            $('#mainNav').css('right', 0)
        }
        else{
            $('#mainNav').css('right', '-100%')
        }
    })

    // ----------------- 頂部按鈕功能 -----------------
    $('#backToTop').hide()
    
    // 滑動的高度
    /* $(window).scroll(function(){
        myScrollHeight = parseInt($(window).scrollTop())
        console.log(myScrollHeight)
    }) */
    
    // 按鈕淡入出現
    $(window).scroll(function(){
        let myScrollHeight = parseInt($(window).scrollTop())
        if(myScrollHeight > 400){
            $('#backToTop').fadeIn()
        }else{
            $('#backToTop').fadeOut()
        }

        // ----------------- 導覽列滑動超過指令高度後，背景色透明度調整 -----------------
        if(myScrollHeight > 100) {
            $('.main-nav-outer').addClass('nav-bgc-color-modify')
        }else{
            $('.main-nav-outer').removeClass('nav-bgc-color-modify')
        }
    })

    // 滑上去後按鈕會向上動
    $('#backToTop').mouseenter(function(){
        $(this).stop().animate({bottom: '44px'}, 300)
    }).mouseleave(function(){
        $(this).stop().animate({bottom: '40px'}, 300)
    })

    // 點擊後滑動到頂部
    $('#backToTop').click(function(){
        // $(window).scrollTop(0)
        
        $('html').animate({scrollTop: 0}, 'slow')
    })
    
})