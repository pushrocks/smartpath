import 'typings-test'
import * as should from 'should'
import * as smartpath from '../dist/index.js'

describe('smartpath', function () {
    describe('class Smartpath', function() {
        let mySmartpath: smartpath.Smartpath
        it('should create a valid instance', function() {
            mySmartpath = new smartpath.Smartpath('/some/path/to/some.file')
            should(mySmartpath).be.instanceof(smartpath.Smartpath)
            should(mySmartpath.pathLevelsBackwards).be.of.length(5)
        })
    })
    describe('.check', function () {
        let filePathString = './somedir/somefile.json'
        let dirPathString = './somedir/anotherdir'
        let dirPathString2 = './somedir/another.dir/'
        describe('.isFile', function () {
            it('should be true for a file path', function () {
                should(
                    smartpath.check.isFile(filePathString)
                ).be.true()
            })
            it('should be false for a directory path', function () {
                should(
                    smartpath.check.isFile(dirPathString)
                ).be.false()
                should(
                    smartpath.check.isFile(dirPathString2)
                ).be.false()
            })
        })
        describe('.isDir', function () {
            it('should be true for a directory path', function () {
                should(smartpath.check.isDir(dirPathString)
                ).be.true()
                should(smartpath.check.isDir(dirPathString2)
                ).be.true()
            })
            it('should be false for a file path', function () {
                should(
                    smartpath.check.isDir(filePathString)
                ).be.false()
            })
        })
    })
    describe('.transform', function () {
        describe('toAbsolute()', function () {
            let baseString = '/basedir'
            let relativeString = 'somedir/somefile.txt'
            let relativeString2 = 'anotherdir/anotherfile.txt'
            let relativeArray = [relativeString, relativeString, relativeString2]
            it('should make a string absolute', function () {
                should(smartpath.transform.toAbsolute(relativeString)).startWith('/')
                should(smartpath.transform.toAbsolute(relativeString)).endWith(relativeString)
                should(smartpath.transform.toAbsolute(relativeString, baseString)).equal('/basedir/somedir/somefile.txt')
            })
            it('should make an array of relative Strings an Array of absolute Strings', function () {
                let absoluteArray = smartpath.transform.toAbsolute(relativeArray, baseString)
                should(absoluteArray[2]).startWith('/')
                should(absoluteArray[2]).endWith(relativeString2)

            })
            it('should return false if neither String nor Array', function () {
                should(smartpath.transform.toAbsolute(3)).be.false()
            })
        })
    })
    describe('.get', function () {
        describe('.type()', function () {
            it("should return 'url' for an URL", function () {
                should(smartpath.get.type('https://push.rocks/some/url')).equal('url')
                should(smartpath.get.type('https://push.rocks/some/url')).not.equal('local')
            })
            it("should return 'path' for a Path", function () {
                should(smartpath.get.type('/some/absolute/path/')).equal('local')
                should(smartpath.get.type('./some/relative/path/')).not.equal('url')
            })
        })
        describe('.get()', function () {
            it('should a absolute path for an home relative URL', function () {
                console.log(smartpath.get.home('~/test'))
            })
            it('should return the home directory path when no argument is specified', function () {
                console.log(smartpath.get.home())
            })
        })
    })
})
