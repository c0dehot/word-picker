import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ randomWord, setRandomWord ] = useState("... loading ...")

  async function getWord(){
      console.log( `[getWord] called, fetching word to display` )
      // with package.json "proxy" --> redirects these requests it can't
      // handle to the proxy (aka localhost:8080 which is the node server)
      const apiResult = await fetch( '/api/words' ).then( r=>r.json() )
      console.log( apiResult)
      if( apiResult.status ){
        setRandomWord( apiResult.word )
      }
  }

  useEffect( function(){
    getWord()
  }, [] )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {randomWord}
        </p>

        <button onClick={getWord}>Get New Word</button>
      </header>
    </div>
  );
}

export default App;
