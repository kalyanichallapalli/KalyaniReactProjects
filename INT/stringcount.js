function strcount(str){
 let arr = str.split('')
 let mymap = new Map();
 for(let i=0; i<arr.length; i++){
   mymap.set(arr[i], mymap.has(arr[i])? mymap.get(arr[i]) + 1 :1 )
 }
 return mymap
}
console.log(strcount('abacab'))