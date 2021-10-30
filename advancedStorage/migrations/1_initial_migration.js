const Migrations = artifacts.require('Migrations');
const advancedStorage = artifacts.require('advancedStorage');

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(advancedStorage);
};
