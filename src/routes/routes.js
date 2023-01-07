import React from 'react'

import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from '../pages/navbar/navbar'
import Home from '../pages/home/home';

import Aboutme from '../pages/aboutme/aboutme';
import Calculator from '../pages/calculator/calculator';


export default function routes() {
  return (
    <>
    {/* <NavBar/> */}
    <Routes>
        {/* <Route path="/" element={<Home/>}> */}
            <Route path="/home" element={<Home/>}/>
            <Route path="/aboutme" element={<Aboutme/>}/>
            <Route path="/calculator" element={<Calculator/>}/>
        {/* </Route> */}
    </Routes>
    </>
  )
}
