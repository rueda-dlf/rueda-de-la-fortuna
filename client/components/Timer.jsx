// state passed from Board via props:
// timeRemaining
// updateTime

import React, { useEffect } from 'react';

function Timer(props) {
  useEffect(() => {
    setInterval(() => {
      props.updateTime(props.timeRemaining - 0.01);
    }, 10);
  }, []);

  return (
    <div id='timer'>
      <p>Time remaining</p>
      <p>{props.timeRemaining}s</p>
    </div>
  );
}

export default Timer;
