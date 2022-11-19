import { render } from '@utils/test';

import Text from './text';

describe('<Text />', () => {
  test('renders content', () => {
    const { container } = render(<Text variant="body2" />);

    const text = container;

    expect(text).toBeInTheDocument();
  });
});
