function getLengthOfMissingArray(arrayOfArrays) {
  let sortedArray = arrayOfArrays.sort(function(a, b) {
    return a.length - b.length;
  });

  if (sortedArray.length === 0 || sortedArray[0].length === 0) {
    return 0;
  }

  for (let i = 0; i < sortedArray.length - 1; i++) {
    if (sortedArray[i + 1].length - sortedArray[i].length === 2) {
      return sortedArray[i].length + 1;
    }
  }
}

getLengthOfMissingArray();

// i: array of arrays
// o: number - length of missing array
// e: len of any array (within array) is 0, return 0.
//    if input array empty return 0

// let sortedArray = sort array of arrays using sort ( len(a) - len(b) )
// if sortedarray.length === 0 OR sortedArray[0].length === 0
  // return 0
// iterate through sortedArray with for loop till 2nd to last
  // if sortedArray[i].length is not 1 less than sortedArray[i+1].length
    // return sortedArray[i].length + 1
