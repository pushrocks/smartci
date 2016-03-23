/// <reference path="../ts/typings/main.d.ts" />
var smartci = require("../dist/index.js");
var should = require("should");
process.env.TRAVIS_JOB_NUMBER = "180.3";
process.env.TRAVIS_TAG = "";
process.env.CI = "true";
describe("smartci", function () {
    describe("check", function () {
        describe(".isCi", function () {
            it("should state if we are in a CI environment", function () {
                smartci.check.isCi().should.be.true();
                process.env.CI = "false";
                smartci.check.isCi().should.be.false();
            });
        });
        describe(".isTaggedCommit", function () {
            it("should state if we are dealing with a tagged commit", function () {
                smartci.check.isTaggedCommit().should.be.false();
                process.env.TRAVIS_TAG = "v0.3.1";
                smartci.check.isTaggedCommit().should.be.true();
            });
        });
    });
    describe("get", function () {
        describe(".jobNumberString", function () {
            it("should get the correct job number", function () {
                smartci.get.jobNumberString().should.equal("180.3");
            });
        });
        describe(".mainJobNumber", function () {
            it("should get the correct main job number", function () {
                smartci.get.mainJobNumber().should.equal(180);
            });
        });
        describe(".subJobNumber", function () {
            it("should get the correct sub job number", function () {
                smartci.get.subJobNumber().should.equal(3);
            });
        });
    });
});
//# sourceMappingURL=test.js.map