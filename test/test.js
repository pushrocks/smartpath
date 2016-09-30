"use strict";
require("typings-test");
require("should");
let smartpath = require("../dist/index.js");
describe("smartpath", function () {
    describe(".check", function () {
        let filePathString = "./somedir/somefile.json";
        let dirPathString = "./somedir/anotherdir";
        let dirPathString2 = "./somedir/another.dir/";
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
            let baseString = "/basedir";
            let relativeString = "somedir/somefile.txt";
            let relativeString2 = "anotherdir/anotherfile.txt";
            let relativeArray = [relativeString, relativeString, relativeString2];
            it("should make a string absolute", function () {
                smartpath.transform.toAbsolute(relativeString).should.startWith("/");
                smartpath.transform.toAbsolute(relativeString).should.endWith(relativeString);
                smartpath.transform.toAbsolute(relativeString, baseString).should.equal("/basedir/somedir/somefile.txt");
            });
            it("should make an array of relative Strings an Array of absolute Strings", function () {
                let absoluteArray = smartpath.transform.toAbsolute(relativeArray, baseString);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFzQjtBQUN0QixrQkFBZ0I7QUFDaEIsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFFNUMsUUFBUSxDQUFDLFdBQVcsRUFBQztJQUNqQixRQUFRLENBQUMsUUFBUSxFQUFDO1FBQ2QsSUFBSSxjQUFjLEdBQUcseUJBQXlCLENBQUE7UUFDOUMsSUFBSSxhQUFhLEdBQUcsc0JBQXNCLENBQUE7UUFDMUMsSUFBSSxjQUFjLEdBQUcsd0JBQXdCLENBQUE7UUFDN0MsUUFBUSxDQUFDLFNBQVMsRUFBQztZQUNmLEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBQztnQkFDaEMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDO3FCQUNqQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsRUFBRSxDQUFDLHNDQUFzQyxFQUFDO2dCQUN0QyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7cUJBQ2hDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3ZCLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztxQkFDakMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMzQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ0gsUUFBUSxDQUFDLFFBQVEsRUFBQztZQUNkLEVBQUUsQ0FBQyxxQ0FBcUMsRUFBQztnQkFDckMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO3FCQUMvQixNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN0QixTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FB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