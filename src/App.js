import "./css/App.css";
import { useState } from "react";
import PausePlayButton from "./components/PausePlayButton";
import SecondsSettings from "./components/SecondsSettings";
import NRoundsSettings from "./components/nRoundsSettings";
import SecondsProgressIcon from "./components/SecondsProgressIcon";
import RoundsProgressIcon from "./components/RoundsProgressIcon";
import Reset from "./components/Reset";
import { useEffect, useRef } from "react";
import useSound from "use-sound";
import transitionSound from "./sounds/spaghetti.mp3";

function App() {
  const defaultSeconds = {
    work: 5 * 60,
    recovery: 1 * 60,
  };
  const defaultMode = "work";
  const defaultSecondsLeft = defaultSeconds[defaultMode];
  const defaultIsPaused = true;
  const defaultNRounds = 2;

  const [isPaused, setIsPaused] = useState(defaultIsPaused);
  const [nRounds, setNRounds] = useState(defaultNRounds);
  const [workSeconds, setWorkSeconds] = useState(defaultSeconds.work);
  const [recoverySeconds, setRecoverySeconds] = useState(defaultSeconds.recovery);
  const [mode, setMode] = useState(defaultMode);
  const [secondsLeft, setSecondsLeft] = useState(defaultSecondsLeft);

  const [totalSeconds, setTotalSeconds] = useState(defaultSecondsLeft);
  const [nRoundsLeft, setNRoundsLeft] = useState(defaultNRounds);

  // TODO: remove these
  const modeRef = useRef(defaultMode);
  const totalSecondsRef = useRef(defaultSecondsLeft);

  const [play] = useSound(transitionSound);
  // when there are 0 seconds left:
  // play sound, change mode, decrement sess
  useEffect(() => {
    if (secondsLeft === 0) {
      if (modeRef.current === "recovery") {
        setNRoundsLeft((n) => {
          return n - 1;
        });
      }
      setMode((m) => {
        return m === "work" ? "recovery" : "work";
      });
      modeRef.current = modeRef.current === "work" ? "recovery" : "work";
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
    const newSeconds = mode === "work" ? workSeconds : recoverySeconds;
    setTotalSeconds(newSeconds);
    totalSecondsRef.current = newSeconds;
    setSecondsLeft(newSeconds);
    return;
  }, [mode, workSeconds, recoverySeconds]);
  const reset = () => {
    setMode("work");
    setSecondsLeft(workSeconds);
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
        recoverySeconds={recoverySeconds}
        mode={mode}
        nRoundsLeft={nRoundsLeft}
      />
      <RoundsProgressIcon nRounds={nRounds} nRoundsLeft={nRoundsLeft} />
      <PausePlayButton isPaused={isPaused} setIsPaused={setIsPaused} />
      <Reset
        setMode={setMode}
        setSecondsLeft={setSecondsLeft}
        setNRoundsLeft={setNRoundsLeft}
        workSeconds={workSeconds}
        nRounds={nRounds}
      />
      <SecondsSettings
        seconds={workSeconds}
        setSeconds={setWorkSeconds}
        mode="work"
      />
      <SecondsSettings
        seconds={recoverySeconds}
        setSeconds={setRecoverySeconds}
        mode="recovery"
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
