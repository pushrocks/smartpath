import * as plugins from './smartpath.plugins';
import * as getMod from './smartpath.get';

export class Smartpath {
  originalPath: string;
  type: getMod.TPathType;
  pathLevels: string[];
  pathLevelsBackwards: string[];
  constructor(pathArg: string) {
    this.originalPath = pathArg;
    this.type = getMod.type(this.originalPath);
    this.pathLevels = getMod.pathLevels(this.originalPath);
    this.pathLevelsBackwards = getMod.pathLevelsBackwards(this.originalPath);
  }
}
