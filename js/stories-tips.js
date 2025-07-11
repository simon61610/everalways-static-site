$(document).ready(function(){

    // 訂閱電子報，動態新增送出成功文字
    $('#submit').submit(function(e){
        e.preventDefault()
        // console.log('有成功送出')
        // let value = $('#submit').find('input').val()
        // console.log(value)

        $('#feedback').text('*您已成功送出！')

        // 送出後清空清空欄位
        $('#submit input').val('')

        setTimeout(function(){
            $('#feedback').text('')
        }, 2000)
    })

    // 可再加正規表示法驗證
    // 輸入錯誤與正確時分別出現的提示文字


    // 側邊欄點擊功能
    $('#controlAside').click(function(){
        $('#categoryAside').toggleClass('aside-click')
    })

    /* let isCloseAside = true
    $('#controlAside').click(function(){
        if(isCloseAside){
            $('#categoryAside').addClass('aside-click')
        }else{
            $('#categoryAside').removeClass('aside-click')
        }
        
        isCloseAside = !isCloseAside
    }) */
    
    /* if(innerWidth <= 821){
        $('#controlAside').click(function(){
            if(isCloseAside){
                $('#categoryAside').addClass('aside-click')
            }else{
                $('#categoryAside').removeClass('aside-click')
            }
            
            isCloseAside = !isCloseAside
        })
    } */
})