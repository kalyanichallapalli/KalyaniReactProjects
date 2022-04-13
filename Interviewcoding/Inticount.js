//intiger count for given array
let Array2 = [1,2,2,4,8,7,10,10,6,8,2];
let mymap = new Map();
for(let i=0; i<Array2.length; i++){
    mymap.set(Array2[i], mymap.has(Array2[i])? mymap.get(Array2[i])+1 : 1)

}
console.log(mymap);

//String count
let str = 'Kalyani';
let arr = str.split('');
const map1 = new Map();
for(let i=0; i<arr.length; i++){
    map1.set(arr[i], map1.has(arr[i])? map1.get(arr[i])+1 :1)
}
console.log(map1)
