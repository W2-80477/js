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
// greet(1);



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


// find the first product naturl number

// function product(n){
//     let prod=1;
//     for(let i=1; i<n ; i++){
//         prod=prod*i;

//     }
//     return prod;

// }
// console.log( product(1));

//find the sum of first natural number
// function natural_number(n){
//   let sum=0;
//   for(let i=1; i<=n; i++){
//     sum +=i;
//   }
//   return sum;
// }
// console.log(natural_number(5))

// function sum(n){
// if (n==6) {
//     return 0;
// }else{
//     return n+sum(n+1);
// }
// }
// console.log(sum(1));




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

// function fibonacci(n){
//     if(n < 2) return n
//     return fibonacci(n-1) + fibonacci(n-2)
//    }
   
//    const num = 7;
   
//    for(let i = 0; i<num;  ++i){
//     console.log(fibonacci(i))
//    }



//    function range(n){
//     if(n===5){
       
//     }else{
//         console.log(n);
//         n++;
//         range(n)
//     }
// }
// range(0)