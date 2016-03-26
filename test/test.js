/// <reference path="../ts/typings/main.d.ts" />
var should = require("should");
var smartpath = require("../dist/index.js");
describe("smartpath", function () {
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
    });
});

//# sourceMappingURL=data:application/json;base64,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dHMvdHlwaW5ncy9tYWluLmQudHNcIiAvPlxubGV0IHNob3VsZCA9IHJlcXVpcmUoXCJzaG91bGRcIik7XG5sZXQgc21hcnRwYXRoID0gcmVxdWlyZShcIi4uL2Rpc3QvaW5kZXguanNcIik7XG5cbmRlc2NyaWJlKFwic21hcnRwYXRoXCIsZnVuY3Rpb24oKXtcbiAgICBkZXNjcmliZShcIi50cmFuc2Zvcm1cIixmdW5jdGlvbigpe1xuICAgICAgICBkZXNjcmliZShcInRvQWJzb2x1dGUoKVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBsZXQgYmFzZVN0cmluZyA9IFwiL2Jhc2VkaXJcIjtcbiAgICAgICAgICAgIGxldCByZWxhdGl2ZVN0cmluZyA9IFwic29tZWRpci9zb21lZmlsZS50eHRcIjtcbiAgICAgICAgICAgIGxldCByZWxhdGl2ZVN0cmluZzIgPSBcImFub3RoZXJkaXIvYW5vdGhlcmZpbGUudHh0XCI7XG4gICAgICAgICAgICBsZXQgcmVsYXRpdmVBcnJheSA9IFtyZWxhdGl2ZVN0cmluZyxyZWxhdGl2ZVN0cmluZyxyZWxhdGl2ZVN0cmluZzJdO1xuICAgICAgICAgICAgaXQoXCJzaG91bGQgbWFrZSBhIHN0cmluZyBhYnNvbHV0ZVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgc21hcnRwYXRoLnRyYW5zZm9ybS50b0Fic29sdXRlKHJlbGF0aXZlU3RyaW5nKS5zaG91bGQuc3RhcnRXaXRoKFwiL1wiKTtcbiAgICAgICAgICAgICAgICBzbWFydHBhdGgudHJhbnNmb3JtLnRvQWJzb2x1dGUocmVsYXRpdmVTdHJpbmcpLnNob3VsZC5lbmRXaXRoKHJlbGF0aXZlU3RyaW5nKTtcbiAgICAgICAgICAgICAgICBzbWFydHBhdGgudHJhbnNmb3JtLnRvQWJzb2x1dGUocmVsYXRpdmVTdHJpbmcsYmFzZVN0cmluZykuc2hvdWxkLmVxdWFsKFwiL2Jhc2VkaXIvc29tZWRpci9zb21lZmlsZS50eHRcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGl0KFwic2hvdWxkIG1ha2UgYW4gYXJyYXkgb2YgcmVsYXRpdmUgU3RyaW5ncyBhbiBBcnJheSBvZiBhYnNvbHV0ZSBTdHJpbmdzXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBsZXQgYWJzb2x1dGVBcnJheSA9IHNtYXJ0cGF0aC50cmFuc2Zvcm0udG9BYnNvbHV0ZShyZWxhdGl2ZUFycmF5LGJhc2VTdHJpbmcpO1xuICAgICAgICAgICAgICAgIGFic29sdXRlQXJyYXlbMl0uc2hvdWxkLnN0YXJ0V2l0aChcIi9cIik7XG4gICAgICAgICAgICAgICAgYWJzb2x1dGVBcnJheVsyXS5zaG91bGQuZW5kV2l0aChyZWxhdGl2ZVN0cmluZzIpO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaXQoXCJzaG91bGQgcmV0dXJuIGZhbHNlIGlmIG5laXRoZXIgU3RyaW5nIG5vciBBcnJheVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgc21hcnRwYXRoLnRyYW5zZm9ybS50b0Fic29sdXRlKDMpLnNob3VsZC5iZS5mYWxzZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRlc2NyaWJlKFwiLmdldFwiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGRlc2NyaWJlKFwiLnR5cGUoKVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpdChcInNob3VsZCByZXR1cm4gJ3VybCcgZm9yIGFuIFVSTFwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgc21hcnRwYXRoLmdldC50eXBlKFwiaHR0cHM6Ly9wdXNoLnJvY2tzL3NvbWUvdXJsXCIpLnNob3VsZC5lcXVhbChcInVybFwiKTtcbiAgICAgICAgICAgICAgICBzbWFydHBhdGguZ2V0LnR5cGUoXCJodHRwczovL3B1c2gucm9ja3Mvc29tZS91cmxcIikuc2hvdWxkLm5vdC5lcXVhbChcImxvY2FsXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpdChcInNob3VsZCByZXR1cm4gJ3BhdGgnIGZvciBhIFBhdGhcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHNtYXJ0cGF0aC5nZXQudHlwZShcIi9zb21lL2Fic29sdXRlL3BhdGgvXCIpLnNob3VsZC5lcXVhbChcImxvY2FsXCIpO1xuICAgICAgICAgICAgICAgIHNtYXJ0cGF0aC5nZXQudHlwZShcIi4vc29tZS9yZWxhdGl2ZS9wYXRoL1wiKS5zaG91bGQubm90LmVxdWFsKFwidXJsXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
