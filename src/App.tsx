import React from 'react';
import './App.css';
import lifeguard from './Lifeguard.mp3';
import MultiplePlayers from './MultiplePlayers';

function App() {
  return <MultiplePlayers songs={[lifeguard, lifeguard]} />;
}

export default App;
