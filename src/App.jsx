import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Australia from './pages/Australia';
import Canada from './pages/Canada';
import Japan from './pages/Japan';
import Services from './pages/Services';
import IELTS from './pages/IELTS';
import PTE from './pages/PTE';
import JLPT from './pages/JLPT';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './app.css';

const App = () => {
  return (
    <div className='app'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/study_abroad/australia' element={<Australia/>}/>
      <Route path='/study_abroad/canada' element={<Canada/>}/>
      <Route path='/study_abroad/japan' element={<Japan/>}/>
      <Route path='/classes/ielts' element={<IELTS/>} />
      <Route path='/classes/pte' element={<PTE/>} />
      <Route path='/classes/jlpt' element={<JLPT/>} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer/>
    </div>
  )
}

export default App;