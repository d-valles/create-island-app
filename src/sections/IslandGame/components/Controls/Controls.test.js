import React from 'react';
import { shallow } from 'enzyme'
import Controls from './Controls';

describe('default states', () =>  {
  it('should have height', () => {
    const defaultHeight = 10;
    const wrapper = shallow(<Controls></Controls>);
    expect(wrapper.state().height).toEqual(defaultHeight);
  });

  it('should have width', () => {
    const defaultWidth = 10;
    const wrapper = shallow(<Controls></Controls>);
    expect(wrapper.state().width).toEqual(defaultWidth);
  });
})
