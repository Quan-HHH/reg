let phone = '佳欣电话: 15170845497 于萍电话: 15079683659'
// 后四位换成✨
let reg = /(?<=\d{7})\d+/g
phone = phone.replace(reg, '****')
console.log(phone)