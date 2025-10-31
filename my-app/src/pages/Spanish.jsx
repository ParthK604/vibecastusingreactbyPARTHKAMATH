import React from 'react'
import Card from '../components/Card';
import bailando from '../assets/images/bailando.jpeg';
import danzakudro from '../assets/images/danzakudro.jpeg';
import decpacito from '../assets/images/decpacito.jpeg';
import dura from '../assets/images/dura.jpeg';
import gasolina from '../assets/images/gasolina.jpeg';
import migente from '../assets/images/migente.jpeg';
import taaki from '../assets/images/taaki.jpeg';

export const english=[
  {
    id:1,
    title:"Despacito",
    artist:"Luiz Fonzi",
    image:decpacito,
  },
  {
    id:2,
    title:"Bailando",
    artist:"Enrique Iglesias",
    image:bailando,
  },
  {
    id:3,
    title:"Danza Kudro",
    artist:"Don Omar",
    image:danzakudro,
  },
  {
    id:4,
    title:"Gasolina",
    artist:"Dadee Yankee",
    image:gasolina,
  },
  {
    id:5,
    title:"Dura",
    artist:"Dadee Yankee",
    image:dura,
  },
  {
    id:6,
    title:"Mi Gente",
    artist:"J Balvin",
    image:migente,
  },
  {
    id:7,
    title:"Taaki Taaki",
    artist:"Dj Snake",
    image:taaki,
  },
]
function Spanish() {
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

export default Spanish