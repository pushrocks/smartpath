import "typings-global";
import plugins = require("./smartpath.plugins");

/**
 * returns the type of the given path. Can be "url" or "local"
 */
export let type = function(pathStringArg:string):string {
    let urlRegex = /http[s|\s]:\/\/.*/i
    if(urlRegex.exec(pathStringArg)){
        return "url";
    } else {
        return "local";
    };
};

export let home = function(pathArgument?:string){
    if(pathArgument){
        return plugins.home.resolve(pathArgument);
    } else {
        return plugins.home();
    }
};