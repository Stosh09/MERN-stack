const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
  console.log(`data received concerning user ${name} of id ${id}`);
});

customEmitter.emit('response', 'Stosh', 37960857);

// Covered event-driven programming.
// We used the two emitter methods on and emit
