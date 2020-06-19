import React from 'react';

interface MessageProps {
  time: number;
  timeCopy: number;
}

const Message = (props: MessageProps) => {
  const { time, timeCopy} = props;

  let message = '\u00a0';
  let blinkClass = '';
  let colorClass = '';

  // set halfway message
  if (time <= timeCopy / 2 && time !== 0) {
    message = 'More than halfway there!';
  }

  // change text color to red at 20 seconds
  if(time <= 20){
    colorClass = 'red-text';
  }

  // make text blink at 10 seconds
  if(time <= 10 && time > 0){
    blinkClass = 'blink'
  }

  // show time is up when time is 0
  if(time === 0 && timeCopy){
    message = 'Time’s up!'
  }
  
  

  return (
    <p className={`message ${blinkClass} ${colorClass}`}>
      {message}
    </p>
  );
};

export default Message;
