var SampleERC223 = artifacts.require("./SampleERC223.sol");

contract('SampleERC223', function(accounts) {

    //Test constructor
    it("Test constructor", function()
    {
        return SampleERC223.new( 1000, "TestToken223", "TT223", 18)
            .then(function(instance) {
                instance.totalSupply().then(function(supply){
                    assert.equal(supply.valueOf(), 1000, "Token total supply must match argument 1 from the constructor in ../migrations/deploy_migrations.js");
                }).catch(function(error){
                    process.stdout.write(error.toString() + "\n");
                });

                instance.name().then(function(name){
                    assert.equal(name, "TestToken223", "Token name must match argument 2 from the constructor in ../migrations/deploy_migrations.js");
                }).catch(function(error){
                    process.stdout.write(error.toString() + "\n");
                });

                instance.symbol().then(function(symbol){
                    assert.equal(symbol, "TT223", "Token symbol must match argument 3 from the constructor in ../migrations/deploy_migrations.js");
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
});
