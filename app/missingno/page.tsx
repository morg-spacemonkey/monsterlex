'use client';
import Image from "next/image";
import Monsters from '@/data/lookfor.json';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "@/redux/store";
import {selectFilters} from "@/redux/filtersSlice/selectors";
import {setResultsNumber} from "@/redux/filtersSlice/filtersSlice";
import {Box, Card, Button} from "@chakra-ui/react";
import { Url } from "next/dist/shared/lib/router/router";
import NextLink from 'next/link'

interface Monster {
  Foto: string;
  Nome: string;
  Link: Url;
}

export default function Home() {
  const {query, logoColor, backgroundColor, tabColor} = useSelector(selectFilters);
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

      if (tabColor && monster.Linguetta !== tabColor) {
        return false;
      }

      //* If the monster passes all the filters, return true
      return true;
    });

    //* Set the monsters to visualize
  setMonstersToVisualize(monstersData);

    dispatch(setResultsNumber({resultsNumber: monstersData.length}));

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, logoColor, backgroundColor, tabColor]);

  return (
    <Box className="h-full overflow-y-auto flex flex-wrap gap-5 pt-28 font-[family-name:var(--font-geist-sans)]">
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
          </Card.Body>
          <Card.Footer>
          <NextLink href={monster.Link}>
              <Button colorPalette="green" variant="surface">Buy now</Button>
          </NextLink>
            </Card.Footer>
        </Card.Root>
      ))}
    </Box>
  );
}
