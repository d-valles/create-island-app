import { render, screen } from '@testing-library/react';
import IslandGame from './IslandGame';

describe('<IslandGame />', () => {
  it('renders grid title', () => {
    render(IslandGame);
  });
})
