import ReactSlider from "react-slider";
import "../css/slider.css";

// TODO: refactor to use styled components
function SecondsSettings({ seconds, setSeconds, mode }) {
  const className = mode === "recovery" ? "slider" : "slider recovery";

  const minutes_display = Math.floor(seconds / 60);

  let seconds_display = seconds % 60;
  if (seconds_display < 10) seconds_display = "0" + seconds_display;
  let text = minutes_display + ":" + seconds_display;

  const secondsInAValue = 10;
  const maxMin = 10;
  const convertValueToSec = (value) => {
    return value * secondsInAValue;
  };
  const convertSecToValue = (seconds) => {
    return seconds / secondsInAValue;
  };
  return (
    <div style={{ textAlign: "center" }}>
      <label>
        {mode}: {text}
      </label>
      <ReactSlider
        className={className}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={convertSecToValue(seconds)}
        onChange={(newValue) => setSeconds(convertValueToSec(newValue))}
        min={0}
        max={convertSecToValue(60 * maxMin)}
      />
    </div>
  );
}

export default SecondsSettings;
