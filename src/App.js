import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from './Components/Navbar/NavBar.js';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js'
import React, { useState } from 'react';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './Components/Cart/Cart.js'


function App() {

  const [contador, setContador] = useState(0);

  return (
    <div className="App">
      <BrowserRouter> 
        <header>
        <NavBar contador={contador}>
        </NavBar>
      </header>
      <main>
        <Switch> 
          <Route exact path='/item/:id'>
            <ItemDetailContainer setContador={setContador} contador={contador}/>
          </Route>
          <Route exact path='/' component={ItemListContainer}/>  
          <Route exact path= '/category/:categoria' component={ItemListContainer}/> 
          <Route exact path= '/Cart' component={Cart}></Route>   
        </Switch>
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App
