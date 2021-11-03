const Migrations = artifacts.require('Migrations');
const crud = artifacts.require('crud');

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(crud);
};
