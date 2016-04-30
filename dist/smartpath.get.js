"use strict";
/// <reference path="typings/main.d.ts" />
var plugins = require("./smartpath.plugins");
/**
 * returns the type of the given path. Can be "url" or "local"
 */
exports.type = function (pathStringArg) {
    var urlRegex = /http[s|\s]:\/\/.*/i;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0cGF0aC5nZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBDQUEwQztBQUMxQyxJQUFPLE9BQU8sV0FBVyxxQkFBcUIsQ0FBQyxDQUFDO0FBRWhEOztHQUVHO0FBQ1EsWUFBSSxHQUFHLFVBQVMsYUFBb0I7SUFDM0MsSUFBSSxRQUFRLEdBQUcsb0JBQW9CLENBQUE7SUFDbkMsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBLENBQUM7UUFDN0IsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFBQSxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBRVMsWUFBSSxHQUFHLFVBQVMsWUFBb0I7SUFDM0MsRUFBRSxDQUFBLENBQUMsWUFBWSxDQUFDLENBQUEsQ0FBQztRQUNiLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7QUFDTCxDQUFDLENBQUMiLCJmaWxlIjoic21hcnRwYXRoLmdldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJ0eXBpbmdzL21haW4uZC50c1wiIC8+XG5pbXBvcnQgcGx1Z2lucyA9IHJlcXVpcmUoXCIuL3NtYXJ0cGF0aC5wbHVnaW5zXCIpO1xuXG4vKipcbiAqIHJldHVybnMgdGhlIHR5cGUgb2YgdGhlIGdpdmVuIHBhdGguIENhbiBiZSBcInVybFwiIG9yIFwibG9jYWxcIlxuICovXG5leHBvcnQgbGV0IHR5cGUgPSBmdW5jdGlvbihwYXRoU3RyaW5nQXJnOnN0cmluZyk6c3RyaW5nIHtcbiAgICBsZXQgdXJsUmVnZXggPSAvaHR0cFtzfFxcc106XFwvXFwvLiovaVxuICAgIGlmKHVybFJlZ2V4LmV4ZWMocGF0aFN0cmluZ0FyZykpe1xuICAgICAgICByZXR1cm4gXCJ1cmxcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJsb2NhbFwiO1xuICAgIH07XG59O1xuXG5leHBvcnQgbGV0IGhvbWUgPSBmdW5jdGlvbihwYXRoQXJndW1lbnQ/OnN0cmluZyl7XG4gICAgaWYocGF0aEFyZ3VtZW50KXtcbiAgICAgICAgcmV0dXJuIHBsdWdpbnMuaG9tZS5yZXNvbHZlKHBhdGhBcmd1bWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBsdWdpbnMuaG9tZSgpO1xuICAgIH1cbn07Il19
