const { Block } = require('./Block');

class Blockchain {
    constructor(genesisBlock) {
        this.chain = [genesisBlock];
    };

    getLatestBlockInChain() {
        return this.chain[this.chain.length - 1];
    };

    mineBlock(transaction) {
        const latestBlock = this.getLatestBlockInChain();
        const currentBlock =  new Block(transaction, latestBlock.blockIndex, latestBlock.currentHash);

        this.chain.push(currentBlock);
    };
}

module.exports = {
    Blockchain,
};