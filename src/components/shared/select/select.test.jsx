import { render, within, fireEvent, screen } from '@utils/test';

import Select from './select';

describe('<Select />', () => {
  const spyOnSelectChange = jest.fn();

  const props = {
    label: 'Collections',
    items: [
      { id: 'id1', value: 'item 1' },
      { id: 'id2', value: 'item 2' },
      { id: 'id3', value: 'item 3' },
    ],
    selectedValue: 'id1',
    onChange: spyOnSelectChange,
  };

  beforeEach(() => {
    render(<Select {...props} />);
  });

  test('renders content', () => {
    const select = screen.getByRole('button');

    expect(select).toBeInTheDocument();
  });

  test('checking the initial value', () => {
    const selectSelected = screen.getByLabelText(props.label);

    expect(selectSelected.textContent).toBe('item 1');
  });

  test('checking if it change correctly', () => {
    const select = screen.getByRole('button');
    fireEvent.mouseDown(select);

    const listbox = within(screen.getByRole('presentation')).getByRole('listbox');

    const options = within(listbox).getAllByRole('option');
    const optionValues = options.map((li) => li.getAttribute('data-value'));

    expect(optionValues).toEqual(['id1', 'id2', 'id3']);

    fireEvent.click(options[1]);

    expect(spyOnSelectChange).toHaveBeenCalledWith('id2');
  });
});
