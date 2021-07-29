pragma solidity ^0.5.0;

contract HelloWorld {
    // variables defined outside functions will automatically
    // be saved in 'storage' - on the blockchain
    string public data;

    // set data
    function set_data(string memory _data) public {
        data = _data;
    }

    // get data
    function get_data() view public returns(string memory) {
        return data;
    }

    // return a string
    function hello() pure public returns(string memory) {
        return 'Hello World';
    }
}