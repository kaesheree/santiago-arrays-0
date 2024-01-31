- Programming requires a lot of organizing and storing data.
- Organizing data in real life is like making lists, much like real life
New Year's Resolutions:
1. Keep  a journal

2. Take a falconry class

3. Learn Kubernetes

- Arrays are how JavaScript makes lists
- Arrays can store any data type
- Each item has a numbered position 

**Creating an Array** 
- one way to create an array is to use an array literal
- An array literal creates an array by wrapping items in square brackets
- Arrays can store any data type
- We can have an array that holds the same data types

**Accessing Elements**
- Each element in an array has a numbered position known as its index
- We access individual items using an index
- Arrays in JavaScript are zero-indexed
- Starts from 0 rather than 1 

let cities ['New York', 'Beijing','Nairobi'];

- cities is an array that has 3 elements
- cities[0] will access the element at index 0 in the array  cities
- cities[0] will access index 0 in the array cities

**updating elements**
- You can access elements inside an array using an index
- After having access to an element in an array, its value can be updated
- let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];


**JS Arrays [1]**
- Variables declared with let can be reassigned
- Variables declared with the const keyword cannot be reassigned
- Elements in an array declared with const remain mutable
- We can change contents of a const array but cannot reassign a new array or value 

**The .length property** 
- We can list arrays in length and it'll return the number of items in the array
- We use dot notation, chaining a period with the property name to access the length property of the newYearsResolutions array
- 2 would be logged to the console as newYearsResolution has two elements

**The .push() Method**
- These JavaScript methods are called arrays to make common tasks like adding and removing elements more straightforward
- One method push allows us to add items to the end of an array
- We access the push method by using dot notation
- We make it act as a function
- .push() can take a single argument or multiple arguments seperated by commas
- .push() changes or mutates itemTracker
- .push() is a destructive array method 

**The .pop() Method**
- Another array method is .pop() which removes the last item of an array
- Pop array does not take any arguments
- Returns the value of the last element
- pop mutates the initial array 
- you remove the last element by using the .pop() method 
