import './App.css';
import Pokemon from './Pokemon';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello World!
        </h1>
        <Pokemon name="Pikachu" type="electric" /> {/** new Pokemon(name, type) */}
        <Pokemon name="Charizard" type="fire" />
      </header>
    </div>
  );
}

export default App;
