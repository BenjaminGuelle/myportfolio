import React from 'react';
import { Route, Link } from 'react-router-dom';
import './style.scss';

// Import : Vues & Components
import Home from '../../pages/Home';
import Portfolio from '../../pages/Portfolio';
import Nav from '../Nav';
import CustomCursor from '../Cursor';


function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Nav />
      <span className="copyright">V1 / 2021&copy;</span>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/portfolio">
        <Portfolio />
      </Route>
    </div>
  );
}

export default App;
