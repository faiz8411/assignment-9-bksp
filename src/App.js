import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import AllEvent from './components/AllEvent/AllEvent';
import AboutUs from './components/AboutUs/AboutUs';
import Coaches from './components/Coaches/Coaches';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/allevents">
            <AllEvent></AllEvent>
          </Route>
          <Route path="/coaches">
            <Coaches></Coaches>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
