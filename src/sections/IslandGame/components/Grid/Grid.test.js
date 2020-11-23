import React from 'react';
import { shallow } from 'enzyme'
import Grid from './Grid';
import { defaultGrid, defaultHeight, defaultWidth } from '../../../../lib/constants'

describe('default states', () =>  {
  it('should have a defualt grid', () => {
    const wrapper = shallow(
      <Grid 
        grid={defaultGrid}
        gridHeight={defaultHeight}
        gridWidth={defaultWidth}
        onChange={() => {}}
        >
      </Grid>);
    expect(wrapper.state().grid).toEqual(defaultGrid);
  });
})
