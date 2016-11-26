"use strict";
require("typings-test");
const should = require("should");
const smartpath = require("../dist/index.js");
describe('smartpath', function () {
    describe('class Smartpath', function () {
        let mySmartpath;
        it('should create a valid instance', function () {
            mySmartpath = new smartpath.Smartpath('/some/path/to/some.file');
            should(mySmartpath).be.instanceof(smartpath.Smartpath);
            should(mySmartpath.pathLevelsBackwards).be.of.length(5);
        });
    });
    describe('.check', function () {
        let filePathString = './somedir/somefile.json';
        let dirPathString = './somedir/anotherdir';
        let dirPathString2 = './somedir/another.dir/';
        describe('.isFile', function () {
            it('should be true for a file path', function () {
                should(smartpath.check.isFile(filePathString)).be.true();
            });
            it('should be false for a directory path', function () {
                should(smartpath.check.isFile(dirPathString)).be.false();
                should(smartpath.check.isFile(dirPathString2)).be.false();
            });
        });
        describe('.isDir', function () {
            it('should be true for a directory path', function () {
                should(smartpath.check.isDir(dirPathString)).be.true();
                should(smartpath.check.isDir(dirPathString2)).be.true();
            });
            it('should be false for a file path', function () {
                should(smartpath.check.isDir(filePathString)).be.false();
            });
        });
    });
    describe('.transform', function () {
        describe('toAbsolute()', function () {
            let baseString = '/basedir';
            let relativeString = 'somedir/somefile.txt';
            let relativeString2 = 'anotherdir/anotherfile.txt';
            let relativeArray = [relativeString, relativeString, relativeString2];
            it('should make a string absolute', function () {
                should(smartpath.transform.toAbsolute(relativeString)).startWith('/');
                should(smartpath.transform.toAbsolute(relativeString)).endWith(relativeString);
                should(smartpath.transform.toAbsolute(relativeString, baseString)).equal('/basedir/somedir/somefile.txt');
            });
            it('should make an array of relative Strings an Array of absolute Strings', function () {
                let absoluteArray = smartpath.transform.toAbsolute(relativeArray, baseString);
                should(absoluteArray[2]).startWith('/');
                should(absoluteArray[2]).endWith(relativeString2);
            });
            it('should return false if neither String nor Array', function () {
                should(smartpath.transform.toAbsolute(3)).be.false();
            });
        });
    });
    describe('.get', function () {
        describe('.type()', function () {
            it("should return 'url' for an URL", function () {
                should(smartpath.get.type('https://push.rocks/some/url')).equal('url');
                should(smartpath.get.type('https://push.rocks/some/url')).not.equal('local');
            });
            it("should return 'path' for a Path", function () {
                should(smartpath.get.type('/some/absolute/path/')).equal('local');
                should(smartpath.get.type('./some/relative/path/')).not.equal('url');
            });
        });
        describe('.get()', function () {
            it('should a absolute path for an home relative URL', function () {
                console.log(smartpath.get.home('~/test'));
            });
            it('should return the home directory path when no argument is specified', function () {
                console.log(smartpath.get.home());
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUNyQixpQ0FBZ0M7QUFDaEMsOENBQTZDO0FBRTdDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7SUFDbEIsUUFBUSxDQUFDLGlCQUFpQixFQUFFO1FBQ3hCLElBQUksV0FBZ0MsQ0FBQTtRQUNwQyxFQUFFLENBQUMsZ0NBQWdDLEVBQUU7WUFDakMsV0FBVyxHQUFHLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO1lBQ2hFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUN0RCxNQUFNLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDM0QsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUNGLFFBQVEsQ0FBQyxRQUFRLEVBQUU7UUFDZixJQUFJLGNBQWMsR0FBRyx5QkFBeUIsQ0FBQTtRQUM5QyxJQUFJLGFBQWEsR0FBRyxzQkFBc0IsQ0FBQTtRQUMxQyxJQUFJLGNBQWMsR0FBRyx3QkFBd0IsQ0FBQTtRQUM3QyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ2hCLEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRTtnQkFDakMsTUFBTSxDQUNGLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUN6QyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUNmLENBQUMsQ0FBQyxDQUFBO1lBQ0YsRUFBRSxDQUFDLHNDQUFzQyxFQUFFO2dCQUN2QyxNQUFNLENBQ0YsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQ3hDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFBO2dCQUNaLE1BQU0sQ0FDRixTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FDekMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDaEIsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtRQUNGLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDZixFQUFFLENBQUMscUNBQXFDLEVBQUU7Z0JBQ3RDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FDMUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUE7Z0JBQ1gsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUMzQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUNmLENBQUMsQ0FBQyxDQUFBO1lBQ0YsRUFBRSxDQUFDLGlDQUFpQyxFQUFFO2dCQUNsQyxNQUFNLENBQ0YsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQ3hDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ2hCLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUNGLFFBQVEsQ0FBQyxZQUFZLEVBQUU7UUFDbkIsUUFBUSxDQUFDLGNBQWMsRUFBRTtZQUNyQixJQUFJLFVBQVUsR0FBRyxVQUFVLENBQUE7WUFDM0IsSUFBSSxjQUFjLEdBQUcsc0JBQXNCLENBQUE7WUFDM0MsSUFBSSxlQUFlLEdBQUcsNEJBQTRCLENBQUE7WUFDbEQsSUFBSSxhQUFhLEdBQUcsQ0FBQyxjQUFjLEVBQUUsY0FBYyxFQUFFLGVBQWUsQ0FBQyxDQUFBO1lBQ3JFLEVBQUUsQ0FBQywrQkFBK0IsRUFBRTtnQkFDaEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNyRSxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUE7Z0JBQzlFLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQTtZQUM3RyxDQUFDLENBQUMsQ0FBQTtZQUNGLEVBQUUsQ0FBQyx1RUFBdUUsRUFBRTtnQkFDeEUsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFBO2dCQUM3RSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUN2QyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFBO1lBRXJELENBQUMsQ0FBQyxDQUFBO1lBQ0YsRUFBRSxDQUFDLGlEQUFpRCxFQUFFO2dCQUNsRCxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDeEQsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ0YsUUFBUSxDQUFDLE1BQU0sRUFBRTtRQUNiLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDaEIsRUFBRSxDQUFDLGdDQUFnQyxFQUFFO2dCQUNqQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDdEUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ2hGLENBQUMsQ0FBQyxDQUFBO1lBQ0YsRUFBRSxDQUFDLGlDQUFpQyxFQUFFO2dCQUNsQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDakUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3hFLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7UUFDRixRQUFRLENBQUMsUUFBUSxFQUFFO1lBQ2YsRUFBRSxDQUFDLGlEQUFpRCxFQUFFO2dCQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7WUFDN0MsQ0FBQyxDQUFDLENBQUE7WUFDRixFQUFFLENBQUMscUVBQXFFLEVBQUU7Z0JBQ3RFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO1lBQ3JDLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=