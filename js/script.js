'use strict'
// function calculateArea(r){
//     let area;
//     if (r <=0){
//         return 0;
//     }else{
//         area = Math.PI * r * r;
//         return area;
//     }
// }
// let radius = 5;
// let theArea = calculateArea(radius);
// console.log('The area is: ' + theArea);

// let txt = 'abc!def!';
// console.log(txt.replace(/!/g, "@"));

// let txt = 'aaa bbb ccc';
// console.log(txt.substr(4,3));
// console.log(txt.substring(4,7));
// console.log(txt.slice(4,7));

// let txt = 'js';
// console.log(txt.toUpperCase());

// let txt = 'I love js';
// console.log(txt.length);


// Домашнее задание
// Выписать в комментариях. Вам необходимо найти все переменные,
// функции, аргументы и параметры.
// Запишите имена в соответсвующие пункты
// Переменные: years, myDog, guests
// Функции: dogYears, makeTea, secret
// Встроенные функции:
// Аргументы: myDog, 4, guests, 'Earl Grey'
// Параметры: dogname, age, cups, tea
// function dogYears(dogname, age){
//     let years = age * 2;
//     console.log(dogname + ' is ' + years + ' years old');
// }
// let myDog = 'Rex';
// dogYears(myDog, 4);


// function makeTea (cups, tea){
//     console.log('Breawing ' + cups + ' cups of' + tea);
// }
// let guests = 2;
// makeTea(guests, 'Earl Grey');

// function secret(){
//     console.log('The secret of life is 28');
// }
// secret();


// Дана строка 'JS'. Сделайте из нее строку 'js'.

let txt = "JS";
console.log(txt.toLowerCase());


// Дана строка 'я люблю JS!'. Вырежите из нее слово 
// 'люблю' и слово 'javascript' тремя разными способами 
// (через substr, substring, slice).

txt = "я люблю JS";
console.log(txt.substr(2,8));
console.log(txt.substring(2,10));
console.log(txt.slice(2,10));

// Дана строка 'я люблю JS!'. Найдите позицию 
// подстроки 'люблю'.

txt = 'я люблю JS';
console.log(txt.indexOf('люблю'));

// Дана переменная txt, в которой хранится какой-либо текст. 
// Реализуйте обрезание длинного текста по следующему 
// принципу: если количество символов этого текста больше 
// заданного в переменной n, то в переменную result запишем 
// первые n символов строки txt и добавим в конец 
// троеточие '...'. В противном случае в переменную 
// result запишем содержимое переменной txt.

txt = 'я люблю JS';
let n = 8;
let result;
if (txt.length > n){
    result = (txt.substr(0,n) + "...");
}else{
    result = txt;
}
console.log(result);

// Для решения задач данного блока вам понадобятся следующие 
// методы: replace.
// Дана строка 'Я-люблю-JS!'. 
// Замените все  '-' на '!' с помощью глобального 
// поиска и замены.
txt = "я-люблю-JS";
console.log(txt.replace(/-/g, '!'));

// Дана строка 'я люблю JS'. С помощью метода split 
// запишите каждое слово этой строки в отдельный элемент 
// массива.

txt = 'я люблю JS';
let I = txt.substring(0,1);
let love = txt.substring(2,7);
let js = txt.substring(8,10);
console.log(I.split());
console.log(love.split());
console.log(js.split());

// Дана строка 'привет мир'. С помощью метода split 
// запишите каждый символ этой строки в отдельный элемент 
// массива.
// Вывел через цикл


txt = "привет мир";
let counter = 9;
for (let j = 0; j <= counter; j++){
    console.log(txt[j].split());
}
