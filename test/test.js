/// <reference path="../ts/typings/main.d.ts" />
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

//# sourceMappingURL=data:application/json;base64,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QUFpRCxFQUFDO2dCQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDOUMsQ0FBQyxDQUFDLENBQUM7WUFDSCxFQUFFLENBQUMscUVBQXFFLEVBQUM7Z0JBQ3JFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHMvdHlwaW5ncy9tYWluLmQudHNcIiAvPlxubGV0IHNob3VsZCA9IHJlcXVpcmUoXCJzaG91bGRcIik7XG5sZXQgc21hcnRwYXRoID0gcmVxdWlyZShcIi4uL2Rpc3QvaW5kZXguanNcIik7XG5cbmRlc2NyaWJlKFwic21hcnRwYXRoXCIsZnVuY3Rpb24oKXtcbiAgICBkZXNjcmliZShcIi5jaGVja1wiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBmaWxlUGF0aFN0cmluZyA9IFwiLi9zb21lZGlyL3NvbWVmaWxlLmpzb25cIlxuICAgICAgICBsZXQgZGlyUGF0aFN0cmluZyA9IFwiLi9zb21lZGlyL2Fub3RoZXJkaXJcIlxuICAgICAgICBsZXQgZGlyUGF0aFN0cmluZzIgPSBcIi4vc29tZWRpci9hbm90aGVyLmRpci9cIlxuICAgICAgICBkZXNjcmliZShcIi5pc0ZpbGVcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgaXQoXCJzaG91bGQgYmUgdHJ1ZSBmb3IgYSBmaWxlIHBhdGhcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHNtYXJ0cGF0aC5jaGVjay5pc0ZpbGUoZmlsZVBhdGhTdHJpbmcpXG4gICAgICAgICAgICAgICAgICAgIC5zaG91bGQuYmUudHJ1ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpdChcInNob3VsZCBiZSBmYWxzZSBmb3IgYSBkaXJlY3RvcnkgcGF0aFwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgc21hcnRwYXRoLmNoZWNrLmlzRmlsZShkaXJQYXRoU3RyaW5nKVxuICAgICAgICAgICAgICAgICAgICAuc2hvdWxkLmJlLmZhbHNlKCk7XG4gICAgICAgICAgICAgICAgc21hcnRwYXRoLmNoZWNrLmlzRmlsZShkaXJQYXRoU3RyaW5nMilcbiAgICAgICAgICAgICAgICAgICAgLnNob3VsZC5iZS5mYWxzZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkZXNjcmliZShcIi5pc0RpclwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpdChcInNob3VsZCBiZSB0cnVlIGZvciBhIGRpcmVjdG9yeSBwYXRoXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBzbWFydHBhdGguY2hlY2suaXNEaXIoZGlyUGF0aFN0cmluZylcbiAgICAgICAgICAgICAgICAgICAgLnNob3VsZC5iZS50cnVlKCk7XG4gICAgICAgICAgICAgICAgc21hcnRwYXRoLmNoZWNrLmlzRGlyKGRpclBhdGhTdHJpbmcyKVxuICAgICAgICAgICAgICAgICAgICAuc2hvdWxkLmJlLnRydWUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaXQoXCJzaG91bGQgYmUgZmFsc2UgZm9yIGEgZmlsZSBwYXRoXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBzbWFydHBhdGguY2hlY2suaXNEaXIoZmlsZVBhdGhTdHJpbmcpXG4gICAgICAgICAgICAgICAgICAgIC5zaG91bGQuYmUuZmFsc2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBkZXNjcmliZShcIi50cmFuc2Zvcm1cIixmdW5jdGlvbigpe1xuICAgICAgICBkZXNjcmliZShcInRvQWJzb2x1dGUoKVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBsZXQgYmFzZVN0cmluZyA9IFwiL2Jhc2VkaXJcIjtcbiAgICAgICAgICAgIGxldCByZWxhdGl2ZVN0cmluZyA9IFwic29tZWRpci9zb21lZmlsZS50eHRcIjtcbiAgICAgICAgICAgIGxldCByZWxhdGl2ZVN0cmluZzIgPSBcImFub3RoZXJkaXIvYW5vdGhlcmZpbGUudHh0XCI7XG4gICAgICAgICAgICBsZXQgcmVsYXRpdmVBcnJheSA9IFtyZWxhdGl2ZVN0cmluZyxyZWxhdGl2ZVN0cmluZyxyZWxhdGl2ZVN0cmluZzJdO1xuICAgICAgICAgICAgaXQoXCJzaG91bGQgbWFrZSBhIHN0cmluZyBhYnNvbHV0ZVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgc21hcnRwYXRoLnRyYW5zZm9ybS50b0Fic29sdXRlKHJlbGF0aXZlU3RyaW5nKS5zaG91bGQuc3RhcnRXaXRoKFwiL1wiKTtcbiAgICAgICAgICAgICAgICBzbWFydHBhdGgudHJhbnNmb3JtLnRvQWJzb2x1dGUocmVsYXRpdmVTdHJpbmcpLnNob3VsZC5lbmRXaXRoKHJlbGF0aXZlU3RyaW5nKTtcbiAgICAgICAgICAgICAgICBzbWFydHBhdGgudHJhbnNmb3JtLnRvQWJzb2x1dGUocmVsYXRpdmVTdHJpbmcsYmFzZVN0cmluZykuc2hvdWxkLmVxdWFsKFwiL2Jhc2VkaXIvc29tZWRpci9zb21lZmlsZS50eHRcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGl0KFwic2hvdWxkIG1ha2UgYW4gYXJyYXkgb2YgcmVsYXRpdmUgU3RyaW5ncyBhbiBBcnJheSBvZiBhYnNvbHV0ZSBTdHJpbmdzXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBsZXQgYWJzb2x1dGVBcnJheSA9IHNtYXJ0cGF0aC50cmFuc2Zvcm0udG9BYnNvbHV0ZShyZWxhdGl2ZUFycmF5LGJhc2VTdHJpbmcpO1xuICAgICAgICAgICAgICAgIGFic29sdXRlQXJyYXlbMl0uc2hvdWxkLnN0YXJ0V2l0aChcIi9cIik7XG4gICAgICAgICAgICAgICAgYWJzb2x1dGVBcnJheVsyXS5zaG91bGQuZW5kV2l0aChyZWxhdGl2ZVN0cmluZzIpO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaXQoXCJzaG91bGQgcmV0dXJuIGZhbHNlIGlmIG5laXRoZXIgU3RyaW5nIG5vciBBcnJheVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgc21hcnRwYXRoLnRyYW5zZm9ybS50b0Fic29sdXRlKDMpLnNob3VsZC5iZS5mYWxzZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRlc2NyaWJlKFwiLmdldFwiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGRlc2NyaWJlKFwiLnR5cGUoKVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpdChcInNob3VsZCByZXR1cm4gJ3VybCcgZm9yIGFuIFVSTFwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgc21hcnRwYXRoLmdldC50eXBlKFwiaHR0cHM6Ly9wdXNoLnJvY2tzL3NvbWUvdXJsXCIpLnNob3VsZC5lcXVhbChcInVybFwiKTtcbiAgICAgICAgICAgICAgICBzbWFydHBhdGguZ2V0LnR5cGUoXCJodHRwczovL3B1c2gucm9ja3Mvc29tZS91cmxcIikuc2hvdWxkLm5vdC5lcXVhbChcImxvY2FsXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpdChcInNob3VsZCByZXR1cm4gJ3BhdGgnIGZvciBhIFBhdGhcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHNtYXJ0cGF0aC5nZXQudHlwZShcIi9zb21lL2Fic29sdXRlL3BhdGgvXCIpLnNob3VsZC5lcXVhbChcImxvY2FsXCIpO1xuICAgICAgICAgICAgICAgIHNtYXJ0cGF0aC5nZXQudHlwZShcIi4vc29tZS9yZWxhdGl2ZS9wYXRoL1wiKS5zaG91bGQubm90LmVxdWFsKFwidXJsXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkZXNjcmliZShcIi5nZXQoKVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpdChcInNob3VsZCBhIGFic29sdXRlIHBhdGggZm9yIGFuIGhvbWUgcmVsYXRpdmUgVVJMXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzbWFydHBhdGguZ2V0LmhvbWUoXCJ+L3Rlc3RcIikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpdChcInNob3VsZCByZXR1cm4gdGhlIGhvbWUgZGlyZWN0b3J5IHBhdGggd2hlbiBubyBhcmd1bWVudCBpcyBzcGVjaWZpZWRcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNtYXJ0cGF0aC5nZXQuaG9tZSgpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
