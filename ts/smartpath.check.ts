import 'typings-global';
import plugins = require('./smartpath.plugins');

export let isDir = function(pathArg: string) {
  return !isFile(pathArg);
};

export let isFile = function(pathArg) {
  return /\.[a-zA-Z]*$/.test(pathArg); // checks if there is a .anything at the end
};
