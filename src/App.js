import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TeamDetail from './components/TeamDetail/TeamDetail';


function App() {
  return (
    <div className="App" style={{ backgroundColor: 'rgb(14, 10, 42)'}}>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/information/:id">
            <TeamDetail />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
