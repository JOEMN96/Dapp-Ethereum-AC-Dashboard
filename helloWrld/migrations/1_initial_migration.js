const Migrations = artifacts.require('Migrations');
const helloWorldContract = artifacts.require('helloWorld');

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(helloWorldContract);
};
