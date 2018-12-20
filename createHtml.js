const frag = document.createDocumentFragment()

const div = document.createElement('div')
div.className = 'snapshot-wrap'
div.innerHTML = `
<style>
.snapshot-wrap {
  border: 1px solid red;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 99999;
}

.snapshot-wrap .btn-snapshot {
  border: none;
  border-bottom: 1px solid currentColor;
  background-color: transparent;
}

.snapshot-wrap .snapshot-row:nth-last-of-type(1) {
  text-align: center;
}

.snapshot-wrap .btn {
  width: 100%;
  color: red;
}

.snapshot-wrap .btn:active,
.snapshot-wrap .btn:active {
  background-color: #ccc;
}
</style>
<div class="snapshot-row">
<button class="btn btn-snapshot">创建快照[<span class="txt-count">0</span>]</button>
</div>
<div class="snapshot-row">
<button class="btn btn-export">导&nbsp;&nbsp;出</button>
</div>
`

frag.appendChild(div)
document.body.appendChild(div)
