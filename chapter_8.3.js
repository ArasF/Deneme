function max(first=-Infinity, ...rest) {
    let maxValue = first; // Start by assuming the first arg is biggest
// Then loop through the rest of the arguments, looking for bigger
    for(let n of rest) {
        if (n > maxValue) {
            maxValue = n;
        }
    }
// Return the biggest
    return maxValue;
}
let a=max(1, 10, 100, 2, 3, 1000, 4, 5, 6) // => 1000
console.log(a);

let numbers = [5, 2, 10, -1, 9, 100, 1];
console.log(Math.min(...numbers));
const operators = {
    add: (x,y) => x+y,
    subtract: (x,y) => x-y,
    multiply: (x,y) => x*y,
    divide: (x,y) => x/y,
    pow: Math.pow // This works for predefined functions too
};
console.log(operators.add(5,6));