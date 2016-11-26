"use strict";
const plugins = require("./smartpath.plugins");
/**
 * returns the type of the given path. Can be "url" or "local"
 */
exports.type = function (pathStringArg) {
    let urlRegex = /http[s|\s]:\/\/.*/i;
    if (urlRegex.exec(pathStringArg)) {
        return 'url';
    }
    else {
        return 'local';
    }
    ;
};
exports.home = function (pathArgument) {
    if (pathArgument) {
        return plugins.home.resolve(pathArgument);
    }
    else {
        return plugins.home();
    }
};
exports.pathLevels = (pathArg, systemArg = 'dynamic') => {
    let pathLevelArray;
    if (systemArg === 'dynamic') {
        pathLevelArray = pathArg.split(plugins.path.sep);
    }
    return pathLevelArray;
};
exports.pathLevelsBackwards = (pathArg, systemArg) => {
    return exports.pathLevels(pathArg, systemArg).reverse();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRwYXRoLmdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0cGF0aC5nZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLCtDQUErQztBQUcvQzs7R0FFRztBQUNRLFFBQUEsSUFBSSxHQUFHLFVBQVUsYUFBcUI7SUFDN0MsSUFBSSxRQUFRLEdBQUcsb0JBQW9CLENBQUE7SUFDbkMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLEtBQUssQ0FBQTtJQUNoQixDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixNQUFNLENBQUMsT0FBTyxDQUFBO0lBQ2xCLENBQUM7SUFBQSxDQUFDO0FBQ04sQ0FBQyxDQUFBO0FBRVUsUUFBQSxJQUFJLEdBQUcsVUFBVSxZQUFxQjtJQUM3QyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ2YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDekIsQ0FBQztBQUNMLENBQUMsQ0FBQTtBQUlVLFFBQUEsVUFBVSxHQUFHLENBQUMsT0FBZSxFQUFFLFlBQXdCLFNBQVM7SUFDdkUsSUFBSSxjQUF3QixDQUFBO0lBQzVCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzFCLGNBQWMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDcEQsQ0FBQztJQUNELE1BQU0sQ0FBQyxjQUFjLENBQUE7QUFDekIsQ0FBQyxDQUFBO0FBRVUsUUFBQSxtQkFBbUIsR0FBRyxDQUFDLE9BQWUsRUFBRSxTQUFzQjtJQUNyRSxNQUFNLENBQUMsa0JBQVUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7QUFDbkQsQ0FBQyxDQUFBIn0=