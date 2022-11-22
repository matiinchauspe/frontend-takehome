// TODO: missing tests - Fetch data and dnd
import { render, screen } from '@utils/test';

import CollectionSelect from './collection-select';

describe('<CollectionSelect />', () => {
  const setup = () => render(<CollectionSelect />);

  test('renders content', () => {
    const { container } = setup();

    expect(container).toBeInTheDocument();
    // select
    const selectButtonName = 'Collections';
    const selectButton = screen.getByRole('button', { name: selectButtonName });
    expect(selectButton).toBeInTheDocument();
    const selectLabelName = 'Select a collection';
    const selectLabel = screen.getByRole('heading', { name: selectLabelName });
    expect(selectLabel).toBeInTheDocument();
    // without data initially
    const noData = screen.getByTestId('list-no-data');
    expect(noData).toBeInTheDocument();
  });
});
