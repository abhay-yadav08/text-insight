// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  //it will help to show messages on alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("dark mode has been enabled", "success");
      document.title = 'textutils-darkMode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
      document.title = 'textutils-lightMode';

    }
  }
  return (
    <>
    <Router>
      <Navbar title="Text-Insight" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />

      <div className="container my-3" >
        <Switch>
          <Route exact path="/about">
            <About/>
          </Route>

          <Route exact path="/">
            <TextForm heading="enter the text to analyse" mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
        </div>
        </Router>

      

      {/* <About/> */}
    </>

  );
}

export default App;
