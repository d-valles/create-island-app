export function count(grid) {
  let numOfEmpty = 0, numOfFill = 0;

  console.log(grid);

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      let currentCell = grid[row][col];

      if (currentCell.isEmpty) {
        numOfEmpty++;
      } else {
        numOfFill++;
      }
    }
  }

  console.log({
    numOfEmpty,
    numOfFill
  })

  return {
    numOfEmpty,
    numOfFill
  }
}

export function countIsland(grid) {

}