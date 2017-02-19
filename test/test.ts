import 'typings-test'
import { expect } from 'smartchai'
import * as smartpath from '../dist/index.js'

describe('smartpath', function () {
  describe('class Smartpath', function () {
    let mySmartpath: smartpath.Smartpath
    it('expect create a valid instance', function () {
      mySmartpath = new smartpath.Smartpath('/some/path/to/some.file')
      expect(mySmartpath).to.be.instanceof(smartpath.Smartpath)
      expect(mySmartpath.pathLevelsBackwards).to.be.of.length(5)
    })
  })
  describe('.check', function () {
    let filePathString = './somedir/somefile.json'
    let dirPathString = './somedir/anotherdir'
    let dirPathString2 = './somedir/another.dir/'
    describe('.isFile', function () {
      it('expect be true for a file path', function () {
        expect(
          smartpath.check.isFile(filePathString)
        ).to.be.true
      })
      it('expect be false for a directory path', function () {
        expect(
          smartpath.check.isFile(dirPathString)
        ).to.be.false
        expect(
          smartpath.check.isFile(dirPathString2)
        ).to.be.false
      })
    })
    describe('.isDir', function () {
      it('expect be true for a directory path', function () {

        expect(
          smartpath.check.isDir(dirPathString)
        ).to.be.true

        expect(
          smartpath.check.isDir(dirPathString2)
        ).to.be.true

      })

      it('expect be false for a file path', function () {
        expect(
          smartpath.check.isDir(filePathString)
        ).to.be.false
      })
    })
  })
  describe('.transform', function () {
    describe('toAbsolute()', function () {
      let baseString = '/basedir'
      let relativeString = 'somedir/somefile.txt'
      let relativeString2 = 'anotherdir/anotherfile.txt'
      let relativeArray = [ relativeString, relativeString, relativeString2 ]
      it('expect make a string absolute', function () {
        expect(smartpath.transform.toAbsolute(relativeString)).startWith('/')
        expect(smartpath.transform.toAbsolute(relativeString)).endWith(relativeString)
        expect(smartpath.transform.toAbsolute(relativeString, baseString)).equal('/basedir/somedir/somefile.txt')
      })
      it('expect make an array of relative Strings an Array of absolute Strings', function () {
        let absoluteArray = smartpath.transform.toAbsolute(relativeArray, baseString)
        expect(absoluteArray[ 2 ]).to.startWith('/')
        expect(absoluteArray[ 2 ]).endWith(relativeString2)

      })
    })
  })
  describe('.get', function () {
    describe('.type()', function () {
      it("expect return 'url' for an URL", function () {
        expect(smartpath.get.type('https://push.rocks/some/url')).equal('url')
        expect(smartpath.get.type('https://push.rocks/some/url')).not.equal('local')
      })
      it("expect return 'path' for a Path", function () {
        expect(smartpath.get.type('/some/absolute/path/')).equal('local')
        expect(smartpath.get.type('./some/relative/path/')).not.equal('url')
      })
    })
    describe('.get()', function () {
      it('expect a absolute path for an home relative URL', function () {
        console.log(smartpath.get.home('~/test'))
      })
      it('expect return the home directory path when no argument is specified', function () {
        console.log(smartpath.get.home())
      })
    })
  })
})
