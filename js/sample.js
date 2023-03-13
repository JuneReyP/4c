document.getElementById('change').style.backgroundColor = 'aquamarine';

/*
 var
 let
 const
 */
//

// var a = 10;
// var a = 11;

// let b = 12;

// const c = 23;

// let s, d, w;

// s = "sample";
// d = true;
// w = 21;

/*JavaScript Arithmetic Operators
Operator 	Description
+ 	            Addition
- 	            Subtraction
* 	            Multiplication
** 	            Exponentiation (ES2016)
/ 	            Division
% 	            Modulus (Division Remainder)
++ 	            Increment
-- 	            Decrement
*/

console.log(s + w)


/*JavaScript Comparison Operators
Operator 	Description
== 	        equal to
=== 	    equal value and equal type
!=      	not equal
!== 	    not equal value or not equal datatype
> 	        greater than
< 	        less than
>= 	        greater than or equal to
<= 	        less than or equal to
? 	        ternary operator

codition ? ifTrue : ifFalse
*/

// console.log(1 != 1); //false
// console.log('1' == 1); //true
// console.log('1' === 1); //false

// console.log(2 > 3 ? "2 is less than 3" : "2 is greater than 3");

/*JavaScript Logical Operators
Operator 	Description
&& 	        logical and
|| 	        logical or
! 	        logical not

AND
T T T
T F F
F T F
F F F

OR
T T T
T F T
F T T
F F F
*/
// console.log((2 > 3 && 2 < 3) || (2 < 3 || 2 < 3) ? "2 is less than 3" : "2 is greater than 3");

/*
JavaScript has 8 Datatypes

1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object 
*/
// //object
// let car = {
//     type: "isuzu",
//     model: "1992",
//     color: "red"
// }

// console.log(car.color);


// function addTwoNum(a, b) {
//     let sum;
//     sum = a + b;
//     return document.getElementById('output').innerHTML = sum;
// }

// //array
// let fruits = ['banana', 'apple', 'tomato', 'pineapple'];
// //let fruits = new Array();
// data = fruits[0];
// document.getElementById('output').innerHTML = data;

//conditional statements\
/*
if(conditions){
    //executed if the condition is true
}
*/

//console.log(confirm('are you sure?'))

// let a = 3;
// let b = 4;

//if else statement
// if(confirm('are you sure?')){ //performs comparison
//     console.log('You pressed OK button');
// }else{
//   console.log('You pressed CANCEL button');
// }

//console.log('outside the if statement');

// console.log((2 > 3 && 2 < 3) || (2 < 3 || 2 < 3) ? "2 is less than 3" : "2 is greater than 3");

//if elseif else
// let a = 5;
// let b = 4;

// if(a < b){ //test the data or first condition
//   console.log('a is less than b');
// }else if(a == b){ //2nd condition if the 1st condition is false
//   console.log('a is equal to b');
// }else{ //if the 1st and 2nd condition is false
//   console.log('Both 1st and 2nd condition is false!');
// }


/*switch statement

switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

*/
// let data = 1;
// switch(/){
//   case '+':
//     console.log('Selected the case 0');
//     break;
//   case '/':
//     console.log('Selected the case 1');
//     break;
//   case 2:
//     console.log('Selected the case 2');
//     break;
//   default:
//     console.log('Case not found!');
// }


function calcuLater(equation){
  
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    
    let answer;
    switch(equation){
      case '+':
        answer = parseInt(num1) + parseInt(num2);
        break;
      case '-':
        answer = parseInt(num1) - parseInt(num2)
        break;
      case '/':
        answer = parseInt(num1) / parseInt(num2)
        break;
      case '*':
        answer = parseInt(num1) * parseInt(num2)
        break;
    }
    document.getElementById('outPut').innerHTML = answer;
  }
  
  
  /* Activity
  1. Write a code that will determine the days of a month. (Using switch case statement)
  2. Write a code that will classify the grades by:
    A = 91 - 100
    B = 86 - 90
    C = 81 - 85
    D = 75 - 80
    E = 74 below
    
    Using if-elseif-else
  */
  