const { createHash } = require('crypto')

class Block {
    constructor(transactionData, blockIndex, previuosHash) {
        this.blockIndex = blockIndex;
        this.transactionData = transactionData;
        this.previuosHash = previuosHash;

        this.mineDate = Date.now();
        this.currentHash = this.getCurrentHash();
    };

    getCurrentHash() {
        return createHash('sha512')
            .update(
                JSON.stringify(this.transactionData) +
                this.blockIndex +
                this.mineDate +
                this.previuosHash
            )
            .digest('hex');
    };
}

const INITIAL_TRANSATION = {
    type: 'announcment',
    publisher: 'Bob',
    message: 'I look up for Blochain job!',
};

const GENESIS_BLOCK = new Block(INITIAL_TRANSATION, 0, 'Here can insert EasterEgg too.');

module.exports = { 
    Block,
    GENESIS_BLOCK,
};