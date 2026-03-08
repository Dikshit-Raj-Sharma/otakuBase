import { useState } from 'react'
import './App.css'
// import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import { Outlet } from "react-router-dom";
function App() {
    return (
      <div className="bg-slate-900 min-h-screen text-white">
        <Navbar />
      
      <main className="p-4">
        <Outlet /> 
      </main> 
      </div>
    )
}

export default App
