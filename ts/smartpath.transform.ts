/// <reference path="typings/main.d.ts" />
import plugins = require("./smartpath.plugins");

/* ------------------------------------------ *
 * ------------ helpers --------------------- *
 * ------------------------------------------ */
let makeAbsolute = function(localPathArg:string, baseArg?:string):string {
    let absolutePath:string;
    if(baseArg){
        absolutePath = plugins.path.join(baseArg,localPathArg);
    } else {
         absolutePath = plugins.path.resolve(localPathArg);
    }
    return absolutePath;
};

/* ------------------------------------------ *
 * ------- export functions ----------------- *
 * ------------------------------------------ */
export let toAbsolute = function(relativeArg:any, baseArg?:string):any {
    if(typeof relativeArg === "string"){
        return makeAbsolute(relativeArg,baseArg);
    } else if(Array.isArray(relativeArg)){
        let relativeArray = relativeArg
        let absoluteArray:string[] = [];
        for (let key in relativeArray){
            absoluteArray.push(makeAbsolute(relativeArray[key],baseArg));
        };
        return absoluteArray;
    } else {
        plugins.beautylog.error("smartpath.absolute() could not make sense of the input. " +
            "Input is neither String nor Array");
        return false;
    }
};