'use strict';
// function Person(firstName, lastName){
//     this.firstName = firstName
//     this.lastName = lastName
// }
// Person.prototype.getFullName = function (){
//     return this.firstName + ' ' + this.lastName
// }
// let person = new Person('Andrew', 'Makeenko')
// console.log(person);

function Maybe({data, status}) {
    this.data = data
    this.status = status
}

Maybe.prototype.apply = function (f){
    if (this.status){
        return new Maybe ({data: f(this.data), status: this.status})
    }
    return new Maybe ({data: f(this.data), status: this.status})
}

Maybe.prototype.getOrElse = function (msg){
    if (this.status) return this.data
    return msg
}

function Number(data){
    let status = (typeof data === 'string')
    Maybe.call(this, {data, status})
}
Number.prototype = Object.create(Maybe.prototype)
function String(data){
    let status = (typeof data === 'string')
    Maybe.call(this, {data, status})
}

String.prototype = Object.create(Maybe.prototype)
const increment = num => num + 1
const split = str => str.split('')
let foop = 12
foop.split('')