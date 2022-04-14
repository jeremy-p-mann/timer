import "./css/App.css";
import { useState } from "react";
import PausePlayButton from "./components/PausePlayButton";
import SecondsSettings from "./components/Settings";
import NSessionsSettings from "./components/nSessionsSettings";
import SecondsProgressIcon from "./components/SecondsProgressIcon";
import SessionsProgressIcon from "./components/SessionsProgressIcon";
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
  const [nSessionsLeft, setNSessionsLeft] = useState(defaultNSessions);

  const modeRef = useRef(defaultMode);
  const nSessionsRef = useRef(defaultNSessions);
  const totalSecondsRef = useRef(defaultSecondsLeft);

  const [play] = useSound(boopSfx);
  useEffect(() => {
    if (secondsLeft === 0) {
      if (modeRef.current === "rest") {
        nSessionsRef.current = nSessionsRef.current - 1;
        const nSessionsNew = nSessionsRef.current;
        setNSessionsLeft(nSessionsNew);
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
    return;
  }, [isPaused]);

  useEffect(() => {
    const newSeconds = mode === "work" ? workSeconds : restSeconds;
    setTotalSeconds(newSeconds);
    totalSecondsRef.current = newSeconds;
    setSecondsLeft(newSeconds);
    return;
  }, [mode, workSeconds, restSeconds]);

  return (
    <main>

      <SecondsProgressIcon
        secondsLeft={secondsLeft}
        workSeconds={workSeconds}
        restSeconds={restSeconds}
        mode={mode}
        nSessionsLeft={nSessionsLeft}
      />
      <SessionsProgressIcon
        nSessions={nSessions}
        nSessionsLeft={nSessionsLeft}
      />
      <PausePlayButton isPaused={isPaused} setIsPaused={setIsPaused} />
      <SecondsSettings
        seconds={workSeconds}
        setSeconds={setWorkSeconds}
        mode="work"
      />
      <SecondsSettings
        seconds={restSeconds}
        setSeconds={setRestSeconds}
        mode="rest"
      />
      <SecondsSettings
        seconds={secondsLeft}
        setSeconds={setSecondsLeft}
        mode="left"
      />
      <NSessionsSettings nSessions={nSessions} SetNSessions={setNSessions} />
    </main>
  );
}

export default App;
