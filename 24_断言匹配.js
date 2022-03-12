const str = 'fpicacho2000-2022'
const reg = /./g
const strLength = str.length/2
reg.lastIndex = parseInt(strLength.toFixed())
console.log(reg.exec(str))

