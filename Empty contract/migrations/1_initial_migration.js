const Migrations = artifacts.require('Migrations');
const SimpleContract = artifacts.require('simpleContract');

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(SimpleContract);
};
