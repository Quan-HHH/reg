let hd = '(010)8888888 (020)9999999'
let reg = /\((\d{3,4})\)(\d{7,8})/g
console.log(hd.replace(reg, "$1-$2"))

// $` $& $'
const hd1 = "=后盾人="
console.log(hd1.replace(/后盾人/, "$`$&$'"))