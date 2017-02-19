"use strict";
require("typings-test");
const smartchai_1 = require("smartchai");
const smartpath = require("../dist/index.js");
describe('smartpath', function () {
    describe('class Smartpath', function () {
        let mySmartpath;
        it('expect create a valid instance', function () {
            mySmartpath = new smartpath.Smartpath('/some/path/to/some.file');
            smartchai_1.expect(mySmartpath).to.be.instanceof(smartpath.Smartpath);
            smartchai_1.expect(mySmartpath.pathLevelsBackwards).to.be.of.length(5);
        });
    });
    describe('.check', function () {
        let filePathString = './somedir/somefile.json';
        let dirPathString = './somedir/anotherdir';
        let dirPathString2 = './somedir/another.dir/';
        describe('.isFile', function () {
            it('expect be true for a file path', function () {
                smartchai_1.expect(smartpath.check.isFile(filePathString)).to.be.true;
            });
            it('expect be false for a directory path', function () {
                smartchai_1.expect(smartpath.check.isFile(dirPathString)).to.be.false;
                smartchai_1.expect(smartpath.check.isFile(dirPathString2)).to.be.false;
            });
        });
        describe('.isDir', function () {
            it('expect be true for a directory path', function () {
                smartchai_1.expect(smartpath.check.isDir(dirPathString)).to.be.true;
                smartchai_1.expect(smartpath.check.isDir(dirPathString2)).to.be.true;
            });
            it('expect be false for a file path', function () {
                smartchai_1.expect(smartpath.check.isDir(filePathString)).to.be.false;
            });
        });
    });
    describe('.transform', function () {
        describe('toAbsolute()', function () {
            let baseString = '/basedir';
            let relativeString = 'somedir/somefile.txt';
            let relativeString2 = 'anotherdir/anotherfile.txt';
            let relativeArray = [relativeString, relativeString, relativeString2];
            it('expect make a string absolute', function () {
                smartchai_1.expect(smartpath.transform.toAbsolute(relativeString)).startWith('/');
                smartchai_1.expect(smartpath.transform.toAbsolute(relativeString)).endWith(relativeString);
                smartchai_1.expect(smartpath.transform.toAbsolute(relativeString, baseString)).equal('/basedir/somedir/somefile.txt');
            });
            it('expect make an array of relative Strings an Array of absolute Strings', function () {
                let absoluteArray = smartpath.transform.toAbsolute(relativeArray, baseString);
                smartchai_1.expect(absoluteArray[2]).to.startWith('/');
                smartchai_1.expect(absoluteArray[2]).endWith(relativeString2);
            });
        });
    });
    describe('.get', function () {
        describe('.type()', function () {
            it("expect return 'url' for an URL", function () {
                smartchai_1.expect(smartpath.get.type('https://push.rocks/some/url')).equal('url');
                smartchai_1.expect(smartpath.get.type('https://push.rocks/some/url')).not.equal('local');
            });
            it("expect return 'path' for a Path", function () {
                smartchai_1.expect(smartpath.get.type('/some/absolute/path/')).equal('local');
                smartchai_1.expect(smartpath.get.type('./some/relative/path/')).not.equal('url');
            });
        });
        describe('.get()', function () {
            it('expect a absolute path for an home relative URL', function () {
                console.log(smartpath.get.home('~/test'));
            });
            it('expect return the home directory path when no argument is specified', function () {
                console.log(smartpath.get.home());
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUNyQix5Q0FBa0M7QUFDbEMsOENBQTZDO0FBRTdDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7SUFDcEIsUUFBUSxDQUFDLGlCQUFpQixFQUFFO1FBQzFCLElBQUksV0FBZ0MsQ0FBQTtRQUNwQyxFQUFFLENBQUMsZ0NBQWdDLEVBQUU7WUFDbkMsV0FBVyxHQUFHLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO1lBQ2hFLGtCQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ3pELGtCQUFNLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzVELENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7SUFDRixRQUFRLENBQUMsUUFBUSxFQUFFO1FBQ2pCLElBQUksY0FBYyxHQUFHLHlCQUF5QixDQUFBO1FBQzlDLElBQUksYUFBYSxHQUFHLHNCQUFzQixDQUFBO1FBQzFDLElBQUksY0FBYyxHQUFHLHdCQUF3QixDQUFBO1FBQzdDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDbEIsRUFBRSxDQUFDLGdDQUFnQyxFQUFFO2dCQUNuQyxrQkFBTSxDQUNKLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUN2QyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFBO1lBQ2QsQ0FBQyxDQUFDLENBQUE7WUFDRixFQUFFLENBQUMsc0NBQXNDLEVBQUU7Z0JBQ3pDLGtCQUFNLENBQ0osU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFD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