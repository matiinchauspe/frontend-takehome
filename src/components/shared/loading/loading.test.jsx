import { render, screen } from '@utils/test';

import Loading from './loading';

describe('<Loading />', () => {
  test('renders content', () => {
    render(<Loading />);
    const loading = screen.getByTestId('custom-loading');

    expect(loading).toBeInTheDocument();
  });
});
