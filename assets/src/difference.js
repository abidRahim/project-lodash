function difference(arr, value) {
  let values = [...value];
  let newArr = arr.filter( val => {
    return !values.includes(val);
  });

  return newArr;
}