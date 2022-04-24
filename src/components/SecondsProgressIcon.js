import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SecondsProgressIcon = ({
  mode,
  workSeconds,
  restSeconds,
  secondsLeft,
  nRoundsLeft,
}) => {
  let className = mode === "work" ? "progressbar" : "progressbar recovery";

  const totalSeconds = mode === "work" ? workSeconds : restSeconds;
  let percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes_display = Math.floor(secondsLeft / 60);
  let seconds_display = secondsLeft % 60;
  if (seconds_display < 10) seconds_display = "0" + seconds_display;
  let text = minutes_display + ":" + seconds_display;

  if (nRoundsLeft === 0) {
    className = "progressbar done";
    text = "done";
  }

  return (
    <CircularProgressbar
      value={percentage}
      text={text}
      className={className}
      counterClockwise={true}
    />
  );
};

export default SecondsProgressIcon;
