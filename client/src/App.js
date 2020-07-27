import React, { useEffect, useState, useRef } from 'react'
import logo from './logo.svg'
import Utils from './Utils'
import './App.css'

function App() {
  const [ randomWord, setRandomWord ] = useState("... loading ...")
  const refNewWord = useRef()
  
  async function getWord(){
      console.log( `[getWord] called, fetching word to display` )
      // with package.json "proxy" --> redirects these requests it can't
      // handle to the proxy (aka localhost:8080 which is the node server)
      const apiResult = await Utils.apiCall( '/api/words' )
      console.log( apiResult)
      if( apiResult.status ){
        setRandomWord( apiResult.word )
      }
  }

  async function saveWord(){
    const newWord = refNewWord.current.value
    console.log( `[saveWord] called, newWord=${newWord}` )

    const apiResult = await Utils.apiCall( '/api/words','post', { newWord } )
    console.log( apiResult)
    if( apiResult.status ){
      setRandomWord( newWord )
    } else {
      alert( 'sorry a problem happened', apiResult.error )
    }

  }
  useEffect( function(){
    getWord()
  }, [] )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <div class="input-group mb-3">
              <input value={randomWord} type="text" class="form-control" />
              <button onClick={getWord} class="btn btn-outline-secondary" type="button">Get New Word</button>
          </div>

          <div class="input-group mb-3">
              <input ref={refNewWord} type="text" class="form-control" />
              <button onClick={saveWord} class="btn btn-outline-secondary" type="button">Save Word</button>
          </div>

        </form>
      </header>
    </div>
  );
}

export default App;
