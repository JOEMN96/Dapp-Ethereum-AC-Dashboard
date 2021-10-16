const simpleContract = artifacts.require('simpleContract');

contract('simpleContract', async () => {
  it('does it deployes', async () => {
    const deployedSimpleContract = await simpleContract.deployed();
    console.log(deployedSimpleContract.address);
    assert(simpleContract !== '');
  });
});
