"use strict";
require("typings-global");
// import modules
const SmartpathCheck = require("./smartpath.check");
const SmartpathGet = require("./smartpath.get");
const SmartpathTransform = require("./smartpath.transform");
/**
 *
 * @type {{getPath: (function(any): undefined)}}
 */
let smartpath = {
    check: SmartpathCheck,
    get: SmartpathGet,
    transform: SmartpathTransform
};
module.exports = smartpath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEJBQXVCO0FBR3ZCLGlCQUFpQjtBQUNqQixvREFBb0Q7QUFDcEQsZ0RBQWdEO0FBQ2hELDREQUE0RDtBQUU1RDs7O0dBR0c7QUFDSCxJQUFJLFNBQVMsR0FBRztJQUNaLEtBQUssRUFBRSxjQUFjO0lBQ3JCLEdBQUcsRUFBRSxZQUFZO0lBQ2pCLFNBQVMsRUFBRSxrQkFBa0I7Q0FDaEMsQ0FBQTtBQUVELGlCQUFTLFNBQVMsQ0FBQSJ9