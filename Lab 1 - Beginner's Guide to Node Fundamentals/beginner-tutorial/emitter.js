const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("customEvent", () => {
  console.log("Custom event was emitted!");
});

module.exports = myEmitter;
