import './createHtml'
import compare from './compare'
import {
  objectTreeQueue,
  memory,
  addCount,
  getCount
} from './commonVar'
import deepCopy from './deepCopy'
import log from './log'

const $btnSnapshot = document.querySelector('.snapshot-wrap .btn-snapshot')
const $btnExport = document.querySelector('.snapshot-wrap .btn-export')
const $txtCount = document.querySelector('.snapshot-wrap .txt-count')

// 输入tree名称
let targetTree = null
window.getCompareTreeObject = obj => {
  !targetTree && (targetTree = obj)
}

// 点击创建快照处理
const snapshotHandle = () => {
  if (!targetTree) {
    throw new Error('还未在rq函数中调用 window.getCompareTreeObject()!')
  }

  // 创建快照
  const tree = deepCopy(targetTree)
  // 清楚记忆
  memory.clear()
  // 入队
  objectTreeQueue.push(tree)
  // 更新数量
  $txtCount.textContent = objectTreeQueue.length
}

// 点击导出处理
const exportHandle = () => {

  // 对比
  const l = objectTreeQueue.length
  while (getCount() < l - 1) {
    compare(objectTreeQueue[getCount()], objectTreeQueue[getCount() + 1], 'root')
    addCount()
  }
  
  // 报告
  log()
  // 重置
  objectTreeQueue.length = 0
  $txtCount.textContent = 0
}

// 监听
$btnSnapshot.addEventListener('click', snapshotHandle, false)
$btnExport.addEventListener('click', exportHandle, false)
