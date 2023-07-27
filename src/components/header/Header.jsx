import React from 'react'
import "./header.css";
import { Carousels } from '../carousels/Carousels';
import { Navbar, NavbarT } from '../navbar/NavbarT';
import { Info } from '../info/Info';
export function Header() {
  return (
    <header>
    <NavbarT/>
    <Carousels/> 
    <Info/>  
    </header>
  )
}

