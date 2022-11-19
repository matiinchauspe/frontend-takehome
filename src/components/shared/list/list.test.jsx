import { render, screen } from '@utils/test';

import List from './list';

describe('<List />', () => {
  const props = {
    hasData: true,
    noDataMessage: 'Items not found',
    isLoading: false,
    centered: true,
  };

  test('renders content', () => {
    render(
      <List {...props}>
        <div data-testid="child">child</div>
      </List>
    );

    const list = screen.getByTestId('list-container');

    expect(list).toBeInTheDocument();
    expect(list).toContainElement(screen.getByTestId('child'));
  });

  test('checking when it is loading', () => {
    render(
      <List {...{ ...props, isLoading: true }}>
        <div data-testid="child">child</div>
      </List>
    );
    const listLoading = screen.getByTestId('list-loading');

    expect(listLoading).toBeInTheDocument();
  });

  test('checking when it not has data', () => {
    render(
      <List {...{ ...props, isLoading: false, hasData: false }}>
        <div data-testid="child">child</div>
      </List>
    );

    const listNoData = screen.getByTestId('list-no-data');

    expect(listNoData).toBeInTheDocument();
  });

  test('checking when it has data', () => {
    render(
      <List {...{ ...props, isLoading: false, hasData: true }}>
        <div data-testid="child">child</div>
      </List>
    );

    const listData = screen.getByTestId('list-data');

    expect(listData).toBeInTheDocument();
  });
});
