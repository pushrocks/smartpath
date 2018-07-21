import { tap, expect } from '@pushrocks/tapbundle';
import * as smartpath from '../ts/index';

let mySmartpath: smartpath.Smartpath;
tap.test('expect create a valid instance', async () => {
  mySmartpath = new smartpath.Smartpath('/some/path/to/some.file');
  expect(mySmartpath).to.be.instanceof(smartpath.Smartpath);
  expect(mySmartpath.pathLevelsBackwards).to.be.of.length(5);
});

let filePathString = './somedir/somefile.json';
let dirPathString = './somedir/anotherdir';
let dirPathString2 = './somedir/another.dir/';

tap.test('expect be true for a file path', async () => {
  expect(smartpath.check.isFile(filePathString)).to.be.true;
});
tap.test('expect be false for a directory path', async () => {
  expect(smartpath.check.isFile(dirPathString)).to.be.false;
  expect(smartpath.check.isFile(dirPathString2)).to.be.false;
});

tap.test('expect be true for a directory path', async () => {
  expect(smartpath.check.isDir(dirPathString)).to.be.true;

  expect(smartpath.check.isDir(dirPathString2)).to.be.true;
});

tap.test('expect be false for a file path', async () => {
  expect(smartpath.check.isDir(filePathString)).to.be.false;
});

let baseString = '/basedir';
let relativeString = 'somedir/somefile.txt';
let relativeString2 = 'anotherdir/anotherfile.txt';
let relativeArray = [relativeString, relativeString, relativeString2];
tap.test('expect make a string absolute', async () => {
  expect(smartpath.transform.toAbsolute(relativeString)).startWith('/');
  expect(smartpath.transform.toAbsolute(relativeString)).endWith(relativeString);
  expect(smartpath.transform.toAbsolute(relativeString, baseString)).equal(
    '/basedir/somedir/somefile.txt'
  );
});
tap.test('expect make an array of relative Strings an Array of absolute Strings', async () => {
  let absoluteArray = smartpath.transform.toAbsolute(relativeArray, baseString);
  expect(absoluteArray[2]).to.startWith('/');
  expect(absoluteArray[2]).endWith(relativeString2);
});

tap.test("expect return 'url' for an URL", async () => {
  expect(smartpath.get.type('https://push.rocks/some/url')).equal('url');
  expect(smartpath.get.type('https://push.rocks/some/url')).not.equal('local');
});
tap.test("expect return 'path' for a Path", async () => {
  expect(smartpath.get.type('/some/absolute/path/')).equal('local');
  expect(smartpath.get.type('./some/relative/path/')).not.equal('url');
});

tap.test('expect a absolute path for an home relative URL', async () => {
  console.log(smartpath.get.home('~/test'));
});
tap.test('expect return the home directory path when no argument is specified', async () => {
  console.log(smartpath.get.home());
});

tap.start();
