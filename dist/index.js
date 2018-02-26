"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCi = function () {
    if (process.env.CI == 'true') {
        return true;
    }
    else {
        return false;
    }
};
exports.isTaggedCommit = () => {
    return typeof process.env.CI_BUILD_TAG != 'undefined';
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVXLFFBQUEsSUFBSSxHQUFHO0lBQ2hCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRVMsUUFBQSxjQUFjLEdBQUcsR0FBRyxFQUFFO0lBQy9CLE1BQU0sQ0FBQyxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxJQUFJLFdBQVcsQ0FBQztBQUN4RCxDQUFDLENBQUMifQ==