

let a = [2,5,6,7]

// let p = [2,6]
const finterArray = () => {
  let p = []
  for(let i=0; i<a.length; i++){
    if (a[i] %2==0) p.push(a[i])
  }
  console.log(p)
}
finterArray()


