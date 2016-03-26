/// <reference path="../ts/typings/main.d.ts" />
let should = require("should");
let smartpath = require("../dist/index.js");

describe("smartpath",function(){
    describe(".transform",function(){
        describe("toAbsolute()",function(){
            let baseString = "/basedir";
            let relativeString = "somedir/somefile.txt";
            let relativeString2 = "anotherdir/anotherfile.txt";
            let relativeArray = [relativeString,relativeString,relativeString2];
            it("should make a string absolute",function(){
                smartpath.transform.toAbsolute(relativeString).should.startWith("/");
                smartpath.transform.toAbsolute(relativeString).should.endWith(relativeString);
                smartpath.transform.toAbsolute(relativeString,baseString).should.equal("/basedir/somedir/somefile.txt");
            });
            it("should make an array of relative Strings an Array of absolute Strings",function(){
                let absoluteArray = smartpath.transform.toAbsolute(relativeArray,baseString);
                absoluteArray[2].should.startWith("/");
                absoluteArray[2].should.endWith(relativeString2);

            })
            it("should return false if neither String nor Array",function(){
                smartpath.transform.toAbsolute(3).should.be.false();
            });
        });
    });
    describe(".get",function(){
        describe(".type()",function(){
            it("should return 'url' for an URL",function(){
                smartpath.get.type("https://push.rocks/some/url").should.equal("url");
                smartpath.get.type("https://push.rocks/some/url").should.not.equal("local");
            });
            it("should return 'path' for a Path",function(){
                smartpath.get.type("/some/absolute/path/").should.equal("local");
                smartpath.get.type("./some/relative/path/").should.not.equal("url");
            });
        });
    });
});
