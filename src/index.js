module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  let resArr = [];
  matrix.forEach((a, i) => i % 2 === 0 ? resArr.push(...a) : resArr.push(...(a.reverse())));
  return resArr;
}
