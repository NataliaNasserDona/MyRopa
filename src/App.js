import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from './Components/Navbar/NavBar.js'
function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
    </div>
  );
}

export default App;
