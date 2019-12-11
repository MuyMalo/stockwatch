import React from 'react';
import './candlestick-chart.css';
import Axes from './axes';

const CandlestickChart = (props) => {
    

  let url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo"

  var jsonData = fetch(url).then(
    function(res){ return res.json();}
  )
  
  //outputs a promise object?
  console.log(jsonData);
  
    var tableData = {
        columns: ['Service', '', 'Unit', '', '', '', '', '', '', ''],
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
        <div className="container">
            <Axes data={tableData} />
            <div className="candlesticks">
                
            </div>

        </div>
    )
}

export default CandlestickChart;