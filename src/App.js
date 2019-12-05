import React from 'react';

import CandlestickChart from './components/chart/candlestick-chart.js';

function App() {
  //url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo"
  

  return (
    <div className="App">
      <CandlestickChart />
      <CandlestickChart />
    </div>
  );
}

export default App;
