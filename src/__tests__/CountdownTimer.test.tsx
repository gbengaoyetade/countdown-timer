import React from 'react';
import { render } from '@testing-library/react';
import CountdownTimer from '../components/CountdownTimer';


describe('CountdownTimer', () => {
  it('should render without crashing', () => {
    const props = {
      time: 30,
      timerSpeed: 1.5,
      timerIsStarted: false,
      toggleTimerStart: jest.fn(),
      setTime: jest.fn()
    }
    const { container } = render(<CountdownTimer {...props} />);

    expect(container).toMatchSnapshot();
  });

});