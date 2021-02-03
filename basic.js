let str = 'quanjiaxin'
let letter = 'a'
// 字面量形式
console.log(/a/.test(str))
console.log(eval(`/${letter}/`).test(str))

// 对象形式
let reg = new RegExp('u', 'g') // 第二个参数是模式
console.log(reg.test(str))

let reg2 = new RegExp('\\w', 'g')
console.log(reg2.test(str))

let tel = '020-99999991'
let reg3 = /^(010|020)\-\d{7,8}$/
console.log(reg3.test(tel))
