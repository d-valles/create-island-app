import React from 'react'
import { Button,
  Col,
  Card,
  Divider, 
  Layout, 
  InputNumber,
  Progress, 
  Row,
  Space,
  Typography } from 'antd'
import Grid from '../Grid/Grid'
import { count } from "../../lib/algorithms"

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

function Stats({ OnUpdate, numOfIsland, numOfLand, numOfWater}) {
  return (
    <Card title="Stats">
      <Space>
        <Progress 
          type="circle" 
          status="active" 
          percent={numOfWater} 
          width={80}
          strokeColor="#108ee9"
          format={percent => `${percent} water`}>
        </Progress>
        <Progress 
          type="circle" 
          status="active" 
          percent={numOfLand} 
          width={80} 
          strokeColor="#87d068"
          format={percent => `${percent} land`}>
        </Progress>
        <Progress 
          type="circle" 
          status="active" 
          percent={numOfIsland} 
          width={80} 
          strokeColor="#8B4513"
          format={percent => `${percent} Islands`}>
        </Progress>
      </Space>
      <Divider />
      <Button type="primary" onClick={OnUpdate}>Count</Button>
    </Card>
  )
}

class Controls extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      width: 10,
      height: 10,
    }

    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleWidthChange = this.handleWidthChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate() {
    this.props.OnUpdate(this.state.height, this.state.width)
  }

  handleWidthChange(newWidth) {
    this.setState({
      width: newWidth
    })
  }

  handleHeightChange(newHeight) {
    this.setState({
      height: newHeight
    })
  }
  
  render() {
    return (
      <Card title="Options">
        <Space>
          <InputNumber 
            min={1}
            max={20}
            value={this.state.height}
            defaultValue={this.state.height}
            onChange={this.handleHeightChange}>
          </InputNumber>
          <InputNumber
            min={1}
            max={20}
            defaultValue={this.state.width}
            value={this.state.width}
            onChange={this.handleWidthChange}>
          </InputNumber>
          <Button type="primary" onClick={this.handleUpdate}>Apply</Button>
        </Space>
      </Card>
    )
  }
}

export default class IslandGame extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      grid: [],
      numOfWater: 5,
      numOfLand: 10,
      numOfIsland: 5,
      gridHeight: 10,
      gridWidth: 10,
    }

    this.handleGridChanges = this.handleGridChanges.bind(this);
    this.handleStatsChange = this.handleStatsChange.bind(this);
  }

  componentDidMount() {
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
  }

  handleStatsChange() {
    const { numOfEmpty, numOfFill } = count(this.state.grid.slice());
    this.setState({
      numOfLand: numOfFill,
      numOfWater: numOfEmpty,
      numOfIsland: 0,
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
      <Layout className="layout">
      <Header>
        <div className="logo" />
        <Title level={3}>Tiny World</Title>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Row>
          <Col flex="auto">
            <Grid
              onChange={(grid) => this.handleGridChange(grid)}
              gridHeight={gridHeight}
              gridWidth={gridWidth}>
            </Grid>
          </Col>
          <Col flex="none">
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
      <Footer style={{ textAlign: 'center' }}>Built with React and AntDesign</Footer>
      </Layout>
    )
  }
}