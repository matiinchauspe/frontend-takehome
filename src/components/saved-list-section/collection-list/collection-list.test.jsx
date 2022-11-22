import { render, screen } from '@utils/test';
import { useCustomCollection } from '@hooks';

import { initialStates } from '@components/custom-collection-provider';
import CollectionList from './collection-list';

jest.mock('@hooks/useCustomCollection');

describe('<CollectionList />', () => {
  const collections = [
    {
      id: '1',
      name: 'Collection 1',
      tokens: [],
    },
    {
      id: '2',
      name: 'Collection 2',
      tokens: [],
    },
  ];
  afterEach(() => {
    jest.clearAllMocks();
  });

  const setup = () => render(<CollectionList />);

  test('renders content', () => {
    useCustomCollection.mockImplementation(() => ({
      savedCollections: initialStates.savedCollectionsInitialState,
    }));
    setup();

    const collection = screen.getByTestId('collection-list');
    expect(collection).toBeInTheDocument();
    // without data initially
    const noData = screen.getByTestId('list-no-data');
    expect(noData).toBeInTheDocument();
  });

  test('checking when collection has data', () => {
    useCustomCollection.mockImplementation(() => ({
      savedCollections: { collections, count: collections.length },
    }));
    setup();

    const listData = screen.getByTestId('list-data');
    expect(listData).toBeInTheDocument();
    // has 2 items
    const items = screen.getAllByTestId('collection-item');
    const itemsLength = items.length;
    expect(items).toHaveLength(itemsLength);
  });
});
