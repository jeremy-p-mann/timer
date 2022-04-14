import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SecondsProgressIcon = ({ nSessionsLeft, nSessions }) => {
  const color = "yellow";
  const percentage = nSessionsLeft / nSessions * 100 ;
  const text = nSessionsLeft === 0 ? "0" : nSessionsLeft;

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

export default SecondsProgressIcon;
