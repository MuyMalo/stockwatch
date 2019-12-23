import React, { useState, useEffect } from 'react';
import './axes.css';

const useFetch = (url) => {
  const [data, updateData] = useState(undefined);

  // empty array as second argument equivalent to componentDidMount
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      updateData(json);
    }
    fetchData();
  }, [url]);

  return data;
};

const xAxis = (props) => {
  var count = Object.keys(props.data).length;

  //TODO iterate through keys in object
  //create invisible lines for every key that become visible on hover
  //create visible lines for every 10th key
  //output date of every tenth key to display below lines
}

const yAxis = (props) => {
  const data = props.data;
  
  //TODO iterate through keys in object to find
  //highest and lowest values
  //
}

const Axes = (props) => {
  
  const response = useFetch(props.data);
  const data = response["Time Series (Daily)"];

  return (
    <div className="axes">
      <yAxis data={data} />
      <xAxis data={data} />
    </div>
  ) 
};

export default Axes;