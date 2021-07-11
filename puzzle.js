function random_array_generator(size){
 let    matrix= Array.from({length: size}, () => Math.floor(Math.random() * size));
return matrix;
}
function sequential_number_founder(matrix, number){
    let str=matrix.join("");
    if (str.includes(number)){
    console.log("Found!");
    }
    else {
        console.log("Cannot found!");
    }
}
let a=30;
let k= random_array_generator(a);

for (let i of k){
    console.log(i);
}
sequential_number_founder(k,125);

