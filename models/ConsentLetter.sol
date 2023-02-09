// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract ConsentLetter {
    uint public state;
    uint public payment;
    uint public paymentFrec;
    string public storageURI;
    string public workObligations;


    constructor() {
        state = 0;
    }

    function setState(uint _value) public {
        state = _value;
    }

    function setPayment(uint _value) public {
        payment = _value;
    }

    function setPaymentFrec(uint _value) public {
        paymentFrec = _value;
    }

    function setstorageURI(string calldata _value) public {
        storageURI = _value;
    }

    function setworkObligations(string calldata _value) public {
        workObligations = _value;
    }
}
