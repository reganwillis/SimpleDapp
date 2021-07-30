// link script to smart contract
const AdvancedStorage = artifacts.require('AdvancedStorage');

contract('AdvancedStorage', () => {
	const input = [10, 20];
	let advancedStorage = null;

	/*
	// test template
	it('description of test', async () => {
		// wait for contract to be deployed
		const contractName = await ContractName.deployed();
		// create dummy data
		var data = 'data';
		// send dummy data to contract setter
		await contractName.send_data(data);
		// get dummy data from contract getter
		const result = await contractName.get_data();
		// check actual result matches expected result
		assert(result === data);
	});
	*/

	// runs before all tests
	before(async () => {
		advancedStorage = await AdvancedStorage.deployed();
	})

	it('adds element to ids array', async () => {
		var new_id = input[0];
		await advancedStorage.add(new_id);
		const result = await advancedStorage.ids(0);
		assert (result.toNumber() === new_id);
	});

	it('gets element from ids array', async () => {
		var new_id = input[1];
		await advancedStorage.add(new_id);
		const result = await advancedStorage.get(1);
		assert(result.toNumber() === new_id);
	});

	it('gets the ids array', async () => {
		const rawIds = await advancedStorage.getAll();
		const ids = rawIds.map(id => id.toNumber());
		assert.deepEqual(ids, input);
	});

	it('gets the length of ids array', async () => {
		const length = await advancedStorage.length();
		assert(length.toNumber() === input.length);
	});

});
