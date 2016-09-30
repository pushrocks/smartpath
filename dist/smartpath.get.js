"use strict";
require("typings-global");
const plugins = require("./smartpath.plugins");
/**
 * returns the type of the given path. Can be "url" or "local"
 */
exports.type = function (pathStringArg) {
    let urlRegex = /http[s|\s]:\/\/.*/i;
    if (urlRegex.exec(pathStringArg)) {
        return "url";
    }
    else {
        return "local";
    }
    ;
};
exports.home = function (pathArgument) {
    if (pathArgument) {
        return plugins.home.resolve(pathArgument);
    }
    else {
        return plugins.home();
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRwYXRoLmdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0cGF0aC5nZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBCQUF3QjtBQUN4QiwrQ0FBZ0Q7QUFFaEQ7O0dBRUc7QUFDUSxRQUFBLElBQUksR0FBRyxVQUFTLGFBQW9CO0lBQzNDLElBQUksUUFBUSxHQUFHLG9CQUFvQixDQUFBO0lBQ25DLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQSxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBQUEsQ0FBQztBQUNOLENBQUMsQ0FBQztBQUVTLFFBQUEsSUFBSSxHQUFHLFVBQVMsWUFBb0I7SUFDM0MsRUFBRSxDQUFBLENBQUMsWUFBWSxDQUFDLENBQUEsQ0FBQztRQUNiLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7QUFDTCxDQUFDLENBQUMifQ==