
var SampleERC20 = artifacts.require("./SampleERC20.sol");
var SampleERC223 = artifacts.require("./SampleERC223.sol");
var SampleERC621= artifacts.require("./SampleERC621.sol");


module.exports = function(deployer) {
  deployer.deploy(SampleERC20, 1000, "TestToken20", "TT20", 18);
  deployer.deploy(SampleERC223, 1000, "TestToken223", "TT223", 18);
  deployer.deploy(SampleERC621, 1000, "TestToken621", "TT621", 18);
};
