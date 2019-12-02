import React from 'react';
import './axis.css';

const Axis = (props) => {
    
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
     
    return (<table className="table" width="100%">
              {tableBody}
            </table>) 
};

export default Axis;