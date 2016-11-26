export declare type TPathType = 'url' | 'local';
/**
 * returns the type of the given path. Can be "url" or "local"
 */
export declare let type: (pathStringArg: string) => TPathType;
export declare let home: (pathArgument?: string) => any;
export declare type TSystemArg = 'dynamic' | 'windows' | 'linux' | 'osx';
export declare let pathLevels: (pathArg: string, systemArg?: TSystemArg) => string[];
export declare let pathLevelsBackwards: (pathArg: string, systemArg?: TSystemArg) => string[];
