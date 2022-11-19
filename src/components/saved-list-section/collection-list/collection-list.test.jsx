import { render, screen } from '@utils/test';

import CollectionList from './collection-list';

describe('<CollectionList />', () => {
  const setup = () => render(<CollectionList />);

  test('renders content', () => {
    setup();
    const collection = screen.getByTestId('collection-list');

    expect(collection).toBeInTheDocument();
  });
});
