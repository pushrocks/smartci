import plugins = require("./smartci.plugins");
import SmartCiGet = require("./smartci.get");

export let isCi = function():boolean {
    if(process.env.CI == "true"){
        return true;
    } else {
        return false;
    }
};

export let isTaggedCommit = () => {
    return typeof process.env.CI_BUILD_TAG != "undefined";
}
