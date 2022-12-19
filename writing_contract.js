const { config } = require('dotenv');
const { ethers } = require('ethers');
const tranfer = require('./transfer.json')
require('dotenv') = config();

const ABI = tranfer.abi;

//In write contract with ethersjs need more instans
// infura api help to get data and update data with wallet 
const RPC =  `https://goerli.infura.io/v3/${process.env.GOERLI_URL_API}`;

const account1 = process.env.ACCOUNT1;

const PrivateKey = process.env.WALLET_PRIVATE_KEY;

const provider = new ethers.providers.JsonRpcProvider(
    RPC
)
// 
const wallet = new ethers.Wallet(PrivateKey, provider);

// contractAddress delpoyed address in the contract or address some function
//  deploy remix id  and some event and some object 
const contractAddress = process.env.DEPLOYEDCONTRACTADDRESS;

// reading in ethersjs
async function callNew(){

    // this instant help to me make connection contractadress and ami and waller -> this help connect our deployed contract
    const contract = new ethers.Contract(
        contractAddress,
        ABI,
        wallet
    )
    // check account1 balance
    console.log(`${account1} : ${ethers.utils.formatEther(await provider.getBalance(account1))}`)
    // check wallet balance 
    console.log(`${await wallet.getAddress()}: ${ethers.utils.formatEther(await wallet.getBalance())}`)
  

    //for write need signer(wallet) but reading data need a provder(infura,aslumy)
    const tx = await contract._transfer(account1, {
        value: ethers.utils.parseEther('0.1')
    })

    // waiting for transaction completed
    await tx.wait();

    // check account1 balance
    console.log(`${account1} : ${ethers.utils.formatEther(await provider.getBalance(account1))}`)
    // check wallet balance 
    console.log(`${await wallet.getAddress()}: ${ethers.utils.formatEther(await wallet.getBalance())}`)
  
}

callNew();