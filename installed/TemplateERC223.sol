pragma solidity ^0.4.17;

import "./TemplateERC20.sol";
import "./ContractReceiver.sol";

// ------------------------------------------------------------------------------------------------------------------
// ERC Token Standard #223 Interface
// https://github.com/ethereum/EIPs/blob/master/EIPS/eip-223-token-standard.md
// Dat Nguyen - 2017
//
// Check out this repo:
// https://github.com/Dexaran/ERC223-token-standard/blob/Recommended/Receiver_Interface.sol
// to see a standard ERC223 receiver contract interface
// ------------------------------------------------------------------------------------------------------------------

contract TemplateERC223 is TemplateERC20 {
    event LogTokenPayable(address _token, address _sender, uint _value);

    function transfer(address _to, uint256 _value) public returns (bool success) {
        bytes memory none;
        return transfer(msg.sender, _to, _value, none);
    }

    function transfer(address _from, address _to, uint256 _value, bytes _data) public returns (bool success) {
        return transfer(_from, _to, _value, _data, "");
    }

    function transfer(address _from, address _to, uint256 _value, bytes _data, string _fallback) public returns (bool success) {

        if (isContractAddress(_to)) {
            if (keccak256(_fallback) != keccak256("")) {
                assert(_to.call.value(0)(bytes4(keccak256(_fallback)), msg.sender, _value, _data));
            }
            ContractReceiver contractReceiver = ContractReceiver(_to);
            contractReceiver.fallback(_from, _value, _data);
        }

        return _transfer(_from, _to, _value);
    }

    function isContractAddress(address _address) private view returns (bool _isContactAddress) {
        uint size;

        //Gets the smart contract  code size of an address
        assembly {
            size := extcodesize(_address)
        }

        return (size>0);
    }
}
