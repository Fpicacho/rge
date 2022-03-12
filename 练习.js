let hd = "(010)9999999 (020)9999999 (030)9999999"
let reg = /\w?(?<header>\(.+?\))/g
console.log(hd.replace(reg,`233-$<header>`))