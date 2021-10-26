const simplestorage = artifacts.require('simplestorage');

contract('simplestorage', async () => {
  it('It Should Deploy', async () => {
    let contract = await simplestorage.deployed();
    // console.log(contract);
    assert(contract.address != '');
  });
  it('Return Empty String', async () => {
    let contract = await simplestorage.deployed();
    console.log();
    let fnCallData = await contract.data();
    assert(fnCallData == 'Inital Value');
  });
});
