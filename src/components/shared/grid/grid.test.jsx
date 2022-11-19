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
    const { container } = render(
      <Grid {...props}>
        <div data-testid="child">children</div>
      </Grid>
    );

    const grid = container;
    const children = screen.getByTestId('child');

    expect(grid).toBeInTheDocument();
    expect(children).toBeInTheDocument();
  });
});
