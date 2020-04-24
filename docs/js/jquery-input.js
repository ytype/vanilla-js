radio_alert = () => {
    if($("input:radio[name='fruits'][value='사과']").is(":checked")){
        alert($("input:radio[name='fruits'][value='사과']").val())
        $("p[id='radio_result']").text('사과')
    } else if ($("input:radio[name='fruits'][value='복숭아']").is(":checked")){
        alert($("input:radio[name='fruits'][value='복숭아']").val())
        $("p[id='radio_result']").text('복숭아')
    }
}

check_alert = () => {
    arr = new Array()
    $("input:checkbox[name=chk_info]:checked").each(function() { 
        arr.push($(this).val())
    })
    alert($("input:checkbox[name=chk_info]:checked").length + '개 체크')
    $("p[id='check_result']").text(arr)
}

input_alert = () => {
    $("p[id='input_result']").text($("input:text[name='text']").val().trim())
    alert($("input:text[name='text']").val().trim().length)
}