import React, { useEffect, useRef } from 'react';

interface CountDownTimerProps {
  time: number;
  timerSpeed: number;
  timerIsStarted: boolean;
  toggleTimerStart: Function;
  setTime: Function;
}

const CountdownTimer = (props: CountDownTimerProps) => {
  const { time, toggleTimerStart, timerSpeed, timerIsStarted, setTime } = props;

  const useInterval = (callback: Function, delay: number) => {
    const savedCallback = useRef<any>(null);

    useEffect(() => {
      savedCallback.current = callback;
    });

    useEffect(
      () => {
        function tick() {
          savedCallback.current();
        }

        let id = setInterval(tick, 1000 / delay);
        return () => clearInterval(id);
      },
      [ delay ]
    );
  };

  useInterval(() => {
    if (time > 0 && timerIsStarted) {
      setTime(time - 1);
    }
  }, timerSpeed);

  return (
    <div className="countdown-timer-wrapper">
      <p className="countdown-timer">{time}</p>
      <button onClick={() => toggleTimerStart()}>=</button>
    </div>
  );
};

export default CountdownTimer;
