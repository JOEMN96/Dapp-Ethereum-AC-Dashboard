const advancedStorage = artifacts.require('advancedStorage');

contract('advancedStorage', () => {
  let contract = null;
  before(async () => {
    contract = await advancedStorage.deployed();
  });

  it('Should Deploy', async () => {
    assert(contract.address != '');
  });

  it('Initail arr length must be 0', async () => {
    let arrLength = await contract.getLength();
    assert(arrLength.toNumber() == 0);
  });

  it('Must have length of one', async () => {
    await contract.add(10);
    let len = await contract.getLength();
    assert(len.toNumber() == 1);
  });

  it('should return 10', async () => {
    let res = await contract.get(0);
    assert(res.toNumber() == 10);
  });

  it('should return an array', async () => {
    let res = await contract.getAll();
    let converted = res.map((item) => item.toNumber());
    assert.deepEqual(converted, [10]);
  });
});
