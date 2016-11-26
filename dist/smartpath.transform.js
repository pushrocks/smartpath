"use strict";
require("typings-global");
const plugins = require("./smartpath.plugins");
/* ------------------------------------------ *
 * ------------ helpers --------------------- *
 * ------------------------------------------ */
// checks a file 
let makeAbsolute = function (localPathArg, baseArg) {
    let absolutePath;
    let alreadyAbsolute = plugins.path.isAbsolute(localPathArg);
    if (baseArg && !alreadyAbsolute) {
        absolutePath = plugins.path.join(baseArg, localPathArg);
    }
    else if (!alreadyAbsolute) {
        absolutePath = plugins.path.resolve(localPathArg);
    }
    else {
        absolutePath = localPathArg;
    }
    return absolutePath;
};
/* ------------------------------------------ *
 * ------- export functions ----------------- *
 * ------------------------------------------ */
exports.toAbsolute = function (relativeArg, baseArg) {
    if (typeof relativeArg === 'string') {
        return makeAbsolute(relativeArg, baseArg);
    }
    else if (Array.isArray(relativeArg)) {
        let relativeArray = relativeArg;
        let absoluteArray = [];
        for (let key in relativeArray) {
            absoluteArray.push(makeAbsolute(relativeArray[key], baseArg));
        }
        return absoluteArray;
    }
    else {
        console.error('smartpath.absolute() could not make sense of the input. ' +
            'Input is neither String nor Array');
        return false;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRwYXRoLnRyYW5zZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0cGF0aC50cmFuc2Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBCQUF1QjtBQUN2QiwrQ0FBK0M7QUFFL0M7O2dEQUVnRDtBQUVoRCxpQkFBaUI7QUFDakIsSUFBSSxZQUFZLEdBQUcsVUFBUyxZQUFvQixFQUFFLE9BQWdCO0lBQzlELElBQUksWUFBb0IsQ0FBQTtJQUN4QixJQUFJLGVBQWUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUMzRCxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQzlCLFlBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsWUFBWSxDQUFDLENBQUE7SUFDMUQsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDekIsWUFBWSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ3RELENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLFlBQVksR0FBRyxZQUFZLENBQUE7SUFDL0IsQ0FBQztJQUNELE1BQU0sQ0FBQyxZQUFZLENBQUE7QUFDdkIsQ0FBQyxDQUFBO0FBRUQ7O2dEQUVnRDtBQUNyQyxRQUFBLFVBQVUsR0FBRyxVQUFTLFdBQThCLEVBQUUsT0FBZ0I7SUFDN0UsRUFBRSxDQUFDLENBQUMsT0FBTyxXQUFXLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBQyxPQUFPLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksYUFBYSxHQUFHLFdBQVcsQ0FBQTtRQUMvQixJQUFJLGFBQWEsR0FBYSxFQUFFLENBQUE7UUFDaEMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQztZQUM1QixhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUNoRSxDQUFDO1FBQ0QsTUFBTSxDQUFDLGFBQWEsQ0FBQTtJQUN4QixDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixPQUFPLENBQUMsS0FBSyxDQUFDLDBEQUEwRDtZQUNwRSxtQ0FBbUMsQ0FBQyxDQUFBO1FBQ3hDLE1BQU0sQ0FBQyxLQUFLLENBQUE7SUFDaEIsQ0FBQztBQUNMLENBQUMsQ0FBQSJ9