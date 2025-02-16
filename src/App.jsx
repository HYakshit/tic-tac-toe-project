import Player from './components/Player.jsx';

function App() {
  // const [editClicked,setEditClicked]=useState(false);
  // function changeName(){
  //   setEditClicked(true);
  // }
  return (
    <main>
      <div id="game-container">
        <ol id="players">
        <Player name="1" symbol="O" ></Player>
        <Player name="2" symbol="X" ></Player>
        </ol>
        game
      </div>
    </main>
  );
}

export default App;
