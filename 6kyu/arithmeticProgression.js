// An Arithmetic Progression is defined as one in which there is a constant progression between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.
//
// You have to write the function findMissing(list), list will always be at least 3 numbers. The missing term will never be the first or last one.
//
// Example: findMissing([1,3,5,9,11]) == 7

//input: array
//output: missing element
//empty case: return undefined.

var findMissing = function (list) {
  let progression = (list[list.length - 1] - list[0]) / list.length
  let missingElement;

  //find missing element
  list.forEach((currentVal, index) => {
    if (currentVal + progression === list[index + 1] - progression) {
        missingElement = currentVal + progression;
    }
  });

return missingElement;
}
