$(document).on('click','button:contains("ajaxPost")', (event) => {
    $this = event.currentTarget
    const title = $(`input[placeholder="title"]`).val()
    const body = $(`input[placeholder="body"]`).val()
    const userId = $(`input[placeholder="userId"]`).val()
    ajaxJson(title, body, userId)
})

$(document).on('click','button:contains("ajaxGet")', (event) => {
    $this = event.currentTarget
    const idx = $(`input[placeholder="index"]`).val()
    ajaxGet(idx)
})

ajaxJson = (title, body, userId) => {
    $.ajax('https://jsonplaceholder.typicode.com/posts',{
          method: 'POST',
          data: JSON.stringify({
            title,
              body,
              userId
            }),
          success: function(data) {
              console.log(data)
          }
    }
)}

ajaxGet = (idx) => {
    $.ajax(`https://jsonplaceholder.typicode.com/posts/${idx}`,{
        method: 'GET',
        success: function(data) {
            console.log(data)
        }
  }
)}