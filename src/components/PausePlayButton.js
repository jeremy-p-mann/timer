import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";

const PausePlayButton = ({isPaused, setIsPaused}) => {
  return (
    <div style={{ marginTop: "20px" }}>
      {isPaused ? (
        <PlayButton
          onClick={() => {
            setIsPaused(false);
          }}
        />
      ) : (
        <PauseButton
          onClick={() => {
            setIsPaused(true);
          }}
        />
      )}
    </div>
  );
};


export default PausePlayButton 
