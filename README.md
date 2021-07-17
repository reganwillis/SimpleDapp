# SimpleDapp

This simple decentralized app follows [this tutorial](https://www.youtube.com/watch?v=8wMKq7HvbKw). It uses [solidity](https://soliditylang.org/) programming language for the smart contract, [truffle](https://www.trufflesuite.com/truffle) to manage the smart contract artifact, and [ganache](https://www.trufflesuite.com/ganache) for the personal Ethereum blockchain.

## Building the Project

To create the project, I used

    truffle init

in the command prompt in the my new SimpleDapp directory. This created the base folder structure and files shown below:

    SimpleDapp
      build
        contracts
          Migrations.json
      contracts
        Migrations.sol
      migrations
        1_initial_migration.js
      test
      truffle-config.js

I created a smart contract, compiled it, and deployed it using [remix](http://remix.ethereum.org/). Then I added my new smart contract to the contracts folder. I also added a migrations file to the migrations folder that was [provided by the tutorial](https://gitlab.com/jklepatch/eattheblocks-pro/-/blob/master/dapp-30/day1-simple-smart-contract/tests/start/migrations/1558905191_simple_smart_contract.js).

## Testing the Project

I created a JavaScript file in the test folder that would test if the contract had been deployed or not. To run this test, I first have to have a blockchain running. In a command prompt I ran

    ganache-cli

to start the blockchain. I also edited the truffle-config.js file to take the comments off the development network.

I navigated to the test folder in the command prompt and ran the command:

    truffle test

My smart contract has been deployed, so the test passed!
