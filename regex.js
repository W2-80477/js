// const pattern= /\w\s\w/;
// const input ="Hello World";
// const result= pattern.test(input);
// console.log(result);

// const pattern = /ind/;
// const input = "Find me"
// const res = input.search(pattern);
// console.log(res);

// const pattern=/[^abc]/;
// const input="afksncdd";
// const result = pattern.test(input);
// console.log(result);

// const pattern=/gr[ae]y/;
// const input ="gray";
// const result = pattern.test(input);
// console.log(result);

// replaced mathod
// const pattern=/gr[ae]*y/;
// const input = "hello gry gry";
// const result = input.replace(pattern"replace");
// console.log(result);

// const pattern=/gr[ae]*y/g;//g: global
// const input = "hello gry gry";
// const result = input.replace(pattern,"replace");
// console.log(result);

// let  pattern =/[a-d]/;
// let input ="f";
// let result = pattern.test(input)
// console.log(result);


// create email

// let pattern=/\S+@[a-z]+.[a-z]+/;
// let input="satyamkumar.sk786@gmail.com";
// let result=pattern.test(input);
// console.log(result);

const pattern = /\S+@[a-z]+.\S+/;
const input = "ada@gmail.com"
const res = pattern.test(input);
console.log(res);
console.log("satyam");
