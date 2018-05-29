pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/SampleERC621.sol";

// --------------------------------------------------------------------------------------------------------------------
// This is a test solidity contract
// We are only testing the constructor functions
// Please see TestSampleERC621.js to see a more practical test of all other functions
// --------------------------------------------------------------------------------------------------------------------

contract TestSampleERC621 {
  function testTotalSupply() public {
    SampleERC621 sample = SampleERC621(DeployedAddresses.SampleERC621());
    uint expected = 1000;
    Assert.equal(sample.totalSupply(), expected, "Token total supply must match argument 1 from the constructor in ../migrations/deploy_migrations.js");
  }

  function testName() public {
    SampleERC621 sample = SampleERC621(DeployedAddresses.SampleERC621());
    Assert.equal(keccak256(sample.name()), keccak256("TestToken621"), "Token name must match argument 2 from the constructor in ../migrations/deploy_migrations.js");
  }

  function testSymbol() public {
    SampleERC621 sample = SampleERC621(DeployedAddresses.SampleERC621());
     Assert.equal(keccak256(sample.symbol()), keccak256("TT621"), "Token symbol must match argument 3 from the constructor in ../migrations/deploy_migrations.js");
  }

  function testDecimal() public {
    SampleERC621 sample = SampleERC621(DeployedAddresses.SampleERC621());
    uint expected = 18;
    Assert.equal(sample.decimals(), expected, "Token decimal must argument 4 from the constructor in ../migrations/deploy_migrations.js");
  }
}
