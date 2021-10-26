const simplestorage = artifacts.require('simplestorage');

contract('simplestorage', async () => {
  it('It Should Deploy', async () => {
    let contract = await simplestorage.deployed();
    // console.log(contract);
    assert(contract.address != '');
  });

  it('It Should return Initial Value', async () => {
    let contract = await simplestorage.deployed();
    let fnCallData = await contract.data();
    assert(fnCallData == 'Inital Value');
  });

  it('adding data to smart contracts storage', async () => {
    let contract = await simplestorage.deployed();
    await contract.setData('hello World');
    let res = await contract.data();
    assert(res == 'hello World');
  });
});
