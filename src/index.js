
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!(matrix) || (matrix.length == 0)) return [];

  let result = [];
  let index = 1;

  for (let arr of matrix) {
      index++;
      if ((index % 2) == 0) result = result.concat(arr, );
      else result = result.concat(arr.reverse(), );
  }

  return result

}
