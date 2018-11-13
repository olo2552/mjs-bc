const { GENESIS_BLOCK } = require('./Block');
const { Blockchain } = require('./Blockchain');

const sampleBC = new Blockchain(GENESIS_BLOCK);

sampleBC.mineBlock({
    type: 'transfer',
    receiver: 'Alice',
    sender: 'Bob',
    amount: 1000
});

console.log(sampleBC.chain);