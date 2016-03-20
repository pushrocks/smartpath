/// <reference path="typings/main.d.ts" />
import plugins = require("./smartpath.plugins");

export let type = function(pathStringArg:string):string {
    let urlRegex = /http[s|\s]:\/\/.*/i
    if(urlRegex.exec(pathStringArg)){
        return "url";
    } else {
        return "local";
    };
};