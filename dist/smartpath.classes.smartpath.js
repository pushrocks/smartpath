"use strict";
const getMod = require("./smartpath.get");
class Smartpath {
    constructor(pathArg) {
        this.originalPath = pathArg;
        this.type = getMod.type(this.originalPath);
        this.pathLevels = getMod.pathLevels(this.originalPath);
        this.pathLevelsBackwards = getMod.pathLevelsBackwards(this.originalPath);
    }
}
exports.Smartpath = Smartpath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRwYXRoLmNsYXNzZXMuc21hcnRwYXRoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRwYXRoLmNsYXNzZXMuc21hcnRwYXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwwQ0FBeUM7QUFFekM7SUFLSSxZQUFZLE9BQWU7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUE7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ3RELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQzVFLENBQUM7Q0FDSjtBQVhELDhCQVdDIn0=