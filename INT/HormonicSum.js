//HORMONIC COUNT
function sum(n){

    let s = 0.0;
    for(let i = 1; i<=n; i++){
        if(n<2){
            return 1
        }else{
            s=s+1/i;
        }
     }         
     return s;

}
console.log(sum(5))
function sum(n){
   if(n<2){
       return 1
   }else{
       return 1/n+(sum(n-1))
   }

}
console.log(sum(1))
console.log(sum(5))
console.log(sum(8))
console.log(sum(10))


