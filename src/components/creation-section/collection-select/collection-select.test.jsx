import { rest } from 'msw';
import { setupServer } from 'msw/node';

// import { tokensUrl } from '@api';
import { render, screen, fireEvent, waitFor, act } from '@utils/test';
import CollectionSelect from './collection-select';

// TODO: review this later

describe('<CollectionSelect />', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            id: '1',
            name: 'Unknown',
            image: 'urlImage',
            lastSale: {
              value: ' -- ',
              date: ' -- ',
              chain: 'ETH',
            },
          },
          {
            id: '2',
            name: 'Unknown 2',
            image: 'urlImage',
            lastSale: {
              value: ' -- ',
              date: ' -- ',
              chain: 'ETH',
            },
          },
        ]),
    })
  );

  const setup = () => {
    render(<CollectionSelect />);
  };

  test('renders content', async () => {
    setup();

    const container = screen;
    expect(container).toBeTruthy();
    // select
    const selectButtonName = 'Collections';
    const selectButton = await screen.findByRole('button', { name: selectButtonName });
    expect(selectButton).toBeInTheDocument();
    const selectLabelName = 'Select a collection';
    const selectLabel = screen.getByRole('heading', { name: selectLabelName });
    expect(selectLabel).toBeInTheDocument();
  });

  // test('<Card /> - button action', () => {
  //   setup();

  //   const card = screen.getByTestId('card-item');
  //   screen.debug(card);
  //   // Assuming the card is not added
  //   const buttonName = 'Add';
  //   const button = screen.getByRole('button', { name: buttonName });
  //   // render
  //   expect(button).toBeInDocument();
  // });
});
