import React from 'react';
import './App.css';
import { TableauViz } from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Tableau Viz
        <TableauViz
          url="https://public.tableau.com/views/COVID-19DataHubGlobalTracker/GLOBAL?:language=en&:embed=y&:origin=viz_share_link&:toolbar=n&:display_count=y&publish=yes"
        />
      </header>
    </div>
  );
}

export default App;
