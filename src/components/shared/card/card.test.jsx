import { render, screen } from '@utils/test';

import Card from './card';

// TODO: draggable must be tested

describe('<Card />', () => {
  const props = {
    id: '1',
    title: 'Title',
    media: { type: 'img', src: '' },
    isDraggable: false,
    content: null,
    actions: null,
  };

  test('actions must be shown', () => {
    render(<Card {...{ ...props, actions: <div>actions</div> }} />);

    const card = screen.getByTestId('card');
    const actions = screen.getByTestId('actions');
    // check if card is rendered
    expect(card).toBeInTheDocument();
    // actions
    expect(actions).toBeInTheDocument();
  });

  test('content must be shown', () => {
    render(<Card {...{ ...props, content: <div>content</div> }} />);

    const card = screen.getByTestId('card');
    const mainContent = screen.getByTestId('main-content');
    // check if card is rendered
    expect(card).toBeInTheDocument();
    // content
    expect(mainContent.childNodes[1]).toBeInTheDocument();
  });
});
