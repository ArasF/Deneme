function random_array_generator(size){
    let    matrix= Array.from({length: size}, () => Math.floor(Math.random() * size));
    return matrix;
}
function asciiFounder(matrix){
    let sentence;
   for (let text of matrix){
       let a= String.fromCharCode(text);
       sentence+=a;
   }
   //string to char ready code
return sentence;
}
let a=300;
let k= random_array_generator(a);

for (let i of k){
    console.log(i);
}
console.log(asciiFounder(k));

