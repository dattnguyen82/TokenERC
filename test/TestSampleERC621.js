var SampleERC621 = artifacts.require("./SampleERC621.sol");

contract('SampleERC621', function(accounts) {

    //Test constructor
    it("Test constructor", function() {
        return SampleERC621.new( 1000, "TestToken621", "TT621", 18)
            .then(function(instance) {
                instance.totalSupply().then(function(supply){
                    assert.equal(supply.valueOf(), 1000, "Token total supply must match argument 1 from the constructor in ../migrations/deploy_migrations.js");
                }).catch(function(error){
                    process.stdout.write(error.toString() + "\n");
                });

                instance.name().then(function(name){
                    assert.equal(name, "TestToken621", "Token name must match argument 2 from the constructor in ../migrations/deploy_migrations.js");
                }).catch(function(error){
                    process.stdout.write(error.toString() + "\n");
                });

                instance.symbol().then(function(symbol){
                    assert.equal(symbol, "TT621", "Token symbol must match argument 3 from the constructor in ../migrations/deploy_migrations.js");
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

    //Test Increase Supply
    it("Add 100 to supply", function() {
        return SampleERC621.new( 1000, "TestToken621", "TT621", 18)
            .then(function(instance) {
                instance.increaseSupply(100, accounts[0]).then(function(){
                    instance.totalSupply().then(function(supply){
                        assert.equal(supply.valueOf(), 1100, "Total supply should be 1100");
                    });
                }).catch(function(error){
                    process.stdout.write(error.toString() + "\n");
                });
            });
    });

    //Test Descrease Supply
    it("Subtract 100 to supply", function() {
        return SampleERC621.new( 1000, "TestToken621", "TT621", 18)
            .then(function(instance) {
                instance.increaseSupply(100, accounts[0]).then(function(){
                    instance.totalSupply().then(function(supply){
                        assert.equal(supply.valueOf(), 900, "Total supply should be 900");
                    });
                }).catch(function(error){
                    process.stdout.write(error.toString() + "\n");
                });
            });
    });

});
