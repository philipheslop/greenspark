//import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import './App.css';
import { getWidgets, Widget } from './widgetUtils';
import { WidgetsContainer } from './WidgetsContainer';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContents />
    </QueryClientProvider>
  );
}

function AppContents() {
  const { isLoading, error, data } = useQuery<Widget[]>({
      queryKey: ['widgets'],
      queryFn: getWidgets,
  })
  //const [activeWidget, setActiveWidget] = useState(null);
  if (isLoading) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message
  return (
    <div className="App">
      <WidgetsContainer processedData={data?data:[]}></WidgetsContainer>
    </div>
  )
}

export default App;

/* <header className="App-header">
      
    <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload bananas.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      </header>**/
