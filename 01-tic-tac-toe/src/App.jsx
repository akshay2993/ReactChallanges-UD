import GameBoard from "./components/GameBoard";
import Player from "./components/PLayer";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name='Player 1' symbol='X' />
          <Player name='Player 2' symbol='O'/>
        </ol>
        <div id="game-board">
        <GameBoard />
        </div>
      </div>
    </main>
  );
}

export default App;
