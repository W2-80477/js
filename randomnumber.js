let a = Math.random()*100;
a= Number.parseInt(a);
let input;
let score =100;

while (input !=a) {
  score =score-1;
  input =prompt("Enter the number :");
  
  if(input==a){
    console.log("congarets : you guess the number");
    console.log(`you guess the actual number in ${100-score} chance`);
  }else if(input>a && input<100){
    console.log("your number is grater than the actual number") ; 
  }else if (input <a && input>0){
    console.log("your number is less than the actual number");
  }else {
    console.log("Enter the number 1 to 100");
  }
  
}