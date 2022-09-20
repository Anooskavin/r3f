// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  BasicModel  from './basicModel';
import  RotateModel  from './rotateModel';
import TrainModel from './trainModel';
import ShaderMaterial from './shaderMaterial';
import ShadowMaterial from './shadowMaterial';
function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
          <Route exact path="/">
            <BasicModel />
          </Route>
          <Route  path="/rotate">
            <RotateModel />
          </Route>
          <Route  path="/train">
            <TrainModel />
          </Route>
          <Route  path="/shader">
            <ShaderMaterial />
          </Route>
          <Route  path="/shadow">
            <ShadowMaterial />
          </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
