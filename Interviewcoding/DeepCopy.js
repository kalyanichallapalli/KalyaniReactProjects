//shallow copying
let orgvab = {
    name: 'kalyani',
    age : 37

}
let newvab = orgvab;
newvab.name = 'Kalyani Challapalli'
// console.log(orgvab)
// console.log(newvab)

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

// console.log(shvariable)
// console.log(newsh)
//shallow
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age:21
    
};

let copiedPerson = person;
// let copiedPerson = Object.assign({}, person);
copiedPerson.firstName = 'kalyani'; // disconnected
console.log(person),
console.log(copiedPerson);

//deep
let person1 = {
    firstName: 'John',
    lastName: 'Doe',
    age:24
};


let NP = JSON.parse(JSON.stringify(person1));

NP.firstName = 'Jane'; // disconnected
NP.age = 21;
console.log(person1);
console.log(NP);

