let testStr = 20.5;

console.log(/\d+\.+\d/.test(testStr.toString()))

let Rep = new RegExp('\\d+\\.+\\d')
console.log('\\d+\\.+\\d')
console.log(Rep.test(testStr))

// let testStr2 = 'https://www.baidu.com'
// console.log(testStr2.match(/https?:\/\/\w+\.\w+\.\w+/))