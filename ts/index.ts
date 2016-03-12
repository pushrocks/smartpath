/// <reference path="typings/main.d.ts" />
import plugins = require("./smartpath.plugins");
import SmartpathAbsolute = require("./smartpath.absolute");


/**
 *
 * @type {{getPath: (function(any): undefined)}}
 */
let smartpath = {
    absolute: SmartpathAbsolute
};


export = smartpath;
