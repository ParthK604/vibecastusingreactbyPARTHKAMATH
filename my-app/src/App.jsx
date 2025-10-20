import { useState } from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Playbar from './components/Playbar'
import aajkiraat from "../assets/images/aajkiraat.jpeg";
import laalpari from "../assets/images/laalpari.jpeg";
import sajni from "../assets/images/sajni.jpeg";
import tauba from "../assets/images/tauba.jpeg";
import images from "../assets/images/images.jpeg"; // if you really named one 'images.jpeg'


import './App.css'

function App() {
  return (
    <>
       <Navbar/>  
       <div className="flex">
       <Sidebar/>  
       <main className="flex-1 bg-amber-50 min-h-[80vh] overflow-y-auto p-4">
          <h1 className="text-2xl font-bold mb-4">For You</h1>
          <div className="hits flex flex-row gap-4 border">
            <h1>Trending Hits</h1>
            <br />
            <div><Card /></div>
              
          </div>
        </main>
       </div>
       <Playbar/>
    
    </>
  )
}

export default App
