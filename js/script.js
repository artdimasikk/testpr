'use strict';

// function change(x){
//     x = x*2;
//     console.log("x в change: ", x)
// }
// let y = 2;
// console.log('y до change: ', y);
// change(y);
// console.log("y после change: ", y);

// function change(user){
//     user: "Anna"
// };
// let andrey = {
//     name: 'Andrey'
// };

// console.log("до change: ", andrey.name);
// change(andrey);
// console.log("после change: ", andrey.name);

// function change(array){
//     array[0] = 8;
// }

// function changeFull(array){
//     array = [4,5,6];
// }
// let numbers = [1,2,3];
// console.log("до change: ", numbers);
// change(numbers);
// console.log("после change: ", numbers);
// changeFull(numbers);
// console.log("после changeFull: ", numbers);

// let log = function(a,b,c){
//     console.log(a,b,c);
// };

// // log(...["spread", "rest", "operator"]);

// log.apply(null, ["spread", "rest", "operator"]);

// let arr = ["will", "love"];
// let arr2 = ["You", ...arr, "spread", "operator"];
// console.log(arr2);

// let birthday = [1993, 6,8];
// let day = new Date(...birthday);
// console.log(day);
// console.log(birthday);

let log = function(...args){
    console.log(args);
};
log(1, 2, 3, 4, 5);
