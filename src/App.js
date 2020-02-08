import React from 'react';
import useFitText from './useFitText';
import ReactFitText from './ReactFitText';
import './App.css';

function App() {
  const headerRef = useFitText(1.104);
  const mainRef = useFitText(1.776);
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-heading-wrapper">
          <h1 ref={headerRef} className="Header-heading">
            Lorem ipsum dolor sit amet consetus
          </h1>
        </div>
        <ReactFitText compressor={1.104} width={'38.33%'}>
          <h1 className="Header-heading" style={{ color: 'tomato' }}>
            Lorem ipsum dolor sit amet consetus
          </h1>
          <h1 className="Header-heading" style={{ color: 'cyan' }}>
            Lorem ipsum dolor sit amet consetus
          </h1>
        </ReactFitText>
      </header>
      <main className="App-main">
        <div className="Main-heading-wrapper">
          <h2 ref={mainRef} className="Main-heading">
            Lorem ipsum dolor sit, conse ctetur adipiscing elit ut aliquam.
          </h2>
        </div>
        <ReactFitText compressor={1.776} width={'51.8%'}>
          <h2 className="Main-heading" style={{ color: 'tomato' }}>
            Lorem ipsum dolor sit, conse ctetur adipiscing elit ut aliquam.
          </h2>
        </ReactFitText>
      </main>
    </div>
  );
}

export default App;
