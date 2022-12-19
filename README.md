<h2>Ethers.js Overview</h2>

The ethers.js library aims to be a complete and compact library for interacting with the Ethereum Blockchain and its ecosystem. It was originally designed for use with ethers.io and has since expanded into a more general-purpose library.


<h2>Features</h2>
Keep your private keys in your client, safe and sound
Import and export JSON wallets (Geth, Parity and crowdsale)
Import and export BIP 39 mnemonic phrases (12 word backup phrases) and HD Wallets (English, Italian, Japanese, Korean, Simplified Chinese, Traditional Chinese; more coming soon)
Meta-classes create JavaScript objects from any contract ABI, including ABIv2 and Human-Readable ABI
Connect to Ethereum nodes over JSON-RPC, INFURA, Etherscan, Alchemy, Cloudflare or MetaMask.
ENS names are first-class citizens; they can be used anywhere an Ethereum addresses can be used
Tiny (~88kb compressed; 284kb uncompressed)
Complete functionality for all your Ethereum needs
Extensive documentation
Large collection of test cases which are maintained and added to
Fully TypeScript ready, with definition files and full TypeScript source
MIT License (including ALL dependencies); completely open source to do with as you please

<h2>npm install</h2>

npm instal dotenv ethers

<h2>Make a .env</h2>

<p>1. Make API GOERLI WITH Infura.io:</p> 
GOERLI_URL_API= 'd01eae2eece9458b96beabad3d7514ac'

<p>2.Export Private Key From Your Wallet</p>
WALLET_PRIVATE_KEY = "4bbc89deedadfd1e5350e544b47911025ddf6e887efdf27342757ece7d49a81b"

<p>3.Copy your Public Key from Wallet </p>
WALLET_PUBLIC_KEY = "0xE10bF9d48FB98f562ba50db77fF75cc41fDD4e4f"

<p>4.Deploy Contract Address With Some Functionality </p>
DEPLOYEDADDRESS = '0xD6c3c5c04e7094cf98F04Be4E5c2a6BC0DDaa7D7'

<p>5.Filter Address Or Any Address We Can filter And Indexed</p>
FILTERADDRESS= "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199"

<p>6.Account1 is My one the public key my wallet</p>
ACCOUNT1 = '0xE10bF9d48FB98f562ba50db77fF75cc41fDD4e4f'

<p>7.Deployed Contract Address With Some Functionality </p>
DEPLOYEDCONTRACTADDRESS = '0x6112854b20764e1B1dd579ed6E4F49435A8c14eD'

<p>8.Any Account Address is My one the public key my wallet</p>
ANYACCOUNTADDDRESS = '0x6112854b20764e1B1dd579ed6E4F49435A8c14eD'



<h2>  Run And Test Ethers.js </h2>

node -r dotenv/config reading_events.js
node -r dotenv/config account_contract.js
node -r dotenv/config writing_contract.js 
node -r dotenv/config reading_contract.js 
node -r dotenv/config reading_events.js
