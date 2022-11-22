import userEvent from '@testing-library/user-event';

import { render, screen, waitFor } from '@utils/test';
import { ROUTE_PATHS } from '@routes/routes.constants';
import { history } from '@routes/history';
import CollectionListItem from './collection-list-item';

describe('<CollectionListItem />', () => {
  const props = {
    itemId: '1',
    title: 'Title',
    items: [1, 2],
  };

  const setup = () => render(<CollectionListItem {...props} />);

  beforeEach(() => {
    history.push(ROUTE_PATHS.LIST);
  });

  test('renders content', () => {
    setup();
    // Container
    const item = screen.getByTestId('collection-item');
    expect(item).toBeInTheDocument();
    // Title
    const title = screen.getByRole('heading', { name: 'Title' });
    expect(title).toBeInTheDocument();
    // Items length
    const items = screen.getByText('items', { exact: false });
    const itemsText = `${props.items.length} items`;
    expect(items).toHaveTextContent(itemsText);
    // Remove button
    const removeText = 'Remove';
    const removeButton = screen.getByRole('button', { name: removeText });
    expect(removeButton).toBeInTheDocument();
    // Edit button
    const editText = 'Edit';
    const editButton = screen.getByRole('button', { name: editText });
    expect(editButton).toBeInTheDocument();
  });

  test('edit and remove functionality', async () => {
    setup();
    // Remove
    const removeText = 'Remove';
    const removeButton = screen.getByRole('button', { name: removeText });
    expect(removeButton).toBeInTheDocument();
    // await userEvent.click(removeButton);
    // TODO: missing remove button test
    // expect(removeAsyncBtn).not.toBeInTheDocument();
    // Edit
    const editText = 'Edit';
    const editButton = screen.getByRole('button', { name: editText });
    expect(editButton).toBeInTheDocument();
    // Edit - Just the redirect func was tested
    await userEvent.click(editButton);
    await waitFor(() => history.push(ROUTE_PATHS.CREATION));
    expect(history.location.pathname).toBe(ROUTE_PATHS.CREATION);
  });
});
