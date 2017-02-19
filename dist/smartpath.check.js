"use strict";
require("typings-global");
exports.isDir = function (pathArg) {
    return !exports.isFile(pathArg);
};
exports.isFile = function (pathArg) {
    return /\.[a-zA-Z]*$/.test(pathArg); // checks if there is a .anything at the end
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRwYXRoLmNoZWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRwYXRoLmNoZWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQkFBdUI7QUFHWixRQUFBLEtBQUssR0FBRyxVQUFVLE9BQWU7SUFDMUMsTUFBTSxDQUFDLENBQUMsY0FBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQ3pCLENBQUMsQ0FBQTtBQUVVLFFBQUEsTUFBTSxHQUFHLFVBQVUsT0FBTztJQUNuQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDLDRDQUE0QztBQUNsRixDQUFDLENBQUEifQ==