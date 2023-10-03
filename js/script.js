'use strict'
function test(subject, callback){
    console.log(`Начало написания теста по предмету: ${subject}`);
    callback();
}

function finish(){
    console.log(`Окончание теста`)
}

test('физика', finish);
