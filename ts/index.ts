/// <reference path="typings/main.d.ts" />
import plugins = require("./smartpath.plugins");
import SmartpathCheck = require("./smartpath.check");
import SmartpathGet = require("./smartpath.get");
import SmartpathTransform = require("./smartpath.transform");

/**
 *
 * @type {{getPath: (function(any): undefined)}}
 */
let smartpath = {
    check: SmartpathCheck,
    get: SmartpathGet,
    transform: SmartpathTransform
};


export = smartpath;
