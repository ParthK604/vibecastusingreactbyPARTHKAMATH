import React from 'react'
import { FaPause } from "react-icons/fa";

const Playbar = () => {
  return (
    <div className="playbar flex flex-col fixed bottom-0 w-full h-[12vh] z-50 bg-amber-200">
     <div className="flex flex-row">
        <div></div>
        <div className='mx-auto flex'>
          <div className="prev "></div>
          <div className="pause justify-center align-middle"><FaPause /></div>
          <div className="next"></div>
        </div>
     </div>
     <div className=""></div>
    </div>
  )
}

export default Playbar
