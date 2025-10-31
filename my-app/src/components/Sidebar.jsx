import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const categories = [
    { title: "Romantic Hits", path: "/romantic" },
    { title: "English Pop & Rock", path: "/english" },
    { title: "Indian Hip Hop", path: "/hiphop" },
    { title: "Spanish", path: "/spanish" },
    { title: "Bollywood Classics", path: "/bollywood" },
  ];

  return (
    <div className="hidden md:flex flex-col bg-amber-100 w-[22vw] h-full overflow-y-auto shadow-md">
      <div className="px-4 py-3">
        <span className="font-bold text-2xl">Explore</span>
      </div>

      {categories.map((cat, i) => (
        <Link
          key={i}
          to={cat.path}
          className="text-left px-3 py-2 rounded-md hover:bg-amber-200 transition font-medium cursor-pointer"
        >
          {cat.title}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
