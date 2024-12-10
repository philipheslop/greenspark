import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  const [data,setData] = useState(null);
  useEffect(()=>{

    fetch("https://b795b019-1f84-41f4-93a3-a702d686c75a.mock.pstmn.io/product-widgets",{
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch(error=>console.error(error))
    },[]);

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
