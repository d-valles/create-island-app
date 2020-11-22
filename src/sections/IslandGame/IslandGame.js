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

const { Content } = Layout;

export default class IslandGame extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      grid: [],
      numOfWater: 100,
      numOfLand: 0,
      numOfIsland: 0,
      gridHeight: 10,
      gridWidth: 10,
    }

    this.handleGridChanges = this.handleGridChanges.bind(this);
    this.handleStatsChange = this.handleStatsChange.bind(this);
  }

  componentDidMount() {
    this.updateGrid();
  }

  updateGrid() {
    const initialGrid = this.generateGrid();
    this.setState({
      grid: initialGrid
    })
  }

  generateGrid() {
    const { gridHeight, gridWidth } = this.state;
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

  handleGridChanges(height, width) {
    this.setState({
      gridHeight: height,
      gridWidth: width
    })

    this.updateGrid()

    this.handleStatsChange();
  }

  handleStatsChange() {
    const grid = this.state.grid.slice();
    const { numOfEmpty, numOfFill } = count(grid);
    const newNumOfIsland = countIsland(grid)
    this.setState({
      numOfLand: numOfFill,
      numOfWater: numOfEmpty,
      numOfIsland: newNumOfIsland,
    })
   }
  
   handleGridChange(newGrid) {
     this.setState({
       grid: newGrid
     })
   }

  render() {
    const { gridHeight, gridWidth, numOfIsland, numOfWater, numOfLand } = this.state;

    return (
      <React.Fragment>
        <Layout className="layout">
          <Content style={{ padding: ' 50px' }}>
            <Row>
              <Col flex="auto">
                <Space direction="vertical">
                  <Grid
                    onChange={(grid) => this.handleGridChange(grid)}
                    gridHeight={gridHeight}
                    gridWidth={gridWidth}>
                  </Grid>
                </Space>
              </Col>
              <Col flex="auto">
                <Space direction="vertical">
                  <Stats
                    numOfIsland={numOfIsland}
                    numOfLand={numOfLand}
                    numOfWater={numOfWater}
                    OnUpdate={() => this.handleStatsChange()}
                    >
                  </Stats>
                  <Controls
                    OnUpdate={(height, width) => this.handleGridChanges(height, width)}
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