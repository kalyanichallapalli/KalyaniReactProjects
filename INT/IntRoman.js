const intToRoman = (num) => {
    const map = {M:1000,D:500,C:100,L:50,X:10,V:5,I:1}
    let result = '';
    for (key in map) {
      result += key.repeat(Math.floor(num / map[key]));
      num %= map[key];
    }
    
    return result;
  };
console.log(intToRoman(2790))  

function roman(num) {
    var map = {M:1000,D:500,C:100,L:50,X:10,V:5,I:1}
    let roman = '';
    for ( key in map ) {
      while ( num >= map[key] ) {
        roman += key;
        num = num-map[key];
      }
    }
    return roman;
  }
  console.log(roman(2970))

  function convert(num) { 
    if(num < 1){ return "";}
    if(num >= 1000){ return "M" + convert(num - 1000);}
    if(num >= 500){ return "D" + convert(num - 500);}
    if(num >= 100){ return "C" + convert(num - 100);}
    if(num >= 50){ return "L" + convert(num - 50);}
    if(num >= 10){ return "X" + convert(num - 10);}
    if(num >= 5){ return "V" + convert(num - 5);}     
    if(num >= 1){ return "I" + convert(num - 1);}  
  }
  console.log(convert(2970))

  

















  









