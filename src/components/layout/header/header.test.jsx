import { render, screen, fireEvent } from '@utils/test';

import Header from './header';

describe('Layout <Header />', () => {
  const props = {
    title: 'Create custom collection',
    section: 'creation',
  };
  const onSpyClick = jest.fn();

  const setup = () => {
    render(<Header {...props} />);
  };

  test('render content', () => {
    setup();

    screen.getByText(props.title);
  });

  test('clicking the button to change section', () => {
    setup();

    const button = screen.getByText('Go to custom list');
    button.onclick = onSpyClick;
    fireEvent.click(button);

    expect(onSpyClick).toHaveBeenCalledTimes(1);
  });
});
