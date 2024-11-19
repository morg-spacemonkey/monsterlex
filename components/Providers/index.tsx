'use client';
import {Provider} from "@/components/ui/provider";
import {Provider as ReduxProvider} from 'react-redux'
import {reduxStore} from "@/redux/store";


export const Providers = ({children}: Readonly<{ children: React.ReactNode }>) => {

  return (
    <ReduxProvider store={reduxStore}>
      <Provider>
        {children}
      </Provider>
    </ReduxProvider>
  );
}
