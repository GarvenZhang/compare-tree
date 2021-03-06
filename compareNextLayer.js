import {
  toString
} from './utils'
import {
  deletedList,
  addedList,
  changedList,
  getCount
} from './commonVar'

let baseCur
let refCur
let base
let ref
let common
let baseQueue
let baseQueueLen
let refQueue
let baseCurValue
let name
let type

// 作用域链的总结
// 确认输入输出, 即可对函数有思路了

/**
 * 转换Map为Object
 * @param {Map} strMap
 */
const strMapToObj = (strMap) => {
  const obj = {}
  for (let [key, value] of strMap) {
    obj[key] = value
  }
  return obj
}

/**
 * 比较common
 * @param {*} item - 项
 * @param {Number} index - 索引
 */
const eq = (item, index) => {
  let baseCurItem = null
  let refCurItem = null
  let key = ''

  switch (type) {
    case '[object Map]':
    case '[object Object]':
      baseCurItem = baseCurValue[item]
      refCurItem = refCur[item]
      key = item
      break

    case '[object Set]':
    case '[object Array]':
      baseCurItem = item
      refCurItem = refCur[index]
      key = index
      break
  }

  // null
  if (baseCurItem === null && refCurItem === null) {
    return
  }

  // NaN
  if (baseCurItem !== baseCurItem && refCurItem !== refCurItem) {
    return
  }

  // +0 & -0
  if (
    baseCurItem === 0 &&
    refCurItem === 0 &&
    1 / baseCurItem === 1 / refCurItem
  ) {
    return
  }

  if (toString.call(baseCurItem) !== toString.call(refCurItem)) {
    const i = getCount()
    changedList[i][name + item] = `${baseCurItem} -> ${refCurItem}`
    return
  }
  // 类似 'abc' 与 new String('abc')
  switch (toString.call(baseCurItem)) {
    case '[object RegExp]':
    case '[object String]':
    case '[object Function]':
      if ('' + baseCurItem === '' + refCurItem) {
        return
      }
      break

    case '[object Number]':
      if (+baseCurItem !== +baseCurItem && +refCurItem !== +refCurItem) {
        return
      }
      if (+baseCurItem === 0 && 1 / +baseCurItem === 1 / refCurItem) {
        return
      }
      break

    case '[object Date]':
    case '[object Boolean]':
      if (+baseCurItem === +refCurItem) {
        return
      }
      break

    case '[object Object]':
    case '[object Array]':
    case '[object Set]':
    case '[object Map]':
      base.push({
        key: name + key,
        value: baseCurItem
      })
      ref.push(refCurItem)
      return
  }

  if (baseCurItem !== refCurItem) {
    const i = getCount()
    changedList[i][name + item] = `${baseCurItem} -> ${refCurItem}`
  }
}

const objectHandle = () => {
  baseQueue = Object.keys(baseCurValue)
  baseQueueLen = baseQueue.length
  refQueue = Object.keys(refCur)
  let key

  while (baseQueueLen--) {
    key = baseQueue[baseQueueLen]
    if (refCur.hasOwnProperty(key)) {
      common.unshift(key)
      baseQueue.splice(baseQueueLen, 1)
      refQueue.splice(refQueue.indexOf(key), 1)
    }
  }

  // log
  baseQueue.forEach(item => deletedList[getCount()][name + item] = baseCurValue[item])
  refQueue.forEach(item => addedList[getCount()][name + item] = refCur[item])

  // 比较
  common.forEach((item, index) => eq(item, index))
}

const arrayHandle = () => {
  baseQueue = baseCurValue.concat()
  refQueue = refCur.concat()

  // 按索引对号
  if (baseQueue.length > refQueue.length) {
    common = baseQueue.slice(0, refQueue.length)
    baseQueue = baseQueue.slice(refQueue.length - 1)
    refQueue.length = 0
  } else if (baseQueue.length < refQueue.length) {
    common = baseQueue
    baseQueue.length = 0
    refQueue = refQueue.slice(baseQueue.length - 1)
  } else {
    common = baseQueue.concat()
    baseQueue.length = 0
    refQueue.length = 0
  }

  // log
  baseQueue.forEach((item, index) => deletedList[getCount()][name + index] = item)
  refQueue.forEach((item, index) => addedList[getCount()][name + index] = item)

  // 比较
  common.forEach((item, index) => eq(item, index))
}

/**
 * 分情况
 * @param {*} _baseCur
 * @param {*} _refCur
 * @return {{base: Object, ref: Object}}
 */
export default function (_baseCur, _refCur) {
  
  // 初始化
  baseCur = _baseCur
  refCur = _refCur
  base = []
  ref = []
  common = []
  baseQueue = []
  baseQueueLen = 0
  refQueue = []
  baseCurValue = baseCur.value
  name = baseCur.key + ' -> '
  type = toString.call(baseCurValue)

  // 可遍历
  switch (type) {
    case '[object Map]':
      baseCurValue = strMapToObj(baseCurValue)
      refCur = strMapToObj(refCur)
    case '[object Object]':
      objectHandle()
      break

    case '[object Set]':
      baseCurValue = [...baseCurValue]
      refCur = [...refCur]
    case '[object Array]':
      arrayHandle()
      break
  }

  return {
    base,
    ref
  }
}
