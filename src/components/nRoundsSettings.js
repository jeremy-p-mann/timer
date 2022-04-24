import "../css/slider.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// TODO: refactor to use styled components
function NRoundsSettings({ nRounds, SetNRounds }) {
  const handleRounds = (event, newRounds) => {
    SetNRounds(newRounds);
  };

  return (
    <div style={{ align: "center" }}>
      <label>Rounds</label>
      <ToggleButtonGroup
        value={nRounds.toString()}
        exclusive
        onChange={handleRounds}
      >
        <ToggleButton value="1">1</ToggleButton>
        <ToggleButton value="2">2</ToggleButton>
        <ToggleButton value="3">3</ToggleButton>
        <ToggleButton value="4">4</ToggleButton>
        <ToggleButton value="5">5</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default NRoundsSettings;
