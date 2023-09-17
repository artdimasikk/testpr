'use strict';
let age = 19;
let club;
if (age < 18){
    club = 'Здравствуй малыш!';
}else if(age == 18){
    club = 'Проходи!';
}else if(age > 100){
    club = 'Здравствуйте!';
}else{
    club = 'Какой необычный возраст!'
}
console.log(club);