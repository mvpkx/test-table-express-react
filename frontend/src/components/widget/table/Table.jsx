import React, { useContext } from 'react';
import WidgetContext from '../widget-context';
import styles from './Table.module.css';
import TableRow from './TableRow/TableRow';

function Table() {
  const { state } = useContext(WidgetContext);
  const { columns, pages, currentPageNumber } = state;

  return (
    <table className={styles.container}>
      <thead>
        <tr>
          {columns.map((title, index) => (
            <th
              key={index}
              className={styles.header}
            >
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {!!pages.length && pages[currentPageNumber - 1].map((row, index) => (
          index % 2 === 1 ? (
            <TableRow
              key={index}
              row={row}
              className={styles.even}
            />
          ) : (
            <TableRow
              key={index}
              row={row}
            />
          )))}
      </tbody>
    </table>
  );
}

export default Table;
