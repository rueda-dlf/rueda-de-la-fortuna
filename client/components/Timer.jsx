// state passed from Board via props:
// timeRemaining
// updateTime

import React, { useEffect } from 'react';

function Timer(props) {
  return (
    <div id='timer'>
      <p>Time remaining</p>
      <p>{Math.round(props.timeRemaining)}s</p>
    </div>
  );
}

export default Timer;
