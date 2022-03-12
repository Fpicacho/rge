// const str = "的撒旦和撒娇的看：2314008827，233333333，5645645114，的萨大师的但是"
// let reg = /(\d+)，?/y;
// reg.lastIndex = 9;
// const list = [];
//
// while ((a = reg.exec(str))) list.push(a[1]);
// console.log(list)

const str = `
    # jd,200元 #
    # tt,400元 #
    # www.baidu.com # 百度
    # hhei,300元 #
`
const reg = /^\s+#.+\s#$/gm
const a = str.match(reg).map(i=>{
    [name,price] = i.match(/\S+/g)[1].split(",");
    return {name,price}
})
console.log(a)
