import React from 'react';
import { shallow } from 'enzyme'
import IslandGame from './IslandGame';
import { defaultGrid, defaultHeight, defaultWidth} from '../../lib/constants'

describe('default states', () =>  {
  it('should have a defualt grid', () => {
    const wrapper = shallow(<IslandGame></IslandGame>);
    expect(wrapper.state().grid).toEqual(defaultGrid);
  });

  it('should have width', () => {
    const wrapper = shallow(<IslandGame></IslandGame>);
    expect(wrapper.state().gridWidth).toEqual(defaultWidth);
  });

  it('should have height', () => {
    const wrapper = shallow(<IslandGame></IslandGame>);
    expect(wrapper.state().gridHeight).toEqual(defaultHeight);
  });
})
