const contractABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "data",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x73d4a13a"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_data",
            "type": "string"
          }
        ],
        "name": "set_data",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x6feab03b"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "get_data",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x50bf8b0d"
      },
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
        "signature": "0x19ff1d21"
      }
];

// get value from hello world contract deployment
const contractAddress = '0x362de7c64d6E1c6A138Bd90c48Ed96e82AFB1Dce';

// create instance of web3
// get address from blockchain running ganache
const web3 = new Web3('http://localhost:8545');

// build smart contract object with web3
// pointer to a hello world smart contract
const helloWorld = new web3.eth.Contract(contractABI, contractAddress);

// wait for document content to load
document.addEventListener('DOMContentLoaded', () => {

  const $setData = document.getElementById('setData');
  const $data = document.getElementById('data');
  let accounts = [];

  web3.eth.getAccounts().then(_accounts => {
    accounts = _accounts;
  });

  const getData = () => {
    helloWorld.methods.get_data().call().then(result => {
      $data.innerHTML = result;
    });
  };

  getData();

  $setData.addEventListener('submit', e => {
    e.preventDefault();  // prevent page from reloading after submit
    const data = e.target.elements[0].value;

    // send transaction to blockchain
    helloWorld.methods.set_data(data).send({from: accounts[0]}).then(getData);
  });
});

console.log(helloWorld);
web3.eth.getAccounts().then(console.log);
