let str =  `
    <p>
        <span>壬戌之秋，七月既望，苏子与客泛舟游于赤壁之下,</span> <br>
        <span>清风徐来，水波不兴。举酒属客，诵明月之诗，歌窈窕之章。</span>
    </p>
`
console.log(str.match(/[\w\W]+/))
