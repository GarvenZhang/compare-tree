// 函数记忆, 用于创建对象
export const memory = new Set()
// 结果列表
export const deletedList = []
export const addedList = []
export const changedList = []
// 对象树存储队列
export const objectTreeQueue = []
// 当前对比次数
let count = 0
export const getCount = () => count
export const addCount = () => ++count
