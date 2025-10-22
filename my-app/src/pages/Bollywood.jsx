import React from 'react'
import Card from '../components/Card';
import uyiamma from "../assets/images/uyiamma.jpeg";
import besabriyaan from "../assets/images/besabriyaan.jpeg";
import bulleya from "../assets/images/bulleya.jpeg";
import ghongroo from "../assets/images/ghongroo.jpeg";
import hangover from "../assets/images/hangover.jpg";
import illahi from "../assets/images/illahi.jpeg";
import janamjanam from "../assets/images/janamjanam.jpeg";

export const Bollywo=[
  {
    id:1,
    title:"Uyi Amma",
    artist:"",
    image:uyiamma,
  },
  {
    id:2,
    title:"Besabriyaan",
    artist:"Amaal Malik",
    image:besabriyaan,
  },
  {
    id:3,
    title:"Bulleya",
    artist:"Arjit Singh",
    image:bulleya,
  },
  {
    id:4,
    title:"Ghongroo",
    artist:"Arjit Singh",
    image:ghongroo,
  },
  {
    id:5,
    title:"Hangover",
    artist:"",
    image:hangover,
  },
  {
    id:6,
    title:"Illahi",
    artist:"Arjit Singh",
    image:illahi,
  },
  {
    id:7,
    title:"Janam Janam",
    artist:"Arjit Singh",
    image:janamjanam,
  },
]

function Bollywood() {
  return (
   <div className="trending flex flex-col gap-1 px-2 mt-6">
        <h1 className="font-bold text-2xl">Bollywood Hits</h1>
        <div className="flex flex-wrap gap-6 mt-4">
          {Bollywo.map((song, i) => (
            <Card key={i} img={song.image} title={song.title} artist={song.artist} />
          ))}
        </div>
      </div>
  )
}

export default Bollywood
