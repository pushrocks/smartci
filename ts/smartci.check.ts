/// <reference path="typings/main.d.ts" />

import plugins = require("./smartci.plugins");

export let isCi = function():boolean {
    if(process.env.CI == "true"){
        return true;
    } else {
        return false;
    }
};

export let isTaggedCommit = function(){
    if(process.env.TRAVIS_TAG != ""){
        return true;
    } else {
        return false;
    }
};

