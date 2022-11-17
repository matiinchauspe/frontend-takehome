import { render } from '@utils/test';

import Footer from './footer';

describe('Layout <Footer />', () => {
  const component = render(<Footer />);

  test('render component', () => {
    component.getByText('By Matias Inchauspe - @minchauspe', { exact: false });
  });
});
