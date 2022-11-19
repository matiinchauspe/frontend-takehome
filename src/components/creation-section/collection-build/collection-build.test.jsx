import { render } from '@utils/test';

import CollectionBuild from './collection-build';

describe('<CollectionBuild />', () => {
  const setup = () => render(<CollectionBuild />);

  test('renders content', () => {
    const { container } = setup();

    const collection = container;
    expect(collection).toBeInTheDocument();
  });
});
