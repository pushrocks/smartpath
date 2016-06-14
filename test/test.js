"use strict";
require("typings-test");
require("should");
var smartpath = require("../dist/index.js");
describe("smartpath", function () {
    describe(".check", function () {
        var filePathString = "./somedir/somefile.json";
        var dirPathString = "./somedir/anotherdir";
        var dirPathString2 = "./somedir/another.dir/";
        describe(".isFile", function () {
            it("should be true for a file path", function () {
                smartpath.check.isFile(filePathString)
                    .should.be.true();
            });
            it("should be false for a directory path", function () {
                smartpath.check.isFile(dirPathString)
                    .should.be.false();
                smartpath.check.isFile(dirPathString2)
                    .should.be.false();
            });
        });
        describe(".isDir", function () {
            it("should be true for a directory path", function () {
                smartpath.check.isDir(dirPathString)
                    .should.be.true();
                smartpath.check.isDir(dirPathString2)
                    .should.be.true();
            });
            it("should be false for a file path", function () {
                smartpath.check.isDir(filePathString)
                    .should.be.false();
            });
        });
    });
    describe(".transform", function () {
        describe("toAbsolute()", function () {
            var baseString = "/basedir";
            var relativeString = "somedir/somefile.txt";
            var relativeString2 = "anotherdir/anotherfile.txt";
            var relativeArray = [relativeString, relativeString, relativeString2];
            it("should make a string absolute", function () {
                smartpath.transform.toAbsolute(relativeString).should.startWith("/");
                smartpath.transform.toAbsolute(relativeString).should.endWith(relativeString);
                smartpath.transform.toAbsolute(relativeString, baseString).should.equal("/basedir/somedir/somefile.txt");
            });
            it("should make an array of relative Strings an Array of absolute Strings", function () {
                var absoluteArray = smartpath.transform.toAbsolute(relativeArray, baseString);
                absoluteArray[2].should.startWith("/");
                absoluteArray[2].should.endWith(relativeString2);
            });
            it("should return false if neither String nor Array", function () {
                smartpath.transform.toAbsolute(3).should.be.false();
            });
        });
    });
    describe(".get", function () {
        describe(".type()", function () {
            it("should return 'url' for an URL", function () {
                smartpath.get.type("https://push.rocks/some/url").should.equal("url");
                smartpath.get.type("https://push.rocks/some/url").should.not.equal("local");
            });
            it("should return 'path' for a Path", function () {
                smartpath.get.type("/some/absolute/path/").should.equal("local");
                smartpath.get.type("./some/relative/path/").should.not.equal("url");
            });
        });
        describe(".get()", function () {
            it("should a absolute path for an home relative URL", function () {
                console.log(smartpath.get.home("~/test"));
            });
            it("should return the home directory path when no argument is specified", function () {
                console.log(smartpath.get.home());
            });
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFDO2dCQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDOUMsQ0FBQyxDQUFDLENBQUM7WUFDSCxFQUFFLENBQUMscUVBQXFFLEVBQUM7Z0JBQ3JFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJ0eXBpbmdzLXRlc3RcIjtcbmltcG9ydCBcInNob3VsZFwiO1xubGV0IHNtYXJ0cGF0aCA9IHJlcXVpcmUoXCIuLi9kaXN0L2luZGV4LmpzXCIpO1xuXG5kZXNjcmliZShcInNtYXJ0cGF0aFwiLGZ1bmN0aW9uKCl7XG4gICAgZGVzY3JpYmUoXCIuY2hlY2tcIixmdW5jdGlvbigpe1xuICAgICAgICBsZXQgZmlsZVBhdGhTdHJpbmcgPSBcIi4vc29tZWRpci9zb21lZmlsZS5qc29uXCJcbiAgICAgICAgbGV0IGRpclBhdGhTdHJpbmcgPSBcIi4vc29tZWRpci9hbm90aGVyZGlyXCJcbiAgICAgICAgbGV0IGRpclBhdGhTdHJpbmcyID0gXCIuL3NvbWVkaXIvYW5vdGhlci5kaXIvXCJcbiAgICAgICAgZGVzY3JpYmUoXCIuaXNGaWxlXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGl0KFwic2hvdWxkIGJlIHRydWUgZm9yIGEgZmlsZSBwYXRoXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBzbWFydHBhdGguY2hlY2suaXNGaWxlKGZpbGVQYXRoU3RyaW5nKVxuICAgICAgICAgICAgICAgICAgICAuc2hvdWxkLmJlLnRydWUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaXQoXCJzaG91bGQgYmUgZmFsc2UgZm9yIGEgZGlyZWN0b3J5IHBhdGhcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHNtYXJ0cGF0aC5jaGVjay5pc0ZpbGUoZGlyUGF0aFN0cmluZylcbiAgICAgICAgICAgICAgICAgICAgLnNob3VsZC5iZS5mYWxzZSgpO1xuICAgICAgICAgICAgICAgIHNtYXJ0cGF0aC5jaGVjay5pc0ZpbGUoZGlyUGF0aFN0cmluZzIpXG4gICAgICAgICAgICAgICAgICAgIC5zaG91bGQuYmUuZmFsc2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZGVzY3JpYmUoXCIuaXNEaXJcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgaXQoXCJzaG91bGQgYmUgdHJ1ZSBmb3IgYSBkaXJlY3RvcnkgcGF0aFwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgc21hcnRwYXRoLmNoZWNrLmlzRGlyKGRpclBhdGhTdHJpbmcpXG4gICAgICAgICAgICAgICAgICAgIC5zaG91bGQuYmUudHJ1ZSgpO1xuICAgICAgICAgICAgICAgIHNtYXJ0cGF0aC5jaGVjay5pc0RpcihkaXJQYXRoU3RyaW5nMilcbiAgICAgICAgICAgICAgICAgICAgLnNob3VsZC5iZS50cnVlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGl0KFwic2hvdWxkIGJlIGZhbHNlIGZvciBhIGZpbGUgcGF0aFwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgc21hcnRwYXRoLmNoZWNrLmlzRGlyKGZpbGVQYXRoU3RyaW5nKVxuICAgICAgICAgICAgICAgICAgICAuc2hvdWxkLmJlLmZhbHNlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgZGVzY3JpYmUoXCIudHJhbnNmb3JtXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgZGVzY3JpYmUoXCJ0b0Fic29sdXRlKClcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgbGV0IGJhc2VTdHJpbmcgPSBcIi9iYXNlZGlyXCI7XG4gICAgICAgICAgICBsZXQgcmVsYXRpdmVTdHJpbmcgPSBcInNvbWVkaXIvc29tZWZpbGUudHh0XCI7XG4gICAgICAgICAgICBsZXQgcmVsYXRpdmVTdHJpbmcyID0gXCJhbm90aGVyZGlyL2Fub3RoZXJmaWxlLnR4dFwiO1xuICAgICAgICAgICAgbGV0IHJlbGF0aXZlQXJyYXkgPSBbcmVsYXRpdmVTdHJpbmcscmVsYXRpdmVTdHJpbmcscmVsYXRpdmVTdHJpbmcyXTtcbiAgICAgICAgICAgIGl0KFwic2hvdWxkIG1ha2UgYSBzdHJpbmcgYWJzb2x1dGVcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHNtYXJ0cGF0aC50cmFuc2Zvcm0udG9BYnNvbHV0ZShyZWxhdGl2ZVN0cmluZykuc2hvdWxkLnN0YXJ0V2l0aChcIi9cIik7XG4gICAgICAgICAgICAgICAgc21hcnRwYXRoLnRyYW5zZm9ybS50b0Fic29sdXRlKHJlbGF0aXZlU3RyaW5nKS5zaG91bGQuZW5kV2l0aChyZWxhdGl2ZVN0cmluZyk7XG4gICAgICAgICAgICAgICAgc21hcnRwYXRoLnRyYW5zZm9ybS50b0Fic29sdXRlKHJlbGF0aXZlU3RyaW5nLGJhc2VTdHJpbmcpLnNob3VsZC5lcXVhbChcIi9iYXNlZGlyL3NvbWVkaXIvc29tZWZpbGUudHh0XCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpdChcInNob3VsZCBtYWtlIGFuIGFycmF5IG9mIHJlbGF0aXZlIFN0cmluZ3MgYW4gQXJyYXkgb2YgYWJzb2x1dGUgU3RyaW5nc1wiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgbGV0IGFic29sdXRlQXJyYXkgPSBzbWFydHBhdGgudHJhbnNmb3JtLnRvQWJzb2x1dGUocmVsYXRpdmVBcnJheSxiYXNlU3RyaW5nKTtcbiAgICAgICAgICAgICAgICBhYnNvbHV0ZUFycmF5WzJdLnNob3VsZC5zdGFydFdpdGgoXCIvXCIpO1xuICAgICAgICAgICAgICAgIGFic29sdXRlQXJyYXlbMl0uc2hvdWxkLmVuZFdpdGgocmVsYXRpdmVTdHJpbmcyKTtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGl0KFwic2hvdWxkIHJldHVybiBmYWxzZSBpZiBuZWl0aGVyIFN0cmluZyBub3IgQXJyYXlcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHNtYXJ0cGF0aC50cmFuc2Zvcm0udG9BYnNvbHV0ZSgzKS5zaG91bGQuYmUuZmFsc2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBkZXNjcmliZShcIi5nZXRcIixmdW5jdGlvbigpe1xuICAgICAgICBkZXNjcmliZShcIi50eXBlKClcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgaXQoXCJzaG91bGQgcmV0dXJuICd1cmwnIGZvciBhbiBVUkxcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHNtYXJ0cGF0aC5nZXQudHlwZShcImh0dHBzOi8vcHVzaC5yb2Nrcy9zb21lL3VybFwiKS5zaG91bGQuZXF1YWwoXCJ1cmxcIik7XG4gICAgICAgICAgICAgICAgc21hcnRwYXRoLmdldC50eXBlKFwiaHR0cHM6Ly9wdXNoLnJvY2tzL3NvbWUvdXJsXCIpLnNob3VsZC5ub3QuZXF1YWwoXCJsb2NhbFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaXQoXCJzaG91bGQgcmV0dXJuICdwYXRoJyBmb3IgYSBQYXRoXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBzbWFydHBhdGguZ2V0LnR5cGUoXCIvc29tZS9hYnNvbHV0ZS9wYXRoL1wiKS5zaG91bGQuZXF1YWwoXCJsb2NhbFwiKTtcbiAgICAgICAgICAgICAgICBzbWFydHBhdGguZ2V0LnR5cGUoXCIuL3NvbWUvcmVsYXRpdmUvcGF0aC9cIikuc2hvdWxkLm5vdC5lcXVhbChcInVybFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZGVzY3JpYmUoXCIuZ2V0KClcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgaXQoXCJzaG91bGQgYSBhYnNvbHV0ZSBwYXRoIGZvciBhbiBob21lIHJlbGF0aXZlIFVSTFwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc21hcnRwYXRoLmdldC5ob21lKFwifi90ZXN0XCIpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaXQoXCJzaG91bGQgcmV0dXJuIHRoZSBob21lIGRpcmVjdG9yeSBwYXRoIHdoZW4gbm8gYXJndW1lbnQgaXMgc3BlY2lmaWVkXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzbWFydHBhdGguZ2V0LmhvbWUoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbiJdfQ==
