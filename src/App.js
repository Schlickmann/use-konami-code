import React from 'react';
import useKonamiCode from './useKonamiCode';

import './App.css';

function App() {
  const callback = () => console.log('You rock!!');
  const newSequence = ['j','u','l','i','a','n','i'];

  const { sequence, rightSequence } = useKonamiCode(newSequence, callback);

  return (
    <div className="App">
      <h1>Konami Code</h1>

      <img 
        src="https://i.kym-cdn.com/entries/icons/facebook/000/000/269/_Wx_cnDKcPkJfSHo5G-2zSY7pBOxVhc9otMiTNQqoXc.jpg" 
        alt="Konami Code"
        height={500}
      />

      <ul>
        {sequence.map((key, index) => <li key={index}>{key}</li>)}
      </ul>

      {rightSequence && <h2>Congratulations! You got it!!</h2>}
    </div>
  );
}

export default App;
