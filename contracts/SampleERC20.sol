pragma solidity ^0.4.0;

// ----------------------------------------------------------------------------------
// A Sample Token which adheres to the ERC20 token standard.
// This is not a real token, its purpose is to exercise the the ERC20 standard
// implemented in the TemplateERC20 contract
// Dat Nguyen - 2017
// ----------------------------------------------------------------------------------


import "../installed/TemplateERC20.sol";

contract SampleERC20 is TemplateERC20 {

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

    // Overridden transferFrom the TemplateERC20 base contract.
    // To fully comply with the ERC20 standard, a validation that msg.sender is authorized to transfer tokens
    // from _from to _to.  In our example, the validation will only authorize the token if msg.sender is from
    // or msg.sender is the smart contract owner.
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require(msg.sender == _from || msg.sender == owner);
        return transferFrom(_from, _to, _value);
    }
}
