
import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './Components/Home/Home';
import Navbar from './Components/Share/Navbar';

function App() {
  return (
    <div className="App container">
      <Navbar></Navbar>
      <Routes>
        <Route path='home' element={<Home></Home>} />
    </Routes>
    </div>
  );
}

export default App;
