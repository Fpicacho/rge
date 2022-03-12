const testStr = "fpicacho.com"
const testStr2 = "2314008827@qq.com"

const regExp = new RegExp('@','g')
console.log(regExp.test(testStr))
console.log(regExp.test(testStr2))