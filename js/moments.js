$(document).ready(function(){

    const ITEMSPERPAGE = 9 // 每頁 9 筆
    let items = $('.gallery-item') // 複數是陣列，可以用陣列方法

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
        items.slice(start, end).show()
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
    
})