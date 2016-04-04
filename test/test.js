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
//# sourceMappingURL=test.js.map