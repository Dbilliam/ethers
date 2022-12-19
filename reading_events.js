const { ethers } = require('ethers');
const tranfer = require('./transfer.json')
require('dotenv').config();


const ABI = tranfer.abi;

// infura api help to get data and update data with wallet 
const RPC =  `https://goerli.infura.io/v3/${process.env.GOERLI_URL_API}`;

const provider = new ethers.providers.JsonRpcProvider(
    RPC
)


// contractAddress delpoyed address in the contract or address some function
//  Deployed remix Address  and some event and some object 
const contractAddress = process.env.DEPLOYEDADDRESS;

// reading in ethersjs
async function callNew(){
    // check new block in here
    const block = await provider.getBlockNumber();
    //for write need signer(wallet) but reading data need a provder(infura,aslumy)
    const contract = new ethers.Contract(
        contractAddress,
        ABI,
        provider
    )

    // trans filter with indexed
    // In this filed we filter address wise and amount wise if not first filter so write null
    const filter = contract.filters.transaction( process.env.FILTERADDRESS, null );

    //    event call or get with to block, from block
    // const transactions = await contract.queryFilter('transaction', block -10000, block)
    // const transactions = await contract.queryFilter('transaction')
    const transactions = await contract.queryFilter(filter)
    

    // mapping
    transactions.map((item)=>{
        console.log(item.args.to, ":", ethers.utils.formatEther(item.args.amount))
    })
    // console.log(transactions)

    
}

callNew();