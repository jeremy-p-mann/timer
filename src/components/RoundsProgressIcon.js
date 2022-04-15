import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ProgressBar from "@ramonak/react-progress-bar";

import "react-circular-progressbar/dist/styles.css";

const SecondsProgressIcon = ({ nRoundsLeft, nRounds }) => {
  const isDone = nRoundsLeft === 0;
  const color = "yellow";
  const percentage = (nRoundsLeft / nRounds) * 100;
  const text = isDone ? "0" : nRoundsLeft;
  const baseBgColor = isDone ? "orange" : "white";

  return (
    <div style={{ paddingTop: "2rem" }}>
      <ProgressBar
        bgColor={color}
        baseBgColor={baseBgColor}
        labelColor="black"
        completed={percentage}
        customLabel={text}
        height="2rem"
      />
    </div>
  );
};

export default SecondsProgressIcon;
