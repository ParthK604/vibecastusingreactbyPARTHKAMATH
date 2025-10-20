import React from "react";

const NowPlaying = ({ title}) => {
  return (
    <div className='hidden fixed left-0 md:flex flex-col bg-amber-300 w-[25vw] font-medium h-[10vh] mx-2'>
      <h2 className="text-base font-semibold">Now Playing</h2> 
      
      <h3 className="text-lg font-bold truncate">{title || "—"}</h3>
      
    </div>
  );
};

export default NowPlaying;

