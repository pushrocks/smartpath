import * as getMod from './smartpath.get';
export declare class Smartpath {
    originalPath: string;
    type: getMod.TPathType;
    pathLevels: string[];
    pathLevelsBackwards: string[];
    constructor(pathArg: string);
}
