$(document).ready(function(){
    // 放大鏡 icon 點擊後，上面搜尋欄滑出 | 關閉
    $('#searchIcon').click(function(){
        $('#topSearch').slideToggle(500, function(){
            // slide後讓input自動focus
            $(this).find('input').focus()
        })
    })

    $('#topSearch i:last-child').click(function(){
        $('.top-search').slideUp(500)
    })
})