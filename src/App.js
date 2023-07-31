import React, { useEffect } from 'react'
import { Home } from './pages/home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Routes , Route } from 'react-router-dom';
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { About } from './pages/about/About';
import { SwitchUav } from './pages/switchUav/SwitchUav';
export function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/switch' element={<SwitchUav/>}/>
   </Routes>
  )
}

