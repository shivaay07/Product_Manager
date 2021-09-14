import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"
import Details from './components/Details';
import Update from './views/Update';
import PersonList from './components/PersonList';

function App() {
  return (
    
      <BrowserRouter>
        <Switch>
          <div className="App">
            <Route exact path="/people/:id/:edit">
              <Update/>
            </Route>
            <Route exact path="/people/:id">
              <Details />
            </Route>
            <Route exact path="/people">
              <PersonList/>
            </Route>
            <Route exact path ="/">
              <Main/>
            </Route>
          </div>
        </Switch>
      </BrowserRouter>

      
  );
}

export default App;
