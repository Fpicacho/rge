let str = `
    <h1>lalalla</h1>
    <h2>lalalla</h2>
    <h3></h3>
    <p>lalalla</p>
`
const reg = /<(h[1-6])>(?<hd>[\s\S]*)<\/\1>/gi
console.log(str.match(reg))
// str = str.replace(reg,`<p>$2</p>`)
// console.log(str)