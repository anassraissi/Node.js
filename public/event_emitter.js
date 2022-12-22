
var event=require('events');
const util = require('node:util');
// event 
var my_emitter=new event.EventEmitter();

my_emitter.on('some Events',function(mesg){
    console.log(mesg);
})

my_emitter.emit('some Events','this message was emitted'); //(event name, parametre)









