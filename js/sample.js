document.getElementById('change').style.backgroundColor = 'aquamarine';

/*
 var
 let
 const
 */
//

var a = 10;
var a = 11;

let b = 12;

const c = 23;

let s, d, w;

s = "sample";
d = true;
w = 21;

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

console.log(1 != 1); //false
console.log('1' == 1); //true
console.log('1' === 1); //false

console.log(2 > 3 ? "2 is less than 3" : "2 is greater than 3");

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
console.log((2 > 3 && 2 < 3) || (2 < 3 || 2 < 3) ? "2 is less than 3" : "2 is greater than 3");

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
//object
let car = {
    type: "isuzu",
    model: "1992",
    color: "red"
}

console.log(car.color);


function addTwoNum(a, b) {
    let sum;
    sum = a + b;
    return document.getElementById('output').innerHTML = sum;
}

//array
let fruits = ['banana', 'apple', 'tomato', 'pineapple'];
//let fruits = new Array();
data = fruits[0];
document.getElementById('output').innerHTML = data;

