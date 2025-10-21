import React from 'react'
import { FaPause } from "react-icons/fa";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import Nowplaying from './Nowplaying';
const Playbar = () => {
  return (
    <div className="playbar fixed bottom-0 w-full h-[12vh] z-50 bg-amber-100 flex items-center justify-center">
      <Nowplaying/>
      <div className="flex flex-col items-center justify-center w-[40vw] h-full">
        
        <div className="icons flex items-center justify-center gap-4 mb-7">
          <button className="p-3 bg-amber-300 rounded-full hover:bg-amber-400 active:scale-95 transition">
            <MdSkipPrevious size={22} />
          </button>
          <button className="p-4 bg-amber-500 rounded-full hover:bg-amber-600 active:scale-95 transition">
            <FaPause size={22} />
          </button>
          <button className="p-3 bg-amber-300 rounded-full hover:bg-amber-400 active:scale-95 transition">
            <MdSkipNext size={22} />
          </button>
        </div>
           <div className="bar">
               
           </div>
       </div>


    </div>
     
    
  )
}

export default Playbar
