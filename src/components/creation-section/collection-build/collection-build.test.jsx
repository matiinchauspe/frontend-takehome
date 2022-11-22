import { render, screen } from '@utils/test';
import { useCustomCollection } from '@hooks';

import { initialStates } from '@components/custom-collection-provider';
import CollectionBuild from './collection-build';

jest.mock('@hooks/useCustomCollection');

describe('<CollectionBuild />', () => {
  // NOTE: In order to respect the adapter `TokensTransform` from `@services`
  const tokens = [
    {
      id: '1',
      name: 'Token 1',
      image: 'imageUrl1',
      lastSale: {
        value: ' -- ',
        date: ' -- ',
        chain: 'ETH',
      },
    },
    {
      id: '2',
      name: 'Token 2',
      image: 'imageUrl2',
      lastSale: {
        value: ' -- ',
        date: ' -- ',
        chain: 'ETH',
      },
    },
    {
      id: '3',
      name: 'Token 3',
      image: 'imageUrl3',
      lastSale: {
        value: ' -- ',
        date: ' -- ',
        chain: 'ETH',
      },
    },
  ];

  afterEach(() => {
    jest.clearAllMocks();
  });

  const setup = () => render(<CollectionBuild />);

  test('renders content', async () => {
    useCustomCollection.mockImplementation(() => ({
      collectionInEdition: initialStates.collectionEditionInitialState,
    }));
    const { container } = setup();

    const component = container;
    expect(component).toBeInTheDocument();
    const saveButtonText = 'Save';
    const saveButton = screen.getByRole('button', { name: saveButtonText });
    expect(saveButton).toBeInTheDocument();
    const inputText = 'Custom collection name';
    const input = screen.getByRole('textbox', { name: inputText });
    expect(input).toBeInTheDocument();
    // without data initially
    const noData = await screen.findByTestId('list-no-data');
    expect(noData).toBeInTheDocument();
  });

  test('if it has data', async () => {
    useCustomCollection.mockImplementation(() => ({
      collectionInEdition: { tokens, name: '' },
    }));
    setup();

    const data = await screen.findByTestId('list-data');
    expect(data).toBeInTheDocument();
    // has 3 items in this case
    const items = screen.getAllByTestId('card');
    expect(items).toHaveLength(3);
  });
});
