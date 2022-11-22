import { render, screen, waitFor } from '@utils/test';
import userEvent from '@testing-library/user-event';

import Input from './input';

describe('<Input />', () => {
  const props = {
    label: 'Label name',
    variant: 'outlined',
  };
  const setup = () => {
    render(<Input {...props} />);
  };

  test('should be rendered with the expected functionality', async () => {
    setup();

    const input = screen.getByRole('textbox', { name: props.label });
    // render
    expect(input).toBeInTheDocument();
    // func
    const textToChange = 'text';
    await userEvent.type(input, textToChange);
    await waitFor(() => expect(input).toHaveValue(textToChange));
  });
});
