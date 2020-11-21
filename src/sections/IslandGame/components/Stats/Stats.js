import React from 'react'
import { 
  Button,
  Card,
  List,
  Progress, 
  Space } from 'antd'
  import { InfoCircleFilled } from '@ant-design/icons'

export default class Stats extends React.Component {
  render() {
    let { OnUpdate, numOfIsland, numOfLand, numOfWater } = this.props;
    let totalNumOfCells = numOfWater + numOfLand;

    return (
      <Card title="Stats">
        <Space>
          <Progress 
            type="circle" 
            status="active" 
            percent={ Math.floor(numOfWater / totalNumOfCells * 100) || 0} 
            width={80}
            strokeColor="#108ee9"
            format={percent => `${percent} %`}>
          </Progress>
          <Progress 
            type="circle" 
            status="active" 
            percent={ Math.ceil(numOfLand / totalNumOfCells * 100) || 0} 
            width={80} 
            strokeColor="#87d068"
            format={percent => `${percent} %`}>
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
        <List>
          <List.Item>
            <InfoCircleFilled style={{color: '#108ee9'}}/>
            Number of water cells: {numOfWater}
          </List.Item>
          <List.Item>
            <InfoCircleFilled style={{color: '#87d068'}}/>
            Number of land cells: {numOfLand}
          </List.Item>
          <List.Item>
            <InfoCircleFilled style={{color: '#8B4513'}}/>
            Total number of Islands: {numOfIsland}
          </List.Item>
          <List.Item>
            <InfoCircleFilled />
            Total number of cells: {totalNumOfCells}
          </List.Item>
        </List>
        <Button type="primary" onClick={OnUpdate}>Count</Button>
      </Card>
    )
  }
}