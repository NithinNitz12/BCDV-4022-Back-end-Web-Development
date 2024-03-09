const fsModule = require('./modules/fileSystem');
const eventEmitterModule = require('./modules/eventEmitter');
const cryptoModule = require('./modules/crypto');

fsModule.writeToFile('example.txt','Hello, File System!');
const content = fsModule.readFromFile('example.txt');
console.log(`File content: ${content}`);

eventEmitterModule.listenForCustomEvent((message) => {
    console.log(`Received custom event: ${message}`);
});
eventEmitterModule.emitCustomEvent('Hello, Node.js!');

const hashedPassword = cryptoModule.hashPassword('MySecurePassword');
console.log(`Hashed password: $(hashedPassword)`);