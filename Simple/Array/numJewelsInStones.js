// 给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 
// S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。
// J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    if(!J.length)return
    if(!S.length)return
    let result = 0;
    for(let stone of S){
        for (let gem of J){
            if (stone === gem){
                result++;
            }
        }
    }
    return result
};
var J = "aA", S = "aAAbbbb";
console.log(numJewelsInStones(J,S));