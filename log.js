import {
  deletedList,
  addedList,
  changedList
} from './data'

// 报告
export default () => {
  deletedList.forEach(function (item) {
    console.log.apply(null, item)
  })
  addedList.forEach(function (item) {
    console.log.apply(null, item)
  })
  changedList.forEach(function (item) {
    console.log.apply(null, item)
  })
}
