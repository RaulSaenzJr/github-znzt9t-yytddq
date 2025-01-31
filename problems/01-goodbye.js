/*
Write a function goodbye(name) that takes in a string name and returns a
string saying bye to that name. See the examples below.
*/

function goodbye(firstName) {
  return `Bye ${firstName}.`;
}

console.log(goodbye('JR'));

// console.log(goodbye("Daniel"));  // => "Bye Daniel."
// console.log(goodbye("Mark"));    // => "Bye Mark."
// console.log(goodbye("Beyonce")); // => "Bye Beyonce."

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = goodbye;
