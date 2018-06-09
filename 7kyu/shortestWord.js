// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


function findShort(s){
  //input string
  //output shortest word in string
  
  var splitString = s.split(' '); //split string into array of strings
  var shortestString = splitString[0]; //initialize shortest string
  
  for (var i = 0; i < splitString.length; i++) {
    if (splitString[i].length < shortestString.length) {
      shortestString = splitString[i];
    }
  }
  return shortestString.length;
}