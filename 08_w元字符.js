// let hd = 'F_picacho2022 !!!@@@'
// console.log(hd.match(/\w+/g))

// \w 字母 数字 下划线
// let mail = '2314008827@qq.com'
// console.log(mail.match(/^\d+@\w+\.\w+$/g))
//
// // \W 除了字母 数字 下划线
// console.log(mail.match(/\W/g))

console.log('f_picacho'.match(/^[a-z]\w{4,9}$/))
console.log(/^[a-z]\w{4,9}$/.test('f_picacho'))