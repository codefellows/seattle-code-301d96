import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pokemon from './Pokemon';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {data.map(pokemon => <Pokemon name={pokemon.title} imageUrl={pokemon.image_url} />)}
        {/* <Pokemon name="Pikachu" />
        <Pokemon name="Charizard" /> */}
      </header>
    </div>
  );
}

export default App;
