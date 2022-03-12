// let hd = 'F_picac\nho'
// console.log(hd)
// console.log(hd.match(/[^\n]+/g))

let webList = `
baidu.com
pornhub.com
bilibili.com
youtube.com
`
// s模式 视为单行匹配
console.log(webList.match(/.+/s))
