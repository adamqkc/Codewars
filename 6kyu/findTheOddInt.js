// Given an array, find the int that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.


function findOdd(array) {
  //happy coding!
  for (let i = 0; i < array.length; i++) {
    let counter = 0;

    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        counter++;
      }
    }

    if (counter % 2 !== 0) {
      return array[i];
    }
  }
}
