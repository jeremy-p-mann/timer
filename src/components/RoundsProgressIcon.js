import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ProgressBar from "@ramonak/react-progress-bar";

import "react-circular-progressbar/dist/styles.css";

const SecondsProgressIcon = ({ nRoundsLeft, nRounds }) => {
  const color = "yellow";
  const percentage = (nRoundsLeft / nRounds) * 100;
  const text = nRoundsLeft === 0 ? "0" : nRoundsLeft;

  return (
    <div style={{ paddingTop: "2rem" }}>
      <ProgressBar
        bgColor={color}
        baseBgColor="white"
        labelColor="black"
        completed={percentage}
        customLabel={text}
                height="2rem"
      />
    </div>
  );
};

export default SecondsProgressIcon;
