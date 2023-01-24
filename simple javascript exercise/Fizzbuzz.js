var arrayOne =[];

function Fizzbuzz(){
    for(let i=1; i<= 100; i++){
        if(i%3===0 && i%5===0){
            arrayOne.push("fizzbuzz");
        }else if(i%3===0){
            arrayOne.push("fizz");

        }else if(i%5===0){
            arrayOne.push("buzz");
        }
        else{
            arrayOne.push(i);
        }
    }
}
Fizzbuzz();

// this print values in the array 
alert(arrayOne);