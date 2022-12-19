// SPDX-License-Identifier: Unlicense

pragma solidity >= 0.7.0;

contract transfer {
    address public owner; 
    // event transaction(address  to,uint  amount);

    //indexed see or show particular data by help indexed and In parameter we have maximum three indexed we provide
    event transaction(address indexed to, uint indexed amount);

    constructor() {
        owner = msg.sender;
    }
    function call() public view returns(address){
        return owner;
    }
    function _transfer(address payable _to) public payable {
        _to.transfer(msg.value);
        emit transaction(_to, msg.value);
    }
}