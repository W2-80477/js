// 1.ways the print in javascript.
// console.log("Hello World");
// alert("me");
// document.write("this is the my frist document page");

// 2.javascript console API.
// console.log("Hello World",5*6,"Another log");
// console.warn("this is warning");
// console.error("this is error");
// console.clear("clear");

// 3.javascript variables
//number
// var number1 = 2;
// var number2 = 5.5;
// console.log(number1 + number2);

var num1 = 4;
var num2 = 5;
// console.log(num1 + num2);

//String
var str1 = ("satyam kumar");
var str2 = ("my name is satyam kumar")
// console.log(str1, str2);

//objects 
var score = {
    virat: 56,
    rohit: 70,
    Hardik: 40
}
// console.log(score);

//boolean
var a = true;
var b = false;
// console.log(a,b);

var und;
// console.log(und);

var n = null;
// console.log(n);

// logical opreter
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

//logical not
// console.log(!false);
// console.log(!true);

//finction in javaScript
function avg(a, b) {
    return (a + b) / 2;

}
c1 = avg(10, 12);
c2 = avg(15, 10);
// console.log(c2,c1);
//codintion in java script
var age = 18;
if (age > 21) {
    console.log("eligible for averything");
} else {
    // console.log("not elisibale");
}
// loop
var arr = [1, 2, 3, 4, 5, 6, 7];
/*console.log(arr);
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}
*/
// arr.forEach(function (element) {
    //    console.log(element)
// })

//while loop
let j=0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
  
// }
// javascript this method 
const sampObj ={
  name : "satyam",
  age :22,
  getName: function(){
    // console.assertlog(sampObj (this.name))
  }
} 
//Arry method

let Arr=["apple", "orange", "grapes", "banana", 32, null, true, false ];
// myArr.pop();
Arr.push(43);
// myArr.shift();
// const newlen=myArr.unshift("patato");
// console.log(newlen);
// console.log(Arr);

//String Method.
 let string = "jai sri Ganesha";
//  console.log(string)
//  console.log(string.length);
//  console.log(string.indexOf("h"));
// console.log(string.slice(0,8));  
d  = string.replace("jai sri Ganesha", "om namo sivay");
// console.log(d,string);

// date
let date = new Date();
// console.log(date.getTime());
// console.log(date.getFullYear());
// console.log(date.getDay());
// console.log(date.getMinutes());
// console.log(date.getHours());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getSeconds());

// Dom (docoment object model) manipulation
let elem=document.getElementById("click");
// console.log(elem);

let elemclass=document.getElementsByClassName("container");
// console.log(elemclass);
// elemclass[0].style.background = "pink";
elemclass[0].classList.add("bg-primary");
elemclass[1].classList.add("text-success");

 
tn = document.getElementsByTagName("div");
// console.log(tn);

createdElement=document.createElement('p');
createdElement.innerText="happy new year";
tn[0].appendChild(createdElement);

createdElement2 = document.createElement('d');
createdElement2.innerText= "jai sri ram";
tn[0].replaceChild(createdElement2, createdElement);
 
//slecting using query
sel = document.querySelector(".container");
// console.log(sel);
sel = document.querySelectorAll(".container");
// console.log(sel);

// event fuction in java script
// buttion is clicked
  function clicked(){
    // console.log("button was clicked")
  } 
//   for show document page loded
  window.onload=function(){
    // console.log("the document was lod")
  }
//   for clicke on container 
  // firstcontainer.addEventListener('click', function(){
  //   document.querySelectorAll('.container')[1].innerHTML="<b>web page </b>";
  // console.log("click on container");
  // });
// //   mouse under cotainer show
// secondcontainer.addEventListener("mouseover" , function(){
    // console.log("mouse in the container ")/
// })
// // mouseout container
// firstcontainer.addEventListener("mouseout" , function(){
//     console.log("mouse out the  container ")

// })
// mouse click on container 
// let prevHTML = document.querySelectorAll('.container')[1].innerHTML; //store previous html
// firstcontainer.addEventListener("mouseup" , function(){
//   document.querySelectorAll('.container')[1].innerHTML=prevHTML;
//     console.log("mouse up when click on container")
// })
// // // mousedown
// firstcontainer.addEventListener("mousedown" , function(){
//   document.querySelectorAll('.container')[1].innerHTML="<b>web page </b>";
//     console.log("mouse down when clicked on container ")
// })

//Arrow the function   .. for insert the function anywhere
sum = (a,b)=>{
  return a+b;
  
}
// setTimeout and Setinterval
login=()=>{
  document.querySelectorAll('.container')[1].innerHTML="<b>clicke the container</b>"
  console.log("login done")
}
clr=setTimeout(login, 5000);

// clr=setInterval(login, 5000);
var test=  ("one"<8);
console.log(test)

