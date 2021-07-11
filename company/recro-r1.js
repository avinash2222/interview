/*
  1. SHARD
  2. REPLICA
  3. HOC
  4. Promiss function definition
  5. for (let i=0; i<=2; i++){
    console.log("hello")
    setTimeOut(()=>console.log(i),0)
  }
  6. what will u do when client ask for some data but timeout on client side due to delay in api res
  7. what is disadvantage of single threaded in nodejs
  8. foo() //1
    foo() //2
    foo() //3
    function foo(){  //each call foo() return increased value by 1
      let i=1
      function inner(){
        return i++
      }
    }
  9. a = [1,2,3,2] a.sum() //9 use inheritance feature
  10. let obj = {a:1, b:2}
  function hello(){
    this = obj
    console.log(this)
  }
  11. mongodb find count of all repeated record
  12. mongodb find third highest price
  13. how u r handling cors issue
  14. how to prevent calling multiple api many times by a user 
  15. function hi(){
    this
  } 
  function hi(()=>
    this
  )
  16. 




/-------------solution -------------/
8. function Counter() {
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = Counter();
alert(counter()); // 1
alert(counter()); // 2
alert(counter()); // 3
alert(counter()); // 4





*/