function factorial(x){
    let product=1;
    while (x>1){
        product*=x;
        x--;
    }
    return product;
}

console.log(factorial(5))