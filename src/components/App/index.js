import { Route, Link } from 'react-router-dom';

import './style.scss';

import Home from '../Home';
import Nav from '../Nav';


function App() {
  return (
    <div className="App">
      <Link to="/" className="backhome">benjaminguelle.com</Link>
      <div className="social">
        <Link to="/" className="social-linkedin social-txt">Linkedin</Link>
        <Link to="/" className="social-github social-txt">Github</Link>
        <Link to="/" className="social-twitter social-txt">Twitter</Link>
      </div>
      <div className="copyright">2021 &copy; BG</div>
      <Nav />
      <Route path="/">
        <Home />
      </Route>
    </div>
  );
}

export default App;
