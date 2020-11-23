export function count(grid, maxRow, maxCol) {
  let numOfEmpty = 0, numOfFill = 0;

  // If grid is empty defaults to 0.
  if (!grid || !grid.length || !maxRow || !maxCol) {
    return {
      numOfEmpty,
      numOfFill
    }
  }

  for (let row = 0; row < maxRow; row++) {
    for (let col = 0; col < maxCol; col++) {
      let currentCell = grid[row][col];

      if (currentCell.isEmpty) {
        numOfEmpty++;
      } else {
        numOfFill++;
      }
    }
  }

  return {
    numOfEmpty,
    numOfFill
  }
}

export function countIsland(grid, maxRow, maxCol) {
  // If grid is empty defaults to 0.
  if (!grid || !grid.length || !maxRow || !maxCol) {
    return 0
  }

  let numOfIslands = 0;
  let m = maxRow, n = maxCol;
  const visitedCells = Array.from(grid, () => new Array(n).fill(false));

  let isValidCell = (row, col) => {
    if (row < 0 || col >= m) return false;
    if (row < 0 || col >= n) return false;
    return true;
  }

  let exploreIsland = (row, col) => {
    if (!isValidCell(row, col)) return;
    if (!grid[row] || !grid[row][col]) return;
    if (grid[row][col].isEmpty === true) return;
    if (visitedCells[row][col] === true) return;
    
    visitedCells[row][col] = true;
    exploreIsland(row + 1, col);
    exploreIsland(row, col + 1);
    exploreIsland(row - 1, col);
    exploreIsland(row, col - 1);
  }

  for (let row = 0; row < maxRow; row++) {
    for (let col = 0; col < maxCol; col++) {
      let currentCell = grid[row][col];
      if (visitedCells[row][col] === false && currentCell.isEmpty === false) {
        numOfIslands++
        exploreIsland(row, col)
      }
    }
  }

  return numOfIslands;
}