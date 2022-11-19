import { render, screen } from '@utils/test';

import Text from './text';

describe('<Text />', () => {
  test('renders content', () => {
    render(<Text variant="body2" />);

    const text = screen.getByTestId('text');

    expect(text).toBeInTheDocument();
  });
});
