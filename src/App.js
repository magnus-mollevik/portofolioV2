import './App.css';
import {Routes} from './routes/Routes.jsx'
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes />
      </Router>
      <footer><p>© Copr. 2021 Magnus K. Møllevik</p></footer>
     </div>
  );
}

export default App;
