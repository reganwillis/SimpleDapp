// artifact require must be same name as contract
const HelloWorld = artifacts.require('HelloWorld');

contract('HelloWorld', () => {
  it('returns text: hello world', async () => {
    const helloWorld = await HelloWorld.deployed();
    const result = await helloWorld.hello();
    assert(result === 'Hello World');
  });
});
