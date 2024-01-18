import React from 'react';
import useStopwatch from './useStopwatch';

function App() {
  const { time, startStopwatch, stopStopwatch, resetStopwatch } = useStopwatch();

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <h2>{time}</h2>
      <button onClick={startStopwatch}>Start</button>
      <button onClick={stopStopwatch}>Stop</button>
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
}

export default App;