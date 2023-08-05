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
import { Netra } from './pages/netrav4/Netra';
import {Ninja} from './pages/ninja/Ninja';
import {Q4i} from "./pages/q4i/Q4i";
import {Ryno} from "./pages/ryno/Ryno";
import {Q6} from "./pages/q6/Q6";
import { MappingApplication } from './pages/mappingapplication/MappingApplication';
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
    <Route path='/netra' element={<Netra/>}/>
    <Route path='/ninja' element={<Ninja/>}/>
    <Route path='/q4i' element={<Q4i/>}/>
    <Route path='/ryno' element={<Ryno/>}/>
    <Route path='/q6' element={<Q6/>}/>
    <Route path='/mapping' element={<MappingApplication/>}/>
   </Routes>
  )
}

