// let a=1;
// let b=2;
// let c=a+b;

// if(c%2==0){
//     console.log("even");
// }else{
//     console.log("odd");
// }

//infinite
// function greet(){
//     console.log("hello");
//     greet();
// }
// // greet()


// whole number

// function greet(i){
//     if(i===5){
//         return;
//     }else{
//         console.log(i);
//         i++;
//         greet(i);
//     }
// }
// greet(0);



// product 5  natural number

// function product(prod){
// if(prod===6){
//     return 1;
// }else{
//     return prod * product(prod-1);
// }
// }
// console.log(product(5));

// factorial number
// function fact(x){
//     if(x==0){
//         return 1;
    
//     }else{
//         return x*fact(x-1);
//     }
// }
// console.log(fact(5));


// print revrce number 
// function countnumber(number){
//     console.log(number)
// let newNumber=number-1;
// if(newNumber>0){//base case
//     countnumber(newNumber)
    
// }

// }
// countnumber(100)


// fibonacci series
// function fibonacci(n){
//     if(n===1){
//         return [0,1]
//     }else{
//         let a=fibonacci_series(n-1);
//         a.push(a[a.length-1]+a[a.length-2]);
//         return a;
//     }
// }
// console.log(fibonacci_series(8));

function fibonacci(n){
    if(n < 2) return n
    return fibonacci(n-1) + fibonacci(n-2)
   }
   
   const num = 7;
   
   for(let i = 0; i<num;  ++i){
    console.log(fibonacci(i))
   }