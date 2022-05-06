function Reset({
  setMode,
  setSecondsLeft,
  setNRoundsLeft,
  activitySeconds,
  nRounds,
}) {
  const reset = () => {
    setMode("activity");
    setSecondsLeft(activitySeconds);
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
