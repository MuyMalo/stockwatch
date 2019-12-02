import React from 'react';

import CandlestickChart from './components/chart/candlestick-chart.js';
import Axis from './components/chart/axis.js';

function App() {
  //url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo"
  var tableData = {
    columns: ['Service', 'Cost/Unit', 'Unit', 'Units Requested'],
    rows: [{
      'Service': 'Veterinary Assitance',
      'Cost/Unit': 50,
      'Unit': '1 Hour',
      'Units Requested': 12
    }, {
      'Service': 'Veterinary Assitance',
      'Cost/Unit': 50,
      'Unit': '1 Hour',
      'Units Requested': 12
    }, {
      'Service': 'Veterinary Assitance',
      'Cost/Unit': 50,
      'Unit': '1 Hour',
      'Units Requested': 12
    }, {
      'Service': 'Veterinary Assitance',
      'Cost/Unit': 50,
      'Unit': '1 Hour',
      'Units Requested': 12
    }, {
      'Service': 'Veterinary Assitance',
      'Cost/Unit': 50,
      'Unit': '1 Hour',
      'Units Requested': 12
    }, {
      'Service': 'Veterinary Assitance',
      'Cost/Unit': 50,
      'Unit': '1 Hour',
      'Units Requested': 12
    }, {
      'Service': 'Veterinary Assitance',
      'Cost/Unit': 50,
      'Unit': '1 Hour',
      'Units Requested': 12
    }, {
      'Service': 'Veterinary Assitance',
      'Cost/Unit': 50,
      'Unit': '1 Hour',
      'Units Requested': 12
    }, {
      'Service': 'Veterinary Assitance',
      'Cost/Unit': 50,
      'Unit': '1 Hour',
      'Units Requested': 12
    }, {
      'Service': 'foo',
      'Unit': null,
      'Cost/Unit': undefined,
      'Units Requested': 42
    }]
  };

  return (
    <div className="App">
      <CandlestickChart>
        <Axis data={tableData} />
      </CandlestickChart>
    </div>
  );
}

export default App;
