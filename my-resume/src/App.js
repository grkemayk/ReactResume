import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/navbar';

function App() {
  return (
    <div className="App">
        <div className="row">
          <div class="col-3 componentNavbar"><NavBar/></div>
          <div class="col-9 componentBody">
            <div className="containerBody">

            </div>

          </div>
        </div>
    </div>
  );
}

export default App;
