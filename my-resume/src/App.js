import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/navbar';
import { Routes, Route } from "react-router-dom";
import About from "../src/component/about"
import Education from './component/education';
import Career from './component/career';

function App() {
  return (
    <div className="App">
        <div className="row">
          <div class="col-3 componentNavbar"><NavBar/></div>
          <div class="col-9 componentBody">
            <div className="containerBody">
            <Routes>
              <Route path="/about" element={<About/>} />
              <Route path="/education" element={<Education/>} />
              <Route path="/career" element={<Career/>} />
            </Routes>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
