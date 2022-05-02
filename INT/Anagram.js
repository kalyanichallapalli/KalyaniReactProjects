//ANAGRAM
function Anagram(str1, str2){
    let newstr1 = str1.split('').sort().join('')
    let newstr2 = str2.split('').sort().join('')
    if (newstr1 == newstr2){
        return 'Yes its a Anagram'
    }else{
        return 'Not Anagram' 
    }
}
console.log(Anagram('abc', 'bac'))
console.log(Anagram('kalyani', 'boy'))

let ANAGRAM =(str1,str2) =>{
    let newstr1 = str1.split('').sort().join('').toLowerCase()
    let newstr2 = str2.split('').sort().join('').toLowerCase()

    if(newstr1 == newstr2){
        return true;
    }else{
        return false;
    }
}

console.log(ANAGRAM('dad', 'Add'))