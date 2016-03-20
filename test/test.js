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
                var absoluteArray = smartpath.transform.toAbsolute(relativeArray);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEO0FBQ2hELElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUU1QyxRQUFRLENBQUMsV0FBVyxFQUFDO0lBQ2pCLFFBQVEsQ0FBQyxZQUFZLEVBQUM7UUFDbEIsUUFBUSxDQUFDLGNBQWMsRUFBQztZQUNwQixJQUFJLFVBQVUsR0FBRyxVQUFVLENBQUM7WUFDNUIsSUFBSSxjQUFjLEdBQUcsc0JBQXNCLENBQUM7WUFDNUMsSUFBSSxlQUFlLEdBQUcsNEJBQTRCLENBQUM7WUFDbkQsSUFBSSxhQUFhLEdBQUcsQ0FBQyxjQUFjLEVBQUMsY0FBYyxFQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3BFLEVBQUUsQ0FBQywrQkFBK0IsRUFBQztnQkFDL0IsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDckUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDOUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztZQUM1RyxDQUFDLENBQUMsQ0FBQztZQUNILEVBQUUsQ0FBQyx1RUFBdUUsRUFBQztnQkFDdkUsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ2xFLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUVyRCxDQUFDLENBQUMsQ0FBQTtZQUNGLEVBQUUsQ0FBQyxpREFBaUQsRUFBQztnQkFDakQsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN4RCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDSCxRQUFRLENBQUMsTUFBTSxFQUFDO1FBQ1osUUFBUSxDQUFDLFNBQVMsRUFBQztZQUNmLEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBQztnQkFDaEMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN0RSxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hGLENBQUMsQ0FBQyxDQUFDO1lBQ0gsRUFBRSxDQUFDLGlDQUFpQyxFQUFDO2dCQUNqQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2pFLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEUsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90cy90eXBpbmdzL21haW4uZC50c1wiIC8+XG5sZXQgc2hvdWxkID0gcmVxdWlyZShcInNob3VsZFwiKTtcbmxldCBzbWFydHBhdGggPSByZXF1aXJlKFwiLi4vZGlzdC9pbmRleC5qc1wiKTtcblxuZGVzY3JpYmUoXCJzbWFydHBhdGhcIixmdW5jdGlvbigpe1xuICAgIGRlc2NyaWJlKFwiLnRyYW5zZm9ybVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGRlc2NyaWJlKFwidG9BYnNvbHV0ZSgpXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGxldCBiYXNlU3RyaW5nID0gXCIvYmFzZWRpclwiO1xuICAgICAgICAgICAgbGV0IHJlbGF0aXZlU3RyaW5nID0gXCJzb21lZGlyL3NvbWVmaWxlLnR4dFwiO1xuICAgICAgICAgICAgbGV0IHJlbGF0aXZlU3RyaW5nMiA9IFwiYW5vdGhlcmRpci9hbm90aGVyZmlsZS50eHRcIjtcbiAgICAgICAgICAgIGxldCByZWxhdGl2ZUFycmF5ID0gW3JlbGF0aXZlU3RyaW5nLHJlbGF0aXZlU3RyaW5nLHJlbGF0aXZlU3RyaW5nMl07XG4gICAgICAgICAgICBpdChcInNob3VsZCBtYWtlIGEgc3RyaW5nIGFic29sdXRlXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBzbWFydHBhdGgudHJhbnNmb3JtLnRvQWJzb2x1dGUocmVsYXRpdmVTdHJpbmcpLnNob3VsZC5zdGFydFdpdGgoXCIvXCIpO1xuICAgICAgICAgICAgICAgIHNtYXJ0cGF0aC50cmFuc2Zvcm0udG9BYnNvbHV0ZShyZWxhdGl2ZVN0cmluZykuc2hvdWxkLmVuZFdpdGgocmVsYXRpdmVTdHJpbmcpO1xuICAgICAgICAgICAgICAgIHNtYXJ0cGF0aC50cmFuc2Zvcm0udG9BYnNvbHV0ZShyZWxhdGl2ZVN0cmluZyxiYXNlU3RyaW5nKS5zaG91bGQuZXF1YWwoXCIvYmFzZWRpci9zb21lZGlyL3NvbWVmaWxlLnR4dFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaXQoXCJzaG91bGQgbWFrZSBhbiBhcnJheSBvZiByZWxhdGl2ZSBTdHJpbmdzIGFuIEFycmF5IG9mIGFic29sdXRlIFN0cmluZ3NcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGxldCBhYnNvbHV0ZUFycmF5ID0gc21hcnRwYXRoLnRyYW5zZm9ybS50b0Fic29sdXRlKHJlbGF0aXZlQXJyYXkpO1xuICAgICAgICAgICAgICAgIGFic29sdXRlQXJyYXlbMl0uc2hvdWxkLnN0YXJ0V2l0aChcIi9cIik7XG4gICAgICAgICAgICAgICAgYWJzb2x1dGVBcnJheVsyXS5zaG91bGQuZW5kV2l0aChyZWxhdGl2ZVN0cmluZzIpO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaXQoXCJzaG91bGQgcmV0dXJuIGZhbHNlIGlmIG5laXRoZXIgU3RyaW5nIG5vciBBcnJheVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgc21hcnRwYXRoLnRyYW5zZm9ybS50b0Fic29sdXRlKDMpLnNob3VsZC5iZS5mYWxzZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRlc2NyaWJlKFwiLmdldFwiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGRlc2NyaWJlKFwiLnR5cGUoKVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpdChcInNob3VsZCByZXR1cm4gJ3VybCcgZm9yIGFuIFVSTFwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgc21hcnRwYXRoLmdldC50eXBlKFwiaHR0cHM6Ly9wdXNoLnJvY2tzL3NvbWUvdXJsXCIpLnNob3VsZC5lcXVhbChcInVybFwiKTtcbiAgICAgICAgICAgICAgICBzbWFydHBhdGguZ2V0LnR5cGUoXCJodHRwczovL3B1c2gucm9ja3Mvc29tZS91cmxcIikuc2hvdWxkLm5vdC5lcXVhbChcImxvY2FsXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpdChcInNob3VsZCByZXR1cm4gJ3BhdGgnIGZvciBhIFBhdGhcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHNtYXJ0cGF0aC5nZXQudHlwZShcIi9zb21lL2Fic29sdXRlL3BhdGgvXCIpLnNob3VsZC5lcXVhbChcImxvY2FsXCIpO1xuICAgICAgICAgICAgICAgIHNtYXJ0cGF0aC5nZXQudHlwZShcIi4vc29tZS9yZWxhdGl2ZS9wYXRoL1wiKS5zaG91bGQubm90LmVxdWFsKFwidXJsXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
