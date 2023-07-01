import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ParticlesBackground from './components/ParticlesBackground';
import Particles from 'react-tsparticles';
function App() {

 
    //tutorial for ts particle:-https://www.youtube.com/watch?v=ordgGUgd2P0
  
  return (
   
    <div className="App" >
       <ParticlesBackground/>
          <Navbar/>
      <BrowserRouter>


      <Routes>
        <Route path='/' element={<Home/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
        <Route path='Contact/' element={<Contact/>}></Route>
           <Route path='/ParticlesBackground' element={<ParticlesBackground/>}></Route>
  

      </Routes>




      </BrowserRouter>
      

      
      
    </div>
  );
}

export default App;
