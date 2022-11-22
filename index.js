const mondayWork = function (activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

function wrapAdjective(aWord = "*"){
    
    return function(emphatic = "a hard worker"){
        return `You are ${aWord}${emphatic}${aWord}!`;
    }
}

