import React, { useContext } from 'react';
import WidgetContext from '../widget-context';
import styles from './Filter.module.css';

function Filter() {
  const { state, dispatch } = useContext(WidgetContext);
  const {
    columns, filterColumn, filterCondition, filterValue,
  } = state;

  const handleFilterColumnChange = (event) => {
    const { value } = event.target;
    dispatch({ type: 'UPDATE_FILTER', payload: { filterKeyName: 'filterColumn', value } });
  };

  const handleFilterConditionChange = (event) => {
    const { value } = event.target;
    dispatch({ type: 'UPDATE_FILTER', payload: { filterKeyName: 'filterCondition', value } });
  };

  const handleFilterValueChange = (event) => {
    const { value } = event.target;
    dispatch({ type: 'UPDATE_FILTER', payload: { filterKeyName: 'filterValue', value } });
  };

  return (
    <div className={styles.container}>
      <span className={styles.text}>
        Фильтр:
      </span>
      <select
        className={styles.select}
        onChange={handleFilterColumnChange}
        value={filterColumn}
      >
        <option value="" className={styles.empty_option}>Столбец</option>
        {columns.map((header, index) => (
          <option key={index} value={index}>
            {header}
          </option>
        ))}
      </select>
      <select
        className={styles.select}
        onChange={handleFilterConditionChange}
        value={filterCondition}
      >
        <option value="" className={styles.empty_option}>Условие</option>
        <option value="equal">Равно</option>
        <option value="includes">Содержит</option>
        <option value="more">Больше</option>
        <option value="less">Меньше</option>
      </select>
      <input
        onChange={handleFilterValueChange}
        placeholder="Значение"
        className={styles.input}
        value={filterValue}
      />
    </div>
  );
}

export default Filter;
