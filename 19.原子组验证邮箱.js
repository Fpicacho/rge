const str = 'f_picacho-2000@qq.com.cn';
const rep = /[\w-]+@([\w-]+\.)+(com|cn|cc|net)/gi
console.log(str.match(rep))