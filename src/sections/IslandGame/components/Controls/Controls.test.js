import React from 'react';
import { shallow } from 'enzyme'
import Controls from './Controls';
import { defaultHeight, defaultWidth } from '../../../../lib/constants'

describe('default states', () =>  {
  it('should have height', () => {
    const wrapper = shallow(
      <Controls 
        gridHeight={defaultHeight}
        gridWidth={defaultWidth}
        OnUpdate={() => {}}
        OnClear={() => {}}></Controls>);
    expect(wrapper.state().height).toEqual(defaultHeight);
  });

  it('should have width', () => {
    const wrapper = shallow(
      <Controls 
        gridHeight={defaultHeight}
        gridWidth={defaultWidth}
        OnUpdate={() => {}}
        OnClear={() => {}}></Controls>);
    expect(wrapper.state().width).toEqual(defaultWidth);
  });
})
