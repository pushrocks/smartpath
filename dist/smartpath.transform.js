/// <reference path="typings/main.d.ts" />
var plugins = require("./smartpath.plugins");
/* ------------------------------------------ *
 * ------------ helpers --------------------- *
 * ------------------------------------------ */
var makeAbsolute = function (localPathArg, baseArg) {
    var absolutePath;
    if (baseArg) {
        absolutePath = plugins.path.join(baseArg, localPathArg);
    }
    else {
        absolutePath = plugins.path.resolve(localPathArg);
    }
    return absolutePath;
};
/* ------------------------------------------ *
 * ------- export functions ----------------- *
 * ------------------------------------------ */
exports.toAbsolute = function (relativeArg, baseArg) {
    if (typeof relativeArg === "string") {
        return makeAbsolute(relativeArg, baseArg);
    }
    else if (Array.isArray(relativeArg)) {
        var relativeArray = relativeArg;
        var absoluteArray = [];
        for (var key in relativeArray) {
            absoluteArray.push(makeAbsolute(relativeArray[key], baseArg));
        }
        ;
        return absoluteArray;
    }
    else {
        plugins.beautylog.error("smartpath.absolute() could not make sense of the input. " +
            "Input is neither String nor Array");
        return false;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0cGF0aC50cmFuc2Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMENBQTBDO0FBQzFDLElBQU8sT0FBTyxXQUFXLHFCQUFxQixDQUFDLENBQUM7QUFFaEQ7O2dEQUVnRDtBQUNoRCxJQUFJLFlBQVksR0FBRyxVQUFTLFlBQW1CLEVBQUUsT0FBZTtJQUM1RCxJQUFJLFlBQW1CLENBQUM7SUFDeEIsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQztRQUNSLFlBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0gsWUFBWSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDRCxNQUFNLENBQUMsWUFBWSxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUVGOztnREFFZ0Q7QUFDckMsa0JBQVUsR0FBRyxVQUFTLFdBQWUsRUFBRSxPQUFlO0lBQzdELEVBQUUsQ0FBQSxDQUFDLE9BQU8sV0FBVyxLQUFLLFFBQVEsQ0FBQyxDQUFBLENBQUM7UUFDaEMsTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUEsQ0FBQztRQUNsQyxJQUFJLGFBQWEsR0FBRyxXQUFXLENBQUE7UUFDL0IsSUFBSSxhQUFhLEdBQVksRUFBRSxDQUFDO1FBQ2hDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksYUFBYSxDQUFDLENBQUEsQ0FBQztZQUMzQixhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNqRSxDQUFDO1FBQUEsQ0FBQztRQUNGLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFDekIsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsMERBQTBEO1lBQzlFLG1DQUFtQyxDQUFDLENBQUM7UUFDekMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0FBQ0wsQ0FBQyxDQUFDIiwiZmlsZSI6InNtYXJ0cGF0aC50cmFuc2Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwidHlwaW5ncy9tYWluLmQudHNcIiAvPlxuaW1wb3J0IHBsdWdpbnMgPSByZXF1aXJlKFwiLi9zbWFydHBhdGgucGx1Z2luc1wiKTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICpcbiAqIC0tLS0tLS0tLS0tLSBoZWxwZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbmxldCBtYWtlQWJzb2x1dGUgPSBmdW5jdGlvbihsb2NhbFBhdGhBcmc6c3RyaW5nLCBiYXNlQXJnPzpzdHJpbmcpOnN0cmluZyB7XG4gICAgbGV0IGFic29sdXRlUGF0aDpzdHJpbmc7XG4gICAgaWYoYmFzZUFyZyl7XG4gICAgICAgIGFic29sdXRlUGF0aCA9IHBsdWdpbnMucGF0aC5qb2luKGJhc2VBcmcsbG9jYWxQYXRoQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAgYWJzb2x1dGVQYXRoID0gcGx1Z2lucy5wYXRoLnJlc29sdmUobG9jYWxQYXRoQXJnKTtcbiAgICB9XG4gICAgcmV0dXJuIGFic29sdXRlUGF0aDtcbn07XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqXG4gKiAtLS0tLS0tIGV4cG9ydCBmdW5jdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0gKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5leHBvcnQgbGV0IHRvQWJzb2x1dGUgPSBmdW5jdGlvbihyZWxhdGl2ZUFyZzphbnksIGJhc2VBcmc/OnN0cmluZyk6YW55IHtcbiAgICBpZih0eXBlb2YgcmVsYXRpdmVBcmcgPT09IFwic3RyaW5nXCIpe1xuICAgICAgICByZXR1cm4gbWFrZUFic29sdXRlKHJlbGF0aXZlQXJnLGJhc2VBcmcpO1xuICAgIH0gZWxzZSBpZihBcnJheS5pc0FycmF5KHJlbGF0aXZlQXJnKSl7XG4gICAgICAgIGxldCByZWxhdGl2ZUFycmF5ID0gcmVsYXRpdmVBcmdcbiAgICAgICAgbGV0IGFic29sdXRlQXJyYXk6c3RyaW5nW10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHJlbGF0aXZlQXJyYXkpe1xuICAgICAgICAgICAgYWJzb2x1dGVBcnJheS5wdXNoKG1ha2VBYnNvbHV0ZShyZWxhdGl2ZUFycmF5W2tleV0sYmFzZUFyZykpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYWJzb2x1dGVBcnJheTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwbHVnaW5zLmJlYXV0eWxvZy5lcnJvcihcInNtYXJ0cGF0aC5hYnNvbHV0ZSgpIGNvdWxkIG5vdCBtYWtlIHNlbnNlIG9mIHRoZSBpbnB1dC4gXCIgK1xuICAgICAgICAgICAgXCJJbnB1dCBpcyBuZWl0aGVyIFN0cmluZyBub3IgQXJyYXlcIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
