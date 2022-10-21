import React from 'react';

function TableRow({ row, className = '' }) {
  return (
    <tr className={className}>
      {row.map((cell, index) => (
        <td
          key={index}
        >
          {cell}
        </td>
      ))}
    </tr>
  );
}

export default TableRow;
