// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


contract advancedStorage {
    uint[] public ids;

    function add(uint _id) public {
        ids.push(_id);
    }

    function get(uint _index) view public returns(uint) {
        return ids[_index];
    }

    function getAll() public view returns(uint[] memory) {
        return ids;
    }

    function getLength() view public returns(uint) {
        return ids.length;
    }
}