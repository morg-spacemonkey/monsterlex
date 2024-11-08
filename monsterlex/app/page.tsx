'use client';
import Image from "next/image";
import Monsters from '../../data/owned.json';
import {useEffect, useState} from "react";

interface Monster {
  Foto: string;
  Nome: string;
  Logo: Array<string>;
  Sfondo: Array<string>;
  Linguetta: string;
  Piena: boolean;
  Stato: number;
}

export default function Home() {
  const [query, setQuery] = useState<string>('');
  const [Logo, setLogo] = useState<string>('');
  const [Sfondo, setSfondo] = useState<string>('');
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
      <div>
        <div>
          Cerca: <br/>
          <input type={'text'} value={query} onChange={(e) => setQuery(e.target.value)} className={'mb-20'}/>
        </div>

        <div>
          Filtra Logo: <br/>
          <select defaultValue={0} onChange={(e) => setLogo((e.target.value))}>
            <option value={''}>Tutti</option>
            <option value={'giallo'}>Giallo</option>
            <option value={'arancione'}>Arancione</option>
            <option value={'pesca'}>Pesca</option>
            <option value={'rosa'}>Rosa</option>
            <option value={'rosso'}>Rosso</option>
            <option value={'oro'}>Oro</option>
            <option value={'argento'}>Argento</option>
            <option value={'azzurro'}>Azzurro</option>
            <option value={'blu'}>Blu</option>
            <option value={'verde'}>Verde</option>
            <option value={'bianco'}>Bianco</option>
            <option value={'marrone'}>Marrone</option>
            <option value={'beige'}>Beige</option>
            <option value={'nero'}>Nero</option>
          </select>
        </div>
        <div>
          Filtra Sfondo: <br/>
          <select defaultValue={0} onChange={(e) => setSfondo((e.target.value))}>
            <option value={""}>Tutti</option>
            <option value={'giallo'}>Giallo</option>
            <option value={'arancione'}>Arancione</option>
            <option value={'pesca'}>Pesca</option>
            <option value={'rosa'}>Rosa</option>
            <option value={'viola'}>Viola</option>
            <option value={'rosso'}>Rosso</option>
            <option value={'oro'}>Oro</option>
            <option value={'azzurro'}>Azzurro</option>
            <option value={'blu'}>Blu</option>
            <option value={'verde'}>Verde</option>
            <option value={'bianco'}>Bianco</option>
            <option value={'marrone'}>Marrone</option>
            <option value={'beige'}>Beige</option>
            <option value={'panna'}>Panna</option>
            <option value={'nero'}>Nero</option>
          </select>
        </div>
      </div>

      {monstersToVisualize.map((monster, index) => (
        <div key={index} /* className={'bg-white p-10 mb-5 w-50 text-black'} */>
          <div><Image src={monster.Foto} alt={'goblin'} width="200" height="400"/></div>
          <div>
          <h1>{monster.Nome}</h1>
          <p>{monster.Linguetta}</p>
          <p>{monster.Piena == true ? 'Piena' : 'Vuota'}</p>
          <p>{monster.Stato}</p>
          </div>
        </div>
      ))}



      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Pretty cool tho</p>
      </footer>
    </div>
  );
}
