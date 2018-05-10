// 您和您的朋友，两个人一起玩 Nim游戏：
// 桌子上有一堆石头，每次你们轮流拿掉 1 到 3 块石头。 
// 拿掉最后一块石头的人就是胜利者。由您来开局。
// 你们两个都是聪明人，相信都有最佳的游戏策略。 
// 请编写一个函数，来判断您是否可以在给定的石头数量的情况下赢得游戏。
// 比方说，如果堆中有4块石头，那么你永远不会赢得比赛：无论你拿走的是 1块，2块 还是 3块 石头，最后一块石头总是会被你的朋友拿走。
// n 代表传入的石头数量
// 而且每次都是本人先拿
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
    if(!n)return
    if(n<4){
        return true
    }
    if(n%4===0){
        return false
    } else{
        return true
    }
};