import { render, screen } from '@utils/test';

import Button from './button';

describe('<Button />', () => {
  const spyOnClick = jest.fn();

  test('renders content', () => {
    render(
      <Button onClick={spyOnClick}>
        <div data-testid="child">Click</div>
      </Button>
    );
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toContainElement(screen.getByTestId('child'));
  });
});
