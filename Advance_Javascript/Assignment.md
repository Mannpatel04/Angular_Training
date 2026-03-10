# Hoisting

## Q1. List down techniques with examples where hoisting does not work as expected in JS.

>Answer 1: 

    1). let and const (Temporal Dead Zone):-they are hoisted but cannot be accessed before initialization.

    ex:-
        console.log(a); // ReferenceError
        let a = 10;

        console.log(b); // ReferenceError
        const b = 20;
    
    2). Function Expression: Only the variable is hoisted, not the function value.
    ex:-
        sayHi(); // TypeError: sayHi is not a function
        var sayHi = function () {
        console.log("Hi");
        };

    3).var Shadowing:A hoisted local var shadows the outer variable causing undefined.
      ex:-  var x = 10;

        function test() {
        console.log(x); // undefined
        var x = 5;
        }
        test();

    4).Arrow Function: Arrow functions behave like function expressions and are not callable before assignment.
    ex:- 
        greet(); // ReferenceError
        const greet = () => console.log("Hello");

## Q2. Give output:
```
var a = 4;
function greet(){
    b = "Hello";
    console.log(b);
    var b;
}   
greet();
console.log(b);
```
>Answer 2: Output:-

        Hello
        ReferenceError: b is not defined
> the output of first greet() function will executed normally, but after the function ends, b does not exist globally, so it gives eference error.


---

# Clousers

## Q1. Write a factorial program of given range: 0 - 10 using closure.

>Answer 1: Written in file Factorial.js

## Q2. Write an output with explaination.

```
function calculate(x){
    function multiply(y){
        return x*y;
    }
    return multiply;
}

const multiply3 = calculate(3);
const multiply4 = calculate(4);

console.log(multiply3);
console.log(multiply());

console.log(multiply3(6));
console.log(multiply4(2));
```
>Answer 2:

       [Function: multiply] 
        ReferenceError: multiply is not defined
        18
        8
> [Function: multiply] : multiply3 stores the returned function multiply, so printing it shows the function reference.

>ReferenceError: multiply is not defined : multiply is defined inside calculate(), so it is not accessible in the global scope.

>18: multiply3 remembers x = 3 through closure.

>8: multiply4 remembers x = 4 through closure.

## Q3. Write an output with explanation:
```
function outest(){
var c = 12;
    function outer (b)
    {
        function inner()
        {
        console. log(a, b, c);
        }
    let a = 10; // let instead of var
    return inner;
    }
return outer;

let a =100;
var close = outest() ("Hi Closures");
close () ;

}
```
>Answer 3: output:- 10 Hi Closures 12

>Explaination: inner() forms a closure and remembers a, b, and c from its outer lexical scopes, so it prints 10 Hi Closures 12.
## Q4. Write an output with explanation:
```
function setCount(){
    let number = 0;
    return function () 
    {
    console. log(number++);
    console. log(++number);
    }
};

const counter = setCount();
counter();
counter();
counter()
```
>Answer 4:

        0
        2
        2
        4
        4
        6

>Explaination: The inner function forms a closure over number, so the value persists across calls while number++ prints first then increments and ++number increments first then prints.
---
# Spread Operator

## Q1. Converts a specified number to an array of digits:-
    Input - 123
 	Output- [1,2,3]
>Answer 1: Answer in "Spread Operator_1.js" file.
## Q2. 
    var alphabets = ["A", ..."BCD", "E"];
    console.log(alphabets); 
>Answer 2:  output:-["A", "B", "C", "D", "E"]

>Explaination: -The spread operator ..."BCD" spreads the string into individual characters.
## Q3. 
    var newArray = [...[,,]];
    console.log(newArray);
>Answer 3: output:- [undefined, undefined]

>Explaination: it creates two empty slotes so those empty slots are converted into undefined values.So the spread result becomes [undefined, undefined].
---
# Object/Array Destructuring
## Q1. 
    const arrValue = ['one', 'two', 'three', 'four'];
    const [ ...x, y] = arrValue;
    console.log(x); 

>Answer 1: this will throw an error.

>Explaination:- In array destructuring, the rest operator (...) must be the last element. so, Writing [...x, y] is invalid syntax because you cannot have a variable (y) after a rest (...x).
## Q2. 
    // nested destructuring assignment in arrays
    const arrValue = ["one", ["two", "three"]];
    const [x, [y, z]] = arrValue;
    console.log(x);
    console.log([y,z]); 
    console.log(z);   
>Answer 2: 
    
      output:-  one
                ["two", "three"]
                three
        
> Explaination:- Nested destructuring allows unpacking values from arrays inside arrays in a single statement.
## Q3. 
    // assigning default value 5 and 7
    let arrValue = [10];
    let [x = 5,  y = 7] = arrValue;
    console.log(x);
    console.log(y);
>Answer 3:
     
       output:- 10
                7

> Explaination:- Default values are used only when the array element is undefined; otherwise, the array’s value is assigned.
## Q4.
    const [a, b, ...[ length ]] = [1, 2, 3];
    console.log(a, b, length);
>Answer 4:

     output:- 1 2 3

>Explaination:- The rest operator collects remaining elements into an array, which can then be destructured immediately; here it extracts the last element 3 into length.
## Q5.
    const [a, b, ...{ length }] = [1, 2, 3];
    console.log(a, b, length);

>Answer 5:

     output:- 1 2 1

>Explaination:- Using ...{ length } collects the remaining elements into an array object and extracts its length property. 

# Call, apply and bind
## Q1. Define a program with two objects person1 and person2. Person1, person2 both have firstname, lastname properties(use any name you want). Add a function fullname in person1 with two arguments (prefix, suffix), which prints persons fullname using firstname lastname and adds prefix and suffix accordingly if present. 
Note: this fullname function is present in object person1 only. Using call, apply, bind,  print the fullname of person2 with proper parameter passed.

>Answer 1: Answer in "Call_bind_apply.js" file.
# Prototype

## Q1. Define a program that creates a custom method for the Array or Object prototype, then calls that method on its instance.
>Answer 1: Answer in "prototype.js"

	 









