import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useEffect } from "react/cjs/react.production.min";

const ProgressIcon = ({
  mode,
  workSeconds,
  restSeconds,
  secondsLeft,
  nSessions,
}) => {
  const red = "#f54e4e";
  const green = "#4aec8c";

  const totalSeconds = mode === "work" ? workSeconds : restSeconds;
  let percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes_display = Math.floor(secondsLeft / 60);
  let seconds_display = secondsLeft % 60;
  if (seconds_display < 10) seconds_display = "0" + seconds_display;
  let color = mode === "work" ? red : green;
    let text = minutes_display + ":" + seconds_display

  if (nSessions === 0) {
    color = "orange";
    text = "done"
  }

  return (
    <CircularProgressbar
      value={percentage}
      text={text}
      styles={buildStyles({
        textColor: "#fff",
        pathColor: color,
        tailColor: "rgba(255,255,255,.2)",
      })}
    />
  );
};

export default ProgressIcon;
