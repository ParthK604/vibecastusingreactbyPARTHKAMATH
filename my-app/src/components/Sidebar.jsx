import React from 'react'

const Sidebar = () => {
     const categories = [
    "Romantic Hits",
    "English Pop & Rock",
    "Party Anthems",
    "Lo-Fi & Chill",
    "Bollywood Classics"
  ]
  return (
    <div className="hidden md:flex flex-col sticky left-0 bg-amber-100 h-[90vh] w-[22vw] ">
        <div className='px-1 py-1 my-0.5'><span className='font-bold text-2xl '>Explore</span></div>
        {categories.map((cat, i) => (
        <button 
          key={i}
          className="text-left px-3 py-2 rounded-md hover:bg-amber-200 transition font-medium cursor-pointer"
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default Sidebar
