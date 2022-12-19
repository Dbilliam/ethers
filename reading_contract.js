const { ethers } = require('ethers');
const tranfer = require('./transfer.json')
require('dotenv').config();
const ABI = tranfer.abi;


// infura api help to get data and update data with wallet 
const RPC =  `https://goerli.infura.io/v3/${process.env.GOERLI_URL_API}`;

const provider = new ethers.providers.JsonRpcProvider(
    RPC
)

const contractAddress = process.env.DEPLOYEDCONTRACTADDRESS;

// reading in ethersjs
async function callNew(){
    //for write need signer(wallet) but reading data need a provder(infura,aslumy)
    const contract = new ethers.Contract(
        contractAddress,
        ABI,
        provider
    )

    console.log(`The address of owner: ${await contract.call()}`)
}

callNew();