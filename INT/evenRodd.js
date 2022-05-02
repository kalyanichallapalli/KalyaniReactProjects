let Array2 = [1,2,2,4,8,7,10,10,6,8,2];
let even = Array2.filter((i)=>{
    return i%2 == 0;
})

console.log(even)

let odd = Array2.filter((i)=>{
    return i%2 !== 0
})
console.log(odd)
//.................................................
let A = [1,2,2,4,8,7,10,10,6,8,2];

let Even = A.filter((i)=>{ return i%2 == 0 } )
let Odd = A.filter((i)=>{ return i%2 !== 0 } )

console.log(Even, Odd)

