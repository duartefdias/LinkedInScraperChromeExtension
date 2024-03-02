import React from 'react';
import './App.css';

import { executeScript, executeActionOnCurrentTab } from './chrome';
import { getUserDisplayName } from './functions/scrape';

function App() {
  const [displayName, setDisplayName] = React.useState<any>("");

  const buttonClick = async () => {

    executeActionOnCurrentTab(getUserDisplayName)
    .then((response) => {
      console.log("Data", response)
      setDisplayName(response)
    })
    
  }

  return (
    <>
      <div className='header'>
        <button onClick={buttonClick}>Fetch profile data</button>
        <img src="../images/robot-32.png" alt="Extension logo" />
      </div>
      <div>
        <span>Profile name: {displayName}</span>
      </div>
    </>
  );
}

export default App;
