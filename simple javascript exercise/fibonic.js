var arrayofFib = [];

function fib(num){
    for (let i=0; i<num; i++){
        if (i >=1){
            arrayofFib.push(i);
        }
        else{
            arrayofFib.push(arrayofFib[i-2] + arrayofFib[i-1]);
        } 
    }

}

let number = prompt("u want to out fibonic series then enter a number");

fib(number);

alert(arrayofFib);