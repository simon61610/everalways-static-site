$(document).ready(function(){
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
    // 數入錯誤與正確時分別出現的提示文字
})