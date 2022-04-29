import './App.css';
import './assets/simplified-grid.css';
import Home from './pages/Home';
import About from './pages/About';
import {
  Route,
  Routes
} from "react-router-dom";
import FourOhFour from './pages/FourOhFour';


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="more" element={<About/>}/>
      <Route path="*" element={<FourOhFour/>}/>
    </Routes>
  );
}

export default App;
