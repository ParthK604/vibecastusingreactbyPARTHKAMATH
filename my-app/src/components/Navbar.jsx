import React from 'react'

const Navbar = () => {
  return (
    <>
   <div className="border-b flex flex-row sticky top-0 z-50 justify-between bg-amber-100 w-full h-[10vh] p-4 shadow-xl">
     <div className="logo  flex gap-2">
        <div><span className="font-bold text-3xl scale-x-125 origin-left hover:cursor-pointer">VibeCast</span></div>
        <div className='text-center px-5 py-3 mx-2 font-bold hover:cursor-pointer hover:bg-amber-200 hover:text-black rounded-2xl'>Music</div>
        <div className='text-center px-5 py-3 font-bold hover:cursor-pointer hover:bg-amber-200 hover:text-black rounded-2xl'>About</div>
      </div>
      <div className=" px-5 text-center py-2 hover:cursor-pointer hover:bg-amber-200 hover:text-black rounded-2xl font-bold">
        <span className='text-2xl'>Login</span>
      </div>
    </div>
    </>
  )
}

export default Navbar
