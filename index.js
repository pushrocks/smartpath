/// <reference path="typings/tsd.d.ts" />
var path = require("path");
var bl = require("beautylog");
/**
 *
 * @type {{getPath: (function(any): undefined)}}
 */
var smartpath = {
    getAbsPath: function (varPath, logBool) {
        if (logBool === void 0) { logBool = false; }
        var absPath = path.resolve(varPath);
        if (logBool == true) {
            bl.log('varPath is' + varPath);
            bl.log('absPath is' + absPath);
        }
        return absPath;
    }
};
module.exports = smartpath;
