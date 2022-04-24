import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SecondsProgressIcon = ({
  mode,
  workSeconds,
  restSeconds,
  secondsLeft,
  nRoundsLeft,
}) => {
  const blue = "#f54e4e";
  const green = "#4aec8c";
  const orange = "orange";
  let color = mode === "work" ? blue : green;
  let className = mode === "work" ? 'progressbar' : 'progressbar recovery';


  const totalSeconds = mode === "work" ? workSeconds : restSeconds;
  let percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes_display = Math.floor(secondsLeft / 60);
  let seconds_display = secondsLeft % 60;
  if (seconds_display < 10) seconds_display = "0" + seconds_display;
  let text = minutes_display + ":" + seconds_display;



  if (nRoundsLeft === 0) {
    color = orange;
    text = "done";
  }

  return (
    <CircularProgressbar
      value={percentage}
      text={text}
      className={className}
    />
  );
};

export default SecondsProgressIcon;
