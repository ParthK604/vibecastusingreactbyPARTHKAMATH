import React from 'react'
import Card from '../components/Card';
import chalbombay from "../assets/images/chalbombay.jpeg";
import company from "../assets/images/company.jpeg";
import jootajapani from "../assets/images/jootajapani.jpeg";
import khatamhue from "../assets/images/khatamhue.jpeg";
import kohinoor from "../assets/images/kohinoor.jpeg";
import machaenge from "../assets/images/machaenge.jpeg";
import meregully from "../assets/images/meregully.jpeg";

export const hiphop=[
  {
    id:1,
    title:"Chal Bombay",
    artist:"Divine",
    image:chalbombay,
  },
  {
    id:2,
    title:"Company",
    artist:"Emiway ",
    image:company,
  },
  {
    id:3,
    title:"Joota Japani",
    artist:"Krishna",
    image:jootajapani,
  },
  {
    id:4,
    title:"Khatam Hue Wande",
    artist:"Emiway",
    image:khatamhue,
  },
  {
    id:5,
    title:"Kohinoor",
    artist:"Divine",
    image:kohinoor,
  },
  {
    id:6,
    title:"Machaenge",
    artist:"Emiway",
    image:machaenge,
  },
  {
    id:7,
    title:"Mere Gully Mein",
    artist:"Divine",
    image:meregully,
  },
]

function HipHop() {
  return (
   <div className="trending flex flex-col gap-1 px-2 mt-6">
        <h1 className="font-bold text-2xl">Romantic Hits</h1>
        <div className="flex flex-wrap gap-6 mt-4">
          {hiphop.map((song, i) => (
            <Card key={i} img={song.image} title={song.title} artist={song.artist} />
          ))}
        </div>
      </div>
  )
}

export default HipHop
