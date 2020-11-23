import React from 'react'
import {
  Col,
  Layout, 
  Row,
  Space } from 'antd'
import Grid from './components/Grid/Grid'
import Stats from './components/Stats/Stats'
import Controls from './components/Controls/Controls'
import './IslandGame.css'
import { count, countIsland } from "../../lib/algorithms"
import { defaultGrid, defaultHeight, defaultWidth} from "../../lib/constants"
import _ from 'lodash';

const { Content } = Layout;

export default class IslandGame extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      grid: defaultGrid,
      numOfWater: 400,
      numOfLand: 0,
      numOfIsland: 0,
      gridHeight: defaultHeight,
      gridWidth: defaultWidth,
    }

    this.handleGridChange = this.handleGridChange.bind(this)
    this.handleDimensionChanges = this.handleDimensionChanges.bind(this);
    this.handleStatsChange = this.handleStatsChange.bind(this);
    this.updateGrid = this.updateGrid.bind(this);
    this.handleGridClear = this.handleGridClear.bind(this);
  }

  componentDidMount() {
    this.updateGrid(defaultGrid)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.gridHeight !== this.state.gridHeight
        || prevState.gridWidth !== this.state.gridWidth) {
          this.handleStatsChange(this.state.grid, this.state.gridHeight, this.state.gridWidth);
    }
  }

  updateGrid(newGrid) {
    const updatedGrid = this.comparesAndUpdatesGrid(newGrid, this.state.gridHeight, this.state.gridWidth);
    this.setState({
      grid: updatedGrid
    })
    this.handleStatsChange(updatedGrid, this.state.gridHeight, this.state.gridWidth);
  }

  // Updates state grid with new grid from child component.
  comparesAndUpdatesGrid(newGrid) {
    let initialGrid = this.state.grid.slice()
    for (let row = 0; row < newGrid.length; row++) {
      for (let col = 0; col < newGrid[0].length; col++) {
        initialGrid[row][col] = newGrid[row][col];
      }
    }
    return initialGrid;
  }

  // Is triggered in controls
  handleDimensionChanges(height, width) {
    this.setState({
      gridHeight: height,
      gridWidth: width
    })
    this.handleStatsChange(this.state.grid, this.state.gridHeight, this.state.gridWidth);
  }

  // Runs algorithms and updates stats
  handleStatsChange(grid, gridHeight, gridWidth) {
    const { numOfEmpty, numOfFill } = count(grid, gridHeight, gridWidth);
    const newNumOfIsland = countIsland(grid, gridHeight, gridWidth);
    this.setState({
      numOfLand: numOfFill,
      numOfWater: numOfEmpty,
      numOfIsland: newNumOfIsland,
    });
  }

   // Is triggered in grid
   handleGridChange(newGrid) {
    this.updateGrid(newGrid);
    this.handleStatsChange(this.state.grid, this.state.gridHeight, this.state.gridWidth);
   }

   //Is triggered in grid
   handleGridClear() {
    this.setState({
      grid: defaultGrid
    });
    this.handleStatsChange(this.state.grid, defaultHeight, defaultWidth);
   }

  render() {
    const { grid, gridHeight, gridWidth, numOfIsland, numOfWater, numOfLand } = this.state;
    return (
      <React.Fragment>
        <Layout className="layout">
          <Content style={{ padding: ' 50px' }}>
            <Row>
              <Col flex="auto">
                <Space direction="vertical">
                  <Grid
                    onChange={_.debounce((grid) => this.handleGridChange(grid), 1000)}
                    gridHeight={gridHeight}
                    gridWidth={gridWidth}
                    grid={grid}>
                  </Grid>
                </Space>
              </Col>
              <Col flex="auto">
                <Space direction="vertical">
                  <Stats
                    numOfIsland={numOfIsland}
                    numOfLand={numOfLand}
                    numOfWater={numOfWater}
                    >
                  </Stats>
                  <Controls
                    gridHeight={gridHeight}
                    gridWidth={gridWidth}
                    OnUpdate={(height, width) => this.handleDimensionChanges(height, width)}
                    OnClear={() => this.handleGridClear()}
                  >
                  </Controls>
                </Space>
              </Col>
            </Row>
          </Content>
        </Layout>
      </React.Fragment>
    )
  }
}