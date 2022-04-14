import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ProgressBar from "@ramonak/react-progress-bar";

import "react-circular-progressbar/dist/styles.css";

const SecondsProgressIcon = ({ nSessionsLeft, nSessions }) => {
  const color = "yellow";
  const percentage = (nSessionsLeft / nSessions) * 100;
  const text = nSessionsLeft === 0 ? "0" : nSessionsLeft;

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
