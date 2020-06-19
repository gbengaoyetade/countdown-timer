import React, { useState } from 'react';
import './App.css';
import CountdownTimer from './components/CountdownTimer';
import TimerSpeed from './components/TimerSpeed';
import Message from './components/Message';

const App = () => {
  const [ timerIsStarted, setTimerIsStarted ] = useState(false);
  const [ time, setTime ] = useState(0);
  const [ timeCopy, setTimeCopy ] = useState(0);
  const [ timerSpeed, setTimerSpeed ] = useState(1);

  const toggleTimerStart = () => {
    setTimerIsStarted(!timerIsStarted);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = event.target.value;
    if (userInput.match(/^\d+$/)) {
      const convertedTime = Number(userInput);
      setTime(convertedTime * 60);
      setTimeCopy(convertedTime * 60);
    }
  };

  if (time === 0 && timerIsStarted === true) {
    setTimerIsStarted(false);
  }

  const inputDisabled = timerIsStarted && time !== 0;

  const resetCountdown = () => {
    setTimerIsStarted(false)
    setTime(0)
    setTimeCopy(0)
  }

  return (
    <div className="app">
      <div className="app-wrapper">
        <div className="form-wrapper">
          <form>
            <label>Countdown: </label>
            <input
              type="number"
              className="countdown-input"
              placeholder="(Min)"
              min="0"
              pattern="\d*"
              onChange={handleChange}
              disabled={inputDisabled}
            />
          </form>
          <button
            className="start-btn"
            onClick={timerIsStarted ? resetCountdown : toggleTimerStart}
          >
            { timerIsStarted ? 'RESET' : 'START' }
          </button>
        </div>
        <Message time={time} timeCopy={timeCopy} />
        <CountdownTimer
          time={time}
          toggleTimerStart={toggleTimerStart}
          timerIsStarted={timerIsStarted}
          timerSpeed={timerSpeed}
          setTime={setTime}
        />
        <TimerSpeed setTimerSpeed={setTimerSpeed} />
      </div>
    </div>
  );
};

export default App;
