// 初始位置(0, 0) 处有一个机器人。
// 给出它的一系列动作，判断这个机器人的移动路线是否形成一个圆圈，换言之就是判断它是否会移回到原来的位置。
// 移动顺序由一个字符串表示。每一个动作都是由一个字符来表示的。
// 机器人有效的动作有 R（右），L（左），U（上）和 D（下）。输出应为 true 或 false，表示机器人移动路线是否成圈。

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    if(!moves.length)return
    let result = false;
    let originArr = [0,0];
    for (let way of moves){
        switch(way){
            case 'R': originArr[0]++;break;
            case 'L': originArr[0]--;break;
            case 'U': originArr[1]++;break;
            case 'D': originArr[1]--;break;
        }
    }
    if (originArr[0] === 0 && originArr[1]===0){
        result = true;
    }
    return result
};