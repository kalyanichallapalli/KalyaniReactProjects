function palindrom(str){       
 let newstr = str.split('').reverse().join('') //if its string
 console.log(newstr)
        if(str == newstr){
            return 'palindrome';
        } else {
            return 'not palindrome'
        }
}

// console.log(palindrom('aba'))

function Pdrom(num){  
    console.log('Input:', num)
    let newnum = num.toString().split('').reverse().join('') // if its intiger
    console.log('num.toString:',newnum)
    if(num == newnum){
        return 'palindrome';
    } else {
        return 'not palindrome'
    }
}
// console.log(Pdrom(121))

function drom(num){  
    console.log('Input:', num)
    let len = num.length;
    for(let i=0; i<len; i++)
      if(num[i] == num[len - 1 -i]) {
        return 'palindrome';
    } else {
        return 'not palindrome'
    }
}
console.log(drom([1,2,3]))
console.log(drom([1,2,1]))



