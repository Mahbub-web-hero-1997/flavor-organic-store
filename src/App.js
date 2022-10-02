
import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './Components/Home/Home';
import Navbar from './Components/Share/Navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div className="App shadow-lg">
      <Navbar></Navbar>
     
      <Routes>
        <Route path='/' element={<Home></Home>} />

    </Routes>
    </div>
  );
}

export default App;
