
//Array lesson 1/30/24

// Accessing Elements
let cities = ['New York', 'Beijing', 'Nairobi'];
cities[0];

listitem = cities[0]


// Updtaing Elements
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
seasons[0] = 'Autumn';
console.log(seasons);


function range(start, end, step = 1) {
    return Array.from(
      { length: (end - start) / step + 1 },
      (value, index) => start + index * step
    );
  
  }
  
  function sum(array) {
    let numberOrZero = x => isNaN(x) ? 0 : x;
    return array.reduce((total, value) => numberOrZero(total) + numberOrZero(value));
  }
  
  console.log(sum(range(1, 134217719)));