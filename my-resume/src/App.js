import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/navbar';
import { Routes, Route, Navigate } from "react-router-dom";
import About from "../src/component/about"
import Education from './component/education';
import Career from './component/career';
import Projects from './component/projects';
import Goals from './component/goals';


function App() {

  return (
    <div className="App">
        <div className="row">
          <div class="col-3 componentNavbar"><NavBar/></div>
          <div class="col-9 componentBody">
            <div className="containerBody">
            <Routes>           
              <Route path="/about" element={<About/>}/>
              <Route path="/education" element={<Education/>} />
              <Route path="/career" element={<Career/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="/goals" element={<Goals/>} />
              <Route path="/*" element={<Navigate replace to="/about" />} />
            </Routes>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
