import React from 'react';
import Cell from './Cell';
import { render, screen } from '@testing-library/react';

const cellObject = {'isEmpty':true, 'col':2, 'row':5};

describe('props methods', () =>  {
  it('should pass isEmpty', () => {
    expect(Cell({isEmpty: true})).toEqual(cellObject.isEmpty);
  });

  it('should pass row', () => {
    const wrapper = shallow(<Cell isEmpty={true} col={2} row={5}></Cell>);
    expect(wrapper.instance().props.row).toEqual(cellObject.row);
  });

  it('should pass col', () => {
    const wrapper = shallow(<Cell isEmpty={true} col={2} row={5}></Cell>);
    expect(wrapper.instance().props.col).toEqual(cellObject.col);
  });
})
