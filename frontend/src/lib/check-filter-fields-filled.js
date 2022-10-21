function checkFilterFieldsFilled({ filterColumn, filterCondition, filterValue }) {
  if (filterColumn && filterCondition && filterValue) {
    return true;
  }
  return false;
}

export default checkFilterFieldsFilled;
