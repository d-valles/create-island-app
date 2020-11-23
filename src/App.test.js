import { shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('renders app', () => {
    const wrapper = shallow(<App></App>);
    expect(wrapper.find(App)).toHave
  });
})
