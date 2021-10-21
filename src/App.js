import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from './Components/Navbar/NavBar.js';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js'
import React, { useState } from 'react';


function App() {

  const [contador, setContador] = useState(0);

  return (
    <div className="App">
      <header>
        <NavBar contador={contador}/>
      </header>
      <main>
        <ItemListContainer setContador={setContador}/>
      </main>
    </div>
  );
}

export default App;
