import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#003038';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
       {/* <Router> */}
    <Navbar title="Text Ninja" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3 ">
     
    {/* <Routes>
            <Route path="/about" element={<About />}>
            </Route> */}
            {/* <Route path="/" element={ */}
              <TextForm heading="Enter Text Here To Analyze :"  mode={mode} showAlert={showAlert} />
            {/* </Route> */}
          {/* </Routes> */}
    </div>
    {/* </Router> */}
    </> 
  );
}

export default App;