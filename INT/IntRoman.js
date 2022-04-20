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
    let map = {M:1000,D:500,C:100,L:50,X:10,V:5,I:1}
    let roman = '';
    for ( key in map ) {
      console.log(map[key])
      while ( num >= map[key] ) {
        roman += key;
        num = num-map[key];
      }
    }
    return roman;
  }
  console.log(roman(2970))


  

















  









