//shallow copying
let orgvab = {
    name: 'kalyani',
    age : 37

}
let newvab = orgvab;
newvab.name = 'Kalyani Challapalli'
console.log(orgvab)
console.log(newvab)

let shvariable = {
    firstname: 'Kalyani',
    lastname: 'Challapalli',
    age: 37,
    address: {
        house:1118,
        city: 'Mountain house',
        state: 'California',
        pin: 95391
    }
}
//let newsh = Object.assign({}, shvariable);
let newsh = JSON.parse(JSON.stringify(shvariable))

newsh.age = 38
newsh.address.city = 'SFO';
newsh.address.house = 1234;

console.log(shvariable)
console.log(newsh)
