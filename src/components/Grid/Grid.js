import React from 'react'
import Cell from '../Cell/Cell.js'
import './Grid.css'

export default class Grid extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      grid: [],
    }

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.updateAndNotify = this.updateAndNotify.bind(this);
  }

  componentDidMount() {
    const initialGrid = this.generateGrid();
    this.setState({
      grid: initialGrid
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.gridHeight !== this.props.gridHeight
        || prevProps.gridWidth !== this.props.gridWidth) {
        this.updateAndNotify();
    }
  }

  updateAndNotify = () => {
    const initialGrid = this.generateGrid();
    this.setState({
      grid: initialGrid
    })
  }

  generateGrid() {
    const { gridHeight, gridWidth } = this.props;
    let initialGrid = [];
    for (let row = 0; row < gridHeight; row++) {
      let initRow = [];
      for (let col = 0; col < gridWidth; col++) {
        initRow.push({
          isEmpty: true,
          col,
          row,
        })
      }

      initialGrid.push(initRow);
    }

    return initialGrid;
  }

  handleMouseDown(row, col) {
    const newGrid = this.generateNewGrid(this.state.grid, row, col);
    this.setState({
      grid: newGrid
    })
  }

  //TODO
  handleMouseUp(row, col) {

  }

  generateNewGrid(grid, row, col) {
    const newGrid = grid.slice();
    const cell = newGrid[row][col];
    newGrid[row][col] = this.toggleCell(cell);
    return newGrid;
  }

  toggleCell(cell) {
    return {
      ...cell,
      isEmpty: !cell.isEmpty
    }
  }

  render() {
    const { grid } = this.state;
    return (
      <div className="grid-container">
        <div className="title">
          My World
        </div>
        <div className="grid"> 
        {
          grid.map((row, rowId) => {
            return (
              <div 
              key={rowId}
              className="grid-row">
                {
                  row.map((cell, cellId) => {
                    const { col, row, isEmpty } = cell
                    return (
                      <Cell
                        key={cellId}
                        col={col}
                        row={row}
                        isEmpty={isEmpty}
                        onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                        onMouseUp={(row, col) => this.handleMouseUp(row, col)}>
                      </Cell>
                    )
                  })
                }
              </div>
            )
          })
        }
        </div>
      </div>
    )
  }
}