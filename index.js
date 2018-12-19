import './createHtml'
import compare from './compare'
import {
  objectTreeStack,
  memory
} from './commonVar'
import deepCopy from './deepCopy'
import log from './log'

// 输入tree名称
let targetTree = null
window.getCompareTreeObject = obj => {
  !targetTree && (targetTree = obj)
}

const clickHandle = () => {
  if (!targetTree) {
    throw new Error('还未在rq函数中调用 window.getCompareTreeObject()!')
  }

  // 创建快照
  const tree = deepCopy(targetTree)
  memory.clear()
  objectTreeStack.push(tree)

  // 每两个, 下载一次log日志
  if (objectTreeStack.length === 2) {
    const treeBase = objectTreeStack.shift()
    const treeRef = objectTreeStack.shift()
    // 对比
    compare(treeBase, treeRef, 'root')
    // 报告
    log()
  }
}

const $btn = document.querySelector('.btn-snapshot')
$btn.addEventListener('click', clickHandle, false)
