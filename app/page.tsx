'use client';
import Image from "next/image";
import Monsters from '@/data/owned.json';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "@/redux/store";
import {selectFilters} from "@/redux/filtersSlice/selectors";
import {setResultsNumber} from "@/redux/filtersSlice/filtersSlice";
import {Box, Card} from "@chakra-ui/react";
import {DataListItem, DataListRoot} from "@/components/ui/data-list";

interface Monster {
  Foto: string;
  Nome: string;
  Collezione: string;
  Logo: Array<string>;
  Sfondo: Array<string>;
  Linguetta: string;
  Piena: boolean;
  Stato: number;
}

export default function Home() {
  const {query, logoColor, backgroundColor, full, tabColor, collection, status} = useSelector(selectFilters);
  const dispatch = useDispatch();
  const [monstersToVisualize, setMonstersToVisualize] = useState<Monster[]>(Monsters);


  useEffect(() => {
    const monstersData: Monster[] = Monsters.filter((monster) => {

      //* If the query is not empty and the monster name does not include the query, return false
      if (query && !monster.Nome.toLowerCase().includes(query.toLowerCase())) {
        return false;
      }

      //* If the Sfondo is not empty and the monster Sfondo does not include the Sfondo, return false
      if (backgroundColor) {
        if (!monster.Sfondo.includes(backgroundColor)) {
          return false;
        }
      }

      //* If the Logo is not empty and the monster Logo does not include the Logo, return false
      if (logoColor) {
        if (!monster.Logo.includes(logoColor)) {
          return false;
        }
      }

      //* If the full filter is active and the monster is not full, return false
      if (full && monster.Piena) {
        return false;
      }

      if (collection && monster.Collezione !== collection) {
        return false;
      }

      if (tabColor && monster.Linguetta !== tabColor) {
        return false;
      }

      if (status) {
        switch (status) {
          case 'Perfetta':
            if (monster.Stato !== 1) return false;
            break;

          case 'Piccole ammaccature':
            if (monster.Stato !== 2) return false;
            break;

          case 'Rovinata':
            if (monster.Stato !== 3) return false;
            break;
        }
      }

      //* If the monster passes all the filters, return true
      return true;
    });

    //* Set the monsters to visualize
  setMonstersToVisualize(monstersData);

    dispatch(setResultsNumber({resultsNumber: monstersData.length}));

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, logoColor, backgroundColor, full, tabColor, collection, status]);

  const normalizeStatus = (status: number) => {
    switch (status) {
      case 1:
        return 'Perfetta';
      case 2:
        return 'Piccole ammaccature';
      case 3:
        return 'Rovinata';
      default:
        return 'Non specificato';
    }
  }

  const normalizeFullness = (status: boolean) => {
    switch (status) {
      case true:
        return 'Piena';
      case false:
        return 'Vuota';
  }

  return (
    <Box
      className="h-full overflow-y-auto flex flex-wrap gap-5 pt-28 font-[family-name:var(--font-geist-sans)]">
      {monstersToVisualize.map((monster, index) => (
        <Card.Root key={index} maxW="sm" overflow="visible" className={'mb-36'}>
          <Box className={'-mt-12 flex justify-center'}>
            <Box className={'-mt-12 flex justify-center w-[150px] h-[350px]'}>
              <Image
                src={monster.Foto}
                alt="Green double couch with wooden legs"
                width="150" height="350"
              />
            </Box>
          </Box>

          <Card.Body gap="2">
            <Card.Title>{monster.Nome}</Card.Title>
            <DataListRoot>
            <Box className={'flex flex-wrap gap-5'}>
                <DataListItem label={'Collection'} value={monster.Collezione}/>
                <DataListItem label={'Status'} value={monster.Piena}/>
              </Box>
              <Box className={'flex flex-wrap gap-5'}>
                <DataListItem label={'Logo Color'} value={monster.Logo}/>
                <DataListItem label={'Background Color'} value={monster.Sfondo}/>
              </Box>
              <Box className={'flex flex-wrap gap-5'}>
                <DataListItem label={'Tab Color'} value={monster.Linguetta}/>
                <DataListItem label={'Conservation'} value={normalizeStatus(monster.Stato)}/>
              </Box>
            </DataListRoot>
          </Card.Body>
        </Card.Root>
      ))}
    </Box>
  );
}
