import {
  deletedList,
  addedList,
  changedList
} from './commonVar'

let str = ''

const filterRepeat = (before, after) => {
  const beforeItem = before.split('->')
  const beforeLastOne = beforeItem[beforeItem.length - 1].trim()
  const afterItem = after.split('->')
  const afterFirstOne = afterItem[0].trim()
  if (beforeLastOne === afterFirstOne) {
    return before + ' ->' + afterItem[1]
  }
  return before + after
}

const insertStr = (diff, key, i) => {
  const diffItem = diff[key].split('->')
  let curCount = diffItem.length
  const targetCount = i + 2
  while (curCount++ < targetCount) {
    diff[key] = `${diffItem[0]}-> ` + diff[key]
  }
}

// 更新处理
const changeListHandle = () => {

  const ret = changedList.reduce((acc, cur, i, arr) => {
    const common = {}
    const diff = {}
    const acc_copy = Object.assign({}, acc)
    const cur_copy = Object.assign({}, cur)

    // 交集
    Object.keys(cur_copy).forEach(key => {
      if (acc_copy[key]) {
        common[key] = filterRepeat(acc_copy[key], cur_copy[key])
        delete cur_copy[key]
        delete acc_copy[key]
      }
    })

    // 不同
    Object.keys(acc_copy).forEach(key => {
      const item = acc_copy[key].split('->')
      diff[key] = acc_copy[key] + ` -> ${item[item.length - 1].trim()}`
      // 补充
      insertStr(diff, key, i)
      delete acc_copy[key]
    })
    Object.keys(cur_copy).forEach(key => {
      diff[key] = cur_copy[key]
      // 补充
      insertStr(diff, key, i)
      delete cur_copy[key]
    })

    return {
      ...common,
      ...diff
    }
  }, {})

  str += `\r\n========================= 总共${changedList.length + 1}次快照, 更新情况如下: ===========================\r\n`
  for (let key in ret) {
    str += `【更新了】: ${key}\n值为: ${ret[key]}\n`
  }

}

// 增删处理
const addedDeletedListHandle = () => {
  let l = deletedList.length
  let i = 0

  while (i++ < l) {
    str += `\r\n========================= 相对于第${i}次快照, 第${i + 1}次快照情况如下: ===========================\r\n`

    // 删除
    const deletedItem = deletedList.shift()
    for (let key in deletedItem) {
      str += `【删除了】: ${key}\n值为: ${deletedItem[key]}\n`
    }

    // 增加
    const addedItem = addedList.shift()
    for (let key in addedItem) {
      str += `【增加了】: ${key}\n值为: ${deletedItem[key]}\n`
    }
  }
}

// 报告
export default () => {
  // 更新部分
  changeListHandle()
  addedDeletedListHandle()

  // 生成txt下载
  const blob = new Blob([str])
  const a = document.createElement('a')
  a.href = window.URL.createObjectURL(blob)
  a.download = 'log.txt'
  a.textContent = 'Download'
  a.click()

  // 重置
  str = ''
}
