import {Box} from "@chakra-ui/react";

export const Content = ({children}: Readonly<{children: React.ReactNode;}>) => {
  return(<Box className={'p-5 overflow-hidden max-h-full flex-1'}>{children}</Box>)
}

export default Content;

