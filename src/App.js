import CountdownTimer from "./Components/CountdownTimer/CountdownTimer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <CountdownTimer countdownTimestampMs={16436736000000} />
    </div>
  );
}

export default App;
