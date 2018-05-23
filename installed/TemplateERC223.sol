pragma solidity ^0.4.0;

import "./TemplateERC20.sol";

// ----------------------------------------------------------------------------
// ERC Token Standard #223 Interface
// https://github.com/ethereum/EIPs/blob/master/EIPS/eip-223-token-standard.md
// Dat Nguyen - 2017
// ----------------------------------------------------------------------------

contract TemplateERC223 is TemplateERC20 {

    event LogTokenPayable(address _token, address _sender, uint _value);
}
