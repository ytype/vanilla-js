$("button[id='change']").click(() => {
    let hex = $("input:text[class='input']").val()
    changeColor(hex)
})

$('.remove_click').on('click', (event) => {
    console.log("clicked")
    var $this = $(event.currentTarget);
    $this.remove()
})

outerHTML = (element) => {
    return element.parent().clone().wrapAll("<div/>").parent().html()
}

$("h2").on('click', (event) => {
    let $this = $(event.currentTarget);
    let p = $("p[id='console']").text($this.text())
    console.log(outerHTML($this))
})

changeColor = (hex) => {
    let element = $("h1[id='color']")
    element.css('color',hex)
    console.log(element, hex)
}

addClass = () => {
    let element = $("h1[id='color']")
    element.addClass('append')
}

removeClass = () => {
    let element = $("h1[id='color']")
    element.removeClass('append')
}

defaultCalss = () => {
    let element = $("h1[id='color']")
    element.attr('class','')
}