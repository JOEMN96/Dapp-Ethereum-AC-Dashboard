// SPDX-License-Identifier: MIT
pragma solidity >0.4.22 <0.9.0;


contract helloWorld {
    
   function hello() public pure  returns(string memory) {
       return "hello World";
   }
}


// The Ethereum Virtual Machine has three areas where it can store items.

// The first is “storage”, where all the contract state variables reside. Every contract has its own storage and it is persistent between function calls and quite expensive to use.

// The second is “memory”, this is used to hold temporary values. It is erased between (external) function calls and is cheaper to use.

// The third one is the stack, which is used to hold small local variables. It is almost free to use, but can only hold a limited amount of values.