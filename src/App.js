import React from 'react';

import CandlestickChart from './components/chart/candlestick-chart.js';

function App() {
  let url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo"

  let jsonData;    
  fetch(url).then(
    function(u){ return u.json();}
  ).then(
    function(json){
      jsonData = json;
    }
  )

  console.log(JSON.stringify(jsonData));

  return (
    <div className="App">
      <CandlestickChart />
      <CandlestickChart />
    </div>
  );
}

export default App;
