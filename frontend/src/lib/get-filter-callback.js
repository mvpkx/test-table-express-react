import formatToLowerString from './format-to-lower-string';

function getFilterCallback({ filterCondition, filterColumn, filterValue }) {
  if (filterCondition === 'equal') {
    return (item) => formatToLowerString(item[filterColumn]) === formatToLowerString(filterValue);
  } if (filterCondition === 'includes') {
    return (item) => formatToLowerString(item[filterColumn])
      .includes(formatToLowerString(filterValue));
  } if (filterCondition === 'more') {
    return (item) => item[filterColumn] > filterValue;
  } if (filterCondition === 'less') {
    return (item) => item[filterColumn] < filterValue;
  }
  return () => {};
}

export default getFilterCallback;
