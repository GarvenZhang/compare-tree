import {
  deletedList,
  addedList,
  changedList
} from './commonVar'

// 报告
export default () => {
  let str = ''

  deletedList.forEach(function (item) {
    str += `${item.join('')}\n`
  })
  str += `\r\n=========================分割线===========================\r\n`
  addedList.forEach(function (item) {
    str += `${item.join('')}\n`
  })
  str += `\r\n=========================分割线===========================\r\n`
  changedList.forEach(function (item) {
    str += `${item.join('')}\n`
  })

  // 生成txt下载
  const blob = new Blob([str])
  const a = document.createElement('a')
  a.href = window.URL.createObjectURL(blob)
  a.download = 'log.txt'
  a.textContent = 'Download'
  a.click()
}
