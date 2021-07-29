// artifact require must be same name as contract
const HelloWorld = artifacts.require('HelloWorld');

contract('HelloWorld', () => {

  it('sets value of data variable', async () => {
    const helloWorld = await HelloWorld.deployed();
    var data = 'test adding data';
    await helloWorld.set_data(data);
    const result = await helloWorld.get_data();
    assert(result === data);
  });

  it('returns text: hello world', async () => {
    const helloWorld = await HelloWorld.deployed();
    const result = await helloWorld.hello();
    assert(result === 'Hello World');
  });
});
