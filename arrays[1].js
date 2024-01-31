//Practice with Arrays (1/31/24)
let condiments = ['Ketchup', 'Mustard', 'Relish'];
condiments[0] = 'Mayo'
condiments = console.log('Condiments');

//Array 01
const utensils = ['knife', 'spoon', 'fork'];
utensils[0] = ['Spork'];
console.log(utensils);

//The .length Property
const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];
console.log(newYearsResolutions.length);

//The .push() Method
const itemTracker = ['item 0', 'item 1', 'item 2'];
itemTracker.push('item 3', 'item 4');
console.log(itemTracker);

//Push Method Practice 2 
const chores = ['dishes', 'cleaning'];
const removed = chores.pop();
chores.push('homework', 'studying');
console.log('chores');
console.log(removed);

// The .pop() Method 
const newItemTracker = ['item 0', 'item 1', 'item 2'];
//const removed = newItemTracker.pop();
console.log(newItemTracker);
console.log(removed);