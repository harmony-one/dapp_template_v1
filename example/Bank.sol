// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

/**
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

IMPORTANT
=========
THIS IS A MINIMAL EXAMPLE THAT IS NOT SECURE TO USE AS PUBLIC CONTRACT
AS IT DOES NOT PROVE IN ANY WAY WHO STORED TOKENS AND WHO IS ALLOWED TO
WITHDRAW THAT TOKENS!

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */
contract Counter {
    uint256 moneyStored = 0;

    function deposit() public payable {
        moneyStored += msg.value;
    }

    function withdraw() public {
        msg.sender.transfer(moneyStored);
        moneyStored = 0;
    }

    function getMoneyStored() public view returns (uint256) {
        return moneyStored;
    }
}
