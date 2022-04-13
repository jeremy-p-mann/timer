import "./css/App.css";
import { useState } from "react";
import PausePlayButton from "./components/PausePlayButton";
import Settings from "./components/Settings";
import ProgressIcon from "./components/ProgressIcon";
import { useEffect, useRef } from "react";

function App() {
  const defaultSeconds = {
    work: 2 * 60,
    rest: 1 * 60,
  };
  const defaultMode = "work";
  const defaultSecondsLeft = defaultSeconds[defaultMode];
  const defaultIsPaused = true;
  const defaultNSessions = 2;

  const [isPaused, setIsPaused] = useState(defaultIsPaused);
  const [nSessions, setNSessions] = useState(defaultNSessions);
  const [workSeconds, setWorkSeconds] = useState(defaultSeconds.work);
  const [restSeconds, setRestSeconds] = useState(defaultSeconds.rest);
  const [mode, setMode] = useState(defaultMode);
  const [secondsLeft, setSecondsLeft] = useState(defaultSecondsLeft);
  const [totalSeconds, setTotalSeconds] = useState(defaultSecondsLeft);
  const [sessionsLeft, setsessionsLeft] = useState(defaultNSessions);

  const modeRef = useRef(defaultMode);
  const totalSecondsRef = useRef(defaultSecondsLeft);

  useEffect(() => {
    if (secondsLeft === 0) {
      const new_mode = modeRef.current === "work" ? "rest" : "work";
      setMode(new_mode);
      modeRef.current = new_mode;
    }
    if (!isPaused) {
      setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
    }
  }, [secondsLeft, isPaused]);

  // total seconds hook?
  useEffect(() => {
    if (mode === "work") {
      setTotalSeconds(workSeconds);
      totalSecondsRef.current = workSeconds;
      setSecondsLeft(workSeconds);
      return;
    }
    setTotalSeconds(restSeconds);
    totalSecondsRef.current = restSeconds;
    setSecondsLeft(restSeconds);
    return;
  }, [mode, workSeconds, restSeconds]);

  return (
    <main>
      <div>{isPaused ? "paused" : "playing"}</div>
      <div>{mode}</div>

      <ProgressIcon
        secondsLeft={secondsLeft}
        workSeconds={workSeconds}
        restSeconds={restSeconds}
        mode={mode}
      />
      <PausePlayButton isPaused={isPaused} setIsPaused={setIsPaused} />
      <Settings seconds={workSeconds} setSeconds={setWorkSeconds} mode="work" />
      <Settings seconds={restSeconds} setSeconds={setRestSeconds} mode="rest" />
      <Settings seconds={secondsLeft} setSeconds={setSecondsLeft} mode="left" />
    </main>
  );
}

export default App;
