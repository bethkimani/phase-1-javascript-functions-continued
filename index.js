
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
};

console.log(saturdayFun());              
console.log(saturdayFun('go hiking'));   
console.log(mondayWork());               
console.log(mondayWork('work from home'));



function wrapAdjective(wrapper = "*") {
    return function(adjective = "special") {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    };
}

const wrapWithStar = wrapAdjective("*");
console.log(wrapWithStar("a hard worker"));  // Output: You are *a hard worker*!

const wrapWithPipe = wrapAdjective("||");
console.log(wrapWithPipe("dedicated"));      // Output: You are ||dedicated||!

