import {
  memory
} from './commonVar'
import {
  toString,
  isDOM
} from './utils'

// 策略：
// 1 循环引用不处理
// 2 不对DOM, window, document, parent 操作

export default function deepCopy (obj) {

  if (typeof obj !== 'object') {
    return
  }

  // 检测DOM, window, document, parent
  if (isDOM(obj) || obj === window || obj === document || obj === window.parent) {
    return toString.call(obj)
  }

  // 避免循环引用
  if (memory.has(obj)) {
    return `<循环引用>${toString.call(obj)}`
  } else {
    memory.add(obj)
  }

  let newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' && obj[key] !== null ? deepCopy(obj[key]) : obj[key]
    }
  }
  return newObj
}
