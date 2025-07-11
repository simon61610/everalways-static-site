$(document).ready(function(){
    // Tabs 選取後變色
    $('#categoryTabs li:first').addClass('active')

    $('#categoryTabs li').click(function(){
        $(this).addClass('active')
        $('#categoryTabs li').not(this).removeClass('active')
    })

    // 變數設定
    items = $('.gallery-item') // 複數是陣列，可以用陣列方法
    itmesWestern = $('div[data-moments="western"]')
    itmesChinese = $('div[data-moments="chinese"]')
    itmesOutdoor = $('div[data-moments="outdoor"]')
    itmesProposal = $('div[data-moments="proposal"]')
    itmesBabyparty = $('div[data-moments="babyparty"]')


    const ITEMSPERPAGE = 9 // 每頁 9 筆

    // 先顯示第一頁
    showPage(0)

    // 切分頁
    function showPage(page){
        let start = page * ITEMSPERPAGE
        let end = (page + 1 ) * ITEMSPERPAGE
        
        items.hide() // 不顯示
        // items.slice(0, 9).show()     // 第 1 頁 顯示     index 0  ~ 8 筆 => slice(0, 9)
        // items.slice(9, 17).show()    // 第 2 頁 顯示     index 9  ~ 17 筆 => slice(9, 18)
        // items.slice(19, 18).show()   // 第 3 頁 顯示     index 18 ~ 26 筆 => slice(18, 27)
        items.slice(start, end).fadeIn(1000)
    }

        function showPageClick(page, type){
        let start = page * ITEMSPERPAGE
        let end = (page + 1 ) * ITEMSPERPAGE
        
        items.hide() // 不顯示
        $(`div[data-moments="${type}"]`).slice(start, end).fadeIn(1000)
    }

    // 動態新增圓圈圈
    for(let i = 0;i < Math.ceil(items.length / ITEMSPERPAGE) ;i++){
        $('#dotButton').append(`<li class="dot"><i class="fa-solid fa-circle"></i></li>`)
    }

    $('#dotButton li:first').addClass('active') // 第一顆按鈕先變色

    $('.dot').click(function(){
        // 顯示第 index 頁
        showPage($(this).index())

        // 圓圈圈變色
        $(this).addClass('active')
        $('.dot').not(this).removeClass('active')
    })

    // 案例篩選
    $('#allCases').click(function(){
        items.show()
        // alert(items.length)
        showPage(0)

        $('.dot').remove()
        for(let i = 0;i < Math.ceil(items.length / ITEMSPERPAGE) ;i++){
            $('#dotButton').append(`<li class="dot"><i class="fa-solid fa-circle"></i></li>`)
        }
        $('#dotButton li:first').addClass('active') // 第一顆按鈕先變色

        $('.dot').click(function(){
            // 顯示第 index 頁
            showPage($(this).index())

            // 圓圈圈變色
            $(this).addClass('active')
            $('.dot').not(this).removeClass('active')
        })
    })
    $('#western').click(function(){
        items.each(function(){
            if($(this).attr('data-moments') === 'western'){
               $(this).show() 
            }else{
                $(this).hide()
            }
        })

        countCaseShowd = itmesWestern.length;
        // alert(countCaseShowd)
        showPageClick(0, 'western')

        $('.dot').remove()
        for(let i = 0;i < Math.ceil(countCaseShowd / ITEMSPERPAGE) ;i++){
            $('#dotButton').append(`<li class="dot"><i class="fa-solid fa-circle"></i></li>`)
        }

        $('#dotButton li:first').addClass('active') // 第一顆按鈕先變色

        $('.dot').click(function(){
            // 顯示第 index 頁
            showPageClick($(this).index(), 'western')

            // 圓圈圈變色
            $(this).addClass('active')
            $('.dot').not(this).removeClass('active')
        })
    })
    $('#chinese').click(function(){
        items.each(function(){
            if($(this).attr('data-moments') === 'chinese'){
               $(this).show() 
            }else{
                $(this).hide()
            }
        })

        countCaseShowd = itmesChinese.length;
        // alert(countCaseShowd)
        showPageClick(0, 'chinese')


        $('.dot').remove()
        for(let i = 0;i < Math.ceil(countCaseShowd / ITEMSPERPAGE) ;i++){
            $('#dotButton').append(`<li class="dot"><i class="fa-solid fa-circle"></i></li>`)
        }

        $('#dotButton li:first').addClass('active') // 第一顆按鈕先變色

        $('.dot').click(function(){
            // 顯示第 index 頁
            showPageClick($(this).index(), 'chinese')

            // 圓圈圈變色
            $(this).addClass('active')
            $('.dot').not(this).removeClass('active')
        })
    })
    $('#outdoor').click(function(){
        items.each(function(){
            if($(this).attr('data-moments') === 'outdoor'){
               $(this).show() 
            }else{
                $(this).hide()
            }
        })

        countCaseShowd = itmesOutdoor.length;
        // alert(countCaseShowd)
        showPageClick(0, 'outdoor')


        $('.dot').remove()
        for(let i = 0;i < Math.ceil(countCaseShowd / ITEMSPERPAGE) ;i++){
            $('#dotButton').append(`<li class="dot"><i class="fa-solid fa-circle"></i></li>`)
        }

        $('#dotButton li:first').addClass('active') // 第一顆按鈕先變色

        $('.dot').click(function(){
            // 顯示第 index 頁
            showPageClick($(this).index(), 'outdoor')

            // 圓圈圈變色
            $(this).addClass('active')
            $('.dot').not(this).removeClass('active')
        })
    })
    $('#proposal').click(function(){
        items.each(function(){
            if($(this).attr('data-moments') === 'proposal'){
               $(this).show() 
            }else{
                $(this).hide()
            }
        })

        countCaseShowd = itmesProposal.length;
        // alert(countCaseShowd)
        showPageClick(0, 'proposal')


        $('.dot').remove()
        for(let i = 0;i < Math.ceil(countCaseShowd / ITEMSPERPAGE) ;i++){
            $('#dotButton').append(`<li class="dot"><i class="fa-solid fa-circle"></i></li>`)
        }

        $('#dotButton li:first').addClass('active') // 第一顆按鈕先變色

        $('.dot').click(function(){
            // 顯示第 index 頁
            showPageClick($(this).index(), 'proposal')

            // 圓圈圈變色
            $(this).addClass('active')
            $('.dot').not(this).removeClass('active')
        })
    })
    $('#babyparty').click(function(){
        items.each(function(){
            if($(this).attr('data-moments') === 'babyparty'){
               $(this).show() 
            }else{
                $(this).hide()
            }
        })

        countCaseShowd = itmesBabyparty.length;
        // alert(countCaseShowd)
        showPageClick(0, 'babyparty')


        $('.dot').remove()
        for(let i = 0;i < Math.ceil(countCaseShowd / ITEMSPERPAGE) ;i++){
            $('#dotButton').append(`<li class="dot"><i class="fa-solid fa-circle"></i></li>`)
        }

        $('#dotButton li:first').addClass('active') // 第一顆按鈕先變色

        $('.dot').click(function(){
            // 顯示第 index 頁
            showPageClick($(this).index(), 'babyparty')

            // 圓圈圈變色
            $(this).addClass('active')
            $('.dot').not(this).removeClass('active')
        })
    })
})