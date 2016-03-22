/// <reference path="typings/main.d.ts" />

import plugins = require("./smartci.plugins");

export let ciName = function(){

};

export let jobNumberString = function():string {
    return process.env.TRAVIS_JOB_NUMBER;
};

export let mainJobNumber = function():number{
    return parseInt(jobNumberString());
};

export let subJobNumber = function():number {
    let subJobRegex = /[0-9]*\.(.*)/;
    let regexArray = subJobRegex.exec(jobNumberString());
    return parseInt(regexArray[1]);
};

