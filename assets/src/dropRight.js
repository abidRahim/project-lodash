function dropRight(arr, num) {
  if(num > 0) {
  const filterArr = arr.slice(-num);
    return arr.filter(val => !filterArr.includes(val));
  } else {
    return arr;
  }
}