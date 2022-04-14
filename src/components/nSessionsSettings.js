import ReactSlider from "react-slider";
import "../css/slider.css";

// TODO: refactor to use styled components
function NSessionsSettings({ nSessions, SetNSessions }) {
  const className = "slider";
  return (
    <div style={{ textAlign: "left" }}>
      <label>Number of Sessions: {nSessions} </label>
      <ReactSlider
        className={className}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={nSessions}
        onChange={(newValue) => SetNSessions(newValue)}
        min={1}
        max={20}
      />
    </div>
  );
}

export default NSessionsSettings;
