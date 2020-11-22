import React from 'react';
import { shallow } from 'enzyme'
import Stats from './Stats';

describe('props methods', () =>  {
  it('should pass numOfIsland', () => {
    const numOfIslandExample = 0;
    const wrapper = shallow(<Stats numOfIsland={numOfIslandExample}></Stats>);
    expect(wrapper.instance().props.numOfIsland).toEqual(numOfIslandExample);
  });

  it('should pass numOfLand', () => {
    const numOfLandExample = 0;
    const wrapper = shallow(<Stats numOfLand={numOfLandExample}></Stats>);
    expect(wrapper.instance().props.numOfLand).toEqual(numOfLandExample);
  });

  it('should pass numOfWater', () => {
    const numOfWaterExample = 0;
    const wrapper = shallow(<Stats numOfWater={numOfWaterExample}></Stats>);
    expect(wrapper.instance().props.numOfWater).toEqual(numOfWaterExample);
  });
})
