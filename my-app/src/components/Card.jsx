import React from "react";
import { FaPlay } from "react-icons/fa";

const Card = ({ img, title, artist }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg p-3 cursor-pointer transition flex flex-col items-center w-[180px]">
     
      <div className="relative w-full h-[180px]">
        <img src={img} alt={title} className="w-full h-full object-cover rounded-xl"/>
        <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 flex items-center justify-center rounded-xl transition">
          <FaPlay size={30} className="text-white" />
        </div>
      </div>
      <div className="mt-3 text-center">
        <h3 className="font-semibold text-sm truncate">{title}</h3>
        <p className="text-xs text-gray-600">{artist}</p>
      </div>
    </div>
  );
};

export default Card;

