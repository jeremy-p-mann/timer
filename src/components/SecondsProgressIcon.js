import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PausePlayButton from "./PausePlayButton";

const SecondsProgressIcon = ({
  mode,
  activitySeconds,
  recoverySeconds,
  secondsLeft,
  nRoundsLeft,
  isPaused,
  setIsPaused,
}) => {
  let className = mode === "recovery" ? "progressbar" : "progressbar recovery";

  const totalSeconds = mode === "recovery" ? recoverySeconds : activitySeconds;
  let percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes_display = Math.floor(secondsLeft / 60);
  let seconds_display = secondsLeft % 60;
  if (seconds_display < 10) seconds_display = "0" + seconds_display;
  let text = minutes_display + ":" + seconds_display;

  if (nRoundsLeft === 0) {
    className = "progressbar done";
    text = "done";
  }

    console.log('---------------')
    console.log('percentage', percentage)
    console.log('seconds left', secondsLeft)
    console.log('seconds total', totalSeconds)
    console.log('---------------')
  return (
      <CircularProgressbarWithChildren
        value={percentage}
        text={text}
        className={className}
        counterClockwise={true}
      >
              <p></p> 
              <p></p> 
              <p></p> 
              <p></p> 
              <p></p> 
        <PausePlayButton isPaused={isPaused} setIsPaused={setIsPaused} />
      </CircularProgressbarWithChildren>
  );
};

export default SecondsProgressIcon;
