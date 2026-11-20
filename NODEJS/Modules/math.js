//===========User-defined Module===================
// A module that you create yourself

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
module.exports = {add,subtract,multiply}
// export()---> Make add and subtract available to other files
