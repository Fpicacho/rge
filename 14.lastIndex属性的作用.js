let str = 'fpicacho'
let reg = /\w/g

let res;
while (res = reg.exec(str)) {
    console.log(res)
}