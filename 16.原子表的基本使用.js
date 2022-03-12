// let str = '2020-03-04';
// let reg = /^\d{4}[-\/]\d{2}[-\/]\d{2}$/g
// console.log(reg.test(str))
// let reg = /\d+/g
// console.log(str.match(reg).join("/"))
const str = `
    #1 jd，200元 #
    #2 zr，1500元 #
    #10 www.baidu.com # 百度
    #300 node.js，180元 #
`
const reg = /^\s*.+\s#$/gm
const a = str.match(reg).map(i => {
    [name, amount] = i.match(/\S+/g)[1].split("，");
    return {name, amount}
})
console.log(a)
str.replace()