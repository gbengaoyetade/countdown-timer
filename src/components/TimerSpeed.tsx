import React, { useState } from 'react';

interface TimerSpeedProps {
  setTimerSpeed: Function;
}
const TimerSpeed = (props: TimerSpeedProps) => {
  const { setTimerSpeed } = props;
  const [activeButton, setActiveButton] = useState(1);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.persist();
    const buttonValue = event.currentTarget.getAttribute('value');
    setTimerSpeed(buttonValue);
    setActiveButton(Number(buttonValue));
  };
  const buttonValues = [1, 1.5, 2];

  return (
    <div className="speed-btn-wrapper">
      {buttonValues.map((buttonValue) => (
        <button key={buttonValue} className={activeButton === buttonValue ? 'speed-btn active-btn' : 'speed-btn'} value={buttonValue} onClick={handleClick}>
          {`${buttonValue}x`}
        </button>
      ))}
    </div>
  );
};

export default TimerSpeed;
