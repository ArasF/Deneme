/*function printprops(o){
    for (let p in o){
        console.log("${p}: ${o[p]}\n");
    }
}*/

/*function factorial(x){
    let fact=1;
    while (x>0){
        fact*=x;
        x--;
    }
    return fact;
}
console.log(factorial(5))

function distance(x1,x2,y1,y2){
    let dx=x2-x1;
    let dy=y2-y1;
    return  Math.sqrt(dx*dx+dy*dy);
}

console.log(distance(5,7,7,9));

function multiply(x,y){
    console.log(x*y);
}
multiply(5,8);

function toCelcius(fahreneit){
    let a=((5 / 9) * (fahreneit - 32))
    if (fahreneit<-459.17){
        console.log("This degree is below multiple zero and it is impossible ");
    }
    else if (fahreneit== -459.17){
        console.log(`This degree is multiple zero and it is ${a} Celcius `);
    }
    else {
        return a;
    }
}
console.log(toCelcius(-459.17));*/
const sum =(x,y) => {return x+y};

const polynom = x => x*x+2*x+3;
const constantFunc =() => 42;
console.log(constantFunc())
const sum1= (x,y) => x+y;
console.log(sum1(3,5));

//NESTED FUNCTIONS

function hypotenuse(a,b){
    const square = x => x*x;
    return Math.sqrt(square(a)+square(b));

}
console.log(hypotenuse(3,4));