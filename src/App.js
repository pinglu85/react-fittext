import React from 'react';

import useFitText from './useFitText';
import './App.css';

function App() {
  const headerRef = useFitText(1.104);
  const mainRef = useFitText(1.776);
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-heading-wrapper">
          <h1 ref={headerRef}>Lorem ipsum dolor sit amet consetus</h1>
        </div>
      </header>
      <main className="App-main">
        <div className="Main-heading-wrapper">
          <h2 ref={mainRef}>
            Lorem ipsum dolor sit, conse ctetur adipiscing elit ut aliquam.
          </h2>
        </div>
      </main>
    </div>
  );
}

export default App;
