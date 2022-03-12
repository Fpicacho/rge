const str = `
    #1 jd，200元 #
    #2 zr，1500元 #
    #10 www.baidu.com # 百度
    #300 node.js，180元 #
`

const a = str.match(/^\s*#+.+\s#$/gm).map(i=>{
    [name,price] = i.match(/\S+/g)[1].split('，')
    return {name,price}
})

console.log(a)