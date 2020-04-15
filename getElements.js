var element_h1 = document.getElementsByTagName('h1')[0];
console.log(element_h1.innerText);

var element_subtitle = document.getElementsByClassName('subtitle')[0]
element_subtitle.innerText = `h1 text: ${element_h1.innerText}`

var element_container = document.getElementsByClassName('container')[0]

var element_h2 = document.getElementsByName('h2')[0]
console.log(element_h2.innerText)

function add_text(){
    var element_h3 = document.createElement("H3")
    var input_str = document.getElementById("input").value
    var element_h3_text = document.createTextNode(input_str)
    element_h3.appendChild(element_h3_text)
    element_container.appendChild(element_h3)
}

function rm_text() {
    input_str = document.getElementById("input").value
    elements_h3 = document.getElementsByTagName('h3')
    for(var i=0;i<elements_h3.length;i++){
        if(elements_h3[i].outerHTML.includes(input_str)){
            elements_h3[i].remove()
            break
        }
    }
}