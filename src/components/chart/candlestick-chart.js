import React from 'react';
import './candlestick-chart.css';
import Axis from './axis';

const CandlestickChart = (props) => {
    
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
        <div className="container">
            <Axis data={tableData} />
            <div className="candlesticks">
                
            </div>

        </div>
    )
}

export default CandlestickChart;