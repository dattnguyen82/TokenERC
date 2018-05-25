
var SampleERC20 = artifacts.require("./SampleERC20.sol");
var SampleERC223 = artifacts.require("./SampleERC223.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(SampleERC20, 1000, "TestToken20", "TT20", 18);
  deployer.deploy(SampleERC223, 1000, "TestToken223", "TT223", 18);
};
