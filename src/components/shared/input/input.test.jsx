import { render, screen } from '@utils/test';
// import userEvent from '@testing-library/user-event';

import Input from './input';

describe('<Input />', () => {
  const spyOnInputChange = jest.fn();

  const props = {
    label: 'Label name',
    variant: 'outlined',
    value: 'asd',
    onChange: spyOnInputChange,
  };

  beforeEach(() => {
    render(<Input {...props} />);
  });

  test('renders content', () => {
    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
  });

  // TODO: review later
  // const input = screen.getByRole('textbox');
  // test('checking if it change', async () => {

  // console.log(prettyDOM(input));
  // await userEvent.type(input, '23');
  // expect(input.value).toBe('23');
  // fireEvent.change(input, { target: { value: 'hello' } });
  // expect(input.value).toBe('hello');
  // });
});
