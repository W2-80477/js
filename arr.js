let num=[2,4,35,6,,7];
let b=num.toString();// convert string 
delete num[1];// delete is the object 
  
// console.log(num);

// console.log(typeof(b));

// sort ....in order 
let compaire = (a,b)=>{
    return a-b;
}
num.sort(compaire);



// use foreach ()... loop
// alwayes return Array
let arr=[2,4,35,6,7,8];
arr.forEach(element => {
    // console.log(element+element)
});

// MAP: used for creat a new array
let q  =arr.map((value)=>{
    return value+1;
})
// console.log(q);

// filter 
let w=arr.filter((a)=>{
    return a>10;

})
// console.log(w);

// reduce funcrion:
let num1=[1,2,3,4]
let d= num1.reduce((a1, a2,)=>{
     return a1+a2;
})

console.log(d);

function abc (a,b){
    return a+b;
}
// console.log(abc(2,3));



// form
let name ="Satyam"
let a= Array.from(name);
// console.log(a);


// prectice question
let number =[1,2,83,4,5,9,10,20];
let t=number.filter((a)=>{
     return a%2==0;
})
// console.log(t);
