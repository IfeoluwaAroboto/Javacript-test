/*Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

 */
//Example 3:
let num =  123
output = 12
let numberOfSteps =  (num) => {
  let newNum = 0;
  
  while (num > 0) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num -= 1;
    }
    newNum++;
  }

  return newNum;
};

console.log(numberOfSteps())

