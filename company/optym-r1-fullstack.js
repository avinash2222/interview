/*
  1. when to use which function among arrow, declaration function and expression function
  2. difference between arrow function and declaration function
  3. what are the function that can be move to micro task queue


*/








/* 
solutions
2. 
let me = { 
 name: "Ashutosh Verma", 
 thisInArrow:() => { 
 console.log("My name is " + this.name); // no 'this' binding here 
 }, 
 thisInRegular(){ 
 console.log("My name is " + this.name); // 'this' binding works here 
 } 
};
me.thisInArrow(); 
me.thisInRegular();



*/
