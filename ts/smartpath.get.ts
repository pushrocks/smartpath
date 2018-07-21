import plugins = require('./smartpath.plugins');
export type TPathType = 'url' | 'local';

/**
 * returns the type of the given path. Can be "url" or "local"
 */
export let type = function(pathStringArg: string): TPathType {
  let urlRegex = /http[s|\s]:\/\/.*/i;
  if (urlRegex.exec(pathStringArg)) {
    return 'url';
  } else {
    return 'local';
  }
};

export let home = function(pathArgument?: string) {
  if (pathArgument) {
    return pathArgument.replace('~', plugins.os.homedir());
  } else {
    return plugins.os.homedir();
  }
};

export type TSystemArg = 'dynamic' | 'windows' | 'linux' | 'osx';

export let pathLevels = (pathArg: string, systemArg: TSystemArg = 'dynamic') => {
  let pathLevelArray: string[];
  if (systemArg === 'dynamic') {
    pathLevelArray = pathArg.split(plugins.path.sep);
  }
  return pathLevelArray;
};

export let pathLevelsBackwards = (pathArg: string, systemArg?: TSystemArg) => {
  return pathLevels(pathArg, systemArg).reverse();
};
