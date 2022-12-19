// the require ehters js  libaray for blockchain frontend data get
const { ethers } = require('ethers');

// the require dotenv libarry for env file 
require('dotenv').config();

// infura api help to get data and update data with wallet 
const RPC =  `https://goerli.infura.io/v3/${process.env.GOERLI_URL_API}`;

// add any one public key for send money
const account1 = process.env.ACCOUNT1;

// private key add for create wallet 
const PrivateKey = process.env.WALLET_PRIVATE_KEY;

// then Genarate provider and this help me see or show data of any address
const provider = new ethers.providers.JsonRpcProvider(
    RPC
)

// we can genarate a wallet with infura provider
const wallet = new ethers.Wallet(PrivateKey, provider);

async function call() {
    // const bal = await provider.getBalance(account1);
    //formatEther are covert wei to ether with big number
    //parseEther are convert ether to wei 
    // console.log(ethers.utils.formatEther(balance));
    // then we can check wallet details or information
    // console.log(await account.address);
    // console.log(ethers.utils.formatEther(await wallet.getBalance()));

    // check balance public account1
    const bal = await provider.getBalance(account1);
    // with with formated ehter
    console.log(account1, ":", ethers.utils.formatEther(bal));


    // check send wallet balance
    console.log(await wallet.getAddress(), ":", ethers.utils.formatEther(await wallet.getBalance()))

    // send ether to my wallet 
    const trans = await wallet.sendTransaction({
        to: account1,
        value: ethers.utils.parseEther('0.1')
    })

    // wait send transaction completed 
    await trans.wait();

    // check balance public account1
    const bal1 = await provider.getBalance(account1);
    // with with formated ehter
    console.log(account1, ":", ethers.utils.formatEther(bal1));

    // check send wallet balance
    console.log(await wallet.getAddress(), ":", ethers.utils.formatEther(await wallet.getBalance()))
    console.log(trans)
}
call();