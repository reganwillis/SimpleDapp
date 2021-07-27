var contractABI = [];
// get value from contact deployment
var contractAddress = '0x36009B38eBFd82DEab2B7C36094FcB928F4cd5d0';

// create instance of web3
// get address from blockchain running ganache
var web3 = new Web3('http://localhost:8545');

// build smart contract object with web3
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);

console.log(simpleSmartContract);
web3.eth.getAccounts().then(console.log);
