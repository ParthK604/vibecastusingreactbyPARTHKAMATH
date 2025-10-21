import React from "react";
import Card from "./components/Card";
import aajkiraat from "./assets/images/aajkiraat.jpeg";
import laalpari from "./assets/images/laalpari.jpeg";
import sajni from "./assets/images/sajni.jpeg";
import tauba from "./assets/images/tauba.jpeg";
import morni from "./assets/images/morni.jpeg";
import vekamleya from "./assets/images/vekamleya.jpeg";
import alone from './assets/images/alone.jpg';
import Apt from './assets/images/Apt.jpeg';
import ibiza from './assets/images/ibiza.jpeg';
import sapphire from './assets/images/sapphire.jpg';
import starboy from './assets/images/starboy.jpeg';
import vivala from './assets/images/vivala.jpeg';


 export const Trending=[
  {
    id:1,
    title:"Aaj Ki raat",
    artist:"Madhubanti Bhagchi",
    image:aajkiraat,
  },
  {
    id:2,
    title:"LaalParu",
    artist:"Yo Yo Honey Singh",
    image:laalpari,
  },
  {
    id:3,
    title:"Morni",
    artist:"Badshah",
    image:morni,
  },
  {
    id:4,
    title:"Sajni",
    artist:"Arjit Singh",
    image:sajni,
  },
  {
    id:5,
    title:"Tauba Tauba",
    artist:"Karan Aujla",
    image:tauba,
  },
  {
    id:6,
    title:"Vekamleya",
    artist:"Arjit Singh",
    image:vekamleya,
  },
]
export const English=[
  {
    id:1,
    title:"Alone",
    artist:"Alan Walker",
    image:alone,
  },
  {
    id:2,
    title:"APT",
    artist:"Bruno Mars",
    image:Apt,
  },
  {
    id:3,
    title:"I took a pill at Ibiza",
    artist:"Mike Posner",
    image:ibiza,
  },
  {
    id:4,
    title:"Sapphire",
    artist:"Ed Sheeran",
    image:sapphire,
  },
  {
    id:5,
    title:"Starboy",
    artist:"Weekend",
    image:starboy,
  },
  {
    id:6,
    title:"viva la Vida",
    artist:"Coldplay",
    image:vivala,
  },
]



export default function Home() {
  return (
    <div>
      <div className="trending flex flex-col gap-1 px-2">
        <h1 className="font-bold text-2xl">Trending Hits</h1>
        <div className="flex flex-wrap gap-6 mt-4">
          {Trending.map((song, i) => (
            <Card key={i} img={song.image} title={song.title} artist={song.artist} />
          ))}
        </div>
      </div>

      <div className="trending flex flex-col gap-1 px-2 mt-6">
        <h1 className="font-bold text-2xl">English</h1>
        <div className="flex flex-wrap gap-6 mt-4">
          {English.map((song, i) => (
            <Card key={i} img={song.image} title={song.title} artist={song.artist} />
          ))}
        </div>
      </div>
    </div>
  );
}
