import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme'
import Stats from './Stats';

//OnUpdate, numOfIsland, numOfLand, numOfWater 
it('renders count button', () => {
  render(<Stats></Stats>);
});

it('should render numOfIsland', () => {
  const numOfIslandExample = 0;
  const wrapper = shallow(<Stats numOfIsland={numOfIslandExample}></Stats>)
  expect(wrapper.prop('numOfIsland')).toEqual(numOfIslandExample);
});