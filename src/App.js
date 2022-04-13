import "./css/App.css";
import { useState } from "react";
import PausePlayButton from "./components/PausePlayButton";
import Settings from "./components/Settings";
import ProgressIcon from "./components/ProgressIcon";
import { useEffect, useRef } from "react";
import useSound from "use-sound";
import boopSfx from "./sounds/invalid_keypress.mp3";

function App() {
  const defaultSeconds = {
    work: 20 * 60,
    rest: 10 * 60,
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
  const nSessionsRef = useRef(defaultNSessions);
  const totalSecondsRef = useRef(defaultSecondsLeft);

  const [play] = useSound(boopSfx);
  useEffect(() => {
    if (secondsLeft === 0) {
      if (modeRef.current === "rest") {
        nSessionsRef.current = nSessionsRef.current - 1;
        const nSessionsNew = nSessionsRef.current;
        setNSessions(nSessionsNew);
      }
      const new_mode = modeRef.current === "work" ? "rest" : "work";
      setMode(new_mode);
      modeRef.current = new_mode;
      play();
    }
    if (!isPaused) {
      setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
    }
  }, [secondsLeft, isPaused, play]);

  useEffect(() => {
    const newSeconds = mode === "work" ? workSeconds : restSeconds;
    setTotalSeconds(newSeconds);
    totalSecondsRef.current = newSeconds;
    setSecondsLeft(newSeconds);
    return;
  }, [mode, workSeconds, restSeconds]);

  return (
    <main>
      <div>{isPaused ? "paused" : "playing"}</div>
      <div>{mode}</div>
      <div>sessions{nSessions}</div>

      <ProgressIcon
        secondsLeft={secondsLeft}
        workSeconds={workSeconds}
        restSeconds={restSeconds}
        mode={mode}
        nSessions={nSessions}
      />
      <PausePlayButton isPaused={isPaused} setIsPaused={setIsPaused} />
      <Settings seconds={workSeconds} setSeconds={setWorkSeconds} mode="work" />
      <Settings seconds={restSeconds} setSeconds={setRestSeconds} mode="rest" />
      <Settings seconds={secondsLeft} setSeconds={setSecondsLeft} mode="left" />
    </main>
  );
}

export default App;
