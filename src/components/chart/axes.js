import React from 'react';
import './axes.css';

const Axes = (props) => {

  
    
    var dataColumns = props.data.columns;
    var dataRows = props.data.rows;

    //was getting error that each child didn't have a key...
    //added i as second parameter in function to give
    //key to each row of table, not sure why it works
    //but error is gone
    var tableBody = dataRows.map(function(row, i) {
      return (
          <tr key={i}>
            {dataColumns.map(function(column, i) {
              return <td key={i++}></td>; })}
          </tr>
        ); 
    });
    //was getting validateDOMNesting error without
    //tbody, tr cannot be child of table
    return (<table className="table">
              <tbody>{tableBody}</tbody>
            </table>) 
};

export default Axes;