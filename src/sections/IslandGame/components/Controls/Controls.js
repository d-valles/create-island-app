import React from 'react'
import { 
  Button,
  // Divider,
  Card,
  InputNumber,
  Space } from 'antd'
import PropTypes from 'prop-types'
import { defaultHeight, defaultWidth} from "../../../../lib/constants"

export default class Controls extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      width: this.props.gridWidth,
      height: this.props.gridHeight,
    }

    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleWidthChange = this.handleWidthChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleUpdate() {
    if (this.props.gridHeight !== this.state.height
        || this.props.gridWidth !== this.state.width) {
          this.props.OnUpdate(this.state.height, this.state.width);
    }
  }

  handleClear() {
    this.setState({
      height: defaultHeight,
      width: defaultWidth 
    });
    this.props.OnClear();
  }

  handleWidthChange(newWidth) {
    this.setState({
      width: newWidth
    });
  }

  handleHeightChange(newHeight) {
    this.setState({
      height: newHeight
    });
  }
  
  render() {
    return (
      <Card title="Configure your world">
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
        {
          /*
          TODO
          <Divider></Divider>
          <Button type="primary" onClick={this.handleClear} danger>New map</Button>
          */
        }
      </Card>
    )
  }
}

Controls.propTypes = {
  gridHeight: PropTypes.number.isRequired,
  gridWidth: PropTypes.number.isRequired,
  OnUpdate: PropTypes.func.isRequired,
  OnClear: PropTypes.func.isRequired,
}