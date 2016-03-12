/// <reference path="../ts/typings/main.d.ts" />
var should = require("should");
var smartpath = require("../dist/index.js");
describe("smartpath", function () {
    describe("absolute()", function () {
        var baseString = "/basedir";
        var relativeString = "somedir/somefile.txt";
        var relativeString2 = "anotherdir/anotherfile.txt";
        var relativeArray = [relativeString, relativeString, relativeString2];
        it("should make a string absolute", function () {
            smartpath.absolute(relativeString).should.startWith("/");
            smartpath.absolute(relativeString).should.endWith(relativeString);
            smartpath.absolute(relativeString, baseString).should.equal("/basedir/somedir/somefile.txt");
        });
        it("should make an array of relative Strings an Array of absolute Strings", function () {
            var absoluteArray = smartpath.absolute(relativeArray);
            absoluteArray[2].should.startWith("/");
            absoluteArray[2].should.endWith(relativeString2);
        });
        it("should return false if neither String nor Array", function () {
            smartpath.absolute(3).should.be.false();
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEO0FBQ2hELElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUU1QyxRQUFRLENBQUMsV0FBVyxFQUFDO0lBQ2pCLFFBQVEsQ0FBQyxZQUFZLEVBQUM7UUFDbEIsSUFBSSxVQUFVLEdBQUcsVUFBVSxDQUFBO1FBQzNCLElBQUksY0FBYyxHQUFHLHNCQUFzQixDQUFDO1FBQzVDLElBQUksZUFBZSxHQUFHLDRCQUE0QixDQUFDO1FBQ25ELElBQUksYUFBYSxHQUFHLENBQUMsY0FBYyxFQUFDLGNBQWMsRUFBQyxlQUFlLENBQUMsQ0FBQztRQUNwRSxFQUFFLENBQUMsK0JBQStCLEVBQUM7WUFDL0IsU0FBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pELFNBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNsRSxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFDaEcsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsdUVBQXVFLEVBQUM7WUFDdkUsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN0RCxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUVyRCxDQUFDLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQyxpREFBaUQsRUFBQztZQUNqRCxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHMvdHlwaW5ncy9tYWluLmQudHNcIiAvPlxubGV0IHNob3VsZCA9IHJlcXVpcmUoXCJzaG91bGRcIik7XG5sZXQgc21hcnRwYXRoID0gcmVxdWlyZShcIi4uL2Rpc3QvaW5kZXguanNcIik7XG5cbmRlc2NyaWJlKFwic21hcnRwYXRoXCIsZnVuY3Rpb24oKXtcbiAgICBkZXNjcmliZShcImFic29sdXRlKClcIixmdW5jdGlvbigpe1xuICAgICAgICBsZXQgYmFzZVN0cmluZyA9IFwiL2Jhc2VkaXJcIlxuICAgICAgICBsZXQgcmVsYXRpdmVTdHJpbmcgPSBcInNvbWVkaXIvc29tZWZpbGUudHh0XCI7XG4gICAgICAgIGxldCByZWxhdGl2ZVN0cmluZzIgPSBcImFub3RoZXJkaXIvYW5vdGhlcmZpbGUudHh0XCI7XG4gICAgICAgIGxldCByZWxhdGl2ZUFycmF5ID0gW3JlbGF0aXZlU3RyaW5nLHJlbGF0aXZlU3RyaW5nLHJlbGF0aXZlU3RyaW5nMl07XG4gICAgICAgIGl0KFwic2hvdWxkIG1ha2UgYSBzdHJpbmcgYWJzb2x1dGVcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgc21hcnRwYXRoLmFic29sdXRlKHJlbGF0aXZlU3RyaW5nKS5zaG91bGQuc3RhcnRXaXRoKFwiL1wiKTtcbiAgICAgICAgICAgIHNtYXJ0cGF0aC5hYnNvbHV0ZShyZWxhdGl2ZVN0cmluZykuc2hvdWxkLmVuZFdpdGgocmVsYXRpdmVTdHJpbmcpO1xuICAgICAgICAgICAgc21hcnRwYXRoLmFic29sdXRlKHJlbGF0aXZlU3RyaW5nLGJhc2VTdHJpbmcpLnNob3VsZC5lcXVhbChcIi9iYXNlZGlyL3NvbWVkaXIvc29tZWZpbGUudHh0XCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgaXQoXCJzaG91bGQgbWFrZSBhbiBhcnJheSBvZiByZWxhdGl2ZSBTdHJpbmdzIGFuIEFycmF5IG9mIGFic29sdXRlIFN0cmluZ3NcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgbGV0IGFic29sdXRlQXJyYXkgPSBzbWFydHBhdGguYWJzb2x1dGUocmVsYXRpdmVBcnJheSk7XG4gICAgICAgICAgICBhYnNvbHV0ZUFycmF5WzJdLnNob3VsZC5zdGFydFdpdGgoXCIvXCIpO1xuICAgICAgICAgICAgYWJzb2x1dGVBcnJheVsyXS5zaG91bGQuZW5kV2l0aChyZWxhdGl2ZVN0cmluZzIpO1xuXG4gICAgICAgIH0pXG4gICAgICAgIGl0KFwic2hvdWxkIHJldHVybiBmYWxzZSBpZiBuZWl0aGVyIFN0cmluZyBub3IgQXJyYXlcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgc21hcnRwYXRoLmFic29sdXRlKDMpLnNob3VsZC5iZS5mYWxzZSgpO1xuICAgICAgICB9KTtcbiAgICB9KVxufSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
