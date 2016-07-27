import "typings-test";
var smartci = require("../dist/index.js");
var should = require("should");

process.env.TRAVIS_JOB_NUMBER = "180.3";
process.env.CI = "true";

describe("smartci",function(){
    describe("check",function(){
        describe(".isCi",function(){
            it("should state if we are in a CI environment",function(){
                smartci.isCi().should.be.true();
                process.env.CI = "false";
                smartci.isCi().should.be.false();
            });
        });
        describe(".isTaggedCommit",function(){
            it("should state if we are dealing with a tagged commit",function(){
                delete process.env["CI_BUILD_TAG"];
                smartci.isTaggedCommit().should.be.false();
                process.env.CI_BUILD_TAG = "3.1.2";
                smartci.isTaggedCommit().should.be.true();
            })
        });
    });
});