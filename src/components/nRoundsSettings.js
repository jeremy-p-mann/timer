import ReactSlider from "react-slider";
import "../css/slider.css";

// TODO: refactor to use styled components
function NRoundsSettings({ nRounds, SetNRounds }) {
  const className = "slider yellow";
    const yellow = "yellow"
  return (
    <div style={{ textAlign: "left" }}>
      <label>Number of Rounds: {nRounds} </label>
      <ReactSlider
        className={className}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={nRounds}
        onChange={(newValue) => SetNRounds(newValue)}
        min={1}
        max={20}
      />
    </div>
  );
}

export default NRoundsSettings;
