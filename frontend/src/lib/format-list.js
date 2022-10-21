import formatDate from './format-date';

function formatList(list) {
  const rows = list.map((row) => (
    Object.values({ ...row, date: formatDate(row.date) })
  ).slice(1));
  const columns = ['Дата', 'Наименование', 'Количество', 'Расстояние'];

  return { columns, rows };
}

export default formatList;
