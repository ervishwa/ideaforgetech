import React, { useEffect } from 'react'
import { Home } from './pages/home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Routes , Route } from 'react-router-dom';
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
export function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
  )
}

