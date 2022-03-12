const str = "F_picacho";
const regs = [
    /^[a-z0-9]\w{5,10}$/i,
    /[A-Z]/
]
let result = regs.every(e=>e.test(str))
console.log(result)