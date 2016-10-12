
var notACharErrorName = "NotACharError";
var notAStringErrorName = "NotAStringError";
var notANumberErrorName = "NotANumberError";
var invalidInputErrorName = "InvalidInputError";

var hello = "hello";
var a = "a";

// try {
//   arr = stringToNumArray("hello");
//   print(arr);
// } catch(error){
//   print(error.message);
// }


// print (numToArray(3462354));
// print (analyzeNumArray([1,2,3,7]));

print (analyzeStringsWithSpaces("Percival Benjamin Moser IV"));

/**
* utility function for console.log()
*
* @param string {string} - the string to console.log()
*/
function print(string){
  console.log(string);
}

/**
* Convert a character into a number with a = base
*
* @param char {string} - char to convert
* @return numerologyValue {number} - numerological value of the letter
* @throws NotAStringError {error} - thrown if a non-string is passed to the function
* @throws NotACharError {error} - thrown if a string of length greater than 1 is passed to the function
*/
function charToNum(char){
  if (typeof char == "string"){
    if (char.length == 1){
      var numerologyValue = ((char.toLowerCase().charCodeAt(0) - 97) % 9) + 1
      return numerologyValue;
    } else {
      throw {name: notACharErrorName, message: "ERROR: You can only pass a single char to charToNum()"};
    }
  } else {
    throw {name: notAStringErrorName, message: "ERROR: You must pass a string to charToNum()"};
  }
}

/**
* Convert a string to an array of numerological values
*
* @param string {string} - the string to Convert
* @return retArray {array} - an array of numerological values corresponding to the passed string
* @throws NotAStringError {error} - thrown if a non-string is passed to the function
*/
function stringToNumArray(string){
  if (typeof string == "string"){
    var retArray = [];
    string.split('').forEach(function(char, index){
      retArray.push(charToNum(char));
    });
    return retArray;
  } else {
    throw {name: notAStringErrorName, message: "ERROR: You must pass a string to stringToNumArray()"};
  }
}

/**
* Numerologically analyzes an numerological representation of a string
*
* @param array {array} - numerological array to analyze
* @return numValue {number} - calculated numerological value of the passed array
*/
function analyzeNumArray(array){
  // print(array);
  var sum =  array.reduce(function(total, current){
    return total += current;
  }, 0);
  // print(sum);
  if (sum > 9){
    return analyzeNumArray(numToArray(sum));
  } else {
    return sum;
  }
}

/**
* Converts a number to an array representation
*
* e.g. 9342 converts to [ 9 , 3 , 4 , 2 ]
* @param number {number} - the number to convert to an array representation
* @return retArray {array} - an array representation of the passed number
* @throws NotANumberError {error} - thrown if a non-number is passed to the function
*/
function numToArray(number){
  if (typeof number == "number"){
    arr = [];
    number.toString().split('').forEach(function(char, index){
      arr.push(parseInt(char));
    });
    return arr;
  } else {
    throw {name: notANumberErrorName, message: "ERROR: You must pass a number to numToArray()"};
  }
}


function analyzeString(string){
  print("analyzing string: " + string);
  if (typeof string == "string"){
    if (string.includes(" ")){
      throw {name: invalidInputErrorName, message: "ERROR: Invalid input; you must pass a string with no spaces to analyzeString()"};
    } else {
      return analyzeNumArray(stringToNumArray(string));
    }
  } else {
    throw {name: notAStringErrorName, message: "ERROR: You must pass a string to analyzeString()"};
  }
}

function analyzeStringsWithSpaces(string){
  retArray = [];
  var delimiter = '*|*';
  string.split(/(\s+)/).filter(function(e) { return e.trim().length > 0; } ).forEach(function(str, index){
    a = analyzeString(str);
    retArray.push(a);
  });
  return retArray;
}
