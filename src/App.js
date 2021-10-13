import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from './Components/Navbar/NavBar.js'; 
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <ItemListContainer />
    </div>
  );
}

export default App;
