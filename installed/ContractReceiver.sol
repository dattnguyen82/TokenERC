pragma solidity ^0.4.17;

// ----------------------------------------------------------------------------------------------------------
// This is a sample Contract Reciver Interface.  It is used for ERC223 tokens
// that are sent to contracts.  This file is based  on the work done here:
// https://github.com/Dexaran/ERC223-token-standard/blob/Recommended/Receiver_Interface.sol
//
// Dat Nguyen - 2017
// ----------------------------------------------------------------------------------------------------------

contract ContractReceiver {
    function fallback(address _from, uint _value, bytes _data) public pure;
}
