import React from 'react';
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
      <div className='App-header'></div>
      <WidgetsContainer></WidgetsContainer>
    </div>
  )
}
export default App;