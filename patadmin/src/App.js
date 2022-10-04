import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import './containers/dash/dash'
import Dash from "./containers/dash/dash";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Route exact path="/"> */}
      <Dash />
      <h1>this is working</h1>
      {/* </Route>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
