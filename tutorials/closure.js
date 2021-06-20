//self invoking function 
/*
The self-invoking function only runs once.
JavaScript supports nested functions. Nested functions have access to the scope "above" them.
*/
const add = (function () {
  let counter = 0;
  return function () {counter += 1; return counter;}
})()


//in closure

const f2 = () => {
  for (var i = 0; i<3; i++) 
    setTimeout(()=>console.log(i), 1000* i)
}


const f3 = () => {
  for (let i = 0; i<3; i++) 
    setTimeout(()=>console.log(i), 1000* i)
}

f2()
// f3()
