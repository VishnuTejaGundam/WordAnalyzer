
import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
//import Card from './components/Card';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';


function App(props) {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{ setAlert(null);}, 3000)
  }
  const toggleMode = () =>{
     if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#042743';
      showAlert("Dark Mode Enables", "success");
      document.title = "TextUtils - Dark Mode";
     }else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light Mode Enabled", "success");
      document.title = "TextUtils - Light Mode";
     }
  }
  return (
   <>
   <Navbar title="TextUtils3.0" aboutText="About vishnu" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
  <div className="container my-3"> 
  <TextForm showAlert={showAlert} heading="Enter Your Text you analyze" mode={mode}/>
    <About/>
  </div>

   </>
  );
}

export default App;
