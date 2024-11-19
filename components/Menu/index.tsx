import { Box} from "@chakra-ui/react";
import Image from "next/image";
import {CiMenuFries} from "react-icons/ci";
import {Button} from "@/components/ui/button";
import {
  DrawerActionTrigger,
  DrawerBackdrop, DrawerBody,
  DrawerCloseTrigger,
  DrawerContent, DrawerFooter,
  DrawerHeader,
  DrawerRoot, DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer";
import {TiThMenu} from "react-icons/ti";
import Sidebar, {SidebarBody} from "@/components/Sidebar";


export const Menu = () => {

  return(
    <Box className={'pt-5 flex justify-between md:justify-center border-b border-gray-300'}>
      <Box className={'md:hidden w-20'}></Box>
      <Box>
        <Image src={'/layout/logo2.png'} alt={'Logo'} width={150} height={150}/>
      </Box>
      <Box className={'md:hidden flex justify-center items-center w-20'}>
        <DrawerRoot>
          <DrawerBackdrop />
          <DrawerTrigger asChild>
            <Button variant="solid" colorPalette={'white'} size="sm">
              <TiThMenu />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
            </DrawerHeader>
            <DrawerBody>
              <SidebarBody/>
            </DrawerBody>
            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>
      </Box>
    </Box>
  )

}

export default Menu;
