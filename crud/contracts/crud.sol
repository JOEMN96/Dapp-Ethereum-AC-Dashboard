// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract crud {
    struct Person {
        uint id;
        string name;
    }

    Person[] public users;
    uint public nextID;
    function create(string memory _name) public {
        users.push(Person(nextID,_name));
        // users.push(Person({id:1,name:_name})); Alternative Syntax
        nextID++; 
    }

  //function read(uint _id) view public returns(uint,string memory)   Alternative Syntax

    function read(uint _id) view public returns(string memory name) {
        for(uint i =0; i < users.length;i++) {
            if(users[i].id == _id) {
                return users[i].name;
            }
        }
    }

    function update(uint _id,string memory updatedName) public returns(string memory updated) {
        for(uint i =0; i < users.length;i++) {
            if(users[i].id == _id ) {
                users[i].name = updatedName;
                return (users[i].name);
            }
        }
    } 


    function deleteUser(uint _id) public returns(string memory successMsg) {
        for(uint i=0; i < users.length; i++) {
            if(users[i].id == _id) {
                delete users[i];
                return "Sucess";
            }
        }
    }

 }