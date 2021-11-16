// 国际摩尔斯密码定义一种标准编码方式，将每个字母对应于一个由一系列点和短线组成的字符串， 
// 比如: "a" 对应 ".-", "b" 对应 "-...", "c" 对应 "-.-.", 等等。

// 给定一个单词列表，每个单词可以写成每个字母对应摩尔斯密码的组合。
// 例如，"cab" 可以写成 "-.-.-....-"，(即 "-.-." + "-..." + ".-"字符串的结合) 。我们将这样一个连接过程称作单词翻译。
// 返回我们可以获得所有词不同单词翻译的数量。

// 摩斯密码的数组
var targetArr = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

var wordsArr = 'abcdefghijklmnopqrstuvwxyz';

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    if(!words.length)return 0
    let resArr = [];
    let hash = {};
    for(let item of words){
        let currentStrArr = item.split('');
        let resStr = ''
        for (let word of currentStrArr){
            let currentIndex = wordsArr.indexOf(word);
            // console.log(currentIndex);
            resStr+=targetArr[currentIndex];    
        }
        if (!hash[resStr]){
            hash[resStr] = true;
            resArr.push(resStr);
        }
    }
    return resArr.length
};
var words = ["gin", "zen", "gig", "msg"];
console.log(uniqueMorseRepresentations(words));