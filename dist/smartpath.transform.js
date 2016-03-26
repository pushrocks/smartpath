"use strict";
/// <reference path="typings/main.d.ts" />
var plugins = require("./smartpath.plugins");
/* ------------------------------------------ *
 * ------------ helpers --------------------- *
 * ------------------------------------------ */
var makeAbsolute = function (localPathArg, baseArg) {
    var absolutePath;
    if (baseArg) {
        absolutePath = plugins.path.join(baseArg, localPathArg);
    }
    else {
        absolutePath = plugins.path.resolve(localPathArg);
    }
    return absolutePath;
};
/* ------------------------------------------ *
 * ------- export functions ----------------- *
 * ------------------------------------------ */
exports.toAbsolute = function (relativeArg, baseArg) {
    if (typeof relativeArg === "string") {
        return makeAbsolute(relativeArg, baseArg);
    }
    else if (Array.isArray(relativeArg)) {
        var relativeArray = relativeArg;
        var absoluteArray = [];
        for (var key in relativeArray) {
            absoluteArray.push(makeAbsolute(relativeArray[key], baseArg));
        }
        ;
        return absoluteArray;
    }
    else {
        plugins.beautylog.error("smartpath.absolute() could not make sense of the input. " +
            "Input is neither String nor Array");
        return false;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0cGF0aC50cmFuc2Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBDQUEwQztBQUMxQyxJQUFPLE9BQU8sV0FBVyxxQkFBcUIsQ0FBQyxDQUFDO0FBRWhEOztnREFFZ0Q7QUFDaEQsSUFBSSxZQUFZLEdBQUcsVUFBUyxZQUFtQixFQUFFLE9BQWU7SUFDNUQsSUFBSSxZQUFtQixDQUFDO0lBQ3hCLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7UUFDUixZQUFZLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNILFlBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsTUFBTSxDQUFDLFlBQVksQ0FBQztBQUN4QixDQUFDLENBQUM7QUFFRjs7Z0RBRWdEO0FBQ3JDLGtCQUFVLEdBQUcsVUFBUyxXQUFlLEVBQUUsT0FBZTtJQUM3RCxFQUFFLENBQUEsQ0FBQyxPQUFPLFdBQVcsS0FBSyxRQUFRLENBQUMsQ0FBQSxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBLENBQUM7UUFDbEMsSUFBSSxhQUFhLEdBQUcsV0FBVyxDQUFBO1FBQy9CLElBQUksYUFBYSxHQUFZLEVBQUUsQ0FBQztRQUNoQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxhQUFhLENBQUMsQ0FBQSxDQUFDO1lBQzNCLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLENBQUM7UUFBQSxDQUFDO1FBQ0YsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUN6QixDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQywwREFBMEQ7WUFDOUUsbUNBQW1DLENBQUMsQ0FBQztRQUN6QyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7QUFDTCxDQUFDLENBQUMiLCJmaWxlIjoic21hcnRwYXRoLnRyYW5zZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJ0eXBpbmdzL21haW4uZC50c1wiIC8+XG5pbXBvcnQgcGx1Z2lucyA9IHJlcXVpcmUoXCIuL3NtYXJ0cGF0aC5wbHVnaW5zXCIpO1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKlxuICogLS0tLS0tLS0tLS0tIGhlbHBlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tICpcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xubGV0IG1ha2VBYnNvbHV0ZSA9IGZ1bmN0aW9uKGxvY2FsUGF0aEFyZzpzdHJpbmcsIGJhc2VBcmc/OnN0cmluZyk6c3RyaW5nIHtcbiAgICBsZXQgYWJzb2x1dGVQYXRoOnN0cmluZztcbiAgICBpZihiYXNlQXJnKXtcbiAgICAgICAgYWJzb2x1dGVQYXRoID0gcGx1Z2lucy5wYXRoLmpvaW4oYmFzZUFyZyxsb2NhbFBhdGhBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICBhYnNvbHV0ZVBhdGggPSBwbHVnaW5zLnBhdGgucmVzb2x2ZShsb2NhbFBhdGhBcmcpO1xuICAgIH1cbiAgICByZXR1cm4gYWJzb2x1dGVQYXRoO1xufTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICpcbiAqIC0tLS0tLS0gZXhwb3J0IGZ1bmN0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLSAqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbmV4cG9ydCBsZXQgdG9BYnNvbHV0ZSA9IGZ1bmN0aW9uKHJlbGF0aXZlQXJnOmFueSwgYmFzZUFyZz86c3RyaW5nKTphbnkge1xuICAgIGlmKHR5cGVvZiByZWxhdGl2ZUFyZyA9PT0gXCJzdHJpbmdcIil7XG4gICAgICAgIHJldHVybiBtYWtlQWJzb2x1dGUocmVsYXRpdmVBcmcsYmFzZUFyZyk7XG4gICAgfSBlbHNlIGlmKEFycmF5LmlzQXJyYXkocmVsYXRpdmVBcmcpKXtcbiAgICAgICAgbGV0IHJlbGF0aXZlQXJyYXkgPSByZWxhdGl2ZUFyZ1xuICAgICAgICBsZXQgYWJzb2x1dGVBcnJheTpzdHJpbmdbXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcmVsYXRpdmVBcnJheSl7XG4gICAgICAgICAgICBhYnNvbHV0ZUFycmF5LnB1c2gobWFrZUFic29sdXRlKHJlbGF0aXZlQXJyYXlba2V5XSxiYXNlQXJnKSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBhYnNvbHV0ZUFycmF5O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBsdWdpbnMuYmVhdXR5bG9nLmVycm9yKFwic21hcnRwYXRoLmFic29sdXRlKCkgY291bGQgbm90IG1ha2Ugc2Vuc2Ugb2YgdGhlIGlucHV0LiBcIiArXG4gICAgICAgICAgICBcIklucHV0IGlzIG5laXRoZXIgU3RyaW5nIG5vciBBcnJheVwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
