import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges"></div>
      <TimerChallenge title = "Easy" timeDuration = {1} />
      <TimerChallenge title = "Medium" timeDuration = {5} />
      <TimerChallenge title = "Hard" timeDuration = {10} />
      <TimerChallenge title = "Only Pros" timeDuration = {20} />
      <TimerChallenge title = "Experts" timeDuration = {30} />
    </>
  );
}

export default App;
