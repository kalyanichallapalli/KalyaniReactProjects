// let obj={ name:{id:7} }  
//   const obj2 = JSON.parse(JSON.stringify(obj));
//   obj2.name.id=4
//   console.log(obj2,obj)

// console.log('a')
// console.log('b')
// Settimeout(console.log('c'),0)
// console.log('d')
// Answer a,b,d,c

function test(){
for(let i=0;i<3;i++){
    console.log('test')
    console.log('test2')
    setTimeout((console.log('test1'),0))
}
}
test()
