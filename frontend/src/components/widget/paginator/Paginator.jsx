import React, { useContext } from 'react';
import WidgetContext from '../widget-context';
import styles from './Paginator.module.css';

function Paginator() {
  const { state, dispatch } = useContext(WidgetContext);
  const { totalPages, itemsPerPage, currentPageNumber } = state;

  const handleSelectChange = (event) => {
    const { value } = event.target;
    dispatch({ type: 'UPDATE_ITEMS_PER_PAGE', payload: Number(value) });
  };

  const handleNextPageClick = () => {
    dispatch({ type: 'UPDATE_CURRENT_PAGE', payload: { next: true } });
  };

  const handlePrevPageClick = () => {
    dispatch({ type: 'UPDATE_CURRENT_PAGE', payload: { next: false } });
  };

  return (
    <div className={styles.container}>
      <div>
        <span
          className={styles.text}
        >
          Строк на странице:
        </span>
        <select
          value={itemsPerPage}
          onChange={handleSelectChange}
          className={styles.select}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
      <div>
        <button
          type="button"
          className={styles.button}
          onClick={handlePrevPageClick}
        >
          {'<'}
        </button>
        <span
          className={styles.text}
        >
          {`Страница ${currentPageNumber} из ${totalPages}`}
        </span>
        <button
          type="button"
          className={styles.button}
          onClick={handleNextPageClick}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
}

export default Paginator;
