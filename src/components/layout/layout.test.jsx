import { render } from '@utils/test';

import Layout from './layout';

describe('<Layout />', () => {
  let component;

  beforeEach(() => {
    component = render(<Layout />);
  });

  // TODO: modify this later
  test('should has a footer', () => {
    component.getByText('By Matias Inchauspe - @minchauspe', { exact: false });
  });
});
