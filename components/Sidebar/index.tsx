'use client';
import {Badge, Box, Card, Heading, Input} from "@chakra-ui/react";
import {useDispatch, useSelector} from "@/redux/store";
import {selectFilters} from "@/redux/filtersSlice/selectors";
import {
  setBackgroundColor,
  setFull,
  setLogoColor,
  setQuery,
  setStatus,
  setTabColor,
  setCollection
} from "@/redux/filtersSlice/filtersSlice";
import React from "react";
import {Field} from "@/components/ui/field";
import {Switch} from "@/components/ui/switch";
import {TbZoomReset} from "react-icons/tb";
import {Button} from "@/components/ui/button";


export const Sidebar = () => {


  return (
    <Box
      className={'w-0 hidden md:block md:w-[300px] border-r border-gray-300 h-full font-[family-name:var(--font-geist-sans)] overflow-auto'}>
      <SidebarBody/>
    </Box>
  )
}

export const SidebarBody = () => {
  const {query, logoColor, backgroundColor, resultsNumber, full, tabColor, collection, status} = useSelector(selectFilters);
  const dispatch = useDispatch();

  const LogoColors = ['Giallo', 'Arancione', 'Pesca', 'Rosa', 'Rosso', 'Oro', 'Argento', 'Azzurro', 'Blu', 'Verde', 'Bianco', 'Marrone', 'Beige', 'Nero'];
  const BackgroundColors = ['Giallo', 'Arancione', 'Pesca', 'Rosa', 'Viola', 'Rosso', 'Oro', 'Azzurro', 'Blu', 'Verde', 'Bianco', 'Marrone', 'Beige', 'Panna', 'Nero'];
  const TabColors = ['Nera', 'Argento', 'Colorata'];
  const Collection = ['Core','Ultra','Dragon Iced Tea','Dragon Tea','Punch','Rehab Recover','Rehab','Super Fuel','Reserve','Nitro','Juiced','Java']
  const Status = ['Rovinata','Piccole ammaccature', 'Perfetta'];

  const updateQuery = (query: string) => dispatch(setQuery({query}));
  const updateLogoColor = (logoColor: string) => dispatch(setLogoColor({logoColor}));
  const updateBackgroundColor = (backgroundColor: string) => dispatch(setBackgroundColor({backgroundColor}));

  const updateFull = (full: boolean) => dispatch(setFull({full}));

  const updateTabColor = (tabColor: string) => dispatch(setTabColor({tabColor}));

  const updateCollection = (collection: string) => dispatch(setCollection({collection}));

  const updateStatus = (status: string) => dispatch(setStatus({status}));

  return (
    <Card.Root width="full">
      <Card.Header className={'flex flex-row justify-between'}>
        <Heading size="lg">Filters</Heading>
        <Badge variant="outline">{resultsNumber} results</Badge>

      </Card.Header>
      <Card.Body gap="6">
        <Field label="Name">
          <Input value={query} placeholder="Enter name" onChange={(e) => updateQuery(e.target.value)}/>
        </Field>
        <Field
          label="Logo Color"
          icon={<Button size={'xs'} className={'p-0 bg-[#90FD03]'}><TbZoomReset/></Button>}
          iconOnClick={() => updateLogoColor('')}
          iconTooltip={'Reset filter'}
        >
          <Box className={'flex flex-wrap gap-1'}>
            {LogoColors.map((color, i) => (
              <SidebarButton value={logoColor} onClickAction={() => updateLogoColor(color)} text={color} key={i}/>
            ))}
          </Box>
        </Field>
        <Field
          label="Background Color"
          icon={<Button size={'xs'} className={'p-0 bg-[#90FD03]'}><TbZoomReset/></Button>}
          iconOnClick={() => updateBackgroundColor('')}
          iconTooltip={'Reset filter'}
        >
          <Box className={'flex flex-wrap gap-1'}>
            {BackgroundColors.map((color, i) => (
              <SidebarButton value={backgroundColor} onClickAction={() => updateBackgroundColor(color)} text={color}
                             key={i}/>
            ))}
          </Box>
        </Field>
        <Field
          label="Collection"
          icon={<Button size={'xs'} className={'p-0 bg-[#90FD03]'}><TbZoomReset/></Button>}
          iconOnClick={() => updateCollection('')}
          iconTooltip={'Reset filter'}
        >
          <Box className={'flex flex-wrap gap-1'}>
            {Collection.map((collect, i) => (
              <SidebarButton value={collection} onClickAction={() => updateCollection(collect)} text={collect} key={i}/>
            ))}
          </Box>
        </Field>
        <Field
          label="Tab Color"
          icon={<Button size={'xs'} className={'p-0 bg-[#90FD03]'}><TbZoomReset/></Button>}
          iconOnClick={() => updateTabColor('')}
          iconTooltip={'Reset filter'}
        >
          <Box className={'flex flex-wrap gap-1'}>
            {TabColors.map((color, i) => (
              <SidebarButton value={tabColor} onClickAction={() => updateTabColor(color)} text={color} key={i}/>
            ))}
          </Box>
        </Field>
        <Field
          label="Status"
          icon={<Button size={'xs'} className={'p-0 bg-[#90FD03]'}><TbZoomReset/></Button>}
          iconOnClick={() => updateStatus('')}
          iconTooltip={'Reset filter'}
        >
          <Box className={'flex flex-wrap gap-1'}>
            {Status.map((statusValue, i) => (
              <SidebarButton value={status} onClickAction={() => updateStatus(statusValue)} text={statusValue} key={i}/>
            ))}
          </Box>
        </Field>
        <Field>
          <Switch checked={full} onCheckedChange={(e) => updateFull(e.checked)}>Solo vuote</Switch>
        </Field>
      </Card.Body>
    </Card.Root>
  )
}

interface SidebarButtonProps {
  text?: string;
  onClickAction?: () => void;
  value?: string | number;
}

export const SidebarButton = ({text, onClickAction, value}: SidebarButtonProps) => {
  return (
    <Button background={value === text ? 'green' : ''} variant={'outline'} onClick={onClickAction}>{text}</Button>)
}

export default Sidebar;
