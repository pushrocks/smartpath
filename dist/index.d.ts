import "typings-global";
import SmartpathCheck = require("./smartpath.check");
import SmartpathGet = require("./smartpath.get");
import SmartpathTransform = require("./smartpath.transform");
/**
 *
 * @type {{getPath: (function(any): undefined)}}
 */
declare let smartpath: {
    check: typeof SmartpathCheck;
    get: typeof SmartpathGet;
    transform: typeof SmartpathTransform;
};
export = smartpath;
