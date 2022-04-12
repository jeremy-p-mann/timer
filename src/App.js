import "./css/App.css";
import Timer from "./Timer";
import Settings from "./Settings";
import { useState } from "react";
import SettingsContext from "./SettingsContext";

import useSound from "use-sound";
import boopSfx from "./sounds/invalid_keypress.mp3";

const BoopButton = () => {
  const [play] = useSound(boopSfx);
  return <button onClick={play}>Boop!</button>;
};

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(1);
  const [breakMinutes, setBreakMinutes] = useState(1);

  return (
    <main>
      <SettingsContext.Provider
        value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}
      >
        <Timer />
        <Settings />
      </SettingsContext.Provider>
      <BoopButton />
    </main>
  );
}

export default App;
