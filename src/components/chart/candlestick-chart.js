import React from 'react';
import './candlestick-chart.css';
import Axes from './axes';

const CandlestickChart = (props) => {
    
  let url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo"

  return (
    <div className="container">
        <Axes data={url} />
        <div className="candlesticks">
          
        </div>
    </div>
  )
}

export default CandlestickChart;