function palindrom(str){       
 let newstr = str.split('').reverse().join('') //if its string
        if(str == newstr){
            return 'palindrome';
        } else {
            return 'not palindrome'}}
function Pdrom(num){  
    let newnum = num.toString().split('').reverse().join('') // if its intiger
    if(num == newnum){
        return 'palindrome';
    } else {
        return 'not palindrome'}}
function drom(num){   // if its array
    console.log('Input:', num)
    let len = num.length;
    for(let i=0; i<len; i++)
      if(num[i] == num[len - 1 -i]) {
        return 'palindrome';
    } else {
        return 'not palindrome' }}
console.log(drom([1,2,3]))
console.log(drom([1,2,1]))



