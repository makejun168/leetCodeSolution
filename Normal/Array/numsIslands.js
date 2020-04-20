/**
 * @param {character[][]} grid
 * @return {number}
 */
// var numIslands = function(grid) {
//   let num = 0;
//   if(grid && grid.length) {
//     const maxI = grid.length - 1, maxJ = grid[0].length - 1
//     function overturn(i, j) { // 符合条件的翻转为'0'
//         if(i < 0 || j < 0 || i > maxI || j > maxJ) return;
//         if(grid[i][j] === 1) {
//             grid[i][j] = 0
//             overturn(i, j-1)
//             overturn(i-1, j)
//             overturn(i+1, j)
//             overturn(i, j+1)
//         }
//     }
//     for(let i = 0; i < grid.length; i++) {
//         for(let j = 0; j < grid[i].length; j++) {
//             if(grid[i][j] === 1) {
//                 num++;
//                 overturn(i, j)
//             }
//         }
//     }
//   }
//   return num;
// };


function dfs(grid, r, c) {
  for(x, y in [(r - 1, c), (r + 1, c), (r, c - 1), (r, c + 1)]) {
    if (0 <= x < nr && 0 <= y < nc && grid[x][y] == "1") {
      dfs(grid, x, y);
    }
  }
}

function numIslands(grid) {
  // let maxI = grid.length;
  // let maxJ = grid[0].length;
  let num_islands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == "1") {
        num_islands += 1
        dfs(grid, i, j)
      }
    }
  }

  return num_islands
}


var data = [
  [1,1,1,1,0],
  [1,1,0,1,0],
  [1,1,0,0,0],
  [0,0,0,0,0]
]

numIslands(data);
