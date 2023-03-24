import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Reactive Shop
        </p>

      </header>
    </div>
  );
}

export default App;
