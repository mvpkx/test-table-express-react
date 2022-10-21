import checkFilterFieldsFilled from '../../lib/check-filter-fields-filled';
import formatList from '../../lib/format-list';
import getFilterCallback from '../../lib/get-filter-callback';
import splitToPages from '../../lib/split-to-pages';

export const initialState = {
  itemsPerPage: 5,
  currentPageNumber: 1,
  totalPages: 1,
  rows: [],
  filteredRows: [],
  pages: [],
  columns: [],
  filterColumn: '',
  filterCondition: '',
  filterValue: '',
};

export function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case 'LOAD_LIST': {
      const { columns, rows } = formatList(payload);
      const filteredRows = rows;
      const { pages, totalPages } = splitToPages(rows, state.itemsPerPage);

      return {
        ...state,
        totalPages,
        filteredRows,
        rows,
        pages,
        columns,
      };
    }

    case 'UPDATE_ITEMS_PER_PAGE': {
      const itemsPerPage = payload;
      const { pages, totalPages } = splitToPages(state.filteredRows, itemsPerPage);

      return {
        ...state,
        itemsPerPage,
        currentPageNumber: 1,
        totalPages,
        pages,
      };
    }

    case 'UPDATE_CURRENT_PAGE': {
      const { next } = payload;
      const notLast = state.currentPageNumber !== state.totalPages;
      const notFirst = state.currentPageNumber !== 1;

      if (next && notLast) {
        return {
          ...state,
          currentPageNumber: state.currentPageNumber + 1,
        };
      } if (!next && notFirst) {
        return {
          ...state,
          currentPageNumber: state.currentPageNumber - 1,
        };
      }
      return state;
    }

    case 'UPDATE_FILTER': {
      const { filterKeyName, value } = payload;
      const { filterColumn, filterCondition, filterValue } = { ...state, [filterKeyName]: value };
      const filterSettings = { filterColumn, filterCondition, filterValue };

      if (checkFilterFieldsFilled(filterSettings)) {
        const filteredRows = state.rows.filter(getFilterCallback(filterSettings));
        const { pages, totalPages } = splitToPages(filteredRows, state.itemsPerPage);
        return {
          ...state,
          [filterKeyName]: value,
          filteredRows,
          currentPageNumber: 1,
          totalPages,
          pages,
        };
      }

      const filteredRows = state.rows;
      const { pages, totalPages } = splitToPages(filteredRows, state.itemsPerPage);
      return {
        ...state,
        pages,
        totalPages,
        filteredRows,
        [filterKeyName]: value,
      };
    }

    default:
      return state;
  }
}
