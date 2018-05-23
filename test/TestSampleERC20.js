var SampleERC20 = artifacts.require("./SampleERC20.sol");

contract('SampleERC20', function(accounts) {

    //Test constructor
    it("Test constructor", function()
    {
        return SampleERC20.new( 1000, "TestToken", "TT", 18)
            .then(function(instance) {

                instance.totalSupply().then(function(supply){
                    assert.equal(supply.valueOf(), 1000, "Token total supply must match argument 1 from the constructor in ../migrations/deploy_migrations.js");
                });

                instance.name().then(function(name){
                    assert.equal(name, "TestToken", "Token name must match argument 2 from the constructor in ../migrations/deploy_migrations.js");
                });

                instance.symbol().then(function(symbol){
                    assert.equal(symbol, "TT", "Token symbol must match argument 3 from the constructor in ../migrations/deploy_migrations.js");
                });

                instance.decimals().then(function(decimals){
                    assert.equal(decimals.valueOf(), 18, "Token decimal must argument 4 from the constructor in ../migrations/deploy_migrations.js");
                });
            });
    });


    //Test transfer
    it("Transfer tokens from accounts[0] to accounts[1], accounts[2], accounts[3]", function()
    {
        return SampleERC20.new( 1000, "TestToken", "TT", 18)
            .then(function(instance) {
                instance.transfer(accounts[1], 5);
                instance.transfer(accounts[2], 10);
                instance.transfer(accounts[3], 15);

                instance.balanceOf(accounts[0]).then(function(balance){
                    assert.equal(balance.valueOf(), 970, "accounts[0] should have 995 tokens");
                });

                instance.balanceOf(accounts[1]).then(function(balance){
                    assert.equal(balance.valueOf(), 5, "accounts[1] should have 5 tokens");
                });

                instance.balanceOf(accounts[2]).then(function(balance){
                    assert.equal(balance.valueOf(), 10, "accounts[2] should have 5 tokens");
                });

                instance.balanceOf(accounts[3]).then(function(balance){
                    assert.equal(balance.valueOf(), 15, "accounts[3] should have 5 tokens");
                });
            });
    });

    it("Transfer 5 tokens from accounts[0] to accounts[1]", function()
    {
        return SampleERC20.deployed()
            .then(function(instance) {
                instance.transfer(accounts[1], 5);
                instance.transfer(accounts[2], 10);
                instance.transfer(accounts[3], 15);

                instance.balanceOf(accounts[0]).then(function(balance){
                    assert.equal(balance.valueOf(), 970, "accounts[0] should have 995 tokens");
                });

                instance.balanceOf(accounts[1]).then(function(balance){
                    assert.equal(balance.valueOf(), 5, "accounts[1] should have 5 tokens");
                });

                instance.balanceOf(accounts[2]).then(function(balance){
                    assert.equal(balance.valueOf(), 10, "accounts[2] should have 5 tokens");
                });

                instance.balanceOf(accounts[3]).then(function(balance){
                    assert.equal(balance.valueOf(), 15, "accounts[3] should have 5 tokens");
                });
            });
    });

    // it("Transfer 5 tokens from accounts[0] to accounts[1]", function()
    // {
    //     return SampleERC20.deployed()
    //         .then(function(instance)
    //         {
    //             instance.transfer(accounts[1], 5);
    //             return instance.balanceOf(accounts[1]);
    //         }).then(function(balance) {
    //             assert.equal(balance.valueOf(), 5, "accounts[1] should have 5 tokens");
    //         });
    // });

    // it("should call a function that depends on a linked library", function() {
    //     var meta;
    //     var metaCoinBalance;
    //     var metaCoinEthBalance;
    //
    //     return MetaCoin.deployed().then(function(instance) {
    //         meta = instance;
    //         return meta.getBalance.call(accounts[0]);
    //     }).then(function(outCoinBalance) {
    //         metaCoinBalance = outCoinBalance.toNumber();
    //         return meta.getBalanceInEth.call(accounts[0]);
    //     }).then(function(outCoinBalanceEth) {
    //         metaCoinEthBalance = outCoinBalanceEth.toNumber();
    //     }).then(function() {
    //         assert.equal(metaCoinEthBalance, 2 * metaCoinBalance, "Library function returned unexpeced function, linkage may be broken");
    //     });
    // });

    // it("should send coin correctly", function() {
    //     var meta;
    //
    //     //    Get initial balances of first and second account.
    //     var account_one = accounts[0];
    //     var account_two = accounts[1];
    //
    //     var account_one_starting_balance;
    //     var account_two_starting_balance;
    //     var account_one_ending_balance;
    //     var account_two_ending_balance;
    //
    //     var amount = 10;
    //
    //     return MetaCoin.deployed().then(function(instance) {
    //         meta = instance;
    //         return meta.getBalance.call(account_one);
    //     }).then(function(balance) {
    //         account_one_starting_balance = balance.toNumber();
    //         return meta.getBalance.call(account_two);
    //     }).then(function(balance) {
    //         account_two_starting_balance = balance.toNumber();
    //         return meta.sendCoin(account_two, amount, {from: account_one});
    //     }).then(function() {
    //         return meta.getBalance.call(account_one);
    //     }).then(function(balance) {
    //         account_one_ending_balance = balance.toNumber();
    //         return meta.getBalance.call(account_two);
    //     }).then(function(balance) {
    //         account_two_ending_balance = balance.toNumber();
    //
    //         assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
    //         assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
    //     });
    // });
});
