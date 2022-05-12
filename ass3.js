const printName = (name) => "hi "+name;

console.log(printName("Avinash"));

const printBill = (name,bill) => `Hi ${name} ,please pay: ${bill}`;

console.log(printBill(`Avinash`,1000));


const person = {
    name: "Noam Chomsky",
    age: 92
}

let {name} = person;
let {age} = person;
console.log(name);
console.log(age);