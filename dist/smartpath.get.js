"use strict";
require("typings-global");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0cGF0aC5nZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sZ0JBQWdCLENBQUMsQ0FBQTtBQUN4QixJQUFZLE9BQU8sV0FBTSxxQkFBcUIsQ0FBQyxDQUFBO0FBRS9DOztHQUVHO0FBQ1EsWUFBSSxHQUFHLFVBQVMsYUFBb0I7SUFDM0MsSUFBSSxRQUFRLEdBQUcsb0JBQW9CLENBQUE7SUFDbkMsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBLENBQUM7UUFDN0IsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFBQSxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBRVMsWUFBSSxHQUFHLFVBQVMsWUFBb0I7SUFDM0MsRUFBRSxDQUFBLENBQUMsWUFBWSxDQUFDLENBQUEsQ0FBQztRQUNiLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7QUFDTCxDQUFDLENBQUMiLCJmaWxlIjoic21hcnRwYXRoLmdldC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInR5cGluZ3MtZ2xvYmFsXCI7XHJcbmltcG9ydCAqIGFzIHBsdWdpbnMgZnJvbSBcIi4vc21hcnRwYXRoLnBsdWdpbnNcIjtcclxuXHJcbi8qKlxyXG4gKiByZXR1cm5zIHRoZSB0eXBlIG9mIHRoZSBnaXZlbiBwYXRoLiBDYW4gYmUgXCJ1cmxcIiBvciBcImxvY2FsXCJcclxuICovXHJcbmV4cG9ydCBsZXQgdHlwZSA9IGZ1bmN0aW9uKHBhdGhTdHJpbmdBcmc6c3RyaW5nKTpzdHJpbmcge1xyXG4gICAgbGV0IHVybFJlZ2V4ID0gL2h0dHBbc3xcXHNdOlxcL1xcLy4qL2lcclxuICAgIGlmKHVybFJlZ2V4LmV4ZWMocGF0aFN0cmluZ0FyZykpe1xyXG4gICAgICAgIHJldHVybiBcInVybFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gXCJsb2NhbFwiO1xyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgaG9tZSA9IGZ1bmN0aW9uKHBhdGhBcmd1bWVudD86c3RyaW5nKXtcclxuICAgIGlmKHBhdGhBcmd1bWVudCl7XHJcbiAgICAgICAgcmV0dXJuIHBsdWdpbnMuaG9tZS5yZXNvbHZlKHBhdGhBcmd1bWVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBwbHVnaW5zLmhvbWUoKTtcclxuICAgIH1cclxufTsiXX0=
