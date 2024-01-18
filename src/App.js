import { useState,useRef } from "react";
import "./App.css";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const timerRef = useRef();

  const startStopHandler = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
    } else {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  const resetHandler = () => {
    clearInterval(timerRef.current);
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div className="App">
      <h1>StopWatch</h1>
      <div className="timeStyle">
      <p>Time:{formatTime()}</p>
      <button onClick={startStopHandler}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={resetHandler}>Reset</button>
      </div>
    </div>
  );
}


export default App;
