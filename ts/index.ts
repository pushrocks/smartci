/// <reference path="typings/main.d.ts" />
import plugins = require("./smartci.plugins");
import SmartCiCheck = require("./smartci.check");
import SmartCiGet = require("./smartci.get");
let smartci = {
    check: SmartCiCheck,
    get: SmartCiGet
};

export = smartci;
