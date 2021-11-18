var a = [8,8,7,7,7];

/**
 * @param {number[]} nums
 * @return {number}
 */
let majorityElement = function(nums) {
    if (!nums.length) return undefined
    let hash = new Map(); // 定义hash Map
    let maxKey = undefined;
    let maxNum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!hash.has(nums[i])) {
            hash.set(nums[i], 1)
        } else {
            hash.set(nums[i], hash.get(nums[i])+1)
        }
        if (hash.get(nums[i]) > maxNum) {
            maxNum = hash.get(nums[i]);
            maxKey = nums[i]
        }
    }
    return maxKey;
};

// majorityElement(a)


var firstUniqChar = function(s) {
    if (!s.length) return " "; // 返回空的字符串
    let result = ' ';
    let hash = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!hash.has(s[i])) {
            hash.set(s[i], 1)
        } else {
            // 已经存在的话，马上提示
            hash.set(s[i], hash.get(s[i]) + 1)
        }
    }
    for (let item of hash) {
        if (item[1] === 1) {
            result = item[0]
            return result;
        }
    }
    return result;
};

firstUniqChar('leetCode');