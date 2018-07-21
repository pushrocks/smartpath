import 'typings-global';
import plugins = require('./smartpath.plugins');

/* ------------------------------------------ *
 * ------------ helpers --------------------- *
 * ------------------------------------------ */

// checks a file
let makeAbsolute = function(localPathArg: string, baseArg?: string): string {
  let absolutePath: string;
  let alreadyAbsolute = plugins.path.isAbsolute(localPathArg);
  if (baseArg && !alreadyAbsolute) {
    absolutePath = plugins.path.join(baseArg, localPathArg);
  } else if (!alreadyAbsolute) {
    absolutePath = plugins.path.resolve(localPathArg);
  } else {
    absolutePath = localPathArg;
  }
  return absolutePath;
};

/* ------------------------------------------ *
 * ------- export functions ----------------- *
 * ------------------------------------------ */
export let toAbsolute = function(relativeArg: string | string[], baseArg?: string): any {
  if (typeof relativeArg === 'string') {
    return makeAbsolute(relativeArg, baseArg);
  } else if (Array.isArray(relativeArg)) {
    let relativeArray = relativeArg;
    let absoluteArray: string[] = [];
    for (let key in relativeArray) {
      absoluteArray.push(makeAbsolute(relativeArray[key], baseArg));
    }
    return absoluteArray;
  } else {
    console.error(
      'smartpath.absolute() could not make sense of the input. ' +
        'Input is neither String nor Array'
    );
    return false;
  }
};
