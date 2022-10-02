
import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './Components/Home/Home';
import Navbar from './Components/Share/Navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
<<<<<<< HEAD
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
=======
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";
>>>>>>> 65c7a73e5a2ee622ca9e1546753337e5faf1b023
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
