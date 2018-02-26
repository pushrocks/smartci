import { tap, expect } from 'tapbundle';

import * as smartci from "../ts/index";

process.env.TRAVIS_JOB_NUMBER = "180.3";
process.env.CI = "true";


tap.test("should state if we are in a CI environment", async () => {
    expect(smartci.isCi()).to.be.true();
    process.env.CI = "false";
    expect(smartci.isCi()).to.be.false();
});

tap.test("should state if we are dealing with a tagged commit", async () => {
    delete process.env[ "CI_BUILD_TAG" ];
    expect(smartci.isTaggedCommit()).to.be.false();
    process.env.CI_BUILD_TAG = "3.1.2";
    expect(smartci.isTaggedCommit()).to.be.true();
})

tap.start()
