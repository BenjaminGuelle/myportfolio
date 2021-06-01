import { Route } from 'react-router-dom';

import './style.scss';

import Home from '../Home';
import Nav from '../Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <Route path="/">
      </Route>
    </div>
  );
}

export default App;
