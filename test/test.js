"use strict";
require("typings-test");
var smartci = require("../dist/index.js");
var should = require("should");
process.env.TRAVIS_JOB_NUMBER = "180.3";
process.env.CI = "true";
describe("smartci", function () {
    describe("check", function () {
        describe(".isCi", function () {
            it("should state if we are in a CI environment", function () {
                smartci.isCi().should.be.true();
                process.env.CI = "false";
                smartci.isCi().should.be.false();
            });
        });
        describe(".isTaggedCommit", function () {
            it("should state if we are dealing with a tagged commit", function () {
                smartci.isTaggedCommit().should.be.false();
                process.env.CI_BUILD_TAG = "3.1.2";
                smartci.isTaggedCommit().should.be.true();
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sY0FBYyxDQUFDLENBQUE7QUFDdEIsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDMUMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRS9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDO0FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQztBQUV4QixRQUFRLENBQUMsU0FBUyxFQUFDO0lBQ2YsUUFBUSxDQUFDLE9BQU8sRUFBQztRQUNiLFFBQVEsQ0FBQyxPQUFPLEVBQUM7WUFDYixFQUFFLENBQUMsNENBQTRDLEVBQUM7Z0JBQzVDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUM7Z0JBQ3pCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDSCxRQUFRLENBQUMsaUJBQWlCLEVBQUM7WUFDdkIsRUFBRSxDQUFDLHFEQUFxRCxFQUFDO2dCQUNyRCxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO2dCQUNuQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM5QyxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9