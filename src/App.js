import React from 'react';
import './App.css';
import Hello from './Hello';
import Cars from './Cars';

const cars = [
  { id: 1, make:'Ford'},
  { id: 2, make: 'BMW'},
  { id: 3, make: 'Audi'},
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello />
        <Cars cars={cars} />
      </header>
    </div>
  );
}

export default App;
