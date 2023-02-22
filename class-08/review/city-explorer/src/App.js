import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

//const locationKey = process.env.REACT_APP_LOCATION_KEY;

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
