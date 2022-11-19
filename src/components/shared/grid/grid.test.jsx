import { render, screen } from '@utils/test';

import Grid from './grid';

describe('<CollectionBuild />', () => {
  const props = {
    container: true,
    item: false,
    justifyContent: 'space-between',
    columnSpacing: 2,
    alignItems: 'center',
  };

  test('renders content', () => {
    render(
      <Grid {...props}>
        <div data-testid="child">children</div>
      </Grid>
    );

    const grid = screen.getByTestId('grid');
    const children = screen.getByTestId('child');

    expect(grid).toBeInTheDocument();
    expect(children).toBeInTheDocument();
  });
});
