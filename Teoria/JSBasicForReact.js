// Basics of Javascript for React

// One way of defininig functions
function  DoSomething () {


}

// Another way of defining functions. ARROW FUNCTIONS

const DoSomething = () => {

}


// Anonymous functions (Without a name)
// In React, you can define functions like this
<button OnClick={() => {console.log('HELLO');}}>


</button>

// TERNARY OPERATOR
let age = 10;
let name = age > 10 ? 'Pedro' : "Jack";

// If age is greater than 10, then name is Pedro, otherwise, name is Juan
// && = and || = or 


// OBJECTS (Dictionary in Python)

const person = {
    name: "Pedro",
    age: 20,
    isMarried: false,
};

// Accessing the object
const name = person.name
const age = person.age
const isMarried = person.isMarried

// OR we can write in a line

const {name1,age1,isMarried1} = person;

// Creating an object with variables with the same name, you don't need to write the name of the variable

const person2 = {
    name,
    age,
    isMarried: false,
};


// Copying an object with a different name for example
//... is the spread operator. It copies the object into another object and allows you to modify it
const person3 = {...person2, name: "Pepito"};

const names = ['Pedro', 'Juan', 'Pepito'];

// Copying an array and adding a new element
const names2 = [...names, 'Pablo'];


// ARRAYS

// Functions to manipulate arrays: map, filter, reduce (not as much in React)

let namesList = ['Pedro', 'Juan', 'Pepito'];

// How can I alter each element of the array?
// map() function takes an argument, which is a function that will be applied to each element of the array
names.map((name) => {
        return name + '1';
});

// Applying this to my project. Mapping the values of a signal to the name of the sensor


// How can I filter the elements of the array?
let namesList2 = ['Pedro', 'Juan', 'Pedro','Pepito','Pedro'];

namesList2.filter((name) => {
    return  name !== 'Pedro';
});

// ASYNC + AWAIT + FETCH




// MORE TERNARY OPERATORS
let myAge = 17
let isOfAge = false

isOfAge = myAge > 18 ? true : false

let color = 'green'
let isCorrect = false

color = isCorrect ? 'green' : 'red'


// Another option is to use the && operator
let color_df = 'red'

color_df = isCorrect && 'green'

// Understanding the && operator
// The && operator in JavaScript returns the first falsy value if there are any, 
//or the last value if all are truthy. In JavaScript, false, 0, "", null, undefined, and NaN are falsy.


// OPTIONAL CHAINING, to avoid errors when accessing nested properties of an object
// Use ?. instead of . to access nested properties of an object

const fetchData = async () => {
    const data = await fetch('imaginaryapi.com');
    const name = data.person?.name;
};

// TEMPLATE LITERALS
// Template literals are string literals allowing embedded expressions.
// You must use `` instead of '' or "" and ${} to embed expressions

const fetchMoreData = async (animalName) => {
    const data = await fetch(`imaginaryapi.com/searchTerm=${animalName}`);
    const name = data.person?.name;
    console.log(`The name of the person is ${name}`);
};
