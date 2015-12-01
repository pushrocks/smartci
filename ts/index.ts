/// <reference path="typings/tsd.d.ts" />
/// <reference path="classes.ts" />
var beautylog = require("beautylog")("os");
var addToGlobal = function(objectArg,paramName) {
    global[paramName] = objectArg;
};
var smartenv:any = {}; //create smartenv object
smartenv.items = {}; // create the items object to store items to.
smartenv.makeGlobal = function() {
    addToGlobal(smartenv,"smartenv");//add object smartenv as global["smartenv"]
};


smartenv.info = {};
smartenv.info.jsenv = function() {
    var app = {
        env: '',
        agent: ''
    };

    if (window) {
        app.env = 'browser';
        app.agent = navigator.userAgent;
    } else if (process) {
        app.env = 'node';
    }
};
smartenv.info.node = {};
smartenv.info.node.version = process.version;
smartenv.info.print = function() {
    var pck = require("./package.json");
    beautylog.log("node version is " + smartenv.info.node.version + " and smartenv version is " + pck.version);
    beautylog.log("the smartenv module currently holds the following properties:");
    console.log(Object.getOwnPropertyNames(smartenv.items).sort());
};

smartenv.register = function(objectArg,paramName = "undefined") {
    if (paramName == "undefined"){
        beautylog.error("paramName is undefined");
        return;
    }
    smartenv.items[paramName] = objectArg;
};
smartenv.get = function(keyName) {
    return smartenv.items[keyName];
};

smartenv.exportEnv = function() {

};

smartenv.importEnv = function() {

};

module.exports = smartenv;
