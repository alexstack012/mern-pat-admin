import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from "./components/navBar/navBar";
import './containers/dash/dash'
import Dash from "./containers/dash/dash";

function App() {
  console.log('hello')
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Dash />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;