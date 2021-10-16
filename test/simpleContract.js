const simpleContract = artifacts.require('simpleContract');

contract('simpleContract', async () => {
  it('Is contract Deployed', async () => {
    const contract = await simpleContract.deployed();
    console.log(contract.address);
    assert(contract.address != '');
  });
});
