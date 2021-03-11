import './App.css';
import React, {useState} from 'react';
import {Routes} from './routes/Routes.jsx'
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
const [AppClassName, setAppClassName] = useState("App")
  return (
    <div className={AppClassName} >
      <Router>
      <Routes AppClassName={AppClassName} setAppClassName={setAppClassName}/>
      </Router>
      <footer><p>© Copr. 2021 Magnus K. Møllevik</p></footer>
     </div>
  );
}

export default App;
