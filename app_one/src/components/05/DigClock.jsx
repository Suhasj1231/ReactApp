import React, { useState, useEffect } from 'react';
import Timer from './Timer';

const DigClock = () => {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000); // Update time every second

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Log a message at the end of every minute
    const intervalId = setInterval(() => {
      console.log('End of minute');
    }, 60000); // 60000 milliseconds = 1 minute

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <div className='w-1/2  bg-yellow-300 mx-auto my-4 p-4 ' >
      <h2>Digital Clock</h2>
      <p>{time}</p>
      <p>stop watch : </p>
      <Timer></Timer>
    </div>
  );
};

export default DigClock;
