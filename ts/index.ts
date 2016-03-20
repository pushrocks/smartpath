/// <reference path="typings/main.d.ts" />
import plugins = require("./smartpath.plugins");
import SmartpathTransform = require("./smartpath.transform");
import SmartpathGet = require("./smartpath.get");

/**
 *
 * @type {{getPath: (function(any): undefined)}}
 */
let smartpath = {
    transform: SmartpathTransform,
    get: SmartpathGet

};


export = smartpath;
