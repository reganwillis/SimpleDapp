// import truffle contract artifact 
const SimpleSmartContract = artifacts.require('SimpleSmartContract');

// truffle uses mocha.js framework
contract('SimpleSmartContract', () => {
  // first test
  it('contract was properly deployed', async () => {
    // grab contract instance
    const simpleSmartContract = await SimpleSmartContract.deployed();
    console.log(simpleSmartContract.address);
    assert(simpleSmartContract.address != '')
  });
});
