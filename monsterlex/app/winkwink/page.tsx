'use client';
import Image from "next/image";
import Monsters from '../../../data/lookfor.json';
import {useEffect, useState} from "react";

interface Monster {
  Foto: string;
  Nome: string;
  Link: string;
}

export default function Home() {
  const [query, setQuery] = useState<string>('');
  const [monstersToVisualize, setMonstersToVisualize] = useState<Monster[]>(Monsters);


useEffect(()=>{
  let monstersData: Monster[] = Monsters;

  if (query) {
    monstersData = monstersData.filter((monster) =>{
      return monster.Nome.toLowerCase().includes(query.toLowerCase());
    });
  }

  setMonstersToVisualize(monstersData);

}, [query]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Le lattine qui andrebbero comprate in doppia copia, love <br/>Clicca sulla lattina o sul nome per andare al sito</h1>
        {monstersToVisualize.map((monster, index) => (
        <div key={index} /* className={'bg-white p-10 mb-5 w-50 text-black'} */ style={{display: 'flex', flexDirection: 'row', margin:'auto'}}> 
          <a href={monster.Link}><div><Image src={monster.Foto} alt={monster.Nome} width="150" height="300"/></div>
          <div style={{marginLeft:'20px', margin:'auto'}}>
          <b>Nome:</b><br/>{monster.Nome}
          </div></a>
        </div>
      ))}



      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Pretty cool tho</p>
      </footer>
    </div>
  );
}
