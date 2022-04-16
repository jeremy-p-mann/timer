import ReactSlider from "react-slider";
import "../css/slider.css";

// TODO: refactor to use styled components
function SecondsSettings({ seconds, setSeconds, mode }) {
  const className = (mode === 'work') ? 'slider' : 'slider green'
  return (
    <div style={{ textAlign: "center" }}>
      <label>{mode}: {seconds / 60} minutes</label>
      <ReactSlider
        className={className}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={seconds /60}
        onChange={
                newValue => setSeconds(newValue * 60)
            }
        min={0}
        max={20}
      />
    </div>
  );
}

export default SecondsSettings;
