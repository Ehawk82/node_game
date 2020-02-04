var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
	console.log("demon is demon");
}

//Assign the eventhandler to an event:
eventEmitter.on('demon', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('demon');
