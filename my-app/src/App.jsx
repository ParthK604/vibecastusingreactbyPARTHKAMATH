import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Playbar from './components/Playbar'

import './App.css'

function App() {
  return (
    <>
       <Navbar/>  
       <div className="flex">
       <Sidebar/>  
       </div>
       <Playbar/>
    
    </>
  )
}

export default App
