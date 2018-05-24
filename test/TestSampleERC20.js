var SampleERC20 = artifacts.require("./SampleERC20.sol");

contract('SampleERC20', function(accounts) {

    //Test constructor
    it("Test constructor", function()
    {
        return SampleERC20.new( 1000, "TestToken", "TT", 18)
            .then(function(instance) {
                instance.totalSupply().then(function(supply){
                    assert.equal(supply.valueOf(), 1000, "Token total supply must match argument 1 from the constructor in ../migrations/deploy_migrations.js");
                }).catch(function(error){
                    process.stdout.write(error.toString() + "\n");
                });

                instance.name().then(function(name){
                    assert.equal(name, "TestToken", "Token name must match argument 2 from the constructor in ../migrations/deploy_migrations.js");
                }).catch(function(error){
                    process.stdout.write(error.toString() + "\n");
                });

                instance.symbol().then(function(symbol){
                    assert.equal(symbol, "TT", "Token symbol must match argument 3 from the constructor in ../migrations/deploy_migrations.js");
                }).catch(function(error){
                    process.stdout.write(error.toString() + "\n");
                });

                instance.decimals().then(function(decimals){
                    assert.equal(decimals.valueOf(), 18, "Token decimal must argument 4 from the constructor in ../migrations/deploy_migrations.js");
                }).catch(function(error){
                    process.stdout.write(error.toString() + "\n");
                });
            });
    });


    //Test transfer
    it("Transfer tokens from accounts[0] to accounts[1], accounts[2], accounts[3]", function()
    {
        return SampleERC20.new( 1000, "TestToken", "TT", 18)
            .then(function(instance) {
                instance.transfer(accounts[1], 5).then(function(){
                    instance.balanceOf(accounts[1]).then(function(balance){
                        assert.equal(balance.valueOf(), 5, "accounts[1] should have 5 tokens");
                    });
                }).catch(function(error){
                    process.stdout.write(error.toString() + "\n");
                });

                instance.transfer(accounts[2], 10).then(function(){
                    instance.balanceOf(accounts[2]).then(function(balance){
                        assert.equal(balance.valueOf(), 10, "accounts[2] should have 10 tokens");
                    });
                }).catch(function(error){
                    process.stdout.write(error.toString() + "\n");
                });

                instance.transfer(accounts[3], 15).then(function(){
                    instance.balanceOf(accounts[3]).then(function(balance){
                        assert.equal(balance.valueOf(), 15, "accounts[3] should have 15 tokens");
                    });
                }).catch(function(error){
                    process.stdout.write(error.toString() + "\n");
                });
            });
    });

    //Test approve
    it("Approve spender (accounts[1]) for accounts[0] for 1 token", function()
    {
        return SampleERC20.new( 1000, "TestToken", "TT", 18)
            .then(function(instance) {
                instance.approve(accounts[1], 3).then(function(){
                    instance.allowance(accounts[0], accounts[1]).then(function(amount){
                        assert.equal(amount.valueOf(), 3, "approval should be 3 tokens");
                    }).catch(function(error){
                        process.stdout.write(error.toString() + "\n");
                    });
                }).catch(function(error){
                    process.stdout.write(error.toString() + "\n");
                });
            });
    });

    //Test transferFrom
    it("Approve spender (accounts[2]) for accounts[0] for 5 tokens and transfer 5 tokens to accounts[3]", function()
    {
        return SampleERC20.new( 1000, "TestToken", "TT", 18)
            .then(function(instance) {
                instance.approve(accounts[2], 5).then(function(){
                    instance.transferFrom(accounts[0], accounts[3], 5, {from: accounts[2]}).then(function()
                    {
                        instance.balanceOf(accounts[3]).then(function(balance){
                            assert.equal(balance.valueOf(), 5, "accounts[3] should have 5 tokens");
                        }).catch(function(error){
                            process.stdout.write(error.toString() + "\n");
                        });
                    }).catch(function(error){
                        process.stdout.write(error.toString() + "\n");
                    });
                });
            });
    });
});
