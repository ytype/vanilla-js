appendNode = () => {
    const title = $("input[placeholder='title']").val()
    const content = $("input[placeholder='content']").val()
    const box_parent = $("div[class='column']")[1]
    let $box = $("<div class='box'></div>")
    let $title = $(`<h2 class="title">${title}</h2>`)
    let $content = $(`<p>${content}</p>`)
    let $remove_btn = $("<button class='remove_btn button'>remove</button>")
    $box.append($title)
    $box.append($content)
    $box.append($remove_btn)
    let $p = $(`<p>test</p>`)
    $(box_parent).prepend($box)
}

$(document).on('click','.remove_btn', (event) => {
    var $this = $(event.currentTarget)
    $this.parent().remove()
    console.log($this.html())
})

$(document).on('click','p', (event) => {
    var $this = $(event.currentTarget)
    $this.before('<p>before p tag</p>')
    $this.after('<p>after p tag</p>')
})

$(document).on('click','#wrap', (event) => {
    var $this = $(event.currentTarget)
    $this.wrap("<div class='box'></div>")
})