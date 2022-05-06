import ReactSlider from "react-slider";
import "../css/slider.css";

// TODO: refactor to use styled components
function SecondsSettings({ seconds, setSeconds, mode }) {
  const className = mode === "work" ? "slider" : "slider recovery";

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
        {mode}: {seconds / 60} minutes
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
