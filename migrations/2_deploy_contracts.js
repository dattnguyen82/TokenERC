
var SampleERC20 = artifacts.require("./SampleERC20.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(SampleERC20, 1000, "TestToken", "TT", 18)
};
