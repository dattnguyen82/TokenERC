pragma solidity ^0.4.0;

import "./TemplateERC20.sol";

contract TemplateERC621 is TemplateERC20  {

    function increaseSupply(uint _value, address _to) public returns (bool) {
        tokenSupply = tokenSupply.add(_value);
        balances[_to] = balances[_to].add(_value);
        return true;
    }

    function decreaseSupply(uint _value, address _from) public returns (bool) {
        tokenSupply = tokenSupply.sub(_value);
        balances[_from] = balances[_from].sub(_value);
        return true;
    }
}
