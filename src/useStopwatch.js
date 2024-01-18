import { useState, useEffect } from 'react';

function useStopwatch() {
  const [time, setTime] = useState('0:00');
  const [isRunning, setIsRunning] = useState(false);
  const resetStopwatch = () => {
    setIsRunning(false);
    setTime('0:00');
  };

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        const [mins, secs] = time.split(':').map(Number);
        setTime(
          (mins + Math.floor((secs + 1) / 60)) % 60 + ':' + ((secs + 1) % 60)
        );
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const startStopwatch = () => setIsRunning(true);
  const stopStopwatch = () => setIsRunning(false);
  

  return { time, startStopwatch, stopStopwatch, resetStopwatch };
}

export default useStopwatch;