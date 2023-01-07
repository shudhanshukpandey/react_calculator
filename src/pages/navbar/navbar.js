import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
// import Calculator from '../calculator/calculator';
import { Routes, Route, Navigate } from "react-router-dom";

export default function navbar() {
  return (
    <div className='home'>
        <nav className="nav">
            <NavLink className="nav-link" aria-current="page" to="/home"></NavLink>
            <NavLink className="nav-link" to="/home">Home</NavLink>
            <NavLink className="nav-link" to="/calculator">Calculator</NavLink>
            <NavLink className="nav-link about" to="/aboutme">About Me</NavLink>
        </nav>

        {/* adding routes as per me */}
        {/* <div>
            <Outlet />
        </div> */}
       
        

      
    </div>
  )
}
