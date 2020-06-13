import React from 'react';

interface TimerSpeedProps {
  setTimerSpeed: Function;
}
const TimerSpeed = (props: TimerSpeedProps) => {
  const { setTimerSpeed } = props;
  return (
    <div className="speed-btn-wrapper">
      <button className="speed-btn" onClick={() => setTimerSpeed(1)}>
        1x
      </button>
      <button className="speed-btn" onClick={() => setTimerSpeed(1.5)}>
        1.5x
      </button>
      <button className="speed-btn" onClick={() => setTimerSpeed(2)}>
        2x
      </button>
    </div>
  );
};

export default TimerSpeed;
