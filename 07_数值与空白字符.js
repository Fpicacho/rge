// \d 元字符 表示匹配数字  +为连续匹配 一个或者多个

let hd = 'fpicacho 2022 2021'
console.log(/\d+/g.test(hd))
console.log(hd.match(/\d+/g))

let hd2 = `
    张三：010-9999999，李四：020-8888888
`
console.log(hd2.match(/\d{3}-\d{7,8}/g))

// \D 反向选择数字
console.log(hd2.match(/\D+/g))
// ^ 在原子表中只匹配"除了"其中字符的任意一个原子
console.log(hd2.match(/[^\d-：，\s]+/g))

