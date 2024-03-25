import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const startTimeRef = useRef(0); // Ref to store start time

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 10); // Update time every 10ms
      }, 10);
    }

    return () => clearInterval(intervalId); // Cleanup on unmount/stop
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now(); // Store start time
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
    startTimeRef.current = 0; // Reset start time
  };

  const formattedTime = new Date(elapsedTime).toISOString().slice(-11, -5); // Format HH:MM:SS.ms

  return (
    <div>
      <div>{formattedTime}</div>
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handleStop} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;


// import React, { useState, useRef } from 'react';

// const Timer = () => {
//   const [isRunning, setIsRunning] = useState(false);
//   const [elapsedTime, setElapsedTime] = useState(0);
//   const intervalRef = useRef(null);

//   const startTimer = () => {
//     if (!isRunning) {
//       const startTime = Date.now() - elapsedTime;
//       intervalRef.current = setInterval(() => {
//         setElapsedTime(Date.now() - startTime);
//       }, 10);
//       setIsRunning(true);
//     }
//   };

//   const stopTimer = () => {
//     if (isRunning) {
//       clearInterval(intervalRef.current);
//       setIsRunning(false);
//     }
//   };

//   const resetTimer = () => {
//     clearInterval(intervalRef.current);
//     setIsRunning(false);
//     setElapsedTime(0);
//   };

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / (1000 * 60));
//     const seconds = Math.floor((time % (1000 * 60)) / 1000);
//     const milliseconds = Math.floor((time % 1000) / 10);
//     return (
//       `${minutes.toString().padStart(2, '0')}:` +
//       `${seconds.toString().padStart(2, '0')}:` +
//       `${milliseconds.toString().padStart(2, '0')}`
//     );
//   };

//   return (
//     <div>
//       <h2>Stopwatch</h2>
//       <div>{formatTime(elapsedTime)}</div>
//       <button onClick={startTimer}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//       <button onClick={resetTimer}>Reset</button>
//     </div>
//   );
// };

// export default Timer;
