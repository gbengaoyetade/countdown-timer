import React, { useState } from 'react';
import './App.css';
import CountdownTimer from './components/CountdownTimer';
import TimerSpeed from './components/TimerSpeed';

const App = () => {
  const [ timerIsStarted, setTimerIsStarted ] = useState(false);
  const [ time, setTime ] = useState(0);
  const [ timeCopy, setTimeCopy ] = useState(0);
  const [ timerSpeed, setTimerSpeed ] = useState(1);

  const toggleTimerStart = () => {
    setTimerIsStarted(!timerIsStarted);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const convertedTime = Number(event.target.value);
    setTime(convertedTime);
    setTimeCopy(convertedTime);
  };

  if (time === 0 && timerIsStarted === true) {
    setTimerIsStarted(false);
  }

  return (
    <div className="app">
      <div className="app-wrapper">
        <div className="form-wrapper">
          <form>
            <label>Countdown: </label>
            <input type="number" className="countdown-input" placeholder="(Min)" onChange={handleChange} disabled={timerIsStarted && time !== 0} />
          </form>
          <button className="start-btn" onClick={toggleTimerStart} disabled={timerIsStarted || time === 0}>
            START
          </button>
        </div>
        <p className="message">{time <= timeCopy / 2 && time !== 0 ? 'More than halfway there!' : ''}</p>
        <CountdownTimer time={time} toggleTimerStart={toggleTimerStart} timerIsStarted={timerIsStarted} timerSpeed={timerSpeed} setTime={setTime} />
        <TimerSpeed setTimerSpeed={setTimerSpeed} />
      </div>
    </div>
  );
};

export default App;
