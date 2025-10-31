import React from 'react'
import Card from '../components/Card';
import paaniyosa from "../assets/images/paaniyosa.jpeg";
import pehlinazar from "../assets/images/pehlinazar.jpeg";
import terahone from "../assets/images/terahone.jpeg";
import jabtak from "../assets/images/jabtak.jpeg";
import humdard from "../assets/images/humdard.jpg";
import dildiyaan from "../assets/images/dildiyaan.jpeg";
import tumsehi from "../assets/images/tumsehi.jpeg";

export const romantic=[
  {
    id:1,
    title:"Tum Se Hi",
    artist:"Mohit Chauhan",
    image:tumsehi,
  },
  {
    id:2,
    title:"Jab Tak",
    artist:"Armaan Malik",
    image:jabtak,
  },
  {
    id:3,
    title:"Dil Diyaan Gallan",
    artist:"Atif Aslam",
    image:dildiyaan,
  },
  {
    id:4,
    title:"Pehli Nazar Mein",
    artist:"Atif Aslam",
    image:pehlinazar,
  },
  {
    id:5,
    title:"Tera Hone Laga",
    artist:"Atif Aslam",
    image:terahone,
  },
  {
    id:6,
    title:"Paaniyo Sa",
    artist:"Atif Aslam",
    image:paaniyosa,
  },
  {
    id:7,
    title:"Humdard",
    artist:"Arjit Singh",
    image:humdard,
  },
]

function Romantic() {
  return (
   <div className="trending flex flex-col gap-1 px-2 mt-6">
        <h1 className="font-bold text-2xl">Romantic Hits</h1>
        <div className="flex flex-wrap gap-6 mt-4">
          {romantic.map((song, i) => (
            <Card key={i} img={song.image} title={song.title} artist={song.artist} />
          ))}
        </div>
      </div>
  )
}

export default Romantic
