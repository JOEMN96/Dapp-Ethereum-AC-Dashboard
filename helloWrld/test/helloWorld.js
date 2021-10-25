const helloWorldContract = artifacts.require('helloWorld');

contract('helloWorld', () => {
  it('it should deploy', async () => {
    const contract = await helloWorldContract.deployed();
    console.log(contract.address);
    assert(contract.address != '');
  });

  it('Should Return Hello World', async () => {
    const contract = await helloWorldContract.deployed();
    let res = await contract.hello();
    assert(res == 'hello World');
  });
});
