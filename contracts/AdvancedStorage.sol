pragma solidity ^0.5.0;

contract AdvancedStorage {
    uint[] public ids;

    // add an ID to list of IDs
    function add(uint id) public {
        ids.push(id);
    }

    // get ID from list based on index
    // view: read-only
    function get(uint idx) view public returns (uint) {
        return ids[idx];
    }

    // get list of all IDs
    function getAll() view public returns(uint[] memory) {
        return ids;
    }

    // get length of list of IDs
    function length() view public returns (uint) {
        return ids.length;
    }
}