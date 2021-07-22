/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  const dfs = (x, y) => {
    if (grid[x][y] === "1") {
      grid[x][y] = "0";
    } else {
      return;
    }
    if (x > 0) dfs(x - 1, y);
    if (y > 0) dfs(x, y - 1);
    if (x < grid.length - 1) dfs(x + 1, y);
    if (y < grid[x].length - 1) dfs(x, y + 1);
  };

  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(i, j);
      }
    }
  }
  return count;
};
