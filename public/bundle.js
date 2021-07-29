var contractABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "hello",
    "outputs": [
      {
        "name": "",
	"type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function",
    //"signature": "0x19ff1d21"
  }
];
// get value from hello world contract deployment
var contractAddress = '0x80b7A8154fa3a37D9bE6C2947366AdC57702c032';
// create instance of web3
// get address from blockchain running ganache
var web3 = new Web3('http://localhost:8545');

// build smart contract object with web3
// pointer to a hello world smart contract
var helloWorld = new web3.eth.Contract(contractABI, contractAddress);

// wait for document content to load
document.addEventListener('DOMContentLoaded', () => {
  // access smart contract hello method
  helloWorld.methods.hello().call().then(result => {
    document.getElementById('hello').innerHTML = result;
  });
});

console.log(helloWorld);
web3.eth.getAccounts().then(console.log);
