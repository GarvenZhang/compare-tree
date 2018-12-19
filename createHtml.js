const frag = document.createDocumentFragment()

const div = document.createElement('div')
div.className = 'snapshot-wrap'
div.style = 'position: absolute; top: 10px; right: 10px; z-index: 99999;'

const button = document.createElement('button')
button.className = 'btn-snapshot'
button.style = 'color: red; border: 1px solid currentColor; background-color: transparent;'
button.textContent = '创建快照'

div.appendChild(button)
frag.appendChild(div)
document.body.appendChild(div)
