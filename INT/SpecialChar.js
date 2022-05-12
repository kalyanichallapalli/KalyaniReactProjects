//Unique Characters 
function uniquechar(str){
    let unq = '';
    for(let i=0; i<str.length; i++) {
  if(unq.includes(str[i]) === false){
      unq+= str[i]
  }
}
   return unq;
}

console.log(uniquechar('cowwwwwwwww'))
//Unique numbers from an Array
function uniqNum(arr){
    let unq = [];
    for(let i=0; i<arr.length; i++) {
  if(unq.includes(arr[i]) === false){
      unq+= arr[i]
  }
}
   return unq;
}

console.log(uniqNum([1,2,3,3,3,3]))
// Unique chars to object
function arrChar(arr){
    let mymap = new Map();
     mymap = arr.filter((item, i , arr)=> arr.indexOf(item) === i)
    return mymap
    }
console.log(arrChar(['a','b','c','a','b']))


