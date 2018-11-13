const { Block } = require('./Block');
const { Blockchain } = require('./Blockchain');

const INITIAL_TRANSATION = {
    type: 'announcment',
    publisher: 'Bob',
    message: 'I look up for Blochain job!',
};

const GENESIS_BLOCK = new Block(INITIAL_TRANSATION, 0, 'Here you can insert EasterEgg too.');

const sampleBC = new Blockchain(GENESIS_BLOCK);

sampleBC.mineBlock({
    type: 'transfer',
    receiver: 'Alice',
    sender: 'Bob',
    amount: 1000,
});

console.log(sampleBC.chain);