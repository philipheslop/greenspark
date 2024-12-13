//import React, { useEffect, useState } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { useWidgets, queryClient } from './widgetUtils';
import { WidgetsContainer } from './WidgetsContainer';
import { createContext } from 'react';


export const WidgetsContext = createContext(null);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContents />
    </QueryClientProvider>
  );
}

function AppContents() {
  const query = useWidgets();
  if (query.isLoading) return 'Loading...'
  if (query.error) return 'An error has occurred: ' + query.error.message
  return (
    <div className="App">
      <WidgetsContainer></WidgetsContainer>
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
