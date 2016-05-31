"use strict";
require("typings-test");
var should = require("should");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Q2QsRUFBRSxDQUFDLGlEQUFpRCxFQUFDO2dCQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDOUMsQ0FBQyxDQUFDLENBQUM7WUFDSCxFQUFFLENBQUMscUVBQXFFLEVBQUM7Z0JBQ3JFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJ0eXBpbmdzLXRlc3RcIlxyXG5sZXQgc2hvdWxkID0gcmVxdWlyZShcInNob3VsZFwiKTtcclxubGV0IHNtYXJ0cGF0aCA9IHJlcXVpcmUoXCIuLi9kaXN0L2luZGV4LmpzXCIpO1xyXG5cclxuZGVzY3JpYmUoXCJzbWFydHBhdGhcIixmdW5jdGlvbigpe1xyXG4gICAgZGVzY3JpYmUoXCIuY2hlY2tcIixmdW5jdGlvbigpe1xyXG4gICAgICAgIGxldCBmaWxlUGF0aFN0cmluZyA9IFwiLi9zb21lZGlyL3NvbWVmaWxlLmpzb25cIlxyXG4gICAgICAgIGxldCBkaXJQYXRoU3RyaW5nID0gXCIuL3NvbWVkaXIvYW5vdGhlcmRpclwiXHJcbiAgICAgICAgbGV0IGRpclBhdGhTdHJpbmcyID0gXCIuL3NvbWVkaXIvYW5vdGhlci5kaXIvXCJcclxuICAgICAgICBkZXNjcmliZShcIi5pc0ZpbGVcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpdChcInNob3VsZCBiZSB0cnVlIGZvciBhIGZpbGUgcGF0aFwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBzbWFydHBhdGguY2hlY2suaXNGaWxlKGZpbGVQYXRoU3RyaW5nKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zaG91bGQuYmUudHJ1ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaXQoXCJzaG91bGQgYmUgZmFsc2UgZm9yIGEgZGlyZWN0b3J5IHBhdGhcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgc21hcnRwYXRoLmNoZWNrLmlzRmlsZShkaXJQYXRoU3RyaW5nKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zaG91bGQuYmUuZmFsc2UoKTtcclxuICAgICAgICAgICAgICAgIHNtYXJ0cGF0aC5jaGVjay5pc0ZpbGUoZGlyUGF0aFN0cmluZzIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNob3VsZC5iZS5mYWxzZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkZXNjcmliZShcIi5pc0RpclwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGl0KFwic2hvdWxkIGJlIHRydWUgZm9yIGEgZGlyZWN0b3J5IHBhdGhcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgc21hcnRwYXRoLmNoZWNrLmlzRGlyKGRpclBhdGhTdHJpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNob3VsZC5iZS50cnVlKCk7XHJcbiAgICAgICAgICAgICAgICBzbWFydHBhdGguY2hlY2suaXNEaXIoZGlyUGF0aFN0cmluZzIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNob3VsZC5iZS50cnVlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpdChcInNob3VsZCBiZSBmYWxzZSBmb3IgYSBmaWxlIHBhdGhcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgc21hcnRwYXRoLmNoZWNrLmlzRGlyKGZpbGVQYXRoU3RyaW5nKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zaG91bGQuYmUuZmFsc2UoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGRlc2NyaWJlKFwiLnRyYW5zZm9ybVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZGVzY3JpYmUoXCJ0b0Fic29sdXRlKClcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBsZXQgYmFzZVN0cmluZyA9IFwiL2Jhc2VkaXJcIjtcclxuICAgICAgICAgICAgbGV0IHJlbGF0aXZlU3RyaW5nID0gXCJzb21lZGlyL3NvbWVmaWxlLnR4dFwiO1xyXG4gICAgICAgICAgICBsZXQgcmVsYXRpdmVTdHJpbmcyID0gXCJhbm90aGVyZGlyL2Fub3RoZXJmaWxlLnR4dFwiO1xyXG4gICAgICAgICAgICBsZXQgcmVsYXRpdmVBcnJheSA9IFtyZWxhdGl2ZVN0cmluZyxyZWxhdGl2ZVN0cmluZyxyZWxhdGl2ZVN0cmluZzJdO1xyXG4gICAgICAgICAgICBpdChcInNob3VsZCBtYWtlIGEgc3RyaW5nIGFic29sdXRlXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHNtYXJ0cGF0aC50cmFuc2Zvcm0udG9BYnNvbHV0ZShyZWxhdGl2ZVN0cmluZykuc2hvdWxkLnN0YXJ0V2l0aChcIi9cIik7XHJcbiAgICAgICAgICAgICAgICBzbWFydHBhdGgudHJhbnNmb3JtLnRvQWJzb2x1dGUocmVsYXRpdmVTdHJpbmcpLnNob3VsZC5lbmRXaXRoKHJlbGF0aXZlU3RyaW5nKTtcclxuICAgICAgICAgICAgICAgIHNtYXJ0cGF0aC50cmFuc2Zvcm0udG9BYnNvbHV0ZShyZWxhdGl2ZVN0cmluZyxiYXNlU3RyaW5nKS5zaG91bGQuZXF1YWwoXCIvYmFzZWRpci9zb21lZGlyL3NvbWVmaWxlLnR4dFwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGl0KFwic2hvdWxkIG1ha2UgYW4gYXJyYXkgb2YgcmVsYXRpdmUgU3RyaW5ncyBhbiBBcnJheSBvZiBhYnNvbHV0ZSBTdHJpbmdzXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGxldCBhYnNvbHV0ZUFycmF5ID0gc21hcnRwYXRoLnRyYW5zZm9ybS50b0Fic29sdXRlKHJlbGF0aXZlQXJyYXksYmFzZVN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICBhYnNvbHV0ZUFycmF5WzJdLnNob3VsZC5zdGFydFdpdGgoXCIvXCIpO1xyXG4gICAgICAgICAgICAgICAgYWJzb2x1dGVBcnJheVsyXS5zaG91bGQuZW5kV2l0aChyZWxhdGl2ZVN0cmluZzIpO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaXQoXCJzaG91bGQgcmV0dXJuIGZhbHNlIGlmIG5laXRoZXIgU3RyaW5nIG5vciBBcnJheVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBzbWFydHBhdGgudHJhbnNmb3JtLnRvQWJzb2x1dGUoMykuc2hvdWxkLmJlLmZhbHNlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBkZXNjcmliZShcIi5nZXRcIixmdW5jdGlvbigpe1xyXG4gICAgICAgIGRlc2NyaWJlKFwiLnR5cGUoKVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGl0KFwic2hvdWxkIHJldHVybiAndXJsJyBmb3IgYW4gVVJMXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHNtYXJ0cGF0aC5nZXQudHlwZShcImh0dHBzOi8vcHVzaC5yb2Nrcy9zb21lL3VybFwiKS5zaG91bGQuZXF1YWwoXCJ1cmxcIik7XHJcbiAgICAgICAgICAgICAgICBzbWFydHBhdGguZ2V0LnR5cGUoXCJodHRwczovL3B1c2gucm9ja3Mvc29tZS91cmxcIikuc2hvdWxkLm5vdC5lcXVhbChcImxvY2FsXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaXQoXCJzaG91bGQgcmV0dXJuICdwYXRoJyBmb3IgYSBQYXRoXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHNtYXJ0cGF0aC5nZXQudHlwZShcIi9zb21lL2Fic29sdXRlL3BhdGgvXCIpLnNob3VsZC5lcXVhbChcImxvY2FsXCIpO1xyXG4gICAgICAgICAgICAgICAgc21hcnRwYXRoLmdldC50eXBlKFwiLi9zb21lL3JlbGF0aXZlL3BhdGgvXCIpLnNob3VsZC5ub3QuZXF1YWwoXCJ1cmxcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRlc2NyaWJlKFwiLmdldCgpXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaXQoXCJzaG91bGQgYSBhYnNvbHV0ZSBwYXRoIGZvciBhbiBob21lIHJlbGF0aXZlIFVSTFwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzbWFydHBhdGguZ2V0LmhvbWUoXCJ+L3Rlc3RcIikpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaXQoXCJzaG91bGQgcmV0dXJuIHRoZSBob21lIGRpcmVjdG9yeSBwYXRoIHdoZW4gbm8gYXJndW1lbnQgaXMgc3BlY2lmaWVkXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNtYXJ0cGF0aC5nZXQuaG9tZSgpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcbiJdfQ==
