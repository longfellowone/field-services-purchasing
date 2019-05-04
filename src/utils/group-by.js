export const groupBy = func => array =>
  array.reduce((acc, cur) => {
    const key = func(cur);
    acc[key] = (acc[key] || []).concat(cur);
    return acc;
  }, {});
