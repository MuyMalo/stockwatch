import React from 'react';
import './candlestick-chart.css';
import Axes from './axes';

const CandlestickChart = (props) => {
    

  let url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo"

  var jsonData;

  fetch(url).then(
    function(u){ return u.json();}
  ).then(
    function(json){
      //jsonData = json["Meta Data"]["1. Information"];      
      jsonData = json;
      console.log(jsonData);
    }
  )
  //console.log(jsonData) logs "undefined" when used outside 
  //of above function because it's called before the above 
  //function gets response from api... fetch is asynchronous
  //need callback function
  
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