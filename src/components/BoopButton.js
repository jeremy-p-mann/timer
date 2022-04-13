import useSound from "use-sound";
import boopSfx from "./sounds/invalid_keypress.mp3";

const BoopButton = () => {
  const [play] = useSound(boopSfx);
  return <button onClick={play}>Boop!</button>;
};
