'use strict';

let taxi={
    make:'Webville motors',
    model: "Taxi",
    year: 1900,
    color: "yellow",
    passenger: 4,
    mileage: 9000,
    started: true,
    start: function(){
        this.started = true;
    },
    stop: function(){
        this.started = false;
    },
    drive: function(){
        if(this.started){
            console.log('Врум..врум');
        }else{
            console.log("Заведи мотор");
        }
    }
};
taxi.drive();