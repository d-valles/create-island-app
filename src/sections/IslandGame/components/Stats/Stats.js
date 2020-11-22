import React from 'react'
import { 
  Button,
  Card,
  Progress, 
  Space } from 'antd'
import { InfoCircleFilled } from '@ant-design/icons'
import PropTypes from 'prop-types'
import './Stats.css'

function StatsList({text, val, colorOfIcon}) {
  return (
    <div className='stats-list'>
      <div>
        <InfoCircleFilled className='stats-icon ' style={{color: colorOfIcon}}/>
        <span>{text} {val}</span>
      </div>
    </div>
  )
}

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
        </Space>
        <div className="stats-container">
          <StatsList
            text='Number of water cells:'
            val={numOfWater}
            colorOfIcon='#108ee9'
            >
          </StatsList>
          <StatsList
            text='Number of land cells:'
            val={numOfLand}
            colorOfIcon='#87d068'
            >
          </StatsList>
          <StatsList
            text='Number of Islands:'
            val={numOfIsland}
            colorOfIcon='#8B4513'
            >
          </StatsList>
          <StatsList
            text='Total number of cells:'
            val={totalNumOfCells}
            colorOfIcon='black'
            >
          </StatsList>
        </div>
        <Button type="primary" onClick={OnUpdate}>Count</Button>
      </Card>
    )
  }
}

Stats.propTypes = {
  OnUpdate: PropTypes.func.isRequired,
  numOfIsland: PropTypes.number.isRequired,
  numOfLand: PropTypes.number.isRequired,
  numOfWater: PropTypes.number.isRequired,
}