// const str = `张三：18846103574
// 李四：18888888888
// 王五：15555555555
// `
// // const reg = /[^\d\s：]+/gm
// const reg = /\p{sc=Han}+/gmu
// console.log(str.match(reg))
const str = '(F_picacho).+';
const reg = /[().+]/g
console.log(str.match(reg))