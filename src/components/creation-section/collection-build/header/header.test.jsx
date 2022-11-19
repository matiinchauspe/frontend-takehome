import userEvent from '@testing-library/user-event';

import { render, screen, waitFor, fireEvent } from '@utils/test';
import Header from './header';

describe('Collection Build <Header />', () => {
  const onSpyClick = jest.fn();
  const setup = () => render(<Header />);

  test('renders content', () => {
    const { container } = setup();

    const header = container;
    expect(header).toBeTruthy();
  });

  test('should has an input with the expected functionality', async () => {
    setup();

    const inputName = 'Custom collection name';
    const input = screen.getByRole('textbox', { name: inputName });
    // render correctly
    expect(input).toBeInTheDocument();
    // func
    const textToChange = 'text';
    await userEvent.type(input, textToChange);
    await waitFor(() => expect(input).toHaveValue(textToChange));
  });

  test('should has a button with the expected functionality', () => {
    setup();

    const buttonSaveName = 'Save';
    const buttonSave = screen.getByRole('button', { name: buttonSaveName });
    // render correctly
    expect(buttonSave).toBeInTheDocument();
    // func
    buttonSave.onclick = onSpyClick;
    fireEvent.click(buttonSave);
    expect(onSpyClick).toHaveBeenCalledTimes(1);
  });
});
