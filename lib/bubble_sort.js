function swap(array, idx1, idx2) {
  let temp = array[idx1];     // save a copy of the first value
  array[idx1] = array[idx2];  // overwrite the first value with the second value
  array[idx2] = temp;         // overwrite the second value with the first value
}

// Use this pseudocode to implement the bubble sort
function bubbleSort(array) {
  let sorted = false;
  
  while(!sorted) {
    sorted = true;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i+1]) {
        // swap(array, i, i+1);
        [array[i], array[i+1]] = [array[i+1], array[i]]
        sorted = false;
      }
    }
  }
  return array;
}


module.exports = {
  bubbleSort,
  swap
};
