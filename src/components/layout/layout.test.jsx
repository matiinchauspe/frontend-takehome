import { render, screen } from '@utils/test';

import Layout from './layout';

describe('<Layout />', () => {
  test('renders content', () => {
    render(<Layout />);
    const layout = screen.getByTestId('layout');

    expect(layout).toBeInTheDocument();
  });
});
