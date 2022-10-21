import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import Filter from './filter/Filter';
import Table from './table/Table';
import styles from './Widget.module.css';
import Paginator from './paginator/Paginator';
import { initialState, reducer } from './reducer';
import WidgetContext from './widget-context';
import API from '../../api/api';

function Widget() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const apiUrl = `${API}/api/items`;
    axios.get(apiUrl).then((resp) => {
      dispatch({ type: 'LOAD_LIST', payload: resp.data });
    });
  }, []);

  return (
    <div className={styles.container}>
      <WidgetContext.Provider value={{ state, dispatch }}>
        <Filter />
        <Table />
        <Paginator />
      </WidgetContext.Provider>
    </div>
  );
}

export default Widget;
