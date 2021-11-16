// A 和 B 在一个 3 x 3 的网格上玩井字棋。

// 井字棋游戏的规则如下：

// 玩家轮流将棋子放在空方格 (" ") 上。
// 第一个玩家 A 总是用 "X" 作为棋子，而第二个玩家 B 总是用 "O" 作为棋子。
// "X" 和 "O" 只能放在空方格中，而不能放在已经被占用的方格上。
// 只要有 3 个相同的（非空）棋子排成一条直线（行、列、对角线）时，游戏结束。
// 如果所有方块都放满棋子（不为空），游戏也会结束。
// 游戏结束后，棋子无法再进行任何移动。
// 给你一个数组 moves，其中每个元素是大小为 2 的另一个数组（元素分别对应网格的行和列），它按照 A 和 B 的行动顺序（先 A 后 B）记录了两人各自的棋子位置。

// 如果游戏存在获胜者（A 或 B），就返回该游戏的获胜者；如果游戏以平局结束，则返回 "Draw"；如果仍会有行动（游戏未结束），则返回 "Pending"。

// 你可以假设 moves 都 有效（遵循井字棋规则），网格最初是空的，A 将先行动。


/**
 * @param {number[][]} moves
 * @return {string}
 */


// 判断矩阵
// 井字 游戏只有 3 * 3
var getMatrix = function(matrix) {
  // 判断当前矩阵 谁是获胜方 并且返回数据
  // console.log(matrix)
  // 判断 三个方向的 是否存在获胜方
  const [
    p1,p2,p3,p4,p5,p6,p7,p8,p9
  ] = [matrix[0][0], matrix[0][1], matrix[0][2], matrix[1][0], matrix[1][1], matrix[1][2], matrix[2][0], matrix[2][1], matrix[2][2]];

  // 判断横方向
  if (p1 === p2 && p2 === p3) {
    return p1
  } else if (p4 === p5 && p5 === p6) {
    return p4
  } else if (p7 === p8 && p8 === p9) {
    return p7
  }

  // 2. 判断竖排
  if (p1 === p4 && p4 === p7) {
    return p1;
  } else if (p2 === p5 && p5 === p8) {
    return p2;
  } else if (p3 === p6 && p6 === p9) {
    return p3;
  }

  // 3. 判断斜排
  if (p1 === p5 && p5 === p9) {
    return p1;
  } else if (p3 === p5 && p5 === p7) {
    return p3;
  }
  return 'Draw'; // 无结局
}

var tictactoe = function(moves) {
  if (moves.length < 5) {
    return 'Pending'
  }
  // 新建二维矩阵
  let matrix = Array.from(Array(3), () => Array.from(Array(3), () => NaN))
  // 填充数据
  for (let i = 0; i < moves.length; i++) {
    const X = moves[i][0]
    const Y = moves[i][1]
    if (i % 2 === 0) {
      matrix[X][Y] = 'A'
    } else {
      matrix[X][Y] = 'B'
    }
  }

  const result = getMatrix(matrix);
  console.log(result)
  if (moves.length < 9 && result === 'Draw') {
    return 'Pending';
  } else {
    return result;
  }
};

console.log(tictactoe([[0,2],[2,0],[2,1],[0,1],[1,2]]))