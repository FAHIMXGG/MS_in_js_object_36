// create object using object literals
const player = {};
player.name = 'Small Nirob';
player.specialty = 'batsman';
player.bat = function (){
    console. log ('swing your bat');
}
// console.log(player);
// player.bat ();


const student = {
    name: 'alu',
    job: 'bot',
    bal: function () {
        console.log('gg boi')
    },
    salary: 100000 
}

// object constructor
const person = new Object();
// console.log(person);

// 3 create method
const item = Object.create(student);
console.log(item.name);

// class
class persons {
    name= 'abul';
    add = 'babul';
    constructor(age){
        this.age = age;
    }
}

const person1 = new persons(56);
console.log(person1);

function car(model, price){
    this.model = model;
    this.price = price;
}

const tesla = new car('elon', 32);
console.log(tesla);