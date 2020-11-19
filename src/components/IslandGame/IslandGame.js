import React from 'react'
import { Button, Card, InputNumber, Progress, Space } from 'antd'
import Grid from '../Grid/Grid'

function Header() {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Tiny world
          </h1>
          <h2 className="subtitle">
            Built with React and AntDesign
          </h2>
        </div>
      </div>
    </section>
  )
}

function Stats({ numOfIsland, numOfLand, numOfWater}) {
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
      numOfWater: 0,
      numOfLand: 0,
      numOfIsland: 0,
      gridHeight: 10,
      gridWidth: 10,
    }

    this.handleGridChanges = this.handleGridChanges.bind(this);
  }

  handleGridChanges(height, width) {
    this.setState({
      gridHeight: height,
      gridWidth: width
    })
  }

  render() {
    const { gridHeight, gridWidth, numOfIsland, numOfWater, numOfLand } = this.state;

    return (
      <div className="container">
        <Header></Header>
        <div className="columns">
          <div className="column">
            <Grid
              gridHeight={gridHeight}
              gridWidth={gridWidth}>
            </Grid>
          </div>
          <div className="column">
            <Space direction="vertical">
              <Stats
                numOfIsland={numOfIsland}
                numOfLand={numOfLand}
                numOfWater={numOfWater}
                >
              </Stats>
              <Controls
                OnUpdate={(height, width) => this.handleGridChanges(height, width)}
              >
              </Controls>
            </Space>
          </div>
        </div>
      </div>
    )
  }
}