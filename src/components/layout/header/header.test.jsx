import { render, fireEvent } from '@utils/test';

import Header from './header';

describe('Layout <Header />', () => {
  let component;
  let headerProps;

  beforeEach(() => {
    headerProps = {
      title: 'Create custom collection',
      section: 'creation',
    };

    component = render(<Header title={headerProps.title} section={headerProps.section} />);
  });

  const handleClick = jest.fn();

  test('render content', () => {
    component.getByText(headerProps.title);
  });

  test('clicking the button to change section', () => {
    const button = component.getByText('Go to custom list');
    button.onclick = handleClick;
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
