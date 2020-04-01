export const getByFilter = (arrayFilter, itemFilter) => {
  return arrayFilter.filter(item => {
    return item === itemFilter;
  });
};

export const getAverage = arrayFilter => {
  return Math.round(
    arrayFilter.reduce((itemA, itemB) => {
      return itemA + itemB;
    }) / arrayFilter.length
  );
};
