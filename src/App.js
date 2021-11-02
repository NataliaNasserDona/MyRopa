import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from './Components/Navbar/NavBar.js';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js'
import React, { useState } from 'react';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {

  const [contador, setContador] = useState(0);

  return (
    <div className="App">
      <BrowserRouter> 
        <header>
        <NavBar contador={contador}/>
      </header>
      <main>
        <Switch> 
          <Route exact path='/item/:id'>
            <ItemDetailContainer setContador={setContador}/>
          </Route>
          <Route exact path='/' component={ItemListContainer}/>        
        </Switch>
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App
