// 原子表中的选择符
let rep = /[1234]/; // = /1|2|3|4/
let testStr = '7894';
console.log(rep.test(testStr))

// 原子组中的选择符号
let rep2 = /(11|22)/;
let testStr2 = '12';
console.log(testStr2.match(rep2))