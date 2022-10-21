function splitToPages(list, itemsPerPage) {
  const totalPages = Math.ceil(list.length / itemsPerPage) || 1;
  const pages = [];

  for (let i = 0; i < list.length; i += itemsPerPage) {
    pages.push(list.slice(i, i + itemsPerPage));
  }

  return { pages, totalPages };
}

export default splitToPages;
