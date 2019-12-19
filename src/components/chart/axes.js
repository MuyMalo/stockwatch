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

const Axes = (props) => {
  
  const data = useFetch(props.data);

  var dataColumns = data["Time Series (Daily)"];
  var dataRows = props.data.rows;

  var tableBody = dataRows.map(function(row, i) {
    return (
      <tr key={i}>
        {dataColumns.map(function(column) {
          return <td></td>; })}
      </tr>
    ); 
  });
    
  return (<table className="table">
            <tbody>{tableBody}</tbody>
          </table>) 
};

export default Axes;