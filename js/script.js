'use strict'
// let cat = {
     
// };
// cat.name = "Roxy";
// cat.legs = 4;
// cat.color = "grey";
// cat["full name"] = "Roxy, красивая кошка";
// console.log(cat["full name"]);

// function Person (name, age){
//     this.name = name;
//     this.age = age;
// }
// let person_1 = new Person ('Andrey', 28);
// console.log(person_1.name);
// console.log(person_1.age);
// Person.prototype.speciality = "менеджер";
// console.log(person_1.speciality);
// console.log(person_1);

// let cat = {
//     name: 'Roxy',
//     legs: 4, 
//     color: 'grey'

// }
// let kitten = Object.create(cat);
// console.log(kitten.name);
// console.log(kitten.legs);
// console.log(kitten.color);

class worker{
    constructor(name,surname,rate,days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary(){
        return this.rate * this.days;
    }
    fullName(){
        return this.name + ' ' + this.surname;
    }
}
worker = new worker('Andrey', 'Makeenko', 100, 21);
console.log(worker.name);
console.log(worker.surname);
console.log(worker.getSalary());
console.log(worker.fullName());