import React from 'react'
import Card from '../components/Card';
import alone from '../assets/images/alone.jpg';
import dusktill from '../assets/images/dusktill.jpeg';
import ibiza from '../assets/images/ibiza.jpeg';
import sapphire from '../assets/images/sapphire.jpg';
import starboy from '../assets/images/starboy.jpeg';
import vivala from '../assets/images/vivala.jpeg';
import attention from '../assets/images/attention.jpg';
import cryforme from '../assets/images/cryforme.jpeg';
import heatwaves from '../assets/images/heatwaves.jpeg';
import halloffame from '../assets/images/halloffame.jpeg';
export const english=[
  {
    id:1,
    title:"Alone",
    artist:"Alan Walker",
    image:alone,
  },
  {
    id:2,
    title:"Dusk Till Dawn",
    artist:"Zayn Malik",
    image:dusktill,
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
  {
    id:7,
    title:"Attention",
    artist:"Charlie Puth",
    image:attention,
  },
  {
    id:8,
    title:"Cry For Me",
    artist:"The Weekend",
    image:cryforme,
  },
  {
    id:9,
    title:"Hall Of Fame",
    artist:"The Scripts",
    image:halloffame,
  },
  {
    id:10,
    title:"Heat Waves",
    artist:"Glass Animals",
    image:heatwaves,
  },
]
function English() {
  return (
   <div className="trending flex flex-col gap-1 px-2 mt-6">
        <h1 className="font-bold text-2xl">English Hits</h1>
        <div className="flex flex-wrap gap-6 mt-4">
          {english.map((song, i) => (
            <Card key={i} img={song.image} title={song.title} artist={song.artist} />
          ))}
        </div>
      </div>
  )
}

export default English