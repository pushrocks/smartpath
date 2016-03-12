/// <reference path="../ts/typings/main.d.ts" />
let should = require("should");
let smartpath = require("../dist/index.js");

describe("smartpath",function(){
    describe("absolute()",function(){
        let baseString = "/basedir"
        let relativeString = "somedir/somefile.txt";
        let relativeString2 = "anotherdir/anotherfile.txt";
        let relativeArray = [relativeString,relativeString,relativeString2];
        it("should make a string absolute",function(){
            smartpath.absolute(relativeString).should.startWith("/");
            smartpath.absolute(relativeString).should.endWith(relativeString);
            smartpath.absolute(relativeString,baseString).should.equal("/basedir/somedir/somefile.txt");
        });
        it("should make an array of relative Strings an Array of absolute Strings",function(){
            let absoluteArray = smartpath.absolute(relativeArray);
            absoluteArray[2].should.startWith("/");
            absoluteArray[2].should.endWith(relativeString2);

        })
        it("should return false if neither String nor Array",function(){
            smartpath.absolute(3).should.be.false();
        });
    })
});
