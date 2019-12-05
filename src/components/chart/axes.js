import React from 'react';
import './axes.css';

const Axes = (props) => {
    
    var dataColumns = props.data.columns;
    var dataRows = props.data.rows;

    var tableBody = dataRows.map(function(row) {
      return (
        //was getting validateDOMNesting error without
        //tbody, tr cannot be child of table
        <tbody>
          <tr>
            {dataColumns.map(function(column) {
              return <td></td>; })}
          </tr>
        </tbody>); 
    });
     
    return (<table className="table">
              {tableBody}
            </table>) 
};

export default Axes;