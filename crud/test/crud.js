const COTRACTARTIFACT = artifacts.require('crud');

contract('crud', () => {
  let contract = null;

  before(async () => {
    contract = await COTRACTARTIFACT.deployed();
  });

  it('Is It Deployed', async () => {
    assert(contract.address != '');
  });

  it('adding new user', async () => {
    await contract.create('Joe');
    let res = await contract.read(0);
    assert(res == 'Joe');
  });

  it('It updates', async () => {
    await contract.update(0, 'joeMN');
    let res = await contract.read(0);
    assert(res == 'joeMN');
  });
});
