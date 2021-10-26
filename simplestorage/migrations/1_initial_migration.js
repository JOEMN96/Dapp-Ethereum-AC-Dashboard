const Migrations = artifacts.require('Migrations');
const StorageContract = artifacts.require('simplestorage');

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(StorageContract);
};
