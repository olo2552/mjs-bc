const { Block } = require('./Block');

class Blockchain {
    constructor(genesisBlock) {
        this.chain = [genesisBlock];
    };

    getLatestBlockInChain() {
        return this.chain[this.chain.length - 1];
    };

    mineBlock(data) {
        const latestBlock = this.getLatestBlockInChain();
        const currentBlock =  new Block(data, latestBlock.blockIndex, latestBlock.currentHash)

        this.chain.push(currentBlock);
    };
}

module.exports = {
    Blockchain,
};