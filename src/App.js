import "./css/App.css";
import { useState } from "react";
import PausePlayButton from "./components/PausePlayButton";
import SecondsSettings from "./components/SecondsSettings";
import NRoundsSettings from "./components/nRoundsSettings";
import SecondsProgressIcon from "./components/SecondsProgressIcon";
import RoundsProgressIcon from "./components/RoundsProgressIcon";
import { useEffect, useRef } from "react";
import useSound from "use-sound";
import boopSfx from "./sounds/invalid_keypress.mp3";

function App() {
  const defaultSeconds = {
    work: 5 * 60,
    rest: 1 * 60,
  };
  const defaultMode = "work";
  const defaultSecondsLeft = defaultSeconds[defaultMode];
  const defaultIsPaused = true;
  const defaultNRounds = 2;

  const [isPaused, setIsPaused] = useState(defaultIsPaused);
  const [nRounds, setNRounds] = useState(defaultNRounds);
  const [workSeconds, setWorkSeconds] = useState(defaultSeconds.work);
  const [restSeconds, setRestSeconds] = useState(defaultSeconds.rest);
  const [mode, setMode] = useState(defaultMode);
  const [secondsLeft, setSecondsLeft] = useState(defaultSecondsLeft);

  const [totalSeconds, setTotalSeconds] = useState(defaultSecondsLeft);
  const [nRoundsLeft, setNRoundsLeft] = useState(defaultNRounds);

  // TODO: remove these
  const modeRef = useRef(defaultMode);
  const totalSecondsRef = useRef(defaultSecondsLeft);

  const [play] = useSound(boopSfx);
  // when there are 0 seconds left:
  // play sound, change mode, decrement sess
  useEffect(() => {
    if (secondsLeft === 0) {
      if (modeRef.current === "rest") {
        setNRoundsLeft((n) => {
          return n - 1;
        });
      }
      setMode((m) => {
        return m === "work" ? "rest" : "work";
      });
      modeRef.current = modeRef.current === "work" ? "rest" : "work";
      play();
    }
  }, [secondsLeft, play]);

  // increment the timer where there are 0 rounds left or not paused
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && nRoundsLeft > 0) {
        setSecondsLeft((s) => {
          return s - 1;
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isPaused, nRoundsLeft]);

  // reset the number of rounds left when the user changes the
  // number of rounds
  useEffect(() => {
    setNRoundsLeft(nRounds);
    return;
  }, [nRounds]);

  // When the mode changes, change the total seconds to
  // the total and current seconds to whaever the mode is
  useEffect(() => {
    const newSeconds = mode === "work" ? workSeconds : restSeconds;
    setTotalSeconds(newSeconds);
    totalSecondsRef.current = newSeconds;
    setSecondsLeft(newSeconds);
    return;
  }, [mode, workSeconds, restSeconds]);
  const reset = () => {
    setMode("work");
    setNRoundsLeft(nRounds);
  };

  // the reset button should:
  // change the number of rounds left to nRounds
  // change the mode to work (which will change the seconds left via cascade)
  return (
    <main>
      <SecondsProgressIcon
        secondsLeft={secondsLeft}
        workSeconds={workSeconds}
        restSeconds={restSeconds}
        mode={mode}
        nRoundsLeft={nRoundsLeft}
      />
      <RoundsProgressIcon nRounds={nRounds} nRoundsLeft={nRoundsLeft} />
      <PausePlayButton isPaused={isPaused} setIsPaused={setIsPaused} />
      <button onClick={reset}>
        <h2> Reset </h2>
      </button>
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
      <NRoundsSettings nRounds={nRounds} SetNRounds={setNRounds} />
      <SecondsSettings
        seconds={secondsLeft}
        setSeconds={setSecondsLeft}
        mode="left"
      />
    </main>
  );
}

export default App;
