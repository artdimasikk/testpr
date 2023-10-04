'use strict';

let user = ["Makeenko", "Andrew", 28];
let number = [2,100,25,12,45];
// let user1 = user.slice(1);
// console.log(user.length);
// user.push(180);
// console.log(user);
// console.log(user.toString());
// console.log(user.join(" "));
// user.pop();
// console.log(user.pop());
// user.push(180);
// console.log(user);
// user.shift();
// console.log(user);
// user.unshift(180);
// console.log(user);
// delete user[0];
// console.log(user);
// user.splice(2,0,180,8);
// console.log(user);
// let family = user.concat(user1, user2, 227);
// console.log(family);
// console.log(user1);
number.sort(function(a,b){
    return 0.5 - Math.random();
});
console.log(number);