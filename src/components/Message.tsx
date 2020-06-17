import React from 'react';

interface MessageProps {
  time: number;
  timeCopy: number;
}

const Message = (props: MessageProps) => {
  const { time, timeCopy} = props;
  // const [message, setMessage]  = useState('\u00a0');
  let message = '\u00a0';
  let blinkClass = '';
  let colorClass = '';

  if (time <= timeCopy / 2 && time !== 0) {
    message = 'More than halfway there!';
    // setMessage('More than halfway there!');
  }

  if(time <= 20){
    colorClass = 'red-text';
  }

  if(time === 0 && timeCopy){
    message = 'Time’s up!'
  }
  
  if(time <= 10 && time > 0){
    blinkClass = 'blink'
  }

  return (
    <p className={`${blinkClass} ${colorClass}`}>
      {message}
    </p>
  );
};

export default Message;
