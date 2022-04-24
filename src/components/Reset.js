function Reset({
  setMode,
  setSecondsLeft,
  setNRoundsLeft,
  workSeconds,
  nRounds,
}) {
  const reset = () => {
    setMode("work");
    setSecondsLeft(workSeconds);
    setNRoundsLeft(nRounds);
  };
  return (
    <div>
      <button onClick={reset}>
        <h2> Reset </h2>
      </button>
    </div>
  );
}

export default Reset;
