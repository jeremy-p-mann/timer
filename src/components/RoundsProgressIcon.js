import ProgressBar from "@ramonak/react-progress-bar";

import "react-circular-progressbar/dist/styles.css";

const RoundsProgressIcon = ({ nRoundsLeft, nRounds }) => {
  const isDone = nRoundsLeft === 0;
  const color = "var(--greyPink)";
  const opaque_color = "var(--greyPinkDark)";

  const percentage = (nRoundsLeft / nRounds) * 100;
  const text = isDone ? "0" : nRoundsLeft.toString();
  const baseBgColor = isDone ? color : opaque_color;

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

export default RoundsProgressIcon;
