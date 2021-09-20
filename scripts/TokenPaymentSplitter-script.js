const hre = require('hardhat')

async function main() {
    const TokenPaymentSplitter = hre.ethers.getContractFactory('TokenPaymentSplitter')

    await TokenPaymentSplitter.deployed()

    console.log('MinimalNFT deployed to:', TokenPaymentSplitter.address)
}

main().then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })