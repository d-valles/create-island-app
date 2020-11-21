import React from 'react'
import { 
  Button,
  Divider,
  Card,
  InputNumber,
  Space } from 'antd'

export default class Controls extends React.Component {
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
          # Rows
          <InputNumber 
            min={1}
            max={20}
            value={this.state.height}
            defaultValue={this.state.height}
            onChange={this.handleHeightChange}>
          </InputNumber>
          # Columns
          <InputNumber
            min={1}
            max={20}
            defaultValue={this.state.width}
            value={this.state.width}
            onChange={this.handleWidthChange}>
          </InputNumber>
          <Button type="primary" onClick={this.handleUpdate}>Apply</Button>
        </Space>
        <Divider></Divider>
        <Button type="primary" danger>Delete land cells</Button>
      </Card>
    )
  }
}