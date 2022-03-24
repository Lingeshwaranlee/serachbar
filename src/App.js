
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Addrecipe } from './Addrecipe';
import './App.css';
import { Food } from './Food';
import { Home } from './Home';
import { Navbar } from './Navbar';

export default function App() {

  
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/recipe"> <Food/></Route>
          <Route path="/addrecipe"><Addrecipe/></Route>
        </Switch>
      </Router>
     
    </div>
  );
}


