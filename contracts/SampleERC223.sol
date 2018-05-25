pragma solidity ^0.4.17;

// ----------------------------------------------------------------------------------
// A Sample Token which adheres to the ERC223 token standard.
// This is not a real token, its purpose is to exercise the the ERC223 standard
// implemented in the TemplateERC223 contract
// Dat Nguyen - 2017
// ----------------------------------------------------------------------------------


import "../installed/TemplateERC223.sol";

contract SampleERC223 is TemplateERC223 {

    address owner;

    constructor (
        uint256 _initialAmount,
        string _tokenName,
        string _tokenSymbol,
        uint8 _decimalUnits
    ) public {

        tokenSupply = _initialAmount;
        tokenName = _tokenName;
        tokenSymbol = _tokenSymbol;
        tokenDecimals = _decimalUnits;

        //set the token owner
        owner = msg.sender;

        //Give all the tokens to creator initially
        balances[owner] = _initialAmount;
    }
}
