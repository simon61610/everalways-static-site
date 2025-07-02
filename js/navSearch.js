$(document).ready(function(){
    // 放大鏡 icon 點擊後，上面搜尋欄滑出 | 關閉
    $('#searchIcon').click(function(){
        $('#topSearch').slideToggle(500, function(){
            // slide後讓input自動focus
            $(this).find('input').focus()
        })

        // 點擊後呼叫清空功能
        clearInputValue()
    })

    // 點叉叉後關閉搜尋欄
    $('#topSearch i:last-child').click(function(){
        $('.top-search').slideUp(500)
    })

    // 功能: 清空搜尋欄的文字
    function clearInputValue(){
        let searchInput = $('#topSearch input')
        searchInput.val('')
    }
})