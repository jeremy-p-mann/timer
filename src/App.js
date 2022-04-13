import "./css/App.css";
import { useState } from "react";

function App() {
  const defaultSeconds = {
    work: 1,
    rest: 1,
  };
  const defaultMode = "work";
  const defaultSecondsLeft = defaultSeconds[defaultMode];
  const defaultIsPaused = true

  const [seconds, setSeconds] = useState(defaultSeconds);
  const [mode, setMode] = useState(defaultMode);
  const [timeLeft, setTimeLeft] = useState(defaultSecondsLeft);
  const [paused, setIsPaused] = useState(defaultIsPaused);

  return (
    <main>
      <div>work second {seconds.work}</div>
      <div>rest second {seconds.rest}</div>
      <div>time left {timeLeft}</div>
    </main>
  );
}

export default App;
