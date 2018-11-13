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

module.exports = { 
    Block,
    GENESIS_BLOCK,
};