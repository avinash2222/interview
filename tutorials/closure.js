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
