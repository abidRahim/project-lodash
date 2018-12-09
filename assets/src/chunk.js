function chunk(arr, size) {
  let newArr = [];

  for(let i = 0; i < arr.length; i += size) {    
    let temp = arr.slice(i, i + size);
    newArr.push(temp);
  }

	return newArr;
}