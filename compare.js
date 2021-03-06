import compareNextLayer from './compareNextLayer'
import {
  deletedList,
  addedList,
  changedList
} from './commonVar'

// 快照比较, 防止 const a = {b: 1}, a.c = 2
// 路径
// 一定要比较到基本类型
// bfs

/**
 * 快照比较
 * @param {*} baseTree 
 * @param {*} refTree 
 * @param {*} baseTreeName
 */
export default function (baseTree, refTree, baseTreeName) {
  if (typeof baseTreeName === 'undefined') {
    throw new Error('必须提供第三个参数!')
  }

  let baseQueue = []
  let refQueue = []
  deletedList.push({})
  addedList.push({})
  changedList.push({})

  // 将子项入队
  baseQueue.push({
    key: baseTreeName,
    value: baseTree
  })
  refQueue.push(refTree)

  // 非递归bfs
  while (baseQueue.length > 0) {

    const baseCur = baseQueue.shift()
    const refCur = refQueue.shift()

    const compareRet = compareNextLayer(baseCur, refCur)
    baseQueue = baseQueue.concat(compareRet.base)
    refQueue = refQueue.concat(compareRet.ref)
  }

}
