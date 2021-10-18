import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from './Components/Navbar/NavBar.js'; 
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js'
import React, {useState} from 'react';


function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header>
        <NavBar count={count}/>
      </header>
      <main>
      <ItemListContainer count={count} setCount = {setCount}/>
      </main>
    </div>
  );
}

export default App;
