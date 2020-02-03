import React from 'react';

import useFitText from './useFitText';
import './App.css';

function App() {
  const [ref] = useFitText(1.776);
  return (
    <div className="App">
      <header className="App-header">
        <div className="Heading-wrapper">
          <h1 ref={ref}>
            Lorem ipsum dolor sit, conse ctetur adipiscing elit ut aliquam.
          </h1>
        </div>
      </header>
    </div>
  );
}

export default App;
